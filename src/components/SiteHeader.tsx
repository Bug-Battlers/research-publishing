"use client";
import { usePathname } from "next/navigation";
import { BrainCircuit, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  {
    label: "For Authors",
    href: "/authors",
    dropdown: [
      { label: "Author Guidelines", href: "/authors/author-guidelines" },
      { label: "Publication Ethics", href: "/authors/publication-policies" },
      { label: "Peer Review", href: "/authors/peer-review" },
      { label: "Submit Paper", href: "/authors/submit-manuscript" },
      { label: "Open Access Policy", href: "/authors/open-access-policy" },
      {
        label: "Submit Manuscript Online",
        href: "/authors/submit-manuscript-online",
      },
      { label: "Indexing and Archiving", href: "/authors/indexing-archiving" },
      { label: "Download Formats", href: "/authors/download-formats" },
      { label: "Plagiarism Checker", href: "/authors/plagiarism-checker" },
    ],
  },
  { label: "Issues", href: "/issues" },
  { label: "Editorial Board", href: "/editorial" },
  { label: "Review Guidelines", href: "/guidelines" },
  { label: "Conference", href: "/conference" },
  { label: "Book", href: "/book" },
  { label: "Submit Article", href: "/submit" },
  { label: "Contact Us", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActiveLink = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-primary text-background shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6" />
            <span className="font-bold text-lg">SIRJH</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full flex items-center ${
                      isActiveLink(item.href)
                        ? "bg-background text-primary"
                        : "text-background hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    {item.label} <ChevronDown className="inline ml-1" />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 mt-2 w-48 bg-background text-primary rounded-md shadow-lg z-10">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className={`block px-4 py-2 text-sm hover:bg-secondary hover:text-primary ${
                            isActiveLink(dropdownItem.href)
                              ? "bg-secondary text-primary"
                              : ""
                          }`}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full ${
                    isActiveLink(item.href)
                      ? "bg-background text-primary"
                      : "text-background hover:bg-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-background"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-2"
          >
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="block text-sm font-medium px-4 py-2 rounded-full w-full text-left"
                  >
                    {item.label} <ChevronDown className="inline ml-1" />
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-4 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className={`block text-sm font-medium px-4 py-2 rounded-full ${
                            isActiveLink(dropdownItem.href)
                              ? "bg-background text-primary"
                              : "text-background hover:bg-secondary hover:text-primary"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block text-sm font-medium px-4 py-2 rounded-full ${
                    isActiveLink(item.href)
                      ? "bg-background text-primary"
                      : "text-background hover:bg-secondary hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </motion.nav>
        )}
      </div>
    </header>
  );
}
