"use client";

import { motion } from "framer-motion";
import { Send, Search, Phone, Video } from "lucide-react";
import { useState } from "react";

const conversations = [
  { name: "Fathima R.", img: "https://i.pravatar.cc/80?img=47", lastMsg: "JazakAllahu Khair!", time: "2m",  unread: 2 },
  { name: "Aysha K.",   img: "https://i.pravatar.cc/80?img=45", lastMsg: "Kindly share your details", time: "1h",  unread: 0 },
  { name: "Zainab M.",  img: "https://i.pravatar.cc/80?img=49", lastMsg: "Assalamu Alaikum 👋", time: "3h",  unread: 1 },
  { name: "Nasrin P.",  img: "https://i.pravatar.cc/80?img=44", lastMsg: "Sure, I'll get back",  time: "1d",  unread: 0 },
];

const demoMessages = [
  { from: "them", text: "Assalamu Alaikum! I came across your profile and felt we might be a good match.", time: "10:30 AM" },
  { from: "me",   text: "Wa alaikum assalam! JazakAllahu Khair for reaching out. I'd like to know more about you.", time: "10:35 AM" },
  { from: "them", text: "Alhamdulillah, I'm from Malappuram, working as a teacher. My family is quite traditional.", time: "10:37 AM" },
  { from: "me",   text: "MashaAllah, that's wonderful. I'll have my family reach out InshaAllah.", time: "10:42 AM" },
  { from: "them", text: "JazakAllahu Khair!", time: "10:43 AM" },
];

export default function ChatPage() {
  const [selected, setSelected] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex h-[calc(100vh-12rem)]">
      {/* Conversation list */}
      <div className="w-full sm:w-72 lg:w-80 shrink-0 border-r border-gray-100 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search conversations..." className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500" />
          </div>
        </div>
        <div className="overflow-y-auto flex-1">
          {conversations.map((c, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50 text-left ${selected === i ? "bg-brand-50" : ""}`}
            >
              <div className="relative shrink-0">
                <img src={c.img} alt={c.name} className="w-11 h-11 rounded-full object-cover" />
                {c.unread > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{c.unread}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-gray-900 truncate">{c.name}</p>
                  <span className="text-xs text-gray-400 shrink-0 ml-2">{c.time}</span>
                </div>
                <p className="text-xs text-gray-500 truncate mt-0.5">{c.lastMsg}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat window */}
      <div className="flex-1 flex-col hidden sm:flex">
        {/* Chat header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img src={conversations[selected].img} alt="" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">{conversations[selected].name}</p>
              <p className="text-xs text-brand-500 font-medium">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl hover:bg-gray-50 text-gray-500 transition-colors"><Phone className="w-5 h-5" /></button>
            <button className="p-2.5 rounded-xl hover:bg-gray-50 text-gray-500 transition-colors"><Video className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50/50">
          {demoMessages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl text-sm ${
                msg.from === "me"
                  ? "bg-brand-600 text-white rounded-br-sm"
                  : "bg-white text-gray-800 rounded-bl-sm border border-gray-100 shadow-sm"
              }`}>
                <p>{msg.text}</p>
                <p className={`text-[10px] mt-1 ${msg.from === "me" ? "text-brand-200" : "text-gray-400"}`}>{msg.time}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-4 border-t border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
              onKeyDown={(e) => e.key === "Enter" && setMessage("")}
            />
            <button
              onClick={() => setMessage("")}
              disabled={!message.trim()}
              className="p-3 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-all disabled:opacity-50 disabled:pointer-events-none shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
