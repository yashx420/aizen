import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const tabs = [
  "Overview",
  "Tasks",
  "Team",
  "Messages",
  "CMS",
  "Social",
  "Timesheets",
  "Activity",
];

const DemoWorkspaceProjectDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");

  // Determine project content based on ID (simplified for demo)
  const isTechCorp = id === "techcorp" || !id;

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="space-y-8 animate-in fade-in duration-500 max-w-[1000px]">
            {/* Overview Header Area */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-2">
                Project Overview
              </h2>
              <p className="text-white/40 text-sm mb-6">
                A high-level overview of the project, goals, and current
                standing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    Budget
                  </div>
                  <div className="text-2xl font-semibold text-white">
                    $45,000
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#3DBFBF] w-[45%]" />
                  </div>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    Timeline
                  </div>
                  <div className="text-xl font-semibold text-white">
                    Jan 26 - Apr 26
                  </div>
                  <div className="text-xs text-emerald-400 mt-1">
                    On Schedule
                  </div>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    Days Remaining
                  </div>
                  <div className="text-2xl font-semibold text-white">
                    60 days
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white mb-3">
                    Time Tracking Summary
                  </h3>
                  <div className="flex gap-8">
                    <div>
                      <div className="text-2xl font-semibold text-white">
                        156.5h
                      </div>
                      <div className="text-xs text-white/40">Total Hours</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold text-emerald-400">
                        142h
                      </div>
                      <div className="text-xs text-white/40">Billable</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold text-white/60">
                        14.5h
                      </div>
                      <div className="text-xs text-white/40">Non-Billable</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white mb-3">
                    About This Project
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Comprehensive redesign of the TechCorp corporate website
                    including a new frontend architecture, CMS migration, and
                    refreshed brand identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "Tasks":
        // Kanban Board Replicating the Screenshot
        return (
          <div className="h-full flex flex-col animate-in fade-in duration-500">
            {/* secondary nav */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white flex items-center gap-2 cursor-pointer shadow-sm">
                  Main Board{" "}
                  <span className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-[10px] text-white/60">
                    7
                  </span>
                </div>
                <div className="px-3 py-1.5 text-sm text-white/40 hover:text-white flex items-center gap-2 cursor-pointer transition-colors">
                  Current Sprint{" "}
                  <span className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center text-[10px] text-white/40">
                    6
                  </span>
                </div>
                <div className="w-6 h-6 rounded-md hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white cursor-pointer ml-1">
                  +
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 mr-2">
                  <img
                    src="https://i.pravatar.cc/100?img=1"
                    alt="avatar"
                    className="w-7 h-7 rounded-full border-2 border-[#0a0a0f]"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=2"
                    alt="avatar"
                    className="w-7 h-7 rounded-full border-2 border-[#0a0a0f]"
                  />
                  <div className="w-7 h-7 rounded-full border-2 border-[#0a0a0f] bg-white/10 flex items-center justify-center text-[10px] text-white">
                    +2
                  </div>
                </div>
              </div>
            </div>

            {/* toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3 w-full max-w-2xl">
                <button className="px-4 py-2 bg-[#65a30d] hover:bg-[#4d7c0f] text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                  <span>+</span> Add Task
                </button>
                <div className="relative flex-1 max-w-[300px]">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    className="w-full bg-[#12121a] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </div>
                <button className="px-4 py-2 bg-transparent border border-white/10 text-white/70 rounded-lg text-sm flex items-center gap-2 hover:bg-white/5 transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                  Filters
                </button>
              </div>
              <div className="flex items-center gap-2 border border-white/10 p-1 rounded-lg bg-white/[0.02]">
                <button className="px-3 py-1.5 bg-[#65a30d] text-white rounded-md text-sm font-medium flex items-center gap-2 shadow-sm">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  Kanban
                </button>
                <button className="px-3 py-1.5 text-white/50 hover:text-white rounded-md text-sm flex items-center gap-2 transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Calendar
                </button>
                <button className="px-3 py-1.5 text-white/50 hover:text-white rounded-md text-sm flex items-center gap-2 transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                  Gantt
                </button>
              </div>
            </div>

            {/* Kanban Columns */}
            <div className="flex gap-4 overflow-x-auto pb-4 flex-1">
              {/* Backlog */}
              <div className="w-[300px] shrink-0 bg-[#e5e7eb]/5 rounded-xl border border-white/5 flex flex-col h-full max-h-[70vh]">
                <div className="p-4 flex items-center gap-2 font-medium text-white/90 sticky top-0 bg-[#0a0a0f] rounded-t-xl z-10 border-b border-transparent">
                  Backlog{" "}
                  <span className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-[10px] text-white/60">
                    1
                  </span>
                </div>
                <div className="p-3 space-y-3 overflow-y-auto">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-black/5 hover:border-black/10 transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-[#1f2937] text-sm font-medium leading-snug">
                        Launch & DNS configuration
                      </h4>
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span className="text-[10px] font-bold text-[#ef4444] bg-[#fee2e2] px-1.5 py-0.5 rounded border border-[#fca5a5]">
                          P3
                        </span>
                      </div>
                    </div>
                    <p className="text-[#6b7280] text-xs leading-relaxed mb-4">
                      Deploy to production and configure domain settings
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-[#4b5563] text-xs">
                        <img
                          src="https://i.pravatar.cc/100?img=5"
                          alt="Sarah"
                          className="w-5 h-5 rounded-full"
                        />
                        Sarah
                      </div>
                      <div className="flex items-center gap-1.5 text-[#6b7280] text-[10px]">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Mar 25
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* To Do */}
              <div className="w-[300px] shrink-0 bg-[#e5e7eb]/5 rounded-xl border border-white/5 flex flex-col h-full max-h-[70vh]">
                <div className="p-4 flex items-center gap-2 font-medium text-white/90 sticky top-0 bg-[#0a0a0f] rounded-t-xl z-10">
                  To Do
                </div>
                <div className="p-3 h-full flex flex-col">
                  <div className="flex-1 border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center text-white/30 text-sm">
                    Drop items here
                  </div>
                </div>
              </div>

              {/* In Progress */}
              <div className="w-[300px] shrink-0 bg-[#e5e7eb]/5 rounded-xl border border-white/5 flex flex-col h-full max-h-[70vh]">
                <div className="p-4 flex items-center gap-2 font-medium text-white/90 sticky top-0 bg-[#0a0a0f] rounded-t-xl z-10">
                  In Progress{" "}
                  <span className="w-5 h-5 rounded-md bg-[#eab308]/20 flex items-center justify-center text-[10px] text-[#eab308]">
                    1
                  </span>
                </div>
                <div className="p-3 space-y-3 overflow-y-auto">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-black/5 hover:border-black/10 transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-[#1f2937] text-sm font-medium leading-snug">
                        Contact form & CRM integration
                      </h4>
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <span className="text-[10px] font-bold text-[#d97706] bg-[#fef3c7] px-1.5 py-0.5 rounded border border-[#fcd34d]">
                          ● P2
                        </span>
                      </div>
                    </div>
                    <p className="text-[#6b7280] text-xs leading-relaxed mb-4">
                      Build contact page with form validation and CRM sync
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-[#4b5563] text-xs">
                        <img
                          src="https://i.pravatar.cc/100?img=11"
                          alt="David"
                          className="w-5 h-5 rounded-full"
                        />
                        David
                      </div>
                      <div className="flex items-center gap-1.5 text-[#6b7280] text-[10px]">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        7d
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review */}
              <div className="w-[300px] shrink-0 bg-[#e5e7eb]/5 rounded-xl border border-white/5 flex flex-col h-full max-h-[70vh]">
                <div className="p-4 flex items-center gap-2 font-medium text-white/90 sticky top-0 bg-[#0a0a0f] rounded-t-xl z-10">
                  Review{" "}
                  <span className="w-5 h-5 rounded-md bg-[#8b5cf6]/20 flex items-center justify-center text-[10px] text-[#a78bfa]">
                    1
                  </span>
                </div>
                <div className="p-3 space-y-3 overflow-y-auto">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-black/5 hover:border-black/10 transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-[#1f2937] text-sm font-medium leading-snug">
                        Product pages implementation
                      </h4>
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span className="text-[10px] font-bold text-[#ef4444] bg-[#fee2e2] px-1.5 py-0.5 rounded border border-[#fca5a5]">
                          P3
                        </span>
                      </div>
                    </div>

                    {/* Embedded preview block */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                      <div className="px-3 py-2 bg-white border-b border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex flex-wrap gap-0.5 w-[14px]">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-[1px]"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-[1px]"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-[1px]"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-[1px]"></div>
                          </div>
                          <span className="text-[10px] font-medium text-gray-700">
                            Platform Overview
                          </span>
                        </div>
                      </div>
                      <div className="h-28 bg-[#d1d5db] relative overflow-hidden">
                        {/* Simulated video thumbnail */}
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage:
                              "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')",
                          }}
                        ></div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Done */}
              <div className="w-[300px] shrink-0 bg-[#e5e7eb]/5 rounded-xl border border-white/5 flex flex-col h-full max-h-[70vh]">
                <div className="p-4 flex items-center gap-2 font-medium text-white/90 sticky top-0 bg-[#0a0a0f] rounded-t-xl z-10">
                  Done
                </div>
                <div className="p-3 space-y-3 overflow-y-auto">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-black/5 opacity-70">
                    <h4 className="text-[#1f2937] text-sm font-medium line-through">
                      Wireframe creation
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Team":
        return (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Sarah Chen",
                  role: "Design Lead",
                  email: "sarah@aizen.com",
                },
                {
                  name: "David Kim",
                  role: "Senior Dev",
                  email: "david@aizen.com",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Project Manager",
                  email: "emily@aizen.com",
                },
                {
                  name: "Michael Park",
                  role: "Member",
                  email: "michael@aizen.com",
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="bg-[#12121a] border border-white/5 rounded-2xl p-6 flex flex-col items-center group hover:border-[#3DBFBF]/30 transition-colors"
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 1}`}
                    alt={member.name}
                    className="w-16 h-16 rounded-full border-2 border-[#0a0a0f] shadow-lg mb-4"
                  />
                  <h3 className="text-white font-medium text-center">
                    {member.name}
                  </h3>
                  <p className="text-[#3DBFBF] text-xs font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-white/40 text-[10px]">{member.email}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="animate-in fade-in duration-500 flex flex-col items-center justify-center p-12 bg-[#12121a] border border-white/5 border-dashed rounded-2xl text-center">
            <h3 className="text-white font-semibold mb-2">{activeTab}</h3>
            <p className="text-white/40 text-sm max-w-sm">
              This is a placeholder for the {activeTab} pane. In a real
              application, this would contain the specific interactive
              components for this section.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header section (sticky/fixed at top of page content) */}
      <div className="shrink-0 border-b border-white/5 pb-4 mb-6">
        <h1 className="text-4xl font-dm-sans font-bold text-white tracking-tight mb-2">
          {isTechCorp ? "TechCorp Website Redesign" : "Project Dashboard"}
        </h1>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-white/60">
            {isTechCorp ? "TechCorp Industries" : "Client Name"}
          </span>
          <span className="text-white/20">•</span>
          <span className="text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-md text-xs font-semibold flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />{" "}
            active
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mt-8 border-b border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? "text-[#3DBFBF]"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#3DBFBF]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="flex-1 overflow-y-auto pb-8">{renderContent()}</div>
    </div>
  );
};

export default DemoWorkspaceProjectDetail;
