import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {SiteHeader} from '@/components/SiteHeader';
import { Footer } from "@/components/SiteFooter";

 const footerColumns = [
    {
      title: "About",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Editorial Board", href: "/editorial" },
        { label: "Careers", href: "/careers" },
        { label: "News", href: "/news" },
      ],
    },
    {
      title: "For Authors",
      links: [
        { label: "Author Guidelines", href: "/authors/author-guidelines" },
        { label: "Publication Ethics", href: "/authors/publication-policies" },
        { label: "Peer Review", href: "/authors/peer-review" },
        { label: "Submit Paper", href: "/authors/submit-manuscript" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Issue Archive", href: "/issues" },
        { label: "Conferences", href: "/conference" },
        { label: "Books", href: "/book" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
  ];

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SIRJH',
  description: 'Shuchitabodh: an International Research Journal of Humanities',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}>
        <div className="flex flex-col min-h-screen w-full max-w-full">
          <SiteHeader />
          <main className="flex-1 w-full max-w-full">{children}</main>
          <Footer
            columns={footerColumns}
            copyrightText={`© ${new Date().getFullYear()} Shuchitabodh: an International Research Journal of Humanities. All rights reserved.`}
          />
        </div>
        <Toaster />
      </body>
    </html>
  );
}