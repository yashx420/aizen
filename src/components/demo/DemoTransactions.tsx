import React from "react";

const metrics = [
  {
    label: "Total Income (30d)",
    value: "$125,000",
    trend: "+12.5%",
    up: true,
    icon: "↗",
  },
  {
    label: "Total Expenses (30d)",
    value: "$85,000",
    trend: "-5.2%",
    up: false,
    icon: "↘",
  },
  {
    label: "Net Cash Flow",
    value: "$40,000",
    trend: "+8.3%",
    up: true,
    icon: "$",
  },
  {
    label: "Bank Balance",
    value: "$285,000",
    trend: "+15.1%",
    up: true,
    icon: "🏦",
  },
];

const categoryColors: Record<string, string> = {
  Revenue: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Software: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Contractor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

const transactions = [
  {
    date: "Dec 6, 2025",
    desc: "RetailCo - E-commerce Integration",
    category: "Revenue",
    account: "Business Account",
    status: "Synced",
    amount: "+$28,000",
  },
  {
    date: "Dec 3, 2025",
    desc: "MedHealth - Retainer Jan",
    category: "Revenue",
    account: "Business Account",
    status: "Synced",
    amount: "+$15,000",
  },
  {
    date: "Dec 1, 2025",
    desc: "Google Cloud Platform",
    category: "Software",
    account: "Business Account",
    status: "Synced",
    amount: "-$3,200",
  },
  {
    date: "Nov 29, 2025",
    desc: "Contractor - UI Design",
    category: "Contractor",
    account: "Business Account",
    status: "Synced",
    amount: "-$8,500",
  },
  {
    date: "Nov 23, 2025",
    desc: "TechCorp - Milestone 2 Payment",
    category: "Revenue",
    account: "Business Account",
    status: "Synced",
    amount: "+$22,500",
  },
  {
    date: "Nov 18, 2025",
    desc: "AWS Infrastructure",
    category: "Software",
    account: "Business Account",
    status: "Synced",
    amount: "-$4,100",
  },
];

const DemoTransactions = () => {
  return (
    <div className="max-w-[1200px]">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-syne font-bold text-white mb-1">
            Transactions
          </h1>
          <p className="text-white/40 text-sm">
            Track and manage all financial transactions
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2.5 bg-[#12121a] border border-white/10 text-white/60 text-sm rounded-xl hover:bg-white/5 transition-colors">
            Sync with Xero
          </button>
          <button className="px-4 py-2.5 bg-[#12121a] border border-white/10 text-white/60 text-sm rounded-xl hover:bg-white/5 transition-colors">
            Import CSV
          </button>
          <button className="px-5 py-2.5 bg-[#3DBFBF] text-black font-semibold text-sm rounded-xl hover:bg-[#3DBFBF]/90 transition-colors">
            + Add Transaction
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="bg-[#12121a] border border-white/5 rounded-2xl p-5"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#3DBFBF]/10 flex items-center justify-center text-[#3DBFBF] text-sm">
                {m.icon}
              </div>
              <span
                className={`text-xs font-medium ${m.up ? "text-emerald-400" : "text-red-400"}`}
              >
                {m.trend}
              </span>
            </div>
            <div className="text-2xl font-bold text-white">{m.value}</div>
            <div className="text-xs text-white/30 mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1 max-w-[350px]">
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
            placeholder="Search transactions..."
            className="w-full bg-[#12121a] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white/70 placeholder:text-white/20 focus:outline-none focus:border-white/10"
          />
        </div>
        <select className="bg-[#12121a] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white/50 focus:outline-none">
          <option>All Categories</option>
        </select>
        <select className="bg-[#12121a] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white/50 focus:outline-none">
          <option>All Accounts</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              {[
                "DATE",
                "DESCRIPTION",
                "CATEGORY",
                "ACCOUNT",
                "STATUS",
                "AMOUNT",
              ].map((h) => (
                <th
                  key={h}
                  className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr
                key={i}
                className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-4 px-5 text-sm text-white/40">{t.date}</td>
                <td className="py-4 px-5 text-sm text-white">{t.desc}</td>
                <td className="py-4 px-5">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border ${categoryColors[t.category]}`}
                  >
                    {t.category}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-white/40">{t.account}</td>
                <td className="py-4 px-5">
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full flex items-center gap-1 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{" "}
                    {t.status}
                  </span>
                </td>
                <td
                  className={`py-4 px-5 text-sm font-medium ${t.amount.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}
                >
                  {t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoTransactions;
