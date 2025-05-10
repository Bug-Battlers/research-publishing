"use client";

import React from "react";
import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterProps {
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  copyrightText?: string;
  className?: string;
}

export function Footer({
  columns = [],
  socialLinks = [],
  copyrightText = `© ${new Date().getFullYear()} SIRJH. All rights reserved.`,
  className,
}: FooterProps) {
  return (
    <footer className={cn("w-full border-t border-gray-100 bg-white py-12 md:py-16", className)}>
      <div className="w-full max-w-full px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <BrainCircuit className="h-6 w-6 text-black" />
              <span className="text-lg font-light tracking-tight text-black">SIRJH</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Shuchitabodh: an International Research Journal of Humanities, providing excellence in academic publishing.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {columns.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-black">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">{copyrightText}</p>
          <div className="flex space-x-4 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}