"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Github,
} from "lucide-react";

// Group navigation items into categories
const FOOTER_LINKS = {
  about: [
    { label: "About", href: "/about" },
    { label: "Editorial Board", href: "/editorial" },
    { label: "Contact Us", href: "/contact" },
  ],
  resources: [
    { label: "For Authors", href: "/authors" },
    { label: "Review Guidelines", href: "/guidelines" },
    { label: "Submit Article", href: "/submit" },
  ],
  publications: [
    { label: "Issues", href: "/issues" },
    { label: "Conference", href: "/conference" },
    { label: "Book", href: "/book" },
  ],
};

const journalDescription =
  "Your gateway to quality research publications. Explore a wide range of journals and publications.";

export function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className={cn("border-t bg-background py-16")}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Journal Info */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-primary mb-2">IJELS</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {journalDescription}
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Grouped Navigation Links */}
          <div>
            <h3 className="text-md font-semibold text-foreground mb-4">
              About
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.about.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm text-muted-foreground hover:text-primary transition-colors",
                      pathname === item.href && "text-primary font-medium",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm text-muted-foreground hover:text-primary transition-colors",
                      pathname === item.href && "text-primary font-medium",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-4">
              Publications
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.publications.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm text-muted-foreground hover:text-primary transition-colors",
                      pathname === item.href && "text-primary font-medium",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6"></div>

        {/* Copyright, Terms & Conditions, Privacy Policy */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()} IJELS. All rights reserved.
          </div>
          <div className="space-x-4">
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
