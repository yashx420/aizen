import React from "react";

const channels = ["general", "announcements", "design", "development"];
const dms = ["David Kim", "Sarah Martinez", "Alexandra Chen"];

const DemoWorkspaceMessages = () => {
  return (
    <div className="flex h-[calc(100vh-140px)] bg-[#0e0e14] border border-white/5 rounded-2xl overflow-hidden mt-4">
      {/* Sidebar */}
      <div className="w-[260px] border-r border-white/5 bg-[#12121a] flex flex-col shrink-0">
        <div className="p-4 border-b border-white/5 flex justify-between items-center">
          <span className="font-semibold text-white">Messages</span>
          <button className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/50">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          <div>
            <div className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-2 px-2 flex justify-between group">
              Channels
              <span className="opacity-0 group-hover:opacity-100 cursor-pointer hover:text-white transition-opacity">
                +
              </span>
            </div>
            {channels.map((c, i) => (
              <div
                key={i}
                className={`px-2 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer text-sm ${i === 0 ? "bg-[#3DBFBF]/10 text-[#3DBFBF] font-medium" : "text-white/50 hover:bg-white/5 transition-colors"}`}
              >
                <span className="text-white/20">#</span> {c}
              </div>
            ))}
          </div>

          <div>
            <div className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-2 px-2 flex justify-between group">
              Direct Messages
              <span className="opacity-0 group-hover:opacity-100 cursor-pointer hover:text-white transition-opacity">
                +
              </span>
            </div>
            {dms.map((dm, i) => (
              <div
                key={i}
                className="px-2 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer text-sm text-white/50 hover:bg-white/5 transition-colors"
              >
                <div className="relative">
                  <div
                    className={`w-5 h-5 rounded border-2 border-[#12121a] flex items-center justify-center text-[8px] font-bold text-white bg-gradient-to-br ${i === 0 ? "from-blue-500" : i === 1 ? "from-pink-500" : "from-purple-500"} to-black`}
                  >
                    {dm
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-[#12121a] bg-emerald-400" />
                </div>
                {dm}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-[#0a0a0f]">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-white/20">#</span> general
            </h2>
            <p className="text-xs text-white/40 mt-1">
              TechCorp Website Redesign discussion
            </p>
          </div>
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded border-2 border-[#0a0a0f] bg-blue-500 flex items-center justify-center text-xs text-white font-bold">
              DK
            </div>
            <div className="w-8 h-8 rounded border-2 border-[#0a0a0f] bg-pink-500 flex items-center justify-center text-xs text-white font-bold">
              SM
            </div>
            <div className="w-8 h-8 rounded border-2 border-[#0a0a0f] bg-white/10 flex items-center justify-center text-xs text-white/50">
              +3
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-2xl bg-[#12121a] flex items-center justify-center mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[#3DBFBF]"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">
            Welcome to #general!
          </h3>
          <p className="text-sm text-white/40 text-center max-w-sm">
            This is the start of the #general channel for TechCorp Website
            Redesign. Say hi to your team!
          </p>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/5 bg-[#0e0e14]">
          <div className="bg-[#12121a] border border-white/10 rounded-xl overflow-hidden focus-within:border-[#3DBFBF]/50 transition-colors">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 text-white/30">
              <button className="p-1 hover:text-white/70 hover:bg-white/5 rounded">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </button>
              <button className="p-1 hover:text-white/70 hover:bg-white/5 rounded">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </button>
              <button className="p-1 hover:text-white/70 hover:bg-white/5 rounded">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </button>
            </div>
            <input
              type="text"
              placeholder="Message #general"
              className="w-full bg-transparent border-none outline-none px-4 py-3 text-sm text-white placeholder:text-white/30"
            />
          </div>
          <div className="flex justify-between items-center mt-2 px-1">
            <span className="text-[10px] text-white/30">
              Press Enter to send
            </span>
            <button className="bg-[#3DBFBF] text-black w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#3DBFBF]/90 transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoWorkspaceMessages;
