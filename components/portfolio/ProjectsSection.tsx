'use client';

import { ExternalLink, Github, Server, Zap, Database, Lock } from 'lucide-react';

const projects = [
  {
    title: 'Distributed Task Queue',
    description: 'High-performance task queue system built with Go and Redis, processing 100K+ tasks/hour with automatic retry mechanisms and dead letter queues.',
    tags: ['Go', 'Redis', 'RabbitMQ', 'Docker'],
    icon: Zap,
    color: '#00f5ff',
    metrics: { throughput: '100K tasks/hr', latency: '<50ms', uptime: '99.9%' },
  },
  {
    title: 'REST API Gateway',
    description: 'Microservices API gateway with rate limiting, authentication, and load balancing. Handles 50M+ requests daily with intelligent caching.',
    tags: ['Node.js', 'Express', 'Redis', 'AWS'],
    icon: Server,
    color: '#00ff9f',
    metrics: { requests: '50M/day', response: '120ms avg', availability: '99.95%' },
  },
  {
    title: 'Real-time Analytics Engine',
    description: 'Stream processing platform using Kafka and ClickHouse for real-time data analytics. Processes 1TB+ data daily with sub-second query times.',
    tags: ['Python', 'Kafka', 'ClickHouse', 'K8s'],
    icon: Database,
    color: '#ff6b9d',
    metrics: { data: '1TB/day', queries: '<1s', streams: '500+' },
  },
  {
    title: 'OAuth 2.0 Identity Server',
    description: 'Enterprise-grade authentication and authorization server supporting OAuth 2.0, OpenID Connect, and SAML. Secures 1M+ user accounts.',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    icon: Lock,
    color: '#ffd93d',
    metrics: { users: '1M+', auth: '<100ms', tokens: '10M/day' },
  },
];

export default function ProjectsSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561] flex items-center gap-3">
            <Server className="w-5 h-5 text-[#00f5ff]" />
            <span className="text-white font-mono text-sm">projects.endpoint</span>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-gray-400 mb-8">Production-grade systems I've built</p>

            <div className="space-y-6">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#0f1729] border border-[#2d3561] rounded-lg overflow-hidden hover:border-opacity-60 transition-all duration-300 group"
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative shrink-0">
                          <div
                            className="w-16 h-16 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${project.color}15` }}
                          >
                            <Icon className="w-8 h-8" style={{ color: project.color }} />
                          </div>
                          <div
                            className="absolute inset-0 blur-xl opacity-20 rounded-lg"
                            style={{ backgroundColor: project.color }}
                          ></div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                              <p className="text-gray-400 leading-relaxed">{project.description}</p>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <button className="p-2 bg-[#1a1a2e] border border-[#2d3561] rounded-lg hover:border-[#00f5ff] transition-colors">
                                <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                              </button>
                              <button className="p-2 bg-[#1a1a2e] border border-[#2d3561] rounded-lg hover:border-[#00f5ff] transition-colors">
                                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-[#1a1a2e] border border-[#2d3561] rounded-full text-sm font-mono"
                                style={{ color: project.color }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-[#1a1a2e] border border-[#2d3561] rounded-lg p-3">
                              <p className="text-gray-500 text-xs mb-1">Throughput</p>
                              <p className="text-white font-mono text-sm">{project.metrics.throughput || project.metrics.requests || project.metrics.data || project.metrics.users}</p>
                            </div>
                            <div className="bg-[#1a1a2e] border border-[#2d3561] rounded-lg p-3">
                              <p className="text-gray-500 text-xs mb-1">Performance</p>
                              <p className="text-white font-mono text-sm">{project.metrics.latency || project.metrics.response || project.metrics.queries || project.metrics.auth}</p>
                            </div>
                            <div className="bg-[#1a1a2e] border border-[#2d3561] rounded-lg p-3">
                              <p className="text-gray-500 text-xs mb-1">Reliability</p>
                              <p className="text-white font-mono text-sm">{project.metrics.uptime || project.metrics.availability || project.metrics.streams || project.metrics.tokens}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(90deg, ${project.color} 0%, transparent 100%)` }}
                    ></div>
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
