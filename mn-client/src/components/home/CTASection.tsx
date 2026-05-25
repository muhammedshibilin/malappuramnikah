"use client";

import { motion } from "framer-motion";

interface CTASectionProps {
  onRegisterOpen: () => void;
}

export default function CTASection({ onRegisterOpen }: CTASectionProps) {
  return (
    <section className="py-24 bg-white border-t border-brand-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-brand-600 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:28px_28px]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-700/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white mb-6 leading-tight">
              Your Perfect Match <br className="hidden sm:block" />
              Is Waiting For You
            </h2>
            <p className="text-brand-100 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of verified members and start your journey toward a meaningful, blessed marriage today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onRegisterOpen}
                className="w-full sm:w-auto px-8 py-4 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl active:scale-95 text-base"
              >
                Register Free — It&apos;s Easy
              </button>
              <a
                href="/success-stories"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all text-base"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
