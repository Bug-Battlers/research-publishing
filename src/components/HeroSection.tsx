"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  imageUrl?: string; // For banner background (optional)
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  imageUrl,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full py-32 md:py-44 overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      {imageUrl && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            filter: "brightness(0.5)",
          }}
        />
      )}

      {/* Overlay content */}
      <div className="relative z-10 container max-w-screen-2xl mx-auto px-6 md:px-12 text-center text-white">
        <motion.div
          className="space-y-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <p className="text-sm uppercase tracking-widest text-gray-300 font-light">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              {primaryAction && (
                <Button
                  asChild
                  variant="default"
                  className="bg-background text-primary hover:bg-white hover:text-black border-0 font-semibold"
                >
                  <a href={primaryAction.href}>{primaryAction.text}</a>
                </Button>
              )}
              {secondaryAction && (
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-primary hover:bg-white hover:text-black"
                >
                  <a href={secondaryAction.href}>{secondaryAction.text}</a>
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
