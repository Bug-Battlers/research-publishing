"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
}

export function ServicesSection({
  title = "Our Services",
  subtitle,
  description,
  items,
  className,
}: ServicesSectionProps) {
  return (
    <section
      className={cn(
        "bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 w-full",
        className
      )}
    >
      <div className="container px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {subtitle && (
            <p className="text-sm uppercase tracking-widest text-white font-light mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-base text-white-700 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              {item.icon && (
                <div className="mb-5 text-indigo-600 text-4xl">{item.icon}</div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
