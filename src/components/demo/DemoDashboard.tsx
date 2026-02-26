import React from "react";

const stats = [
  {
    label: "Pipeline",
    value: "$485,000",
    sub: "12 Leads",
    trend: "+12%",
    up: true,
  },
  {
    label: "Outstanding Invoices",
    value: "$85,000",
    sub: "",
    trend: "-3.2%",
    up: false,
  },
  {
    label: "Monthly Revenue",
    value: "$142,500",
    sub: "",
    trend: "+8.1%",
    up: true,
  },
  {
    label: "Monthly Expenditure",
    value: "$98,750",
    sub: "",
    trend: "+2.4%",
    up: true,
  },
];

const activities = [
  {
    name: "Sarah Martinez",
    action: 'changed tasks "Q4 Marketing Review" status to "Completed"',
    time: "1 hour ago",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "David Kim",
    action: 'uploaded "API Documentation v2.pdf"',
    time: "2 hours ago",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Marcus Johnson",
    action:
      'moved leads "TechCorp Industries" from "Proposal" to "Negotiation"',
    time: "3 hours ago",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Alexandra Chen",
    action: 'created invoices "MedHealth Solutions"',
    time: "4 hours ago",
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "Emily Rodriguez",
    action: 'assigned tasks "Client Onboarding Call"',
    time: "5 hours ago",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Michael Thompson",
    action: 'updated projects "Website Redesign"',
    time: "6 hours ago",
    color: "from-teal-500 to-cyan-500",
  },
];

// Simple SVG line chart data
const chartPoints = [40, 55, 45, 60, 50, 65, 55, 70, 60, 75, 65, 70];
const months = [
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
];

const DemoDashboard = () => {
  const maxVal = Math.max(...chartPoints);
  const chartW = 800;
  const chartH = 200;
  const points = chartPoints.map((v, i) => ({
    x: (i / (chartPoints.length - 1)) * chartW,
    y: chartH - (v / maxVal) * chartH * 0.85 - 10,
  }));
  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <div className="max-w-[1200px]">
      <h1 className="text-3xl font-dm-sans font-bold text-white mb-1">
        Financial Overview
      </h1>
      <p className="text-white/40 text-sm mb-8">
        Monitor cash flow, revenue trends, and business performance.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#12121a] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-white/40 text-sm">{s.label}</span>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${s.up ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10"}`}
              >
                {s.trend}
              </span>
            </div>
            <div className="text-2xl font-bold text-white">{s.value}</div>
            {s.sub && <div className="text-sm text-white/30 mt-1">{s.sub}</div>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-[#12121a] border border-white/5 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-white">Revenue Trend</h2>
            <div className="flex gap-1">
              {["12m", "3m", "30d", "7d", "24h"].map((t, i) => (
                <button
                  key={t}
                  className={`px-3 py-1 text-xs rounded-lg transition-colors ${i === 0 ? "bg-[#5E19E1]/15 text-[#5E19E1]" : "text-white/30 hover:text-white/60 hover:bg-white/5"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <svg viewBox={`0 0 ${chartW} ${chartH + 30}`} className="w-full">
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                y1={i * (chartH / 4)}
                x2={chartW}
                y2={i * (chartH / 4)}
                stroke="rgba(255,255,255,0.05)"
              />
            ))}
            {/* Line */}
            <path
              d={linePath}
              fill="none"
              stroke="#5E19E1"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Gradient fill */}
            <path
              d={`${linePath} L ${chartW} ${chartH} L 0 ${chartH} Z`}
              fill="url(#chartGrad)"
              opacity="0.15"
            />
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5E19E1" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {/* Dots */}
            {points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="3" fill="#5E19E1" />
            ))}
            {/* Month labels */}
            {months.map((m, i) => (
              <text
                key={i}
                x={points[i].x}
                y={chartH + 25}
                fill="rgba(255,255,255,0.3)"
                fontSize="11"
                textAnchor="middle"
              >
                {m}
              </text>
            ))}
          </svg>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-white">
              Recent Activity
            </h2>
            <span className="text-xs text-white/30 hover:text-white/50 cursor-pointer">
              View all
            </span>
          </div>
          <div className="space-y-5 max-h-[400px] overflow-y-auto pr-2">
            {activities.map((a, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${a.color} flex items-center justify-center shrink-0 text-[10px] font-bold`}
                >
                  {a.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm font-medium text-white">
                      {a.name}
                    </span>
                    <span className="text-[10px] text-white/25 shrink-0">
                      {a.time}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 mt-0.5 leading-relaxed">
                    {a.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoDashboard;
