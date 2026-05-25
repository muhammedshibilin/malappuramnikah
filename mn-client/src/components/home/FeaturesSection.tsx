"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Verified Profiles",
    description: "Every profile undergoes a strict manual verification process with ID checks to ensure utmost authenticity and safety.",
    color: "bg-brand-50 text-brand-600 ring-brand-100",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Matchmakers",
    description: "Receive personalized assistance from our expert relationship managers to help you find your perfect match faster.",
    color: "bg-brand-50 text-brand-600 ring-brand-100",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Enjoy a highly curated, private, and premium matchmaking experience tailored specifically for your lifestyle.",
    color: "bg-brand-50 text-brand-600 ring-brand-100",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Designed keeping traditional family values in mind, making it accessible and respectful for parents and candidates alike.",
    color: "bg-brand-50 text-brand-600 ring-brand-100",
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white relative border-t border-brand-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-5"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Experience the most trusted and premium matrimony service designed exclusively for our community.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 hover:shadow-[0_8px_30px_rgb(2,109,119,0.08)] transition-all duration-300 border border-brand-50 hover:border-brand-200 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-1 ring-1 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
