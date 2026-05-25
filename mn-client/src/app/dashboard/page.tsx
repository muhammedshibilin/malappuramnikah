"use client";

import { motion } from "framer-motion";
import { Heart, Eye, MessageCircle, Star, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Profile Views",    value: "124",  icon: Eye,           color: "bg-brand-100/70 text-brand-700" },
  { label: "Interests Sent",   value: "18",   icon: Heart,         color: "bg-brand-50 text-brand-600"     },
  { label: "Messages",         value: "7",    icon: MessageCircle, color: "bg-brand-100 text-brand-800"    },
  { label: "Shortlisted",      value: "32",   icon: Star,          color: "bg-brand-50/70 text-brand-600"  },
];

const suggestedMatches = [
  { name: "Fathima R.",  age: 24, location: "Malappuram", img: "https://i.pravatar.cc/200?img=47", match: 92 },
  { name: "Aysha K.",    age: 26, location: "Calicut",    img: "https://i.pravatar.cc/200?img=45", match: 87 },
  { name: "Zainab M.",   age: 23, location: "Thrissur",   img: "https://i.pravatar.cc/200?img=49", match: 85 },
  { name: "Nasrin P.",   age: 25, location: "UAE",         img: "https://i.pravatar.cc/200?img=44", match: 81 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-brand-600 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl font-bold font-playfair mb-2">Welcome back! 👋</h1>
          <p className="text-brand-100 mb-5 text-sm sm:text-base">
            You have <strong className="text-white">5 new matches</strong> and <strong className="text-white">2 unread messages</strong> today.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/dashboard/matches" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-brand-700 text-sm font-semibold rounded-xl hover:bg-brand-50 transition-all">
              View Matches <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/dashboard/premium" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-all">
              Upgrade to Premium
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-sm transition-shadow"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Suggested Matches */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold font-playfair text-gray-900">Suggested Matches</h2>
          <Link href="/dashboard/matches" className="text-sm font-medium text-brand-600 hover:underline flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {suggestedMatches.map((match, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-brand-900/5 hover:border-brand-100 transition-all duration-300 group"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={match.img} alt={match.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-brand-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {match.match}% match
                </div>
              </div>
              <div className="p-4">
                <p className="font-bold text-gray-900 text-sm">{match.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{match.age} yrs · {match.location}</p>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 py-2 bg-brand-50 text-brand-700 text-xs font-semibold rounded-lg hover:bg-brand-100 transition-colors flex items-center justify-center gap-1">
                    <Heart className="w-3.5 h-3.5" /> Interest
                  </button>
                  <button className="flex-1 py-2 bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" /> Chat
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile Completion */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Profile Completion</h3>
          <span className="text-sm font-semibold text-brand-600">65%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-brand-500 rounded-full"
          />
        </div>
        <p className="text-sm text-gray-500">Complete your profile to get <strong className="text-gray-700">3x more matches</strong>.</p>
        <Link href="/dashboard/settings" className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-brand-600 hover:underline">
          Complete now <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
