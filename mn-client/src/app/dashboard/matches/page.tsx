"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, TrendingUp, Sparkles, MapPin, BookOpen, Briefcase, Zap, Info, ChevronRight, X } from "lucide-react";

// Mock Data for AI Recommendations
const aiData = {
  bestMatch: { 
    id: 1, 
    name: "Fathima R.", 
    age: 24, 
    location: "Malappuram", 
    img: "https://images.unsplash.com/photo-1599842057874-37393e9342df?w=400&q=80",
    matchScore: 96, 
    aiExplanation: "Exceptional compatibility based on your shared Sunni community values, mutual interest in continuing education, and complementary personality traits.",
    strengths: ["Religious Harmony", "Family Values", "Lifestyle Sync"],
    personality: "Thoughtful & Empathetic (INFJ)",
    conversationStarter: "I noticed you're also passionate about literature. What's the last good book you read?",
    caste: "Sunni", 
    education: "M.A English", 
    career: "Educator"
  },
  dailyPicks: [
    { id: 2, name: "Aysha K.", age: 26, location: "Calicut", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80", matchScore: 91, caste: "Mujahid", profession: "Software Engineer", matchReason: "Similar career aspirations and tech background." },
    { id: 3, name: "Zainab M.", age: 23, location: "Thrissur", img: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98a?w=400&q=80", matchScore: 88, caste: "Sunni", profession: "Architect", matchReason: "Strong alignment in creative interests and lifestyle." },
    { id: 4, name: "Mariam A.", age: 27, location: "Kondotty", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&q=80", matchScore: 85, caste: "Sunni", profession: "Doctor", matchReason: "Complementary behavioral patterns and family goals." },
  ],
  nearby: [
    { id: 5, name: "Hafsa T.", age: 22, location: "Within 10 km", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", matchScore: 84, caste: "Mujahid" },
    { id: 6, name: "Nasrin P.", age: 25, location: "Within 15 km", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", matchScore: 82, caste: "Jamaat" },
  ],
  similarPersonality: [
    { id: 7, name: "Rukhsana B.", age: 28, location: "Saudi Arabia", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80", matchScore: 89, caste: "Sunni", trait: "Ambivert, Career-oriented" },
    { id: 8, name: "Amina L.", age: 24, location: "Perinthalmanna", img: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&q=80", matchScore: 87, caste: "Sunni", trait: "Introvert, Family-focused" },
  ]
};

export default function AiMatchesPage() {
  const [activeTab, setActiveTab] = useState("ai-recommendations");
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold font-playfair text-gray-900 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-brand-600" />
          AI Matchmaking
        </h1>
        <p className="text-sm text-gray-500 mt-1 max-w-2xl">
          Our intelligent recommendation engine analyzes 50+ data points including religion, education, personality, and behavioral patterns to find your perfect match.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-50 p-1 rounded-xl w-max border border-gray-100">
        {[
          { id: "ai-recommendations", label: "AI Recommendations" },
          { id: "browse-all", label: "Browse All Profiles" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === tab.id
                ? "bg-white text-brand-700 shadow-sm border border-gray-200/60"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "ai-recommendations" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          {/* Top Recommendation (Hero Match) */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-600" />
              Highest Compatibility Match
            </h2>
            <div className="bg-gradient-to-br from-brand-900 to-brand-700 rounded-3xl overflow-hidden shadow-xl relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px] opacity-10" />
              
              <div className="flex flex-col md:flex-row relative z-10">
                <div className="md:w-2/5 h-64 md:h-auto relative">
                  <img src={aiData.bestMatch.img} alt={aiData.bestMatch.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-brand-900" />
                  
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <h3 className="text-2xl font-bold text-white">{aiData.bestMatch.name}</h3>
                    <p className="text-brand-100">{aiData.bestMatch.age} yrs • {aiData.bestMatch.location}</p>
                  </div>
                </div>

                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center text-white">
                  <div className="hidden md:block mb-4">
                    <h3 className="text-3xl font-bold font-playfair">{aiData.bestMatch.name}</h3>
                    <p className="text-brand-100 text-sm mt-1">{aiData.bestMatch.age} yrs • {aiData.bestMatch.location} • {aiData.bestMatch.caste}</p>
                  </div>

                  {/* Compatibility Meter */}
                  <div className="mb-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-brand-50 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-brand-200" />
                        AI Compatibility Score
                      </span>
                      <span className="text-2xl font-bold text-white">{aiData.bestMatch.matchScore}%</span>
                    </div>
                    <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${aiData.bestMatch.matchScore}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-brand-300 to-brand-100"
                      />
                    </div>
                    <p className="text-xs text-brand-100 mt-3 leading-relaxed">
                      {aiData.bestMatch.aiExplanation}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-xs text-brand-200 mb-1 uppercase tracking-wider font-semibold">Strengths</p>
                      <div className="flex flex-wrap gap-1.5">
                        {aiData.bestMatch.strengths.map(s => (
                          <span key={s} className="bg-brand-800/50 text-xs px-2 py-1 rounded-md border border-brand-600/30">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-brand-200 mb-1 uppercase tracking-wider font-semibold">Personality</p>
                      <p className="text-sm font-medium">{aiData.bestMatch.personality}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 bg-white text-brand-800 font-semibold py-3 rounded-xl hover:bg-brand-50 transition-colors shadow-lg flex items-center justify-center gap-2">
                      <Heart className="w-4 h-4" /> Connect Now
                    </button>
                    <button 
                      onClick={() => setSelectedProfile(aiData.bestMatch)}
                      className="px-5 bg-brand-800/50 text-white font-medium py-3 rounded-xl border border-brand-500/30 hover:bg-brand-700/50 transition-colors flex items-center justify-center"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Daily Recommended Grid */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-500" />
                Recommended Daily
              </h2>
              <button className="text-sm text-brand-600 font-medium hover:underline">View All</button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiData.dailyPicks.map((profile, i) => (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all group cursor-pointer"
                  onClick={() => setSelectedProfile(profile)}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={profile.img} alt={profile.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-brand-700 shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> {profile.matchScore}% Match
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-lg">{profile.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{profile.age} yrs • {profile.location}</p>
                    
                    <div className="mt-3 pt-3 border-t border-gray-50">
                      <p className="text-xs text-brand-600 bg-brand-50 inline-block px-2 py-1 rounded-md mb-2">
                        {profile.profession}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                        <span className="font-semibold text-gray-700">AI Note:</span> {profile.matchReason}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Bottom Split Sections */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Similar Personalities */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-600" />
                Similar Personalities
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 p-4 space-y-4 shadow-sm">
                {aiData.similarPersonality.map(profile => (
                  <div key={profile.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                    <img src={profile.img} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm truncate">{profile.name}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{profile.age} yrs • {profile.location}</p>
                      <p className="text-xs text-brand-600 mt-1 font-medium bg-brand-50 w-max px-1.5 py-0.5 rounded">{profile.trait}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-brand-600 font-bold text-sm">{profile.matchScore}%</div>
                      <ChevronRight className="w-4 h-4 text-gray-300 mt-1 mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Nearby Matches */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-600" />
                Nearby Compatible Profiles
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 p-4 space-y-4 shadow-sm">
                {aiData.nearby.map(profile => (
                  <div key={profile.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                    <img src={profile.img} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm truncate">{profile.name}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{profile.caste}</p>
                      <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-400" /> {profile.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-brand-600 font-bold text-sm">{profile.matchScore}%</div>
                      <ChevronRight className="w-4 h-4 text-gray-300 mt-1 mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm"
        >
          <SearchIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900">Browse All Feature</h3>
          <p className="text-gray-500 text-sm mt-1">Standard directory view goes here.</p>
        </motion.div>
      )}

      {/* AI Profile Details Modal */}
      <AnimatePresence>
        {selectedProfile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
              onClick={() => setSelectedProfile(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="h-48 bg-gray-100 relative">
                <img src={selectedProfile.img} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <button 
                  onClick={() => setSelectedProfile(null)}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white drop-shadow-md">{selectedProfile.name}</h2>
                      <p className="text-gray-200 text-sm mt-1">{selectedProfile.age} yrs • {selectedProfile.location}</p>
                    </div>
                    <div className="bg-brand-600 text-white px-3 py-1.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> {selectedProfile.matchScore}%
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">AI Compatibility Analysis</h3>
                  <p className="text-sm text-gray-700 leading-relaxed bg-brand-50 p-4 rounded-xl border border-brand-100">
                    {selectedProfile.aiExplanation || selectedProfile.matchReason || "Highly compatible profile based on your preferences."}
                  </p>
                </div>

                {selectedProfile.conversationStarter && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 text-brand-500" /> Smart Icebreaker
                    </h3>
                    <p className="text-sm text-gray-700 italic bg-gray-50 p-4 rounded-xl border border-gray-100">
                      "{selectedProfile.conversationStarter}"
                    </p>
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <button className="flex-1 py-3.5 bg-brand-600 text-white font-medium rounded-xl hover:bg-brand-700 transition-colors shadow-md shadow-brand-600/20">
                    Send Interest
                  </button>
                  <button className="flex-1 py-3.5 bg-gray-50 text-gray-700 font-medium rounded-xl hover:bg-gray-100 border border-gray-200 transition-colors">
                    View Full Profile
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SearchIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
}
