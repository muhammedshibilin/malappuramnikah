"use client";

import { motion } from "framer-motion";
import { Crown, Check, Zap, Shield, Star } from "lucide-react";

const plans = [
  {
    name: "Silver",
    price: "₹499",
    period: "/3 months",
    color: "bg-gray-50 border-gray-200",
    headerColor: "bg-gray-100",
    textColor: "text-gray-700",
    btnClass: "bg-gray-800 text-white hover:bg-gray-700",
    features: [
      "View 50 profiles/month",
      "Send 10 interests/month",
      "Basic search filters",
      "Chat with matches",
    ],
  },
  {
    name: "Gold",
    price: "₹999",
    period: "/6 months",
    color: "bg-brand-600 border-brand-600",
    headerColor: "bg-brand-700",
    textColor: "text-white",
    btnClass: "bg-white text-brand-700 hover:bg-brand-50",
    badge: "Most Popular",
    features: [
      "Unlimited profile views",
      "Unlimited interests",
      "Advanced search filters",
      "Priority in search results",
      "Dedicated matchmaker",
      "WhatsApp number reveal",
    ],
  },
  {
    name: "Platinum",
    price: "₹1,799",
    period: "/12 months",
    color: "bg-gray-50 border-gray-200",
    headerColor: "bg-gray-100",
    textColor: "text-gray-700",
    btnClass: "bg-brand-600 text-white hover:bg-brand-700",
    features: [
      "Everything in Gold",
      "Family contact details",
      "Personal matchmaker call",
      "Verified badge on profile",
      "Premium profile boost",
    ],
  },
];

export default function PremiumPage() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <Crown className="w-7 h-7 text-brand-600" />
        </div>
        <h1 className="text-3xl font-bold font-playfair text-gray-900 mb-3">Upgrade Your Experience</h1>
        <p className="text-gray-500">Unlock premium features to find your perfect match faster with greater privacy and visibility.</p>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl border-2 overflow-hidden flex flex-col relative ${plan.color}`}
          >
            {plan.badge && (
              <div className="absolute top-4 right-4 bg-white text-brand-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {plan.badge}
              </div>
            )}
            <div className={`px-6 py-7 ${plan.headerColor}`}>
              <p className={`text-lg font-bold font-playfair mb-2 ${plan.name === "Gold" ? "text-white" : "text-gray-900"}`}>{plan.name}</p>
              <div className="flex items-end gap-1">
                <span className={`text-4xl font-bold ${plan.name === "Gold" ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                <span className={`text-sm pb-1 ${plan.name === "Gold" ? "text-brand-200" : "text-gray-500"}`}>{plan.period}</span>
              </div>
            </div>
            <div className="px-6 py-6 flex-1 flex flex-col">
              <ul className="space-y-3 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-start gap-2.5 text-sm ${plan.name === "Gold" ? "text-brand-100" : "text-gray-600"}`}>
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.name === "Gold" ? "text-brand-300" : "text-brand-500"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] ${plan.btnClass}`}>
                Choose {plan.name}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust badges */}
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        {[
          { icon: Shield, title: "Secure Payment",   desc: "SSL encrypted, 100% safe" },
          { icon: Zap,    title: "Instant Activation", desc: "Account upgraded immediately" },
          { icon: Star,   title: "7-Day Refund",     desc: "Not satisfied? Full refund" },
        ].map((b, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start gap-4">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
              <b.icon className="w-5 h-5 text-brand-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{b.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
