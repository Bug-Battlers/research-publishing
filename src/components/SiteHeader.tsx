"use client";

import { usePathname } from "next/navigation";
import { BrainCircuit } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  {
    label: "For Authors",
    href: "/authors",
    submenu: [
      { label: "Author Guidelines", href: "/authors/author-guidelines" },
      {
        label: "Publication Policies and Ethics",
        href: "/authors/publication-policies",
      },
      { label: "Peer Review Process", href: "/authors/peer-review" },
      { label: "Open Access Policy", href: "/authors/open-access" },
      { label: "Submit Manuscript Online", href: "/authors/submit-manuscript" },
      { label: "Indexing and Archiving", href: "/authors/indexing-archiving" },
      { label: "Download Formats", href: "/authors/download-formats" },
      {
        label: "Plagiarism Checker - Turnitin",
        href: "/authors/plagiarism-checker",
      },
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

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const isActiveDropdown = (item: any) => {
    if (!item.submenu) return false;
    return item.submenu.some((subItem: any) =>
      pathname.startsWith(subItem.href),
    );
  };

  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary">IJELS</span>
          </Link>
        </div>

        {/* Tab Navigation (full screen) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_ITEMS.map((item) =>
            item.submenu ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors relative",
                    isActiveDropdown(item)
                      ? "text-primary"
                      : "text-foreground hover:text-primary",
                  )}
                >
                  <span>{item.label}</span>
                  {isActiveDropdown(item) && (
                    <span className="absolute bottom-0 left-1/2 w-2/3 h-[2px] bg-primary -translate-x-1/2 transform transition-all duration-300 ease-in-out" />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.submenu.map((subItem) => (
                    <DropdownMenuItem key={subItem.label} className="p-0">
                      <Link
                        href={subItem.href}
                        className={cn(
                          "block w-full px-4 py-2 hover:bg-muted transition-colors duration-200",
                          isActiveLink(subItem.href)
                            ? "text-primary font-medium"
                            : "",
                        )}
                      >
                        {subItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors relative group",
                  isActiveLink(item.href)
                    ? "text-primary"
                    : "text-foreground hover:text-primary",
                )}
              >
                <span>{item.label}</span>

                {/* Active indicator with animation */}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ease-in-out",
                    isActiveLink(item.href)
                      ? "w-2/3 opacity-100"
                      : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50",
                  )}
                />
              </Link>
            ),
          )}
        </nav>

        {/* Mobile Navigation (burger menu) */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-1/2 bg-background"
            >
              <div className="mt-8 grid gap-6 text-sm">
                {NAV_ITEMS.map((item) =>
                  item.submenu ? (
                    <div key={item.label} className="space-y-3">
                      <p
                        className={cn(
                          "font-medium transition-colors duration-200",
                          isActiveDropdown(item) ? "text-primary" : "",
                        )}
                      >
                        {item.label}
                      </p>
                      <div className="ml-4 space-y-2 border-l-2 pl-4">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={cn(
                              "block py-1 hover:text-primary transition-colors duration-200",
                              isActiveLink(subItem.href)
                                ? "text-primary font-medium"
                                : "",
                            )}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "block py-2 hover:text-primary transition-colors duration-200",
                        isActiveLink(item.href)
                          ? "text-primary font-medium"
                          : "",
                      )}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
