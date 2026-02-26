import React from "react";

const logs = [
  {
    date: "Oct 24",
    project: "TechCorp Website Redesign",
    desc: "Homepage hero section design",
    hours: "4.5h",
    status: "approved",
  },
  {
    date: "Oct 24",
    project: "FinServe Client Portal",
    desc: "Built responsive navigation",
    hours: "3.5h",
    status: "approved",
  },
  {
    date: "Oct 23",
    project: "MedHealth Q1 Campaign",
    desc: "Campaign strategy meeting",
    hours: "2.0h",
    status: "pending",
  },
  {
    date: "Oct 23",
    project: "TechCorp Website Redesign",
    desc: "About Us page wireframes",
    hours: "5.5h",
    status: "pending",
  },
  {
    date: "Oct 22",
    project: "RetailCo E-commerce Integration",
    desc: "API endpoint testing",
    hours: "8.0h",
    status: "approved",
  },
];

const DemoWorkspaceTimesheets = () => {
  return (
    <div className="max-w-[1200px]">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-dm-sans font-bold text-white mb-1">
            Timesheets
          </h1>
          <p className="text-white/40 text-sm">
            Track and manage your time across all projects
          </p>
        </div>
        <button className="px-5 py-2.5 bg-[#3DBFBF] text-black font-semibold text-sm rounded-xl hover:bg-[#3DBFBF]/90 transition-colors flex items-center gap-2">
          <span>+</span> Add Entry
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#12121a] border border-white/10 text-white/60 text-sm rounded-xl hover:bg-white/5 flex items-center gap-2">
            Filters
          </button>
          <div className="px-4 py-2 bg-[#12121a] border border-white/5 text-white text-sm rounded-xl font-medium">
            72.0h this week
          </div>
        </div>
        <div className="bg-[#12121a] border border-white/5 rounded-xl p-1 flex">
          <button className="px-4 py-1.5 text-xs font-medium rounded-lg bg-white/10 text-white">
            List
          </button>
          <button className="px-4 py-1.5 text-xs font-medium rounded-lg text-white/40 hover:text-white transition-colors">
            Calendar
          </button>
        </div>
      </div>

      <div className="bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                DATE
              </th>
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                PROJECT
              </th>
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                DESCRIPTION
              </th>
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                HOURS
              </th>
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                STATUS
              </th>
              <th className="text-right py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr
                key={i}
                className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group"
              >
                <td className="py-4 px-5 text-sm text-white/40">{log.date}</td>
                <td className="py-4 px-5 text-sm font-medium text-[#3DBFBF] hover:underline cursor-pointer">
                  {log.project}
                </td>
                <td className="py-4 px-5 text-sm text-white/70">{log.desc}</td>
                <td className="py-4 px-5 text-sm font-semibold text-white">
                  {log.hours}
                </td>
                <td className="py-4 px-5">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border ${log.status === "approved" ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" : "text-white/50 bg-white/5 border-white/10"}`}
                  >
                    {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="text-xs text-white/30 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoWorkspaceTimesheets;
