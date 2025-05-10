"use client";

import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TeamSection } from "@/components/TeamSection";
import { BookOpen, Search, Award, FileText, Users, Mail } from "lucide-react";

export default function Home() {
  // Sample data for services section
  const services = [
    {
      id: "1",
      title: "Academic Publishing",
      description: "High-quality peer-reviewed publication of research papers across various fields of English language studies.",
      icon: <BookOpen className="h-10 w-10 mb-2" />,
    },
    {
      id: "2",
      title: "Expert Review",
      description: "Rigorous academic review process with feedback from experts in the field to ensure scholarly standards.",
      icon: <Search className="h-10 w-10 mb-2" />,
    },
    {
      id: "3",
      title: "Open Access",
      description: "Commitment to open access principles, making research widely available to the academic community worldwide.",
      icon: <Award className="h-10 w-10 mb-2" />,
    },
    {
      id: "4",
      title: "Author Support",
      description: "Comprehensive guidance throughout the publication process with author resources and responsive support.",
      icon: <FileText className="h-10 w-10 mb-2" />,
    },

    {
      id: "5",
      title: "Academic Conferences",
      description: "Organization and hosting of conferences to foster collaboration and knowledge exchange in the field.",
      icon: <Users className="h-10 w-10 mb-2" />,
    },
    {
      id: "6",
      title: "Research Dissemination",
      description: "Effective distribution channels to ensure your research reaches the right audience and maximizes impact.",
      icon: <Mail className="h-10 w-10 mb-2" />,
    },
  ];

  // Sample data for team section
  const teamMembers = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      title: "Editor-in-Chief",
      bio: "Professor of English Literature with over 15 years of experience in academic publishing.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      title: "Managing Editor",
      bio: "Specializes in applied linguistics with a focus on language acquisition and pedagogy.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "3",
      name: "Prof. Emily Rodriguez",
      title: "Review Board Chair",
      bio: "Renowned scholar in discourse analysis and sociolinguistics with numerous publications.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      <HeroSection
        title="Advancing English Language Studies Research"
        subtitle="International Journal"
        description="A premier platform for scholars, researchers, and educators to publish cutting-edge research in English language studies and related disciplines."
        primaryAction={{
          text: "Submit Your Research",
          href: "/submit",
        }}
        secondaryAction={{
          text: "Browse Latest Issue",
          href: "/issues",
        }}
        imageUrl="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        className="w-full max-w-full"
      />
      
      <div className="bg-gray-50 py-2 w-full">
        <div className="container px-6 md:px-12 py-16 max-w-screen-2xl mx-auto">
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            SIRJH is an well recognized journal indexed in major academic databases, serving the global community of language researchers and educators since 2015.
          </p>
        </div>
      </div>
      
      <ServicesSection
        title="What We Offer"
        subtitle="Our Services"
        description="We provide comprehensive support for researchers at every stage of the publishing journey."
        items={services}
        columnsDesktop={3}
        className="w-full max-w-screen-2xl mx-auto"
      />
      
      <div className="bg-gray-50 py-20 w-full">
        <div className="container px-6 md:px-12 max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black mb-8">
            Join Our Academic Community
          </h2>
          <p className="text-gray-700 mb-8 max-w-4xl mx-auto">
            Submit your research to SIRJH and become part of a vibrant community of scholars dedicated to advancing knowledge in English language studies.
          </p>
          <div className="inline-block">
            <a 
              href="/submit" 
              className="px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Submit Your Research
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}