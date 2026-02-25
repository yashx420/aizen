import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "TechCorp Website Redesign",
    status: "active",
    messages: 12,
    tasks: 14,
    hours: "13.5h",
    team: ["SC", "JW", "+1"],
  },
  {
    name: "FinServe Client Portal",
    status: "active",
    messages: 0,
    tasks: 5,
    hours: "0.0h",
    team: ["AC", "ER"],
  },
  {
    name: "MedHealth Q1 Campaign",
    status: "active",
    messages: 8,
    tasks: 4,
    hours: "9.5h",
    team: ["MP", "DK", "+2"],
  },
  {
    name: "RetailCo E-commerce Integration",
    status: "active",
    messages: 3,
    tasks: 10,
    hours: "24.2h",
    team: ["JW", "AC"],
  },
];

const DemoWorkspaceProjects = () => {
  return (
    <div className="max-w-[1200px]">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-syne font-bold text-white mb-1">
            My Projects
          </h1>
          <p className="text-white/40 text-sm">
            View and manage all your assigned projects.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-[400px] mb-8">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"
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
          placeholder="Search projects or clients..."
          className="w-full bg-[#12121a] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white/70 placeholder:text-white/20 focus:outline-none focus:border-white/10"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Link
            to={`/demo/workspace/project/techcorp`}
            key={i}
            className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors cursor-pointer group hover:bg-white/[0.02] block"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-white group-hover:text-[#3DBFBF] transition-colors">
                {p.name}
              </h3>
              <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{" "}
                {p.status}
              </span>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                {p.messages} unread
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                {p.tasks} tasks
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {p.hours}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
              <div className="flex -space-x-2">
                {p.team.map((t, j) => (
                  <div
                    key={j}
                    className={`w-7 h-7 rounded-full border-2 border-[#12121a] flex items-center justify-center text-[10px] font-medium ${t.startsWith("+") ? "bg-white/10 text-white/40" : "bg-gradient-to-br from-[#3DBFBF] to-[#5E19E1] text-white"}`}
                  >
                    {t}
                  </div>
                ))}
              </div>
              <span className="text-xs text-[#3DBFBF] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Open Dashboard{" "}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DemoWorkspaceProjects;
