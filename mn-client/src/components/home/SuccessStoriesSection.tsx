"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  {
    names: "Fathima & Muhammed",
    location: "Malappuram, Kerala",
    story: "We found each other through Malappuram Nikah in 2022. The process was smooth, private, and our families were very comfortable with the platform. Alhamdulillah, we are now happily married!",
    avatar1: "https://i.pravatar.cc/100?img=47",
    avatar2: "https://i.pravatar.cc/100?img=12",
    year: "2022",
  },
  {
    names: "Aysha & Adnan",
    location: "Calicut, Kerala",
    story: "I was hesitant about online matrimony but this platform felt different — safe, community-focused, and very respectful. We matched within a month and got married within the year.",
    avatar1: "https://i.pravatar.cc/100?img=45",
    avatar2: "https://i.pravatar.cc/100?img=15",
    year: "2023",
  },
  {
    names: "Zainab & Ibrahim",
    location: "UAE",
    story: "Living abroad made it hard to find a good match back home. This platform connected me with the right person from my hometown. Now we are settled and couldn't be happier.",
    avatar1: "https://i.pravatar.cc/100?img=49",
    avatar2: "https://i.pravatar.cc/100?img=11",
    year: "2024",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="py-24 bg-[#f0faf9] border-t border-brand-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-5"
          >
            Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Real couples who found their forever partners through Malappuram Nikah.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-brand-100 hover:shadow-[0_8px_30px_rgb(2,109,119,0.08)] hover:border-brand-200 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-brand-600" />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
                &ldquo;{story.story}&rdquo;
              </p>

              {/* Couple avatars & names */}
              <div className="flex items-center gap-4 pt-6 border-t border-brand-50">
                <div className="flex -space-x-3">
                  <img
                    src={story.avatar1}
                    alt="Person 1"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={story.avatar2}
                    alt="Person 2"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{story.names}</p>
                  <p className="text-xs text-gray-400">{story.location} · {story.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
