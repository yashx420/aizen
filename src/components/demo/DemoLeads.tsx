import React from "react";

const stats = [
  { label: "Total Leads", value: "9", trend: "+12%", up: true },
  { label: "Pipeline Value", value: "$820,000", trend: "+8.2%", up: true },
  { label: "Conversion Rate", value: "0%", trend: "-1.5%", up: false },
  { label: "Won Deals", value: "0", trend: "+15%", up: true },
];

const stages = [
  {
    name: "New",
    count: 2,
    total: "$80K AUD",
    color: "border-blue-500/30",
    leads: [
      {
        name: "Marketing Agency Website",
        value: "$25K AUD",
        likelihood: "20% likely",
        date: "Apr 11",
      },
      {
        name: "Restaurant Chain POS Integration",
        value: "$55K AUD",
        likelihood: "15% likely",
        date: "Apr 3",
      },
    ],
  },
  {
    name: "Contacted",
    count: 2,
    total: "$185K AUD",
    color: "border-cyan-500/30",
    leads: [
      {
        name: "E-commerce Redesign",
        value: "$65K AUD",
        likelihood: "30% likely",
        date: "Mar 27",
      },
      {
        name: "EdTech Learning Platform",
        value: "$120K AUD",
        likelihood: "25% likely",
        date: "Apr 1",
      },
    ],
  },
  {
    name: "Qualified",
    count: 2,
    total: "$225K AUD",
    color: "border-emerald-500/30",
    leads: [
      {
        name: "HealthTech Dashboard",
        value: "$45K AUD",
        likelihood: "50% likely",
        date: "Mar 17",
      },
      {
        name: "Government Portal Modernization",
        value: "$180K AUD",
        likelihood: "45% likely",
        date: "Mar 20",
      },
    ],
  },
  {
    name: "Proposal",
    count: 2,
    total: "$245K AUD",
    color: "border-amber-500/30",
    leads: [
      {
        name: "Insurance Claims App",
        value: "$95K AUD",
        likelihood: "60% likely",
        date: "Mar 10",
      },
      {
        name: "Enterprise SaaS Platform",
        value: "$150K AUD",
        likelihood: "55% likely",
        date: "Mar 5",
      },
    ],
  },
  {
    name: "Negotiation",
    count: 1,
    total: "$85K AUD",
    color: "border-purple-500/30",
    leads: [
      {
        name: "Retail Analytics Dashboard",
        value: "$85K AUD",
        likelihood: "75% likely",
        date: "Feb 28",
      },
    ],
  },
];

const DemoLeads = () => {
  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-syne font-bold text-white mb-1">
            Sales Pipeline
          </h1>
          <p className="text-white/40 text-sm">
            Track and manage your sales opportunities through stages
          </p>
        </div>
        <button className="px-5 py-2.5 bg-[#3DBFBF] text-black font-semibold text-sm rounded-xl hover:bg-[#3DBFBF]/90 transition-colors flex items-center gap-2">
          <span>+</span> New Lead
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#12121a] border border-white/5 rounded-2xl p-5"
          >
            <span className="text-white/40 text-sm">{s.label}</span>
            <div className="text-2xl font-bold text-white mt-2">{s.value}</div>
            <span
              className={`text-xs font-medium mt-2 inline-block ${s.up ? "text-emerald-400" : "text-red-400"}`}
            >
              {s.trend}
            </span>
          </div>
        ))}
      </div>

      {/* Kanban */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage, i) => (
          <div
            key={i}
            className={`min-w-[280px] w-[280px] bg-[#12121a] border ${stage.color} rounded-2xl p-4 shrink-0`}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">
                  {stage.name}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/40">
                  {stage.count}
                </span>
              </div>
              <span className="text-xs text-white/30">{stage.total}</span>
            </div>
            <div className="space-y-3">
              {stage.leads.map((lead, j) => (
                <div
                  key={j}
                  className="bg-[#0a0a0f] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors cursor-pointer"
                >
                  <div className="text-sm font-medium text-white mb-2">
                    {lead.name}
                  </div>
                  <div className="flex justify-between text-xs text-white/40">
                    <span>$ {lead.value.replace("$", "")}</span>
                    <span>{lead.likelihood}</span>
                  </div>
                  <div className="flex justify-between text-xs text-white/25 mt-2">
                    <span>Unassigned</span>
                    <span>{lead.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoLeads;
