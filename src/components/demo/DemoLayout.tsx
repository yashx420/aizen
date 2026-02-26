import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";

// Components from centralized index
import {
  DemoDashboard,
  DemoContacts,
  DemoLeads,
  DemoProjects,
  DemoTransactions,
  DemoPayroll,
  DemoSettings,
  DemoWorkspaceProjects,
  DemoWorkspaceTasks,
  DemoWorkspaceMessages,
  DemoWorkspaceTimesheets,
  DemoWorkspaceProjectDetail,
} from "./";

const navItems = [
  {
    label: "Dashboard",
    path: "/demo/dashboard",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Contacts",
    path: "/demo/contacts",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Leads",
    path: "/demo/leads",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Projects",
    path: "/demo/projects",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Transactions",
    path: "/demo/transactions",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: "Payroll",
    path: "/demo/payroll",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

const settingsNav = {
  label: "Settings",
  path: "/demo/settings",
  icon: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
};

const workspaceNavItems = [
  {
    label: "My Projects",
    path: "/demo/workspace",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    hasDropdown: true,
  },
  {
    label: "Tasks",
    path: "/demo/workspace/tasks",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: "Messages",
    path: "/demo/workspace/chat",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Timesheets",
    path: "/demo/workspace/timesheets",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const DemoLayout = () => {
  const [viewMode, setViewMode] = useState<"CRM" | "Workspace">("CRM");
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Auto-switch mode based on URL if needed (e.g. initial load)
  React.useEffect(() => {
    if (location.pathname.includes("/workspace") && viewMode !== "Workspace") {
      setViewMode("Workspace");
    } else if (
      !location.pathname.includes("/workspace") &&
      viewMode !== "CRM"
    ) {
      setViewMode("CRM");
    }
  }, [location.pathname]);

  return (
    <div
      className="demo-layout flex h-screen bg-[#0a0a0f] text-white overflow-hidden relative"
      style={{ cursor: "default" }}
    >
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-[120] w-[260px] lg:w-[72px] lg:hover:w-[240px] transition-all duration-300 bg-[#0e0e14] border-r border-white/5 flex flex-col justify-between py-6 group/sidebar overflow-hidden shrink-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 px-5 mb-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3DBFBF] to-[#5E19E1] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-dm-sans font-bold text-lg whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
              AIZEN CRM
            </span>
          </div>

          {/* View Mode Toggle */}
          <div className="px-3 mb-8 opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 overflow-hidden h-0 group-hover/sidebar:h-auto">
            <div className="text-[10px] font-bold text-white/30 uppercase tracking-wider mb-2 px-2">
              View Mode
            </div>
            <div className="bg-[#12121a] p-1 rounded-xl flex">
              <Link
                to="/demo/dashboard"
                onClick={() => setViewMode("CRM")}
                className={`flex-1 text-center text-xs font-semibold py-2 rounded-lg transition-colors ${viewMode === "CRM" ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/70"}`}
              >
                CRM
              </Link>
              <Link
                to="/demo/workspace"
                onClick={() => setViewMode("Workspace")}
                className={`flex-1 text-center text-xs font-semibold py-2 rounded-lg transition-colors ${viewMode === "Workspace" ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/70"}`}
              >
                Workspace
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex flex-col gap-1 px-3">
            {viewMode === "CRM" ? (
              // CRM Navigation
              navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-[#3DBFBF]/15 text-[#3DBFBF]"
                        : "text-white/40 hover:text-white/80 hover:bg-white/5"
                    }`
                  }
                >
                  <span className="shrink-0">{item.icon}</span>
                  <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </span>
                </NavLink>
              ))
            ) : (
              // Workspace Navigation
              <>
                <div className="px-3 py-2.5 mb-2 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 flex items-center justify-between cursor-pointer opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2a2 2 0 0 1 2 2c0 2.21-1.79 4-4 4s-4-1.79-4-4a2 2 0 0 1 2-2z" />
                      <path d="M12 20a2 2 0 0 1-2-2c0-2.21 1.79-4 4-4s4 1.79 4 4a2 2 0 0 1-2 2z" />
                      <path d="M5.5 12h13" />
                    </svg>
                    <span className="text-sm font-medium">AI Chat</span>
                  </div>
                  <span className="text-[10px] border border-emerald-500/30 px-1 rounded">
                    ⌘K
                  </span>
                </div>

                {workspaceNavItems.map((item) => (
                  <div key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.path === "/demo/workspace"}
                      onClick={(e) => {
                        if (item.hasDropdown) {
                          setProjectsOpen(!projectsOpen);
                        }
                      }}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "text-white"
                            : "text-white/40 hover:text-white/80 hover:bg-white/5"
                        }`
                      }
                    >
                      <div className="flex items-center gap-3">
                        <span className="shrink-0">{item.icon}</span>
                        <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
                          {item.label}
                        </span>
                      </div>
                      {item.hasDropdown && (
                        <svg
                          className={`shrink-0 text-white/30 transition-transform opacity-0 group-hover/sidebar:opacity-100 ${projectsOpen ? "rotate-0" : "-rotate-90"}`}
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      )}
                    </NavLink>

                    {item.hasDropdown && projectsOpen && (
                      <div className="ml-9 mt-1 flex flex-col gap-1 opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 overflow-hidden">
                        {[
                          "TechCorp Website Redesign",
                          "MedHealth Q1 Campaign",
                          "RetailCo E-commerce Inte...",
                        ].map((proj) => (
                          <div
                            key={proj}
                            className="text-xs text-white/50 py-1.5 hover:text-white cursor-pointer truncate pr-2"
                          >
                            {proj}
                          </div>
                        ))}
                        <div className="mt-2 py-2 px-3 bg-[#12121a] rounded-lg text-xs font-semibold text-white/70 hover:text-white text-center cursor-pointer hover:bg-white/5 transition-colors">
                          View all projects
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </nav>
        </div>

        <div className="px-3 flex flex-col gap-1">
          <NavLink
            to={settingsNav.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-[#3DBFBF]/15 text-[#3DBFBF]"
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"
              }`
            }
          >
            <span className="shrink-0">{settingsNav.icon}</span>
            <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
              {settingsNav.label}
            </span>
          </NavLink>

          {/* User profile */}
          <div className="flex items-center gap-3 px-3 py-3 mt-2 border-t border-white/5 pt-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold">DU</span>
            </div>
            <div className="whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
              <div className="text-sm font-medium text-white">Demo User</div>
              <div className="text-xs text-white/40">demo@aizen.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Top Bar */}
        <header className="h-16 border-b border-white/5 bg-[#0e0e14]/80 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 shrink-0 z-[100]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-white/70 p-2 hover:bg-white/5 rounded-lg"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#3DBFBF] animate-pulse" />
              <span className="text-sm text-[#3DBFBF] font-medium whitespace-nowrap">
                Demo Mode
              </span>
              <span className="hidden sm:inline text-sm text-white/30 ml-1">
                — Viewing sample data
              </span>
            </div>
          </div>
          <Link
            to="/"
            className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="hidden xs:inline">Back to Site</span>
          </Link>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
          <Routes>
            {/* CRM Routes */}
            <Route path="dashboard" element={<DemoDashboard />} />
            <Route path="contacts" element={<DemoContacts />} />
            <Route path="leads" element={<DemoLeads />} />
            <Route path="projects" element={<DemoProjects />} />
            <Route path="transactions" element={<DemoTransactions />} />
            <Route path="payroll" element={<DemoPayroll />} />
            <Route path="settings" element={<DemoSettings />} />

            {/* Workspace Routes */}
            <Route path="workspace" element={<DemoWorkspaceProjects />} />
            <Route path="workspace/tasks" element={<DemoWorkspaceTasks />} />
            <Route path="workspace/chat" element={<DemoWorkspaceMessages />} />
            <Route
              path="workspace/timesheets"
              element={<DemoWorkspaceTimesheets />}
            />
            <Route
              path="workspace/project/:id"
              element={<DemoWorkspaceProjectDetail />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DemoLayout;
