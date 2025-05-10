"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  imageUrl?: string;
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
    <section className={cn("bg-white py-20 md:py-28 w-full", className)}>
      <div className="container px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid gap-12 items-center md:grid-cols-2">
          <div className="space-y-8 max-w-2xl">
            {subtitle && (
              <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-black">
              {title}
            </h1>
            {description && (
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {description}
              </p>
            )}
            {(primaryAction || secondaryAction) && (
              <div className="flex flex-wrap gap-4 pt-2">
                {primaryAction && (
                  <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800 border-0">
                    <a href={primaryAction.href}>{primaryAction.text}</a>
                  </Button>
                )}
                {secondaryAction && (
                  <Button asChild variant="outline" className="text-black border-gray-300 hover:bg-gray-50">
                    <a href={secondaryAction.href}>{secondaryAction.text}</a>
                  </Button>
                )}
              </div>
            )}
          </div>
          {imageUrl && (
            <div className="relative h-full aspect-square md:aspect-auto md:h-[500px]">
              <img
                src={imageUrl}
                alt="Hero image"
                className="object-cover w-full h-full rounded-sm"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}