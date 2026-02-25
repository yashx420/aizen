import React, { useState } from "react";

const customers = [
  {
    initials: "AM",
    name: "Amanda Foster",
    type: "Individual",
    email: "amanda.foster@finserve.com",
    status: "Active",
    added: "Dec 21, 2025",
  },
  {
    initials: "DR",
    name: "Dr. Robert Hayes",
    type: "Individual",
    email: "robert.hayes@medhealth.io",
    status: "Active",
    added: "Dec 18, 2025",
  },
  {
    initials: "FI",
    name: "FinServe Partners",
    type: "Organization",
    email: "info@finserve.com",
    status: "Active",
    added: "Dec 15, 2025",
  },
  {
    initials: "JA",
    name: "James Wilson",
    type: "Individual",
    email: "james.wilson@techcorp.io",
    status: "Active",
    added: "Dec 12, 2025",
  },
  {
    initials: "KE",
    name: "Kevin Zhang",
    type: "Individual",
    email: "kevin@startupxyz.io",
    status: "Active",
    added: "Dec 10, 2025",
  },
  {
    initials: "ME",
    name: "MedHealth Solutions",
    type: "Organization",
    email: "contact@medhealth.io",
    status: "Active",
    added: "Dec 8, 2025",
  },
];

const tabs = ["Customers", "Suppliers", "Archived"];

const DemoContacts = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-[1200px]">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-syne font-bold text-white mb-1">
            Contacts
          </h1>
          <p className="text-white/40 text-sm">
            Manage all your customer and supplier contacts in one place.
          </p>
        </div>
        <button className="px-5 py-2.5 bg-[#3DBFBF] text-black font-semibold text-sm rounded-xl hover:bg-[#3DBFBF]/90 transition-colors flex items-center gap-2">
          <span>+</span> New Contact
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/5 mb-6">
        {tabs.map((t, i) => (
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

      {/* Search */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
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
            placeholder="Search customers..."
            className="w-[350px] bg-[#12121a] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white/70 placeholder:text-white/20 focus:outline-none focus:border-white/10"
          />
        </div>
        <select className="bg-[#12121a] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white/50 focus:outline-none">
          <option>All Types</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                Name
              </th>
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                Type
              </th>
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                Email/Phone
              </th>
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                Added
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr
                key={i}
                className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-medium text-white/50">
                      {c.initials}
                    </div>
                    <span className="text-sm font-medium text-white">
                      {c.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border ${c.type === "Organization" ? "text-purple-400 border-purple-400/20 bg-purple-400/5" : "text-blue-400 border-blue-400/20 bg-blue-400/5"}`}
                  >
                    {c.type}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-white/50">{c.email}</td>
                <td className="py-4 px-5">
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full flex items-center gap-1 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{" "}
                    {c.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-white/30">{c.added}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoContacts;
