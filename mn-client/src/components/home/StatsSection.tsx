"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "50,000+", label: "Registered Members" },
  { value: "12,000+", label: "Happy Marriages" },
  { value: "98%",     label: "Verified Profiles" },
  { value: "15+",     label: "Years of Trust" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-brand-600 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:32px_32px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold font-playfair text-white mb-2">{stat.value}</p>
              <p className="text-brand-200 text-sm sm:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
