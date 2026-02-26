import React, { useState } from "react";

const settingsTabs = [
  "General",
  "Team",
  "Bank Accounts",
  "Data Import",
  "Xero",
  "API",
  "Notifications",
];

const DemoSettings = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-[1200px]">
      <h1 className="text-3xl font-dm-sans font-bold text-white mb-1">
        Company Settings
      </h1>
      <p className="text-white/40 text-sm mb-8">
        Manage your company settings and preferences
      </p>

      {/* Company Header */}
      <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6 mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#3DBFBF]/10 border border-[#3DBFBF]/20 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3DBFBF"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Apex Digital Partners
              </h2>
              <p className="text-sm text-white/40">
                Transforming businesses through digital innovation
              </p>
            </div>
          </div>
          <button className="px-4 py-2 bg-[#12121a] border border-white/10 text-white/60 text-sm rounded-xl hover:bg-white/5 transition-colors flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/5 mb-8">
        {settingsTabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveTab(i)}
            className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
              activeTab === i
                ? "text-[#3DBFBF] border-[#3DBFBF]"
                : "text-white/40 border-transparent hover:text-white/60"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* General Tab Content */}
      {activeTab === 0 && (
        <div className="space-y-8">
          <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">
                Company Profile
              </h3>
              <button className="px-3 py-1.5 text-sm text-white/50 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                Edit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="text-xs text-white/30 uppercase tracking-wider">
                  Company Name
                </label>
                <p className="text-sm text-white mt-1">Apex Digital Partners</p>
              </div>
              <div>
                <label className="text-xs text-white/30 uppercase tracking-wider">
                  Website
                </label>
                <p className="text-sm text-[#3DBFBF] mt-1">
                  https://apexdigital.com
                </p>
              </div>
              <div>
                <label className="text-xs text-white/30 uppercase tracking-wider">
                  Base Currency
                </label>
                <p className="text-sm text-white mt-1">AUD</p>
              </div>
              <div>
                <label className="text-xs text-white/30 uppercase tracking-wider">
                  Tagline
                </label>
                <p className="text-sm text-white mt-1">
                  Transforming businesses through digital innovation
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">Address</h3>
              <button className="px-3 py-1.5 text-sm text-white/50 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                Edit
              </button>
            </div>
            <p className="text-sm text-white/60">
              123 Innovation Way, Sydney, NSW 2000, Australia
            </p>
          </div>
        </div>
      )}

      {/* Other tabs placeholder */}
      {activeTab !== 0 && (
        <div className="bg-[#12121a] border border-white/5 rounded-2xl p-12 text-center">
          <div className="text-white/20 text-4xl mb-4">⚙️</div>
          <h3 className="text-lg font-semibold text-white mb-2">
            {settingsTabs[activeTab]}
          </h3>
          <p className="text-sm text-white/30">
            This section is available in the full platform.
          </p>
        </div>
      )}
    </div>
  );
};

export default DemoSettings;
