import React from "react";

const stats = [
  { label: "Total Hours", value: "156.5h", sub: "This week" },
  {
    label: "Pending Approvals",
    value: "2",
    sub: "Needs review",
    subColor: "text-amber-400",
  },
  { label: "Total Cost", value: "$12,650.00", sub: "Labor costs" },
  { label: "Active Contractors", value: "6", sub: "Logged hours" },
];

const employees = [
  {
    name: "Sarah Chen",
    total: "32.0h",
    billable: "28.0h",
    nonBillable: "4.0h",
    status: "Approved",
    statusColor: "text-emerald-400 bg-emerald-400/10",
  },
  {
    name: "James Wilson",
    total: "28.0h",
    billable: "24.0h",
    nonBillable: "4.0h",
    status: "Approved",
    statusColor: "text-emerald-400 bg-emerald-400/10",
  },
  {
    name: "Emily Rodriguez",
    total: "24.0h",
    billable: "20.0h",
    nonBillable: "4.0h",
    status: "Pending",
    statusColor: "text-amber-400 bg-amber-400/10",
  },
  {
    name: "Michael Park",
    total: "36.0h",
    billable: "32.0h",
    nonBillable: "4.0h",
    status: "Approved",
    statusColor: "text-emerald-400 bg-emerald-400/10",
  },
  {
    name: "Lisa Thompson",
    total: "20.5h",
    billable: "18.0h",
    nonBillable: "2.5h",
    status: "Pending",
    statusColor: "text-amber-400 bg-amber-400/10",
  },
  {
    name: "Alex Martinez",
    total: "16.0h",
    billable: "14.0h",
    nonBillable: "2.0h",
    status: "Approved",
    statusColor: "text-emerald-400 bg-emerald-400/10",
  },
];

const DemoPayroll = () => {
  return (
    <div className="max-w-[1200px]">
      <h1 className="text-3xl font-dm-sans font-bold text-white mb-1">
        Payroll Management
      </h1>
      <p className="text-white/40 text-sm mb-8">
        Manage timesheets, approvals, and payroll processing
      </p>

      {/* Week Header */}
      <div className="bg-[#12121a] border border-white/5 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold text-white">This Week</span>
          <span className="text-sm text-white/40">Nov 18 - Nov 24, 2025</span>
        </div>
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
            <div className={`text-xs mt-1 ${s.subColor || "text-white/30"}`}>
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Employee Breakdown */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white">
            Employee Breakdown
          </h2>
          <p className="text-sm text-white/30">
            Current week project allocation • 6 contractors active
          </p>
        </div>
        <div className="bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                  Employee
                </th>
                <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                  Total Hours
                </th>
                <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                  Billable
                </th>
                <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                  Non-Billable
                </th>
                <th className="text-left py-4 px-5 text-xs font-medium text-white/30 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e, i) => (
                <tr
                  key={i}
                  className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-white/20"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      <span className="text-sm font-medium text-white">
                        {e.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm font-semibold text-white">
                    {e.total}
                  </td>
                  <td className="py-4 px-5 text-sm text-white/50">
                    {e.billable}
                  </td>
                  <td className="py-4 px-5 text-sm text-white/50">
                    {e.nonBillable}
                  </td>
                  <td className="py-4 px-5">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full ${e.statusColor}`}
                    >
                      {e.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DemoPayroll;
