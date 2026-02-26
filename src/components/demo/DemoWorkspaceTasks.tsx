import React, { useState } from "react";

const groupedTasks = [
  {
    project: "TechCorp Website Redesign",
    count: 14,
    tasks: [
      {
        name: "Finalize Homepage Copy",
        status: "overdue",
        due: "Yesterday",
        assignee: "AC",
      },
      {
        name: "Implement Hero Animation",
        status: "todo",
        due: "Tomorrow",
        assignee: "JW",
      },
    ],
  },
  {
    project: "FinServe Client Portal",
    count: 5,
    tasks: [
      {
        name: "API Integration Testing",
        status: "in-progress",
        due: "Today",
        assignee: "SC",
      },
    ],
  },
  {
    project: "MedHealth Q1 Campaign",
    count: 4,
    tasks: [
      {
        name: "Draft Newsletter",
        status: "todo",
        due: "Next Week",
        assignee: "MP",
      },
      {
        name: "Review Ad Creatives",
        status: "todo",
        due: "Next Week",
        assignee: "DK",
      },
    ],
  },
];

const DemoWorkspaceTasks = () => {
  const [openGroup, setOpenGroup] = useState<number | null>(0);

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-dm-sans font-bold text-white mb-1">
            Tasks
          </h1>
          <p className="text-white/40 text-sm">
            View and manage tasks across all your projects
          </p>
        </div>
        <button className="px-5 py-2.5 bg-[#3DBFBF] text-black font-semibold text-sm rounded-xl hover:bg-[#3DBFBF]/90 transition-colors flex items-center gap-2">
          <span>+</span> Add Task
        </button>
      </div>

      <div className="flexjustify-between items-center mb-6">
        <div className="flex gap-4">
          <div className="relative min-w-[300px]">
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
              placeholder="Search tasks..."
              className="w-full bg-[#12121a] border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm text-white/70 placeholder:text-white/20 focus:outline-none"
            />
          </div>
          <button className="px-4 py-2 bg-[#12121a] border border-white/10 text-white/60 text-sm rounded-xl hover:bg-white/5 flex items-center gap-2">
            Filters
          </button>
        </div>
        <div className="text-sm text-white/30 hidden md:block">
          33 tasks | 1 in progress | 1 overdue
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {groupedTasks.map((group, i) => (
          <div
            key={i}
            className="bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpenGroup(openGroup === i ? null : i)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <svg
                  className={`text-white/30 transition-transform ${openGroup === i ? "rotate-90" : ""}`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                <span className="font-medium text-white">{group.project}</span>
                <span className="text-xs bg-white/5 text-white/40 px-2 py-0.5 rounded-full">
                  {group.count} tasks
                </span>
              </div>
              <span
                className="text-sm text-[#3DBFBF] hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Open Project
              </span>
            </button>

            {openGroup === i && (
              <div className="border-t border-white/5">
                {group.tasks.map((task, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-between px-6 py-3 border-b border-white/[0.02] last:border-0 hover:bg-white/[0.01]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer ${task.status === "in-progress" ? "border-[#3DBFBF] bg-[#3DBFBF]/10" : "border-white/20"}`}
                      >
                        {task.status === "in-progress" && (
                          <div className="w-2.5 h-2.5 rounded-sm bg-[#3DBFBF]" />
                        )}
                      </div>
                      <span
                        className={`text-sm ${task.status === "overdue" ? "text-red-400" : "text-white/80"}`}
                      >
                        {task.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span
                        className={`text-xs ${task.status === "overdue" ? "text-red-400 font-medium" : "text-white/30"}`}
                      >
                        {task.due}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                        {task.assignee}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoWorkspaceTasks;
