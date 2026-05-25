"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, Bell, Shield, ChevronRight } from "lucide-react";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: Lock },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "privacy", label: "Privacy", icon: Shield },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-playfair text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your account, privacy, and preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tab navigation */}
        <aside className="lg:w-56 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-4 py-4 text-sm font-medium transition-all border-b border-gray-50 last:border-0 ${
                  activeTab === tab.id
                    ? "bg-brand-50 text-brand-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center gap-3">
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </button>
            ))}
          </div>
        </aside>

        {/* Content panel */}
        <div className="flex-1">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 space-y-6"
          >
            {activeTab === "profile" && (
              <>
                <h2 className="text-lg font-bold text-gray-900">Profile Details</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: "First Name",   placeholder: "Your first name"   },
                    { label: "Last Name",    placeholder: "Your last name"    },
                    { label: "Mobile",       placeholder: "+91 98765 43210"   },
                    { label: "Location",     placeholder: "City, State"       },
                    { label: "Date of Birth",placeholder: "YYYY-MM-DD"        },
                    { label: "Community",    placeholder: "e.g. Sunni"        },
                  ].map((f, i) => (
                    <div key={i}>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">{f.label}</label>
                      <input type="text" placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">About Me</label>
                    <textarea rows={4} placeholder="Write a brief about yourself..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none" />
                  </div>
                </div>
              </>
            )}

            {activeTab === "security" && (
              <>
                <h2 className="text-lg font-bold text-gray-900">Security</h2>
                <div className="space-y-5 max-w-sm">
                  {["Current Password", "New Password", "Confirm New Password"].map((label, i) => (
                    <div key={i}>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">{label}</label>
                      <input type="password" placeholder="••••••••"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" />
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "notifications" && (
              <>
                <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
                <div className="space-y-4">
                  {[
                    { label: "New Matches",         desc: "When someone matches your criteria"    },
                    { label: "New Messages",         desc: "When you receive a new message"       },
                    { label: "Interest Received",    desc: "When someone sends you an interest"   },
                    { label: "Profile Views",        desc: "When someone views your profile"      },
                    { label: "Promotional Updates",  desc: "Offers and subscription reminders"    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={i < 4} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-brand-600 peer-focus:ring-2 peer-focus:ring-brand-500/20 transition-all after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
                      </label>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "privacy" && (
              <>
                <h2 className="text-lg font-bold text-gray-900">Privacy</h2>
                <div className="space-y-4">
                  {[
                    { label: "Hide my profile from search", desc: "Your profile won't appear in search results" },
                    { label: "Show profile to premium only", desc: "Only premium members can view your profile"  },
                    { label: "Hide last seen",               desc: "Others can't see when you were last active"  },
                    { label: "Blur my photo",                desc: "Photos are blurred until interest is accepted"},
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-brand-600 peer-focus:ring-2 peer-focus:ring-brand-500/20 transition-all after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
                      </label>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Save button */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              {saved && <span className="text-sm text-brand-600 font-medium">✓ Changes saved!</span>}
              <button
                onClick={handleSave}
                className="px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 active:scale-[0.98] transition-all shadow-sm"
              >
                Save Changes
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
