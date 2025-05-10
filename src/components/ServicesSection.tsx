"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  items: ServiceItem[];
  className?: string;
  columnsDesktop?: 2 | 3 | 4;
}

export function ServicesSection({
  title = "Our Services",
  subtitle,
  description,
  items,
  className,
  columnsDesktop = 3,
}: ServicesSectionProps) {
  const getGridCols = () => {
    switch (columnsDesktop) {
      case 2: return "lg:grid-cols-2";
      case 3: return "lg:grid-cols-3";
      case 4: return "lg:grid-cols-4";
      default: return "lg:grid-cols-3";
    }
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

        <div className={cn("grid gap-x-8 gap-y-12 grid-cols-1 md:grid-cols-2", getGridCols(), "xl:grid-cols-4")}>
          {items.map((item) => (
            <div key={item.id} className="group">
              {item.icon && (
                <div className="mb-5 text-black">
                  {item.icon}
                </div>
              )}
              <h3 className="text-xl font-normal text-black mb-3">{item.title}</h3>
              <p className="text-base text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}