"use client";

import { Briefcase, Mail, Terminal, User, Wrench } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: "about", label: "Sobre", icon: User },
  { id: "skills", label: "Habilidades", icon: Wrench },
  // { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: "experience", label: "Experiência", icon: Briefcase },
  { id: "contact", label: "Contato", icon: Mail },
];

export default function Sidebar({
  activeSection,
  setActiveSection,
}: SidebarProps) {
  return (
    <aside className="w-64 bg-[#16213e] border-r border-[#2d3561] flex flex-col shadow-2xl">
      <div className="p-6 border-b border-[#2d3561]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Terminal className="w-8 h-8 text-[#00f5ff]" />
            <div className="absolute inset-0 blur-md bg-[#00f5ff] opacity-30"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              DevPortfolio
            </h1>
            <p className="text-xs text-[#00f5ff] font-mono">v1.0.0</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-[#00f5ff]/20 to-transparent border-l-2 border-[#00f5ff] text-white shadow-lg shadow-[#00f5ff]/10"
                    : "text-gray-400 hover:text-white hover:bg-[#1a1a2e]/50"
                }
                group relative overflow-hidden
              `}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff]/5 to-transparent animate-pulse"></div>
              )}
              <Icon
                className={`w-5 h-5 relative z-10 ${
                  isActive ? "text-[#00f5ff]" : ""
                }`}
              />
              <span className="font-medium relative z-10">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#2d3561]">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="w-2 h-2 bg-[#00ff9f] rounded-full animate-pulse shadow-lg shadow-[#00ff9f]/50"></div>
          <span>System Online</span>
        </div>
      </div>
    </aside>
  );
}
