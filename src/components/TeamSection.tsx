"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio?: string;
  imageUrl: string;
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  members: TeamMember[];
  className?: string;
}

export function TeamSection({
  title = "Our Team",
  subtitle,
  description,
  members,
  className,
}: TeamSectionProps) {
  // Function to extract email from bio text
  const extractEmail = (bioText: string | undefined): string | null => {
    if (!bioText) return null;
    
    const emailMatch = bioText.match(/Email:\s*([^\s]+@[^\s]+\.[^\s]+)/i);
    return emailMatch ? emailMatch[1] : null;
  };

  return (
    <section className={cn("bg-white py-20 w-full", className)}>
      <div className="container px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {subtitle && (
            <p className="text-sm uppercase tracking-widest text-gray-600 font-light mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-base text-gray-700 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-x-8 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member) => {
            const email = extractEmail(member.bio);
            
            return (
              <div key={member.id} className="group text-center">
                <div className="mb-5 overflow-hidden mx-auto max-w-xs">
                  <img
                    src={member.imageUrl}
                    alt={`${member.name}, ${member.title}`}
                    className="w-full aspect-square object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-xl font-normal text-black mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.title}</p>
                {member.bio && !email && (
                  <p className="text-sm text-gray-700 leading-relaxed">{member.bio}</p>
                )}
                {email && (
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Email: <a href={`mailto:${email}`} className="text-gray-800 hover:underline">{email}</a>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}