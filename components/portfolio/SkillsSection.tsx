'use client';

import { Code2, Database, Server, GitBranch, Cloud, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color: '#00f5ff',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'Go', level: 85 },
      { name: 'TypeScript', level: 92 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: '#00ff9f',
    skills: [
      { name: 'PostgreSQL', level: 93 },
      { name: 'MongoDB', level: 88 },
      { name: 'Redis', level: 85 },
      { name: 'Elasticsearch', level: 80 },
    ],
  },
  {
    title: 'Frameworks',
    icon: Server,
    color: '#ff6b9d',
    skills: [
      { name: 'Express.js', level: 95 },
      { name: 'FastAPI', level: 88 },
      { name: 'NestJS', level: 90 },
      { name: 'Django', level: 82 },
    ],
  },
  {
    title: 'DevOps',
    icon: Cloud,
    color: '#ffd93d',
    skills: [
      { name: 'Docker', level: 92 },
      { name: 'Kubernetes', level: 85 },
      { name: 'AWS', level: 88 },
      { name: 'CI/CD', level: 90 },
    ],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    color: '#a855f7',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'RabbitMQ', level: 85 },
      { name: 'GraphQL', level: 87 },
      { name: 'gRPC', level: 82 },
    ],
  },
  {
    title: 'Security',
    icon: Shield,
    color: '#06b6d4',
    skills: [
      { name: 'OAuth 2.0', level: 90 },
      { name: 'JWT', level: 93 },
      { name: 'SSL/TLS', level: 88 },
      { name: 'API Security', level: 91 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561] flex items-center gap-3">
            <Code2 className="w-5 h-5 text-[#00f5ff]" />
            <span className="text-white font-mono text-sm">skills.config.json</span>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Technical Arsenal</h2>
            <p className="text-gray-400 mb-8">Tools and technologies I work with daily</p>

            <div className="grid grid-cols-2 gap-6">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6 hover:border-opacity-60 transition-all duration-300 group"
                    style={{ '--hover-color': category.color } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="relative">
                        <Icon className="w-8 h-8" style={{ color: category.color }} />
                        <div
                          className="absolute inset-0 blur-lg opacity-30"
                          style={{ backgroundColor: category.color }}
                        ></div>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-gray-500 font-mono">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-1000 ease-out relative"
                              style={{
                                width: `${skill.level}%`,
                                backgroundColor: category.color,
                              }}
                            >
                              <div
                                className="absolute inset-0 animate-pulse opacity-50"
                                style={{ backgroundColor: category.color }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561]">
            <span className="text-white font-mono text-sm">$ certifications.list</span>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-4 text-center">
                <p className="text-[#00f5ff] font-semibold mb-1">AWS Certified</p>
                <p className="text-gray-400 text-sm">Solutions Architect</p>
              </div>
              <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-4 text-center">
                <p className="text-[#00ff9f] font-semibold mb-1">MongoDB</p>
                <p className="text-gray-400 text-sm">Developer Associate</p>
              </div>
              <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-4 text-center">
                <p className="text-[#ff6b9d] font-semibold mb-1">Kubernetes</p>
                <p className="text-gray-400 text-sm">CKAD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
