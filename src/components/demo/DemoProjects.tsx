import React from "react";

const stats = [
  { label: "Total Projects", value: "3" },
  { label: "Active Projects", value: "3" },
  { label: "Total Budget", value: "$162,000" },
];

const projects = [
  {
    name: "TechCorp Website Redesign",
    client: "TechCorp Industries",
    status: "active",
    team: ["SC", "JW", "+1"],
  },
  {
    name: "MedHealth Q1 Campaign",
    client: "MedHealth Solutions",
    status: "active",
    team: ["ER", "MP", "+1"],
  },
  {
    name: "RetailCo E-commerce Integration",
    client: "RetailCo Global",
    status: "active",
    team: ["DK", "AC", "+1"],
  },
];

const DemoProjects = () => {
  return (
    <div className="max-w-[1200px]">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-syne font-bold text-white mb-1">
            Projects
          </h1>
          <p className="text-white/40 text-sm">
            Manage your projects and track financial progress
          </p>
        </div>
        <button className="px-5 py-2.5 bg-[#3DBFBF] text-black font-semibold text-sm rounded-xl hover:bg-[#3DBFBF]/90 transition-colors flex items-center gap-2">
          <span>+</span> New Project
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#12121a] border border-white/5 rounded-2xl p-5"
          >
            <span className="text-white/40 text-sm">{s.label}</span>
            <div className="text-2xl font-bold text-white mt-2">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                Project
              </th>
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                Client
              </th>
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                Team
              </th>
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <tr
                key={i}
                className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-4 px-5 text-sm font-medium text-[#3DBFBF] cursor-pointer hover:underline">
                  {p.name}
                </td>
                <td className="py-4 px-5 text-sm text-white/50">{p.client}</td>
                <td className="py-4 px-5">
                  <div className="flex -space-x-2">
                    {p.team.map((t, j) => (
                      <div
                        key={j}
                        className={`w-7 h-7 rounded-full border-2 border-[#12121a] flex items-center justify-center text-[10px] font-medium ${t.startsWith("+") ? "bg-white/10 text-white/40" : "bg-gradient-to-br from-purple-500 to-blue-500 text-white"}`}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full flex items-center gap-1 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{" "}
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center px-5 py-3 text-xs text-white/25">
          <span>Previous</span>
          <span>Page 1 of 10</span>
          <span>Next</span>
        </div>
      </div>
    </div>
  );
};

export default DemoProjects;
