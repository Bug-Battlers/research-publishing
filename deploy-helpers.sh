#!/bin/bash

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Research Publishing Website Deployment Helper${NC}"
echo -e "This script helps you deploy your website to different hosting providers."
echo

# Ask for deployment target
echo -e "${YELLOW}Where would you like to deploy your website?${NC}"
echo "1) GitHub Pages"
echo "2) Netlify (using Netlify CLI)"
echo "3) Firebase Hosting"
echo "4) Build for custom hosting"
echo "5) Run local preview"
echo
read -p "Enter your choice (1-5): " choice

# GitHub Pages
if [ "$choice" == "1" ]; then
    echo -e "\n${GREEN}Deploying to GitHub Pages...${NC}"
    npm run deploy
    echo -e "\n${GREEN}Deployment to GitHub Pages completed!${NC}"

# Netlify
elif [ "$choice" == "2" ]; then
    echo -e "\n${YELLOW}Checking if Netlify CLI is installed...${NC}"
    if ! command -v netlify &> /dev/null; then
        echo -e "${RED}Netlify CLI not found. Installing...${NC}"
        npm install -g netlify-cli
    fi
    
    echo -e "\n${GREEN}Building site for Netlify...${NC}"
    npm run build
    
    echo -e "\n${GREEN}Deploying to Netlify...${NC}"
    netlify deploy --dir=out
    
    read -p "Would you like to deploy to production? (y/n): " prod
    if [ "$prod" == "y" ] || [ "$prod" == "Y" ]; then
        netlify deploy --dir=out --prod
    fi
    
    echo -e "\n${GREEN}Netlify deployment completed!${NC}"

# Firebase
elif [ "$choice" == "3" ]; then
    echo -e "\n${YELLOW}Checking if Firebase CLI is installed...${NC}"
    if ! command -v firebase &> /dev/null; then
        echo -e "${RED}Firebase CLI not found. Installing...${NC}"
        npm install -g firebase-tools
    fi
    
    echo -e "\n${GREEN}Building site for Firebase...${NC}"
    npm run build
    
    echo -e "\n${YELLOW}Do you need to login or initialize Firebase?${NC}"
    read -p "Login to Firebase? (y/n): " login
    if [ "$login" == "y" ] || [ "$login" == "Y" ]; then
        firebase login
    fi
    
    read -p "Initialize Firebase in this project? (y/n): " init
    if [ "$init" == "y" ] || [ "$init" == "Y" ]; then
        firebase init hosting
    fi
    
    echo -e "\n${GREEN}Deploying to Firebase...${NC}"
    firebase deploy --only hosting
    
    echo -e "\n${GREEN}Firebase deployment completed!${NC}"

# Build for custom hosting
elif [ "$choice" == "4" ]; then
    echo -e "\n${GREEN}Building site for custom hosting...${NC}"
    npm run build
    echo -e "\n${GREEN}Build completed! Files are in the 'out' directory.${NC}"
    echo -e "Deploy these files to your web server or hosting provider."

# Local preview
elif [ "$choice" == "5" ]; then
    echo -e "\n${GREEN}Building and starting local preview...${NC}"
    npm run deploy:local
    
else
    echo -e "\n${RED}Invalid choice. Please run the script again and select a valid option.${NC}"
fi
