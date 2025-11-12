"use client";

import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Server,
} from "lucide-react";

const skillCategories = [
  {
    title: "Linguagens",
    icon: Code2,
    color: "#00f5ff",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Bancos de Dados",
    icon: Database,
    color: "#00ff9f",
    skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "Redis"],
  },
  {
    title: "Frameworks & Ferramentas",
    icon: Server,
    color: "#ff6b9d",
    skills: ["NestJS", "GraphQL", "REST APIs", "Express.js"],
  },
  {
    title: "DevOps & Integrações",
    icon: Cloud,
    color: "#ffd93d",
    skills: ["Docker", "GitHub Actions", "APIs Externas", "Webhooks"],
  },
  {
    title: "Boas Práticas & Arquitetura",
    icon: GitBranch,
    color: "#a855f7",
    skills: ["Clean Architecture", "DDD", "SOLID", "Design Patterns"],
  },
  {
    title: "Educação & Mentoria",
    icon: GraduationCap,
    color: "#06b6d4",
    skills: [
      "Orientação Educacional",
      "Lógica & OOP",
      "HTML/CSS/JS",
      "Formação de Novos Devs",
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Painel principal */}
        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561] flex items-center gap-3">
            <Code2 className="w-5 h-5 text-[#00f5ff]" />
            <span className="text-white font-mono text-sm">
              skills.config.json
            </span>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Stack Técnica
            </h2>
            <p className="text-gray-400 mb-8">
              Ferramentas e tecnologias que utilizo no dia a dia
            </p>

            <div className="grid grid-cols-2 gap-6">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6 hover:border-opacity-60 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <Icon
                          className="w-8 h-8"
                          style={{ color: category.color }}
                        />
                        <div
                          className="absolute inset-0 blur-lg opacity-30"
                          style={{ backgroundColor: category.color }}
                        ></div>
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {category.title}
                      </h3>
                    </div>

                    <ul className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm bg-[#1a1a2e] px-3 py-2 rounded-md border border-[#2d3561] hover:border-[#00f5ff] hover:text-white transition-colors duration-200"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
