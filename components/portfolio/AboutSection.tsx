"use client";

import { Code2, Database, GraduationCap, Server, Terminal } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Painel principal */}
        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561] flex items-center gap-3">
            <Terminal className="w-5 h-5 text-[#00f5ff]" />
            <span className="text-white font-mono text-sm">about.lobato</span>
            <div className="ml-auto flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#00ff9f] p-1">
                  <div className="w-full h-full bg-[#16213e] rounded-lg flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-[#00f5ff]" />
                  </div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-[#00f5ff] to-[#00ff9f] rounded-lg blur-xl opacity-20 -z-10"></div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    Desenvolvedor Back-end & Orientador Educacional
                  </h1>
                  <p className="text-[#00f5ff] text-xl font-mono">
                    Criando soluções escaláveis e inspirando novos devs
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">
                  Sou apaixonado por desenvolvimento back-end e por ajudar
                  outras pessoas a crescerem na área tech. Trabalho com NestJS,
                  GraphQL e integrações complexas entre sistemas, sempre focando
                  em escalabilidade, boas práticas e arquitetura limpa. Além
                  disso, atuo como orientador educacional em cursos de
                  desenvolvimento full-stack, auxiliando alunos a se tornarem
                  profissionais completos.
                </p>
              </div>
            </div>

            {/* Habilidades principais */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6 hover:border-[#00f5ff] transition-colors group">
                <div className="relative">
                  <Server className="w-10 h-10 text-[#00f5ff] mb-3" />
                  <div className="absolute inset-0 blur-xl bg-[#00f5ff] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="text-white font-semibold mb-1">
                  APIs & Integrações
                </h3>
                <p className="text-gray-400 text-sm">NestJS, GraphQL, REST</p>
              </div>

              <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6 hover:border-[#00ff9f] transition-colors group">
                <div className="relative">
                  <Database className="w-10 h-10 text-[#00ff9f] mb-3" />
                  <div className="absolute inset-0 blur-xl bg-[#00ff9f] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="text-white font-semibold mb-1">
                  Banco de Dados
                </h3>
                <p className="text-gray-400 text-sm">
                  PostgreSQL, Prisma & MongoDB
                </p>
              </div>

              <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6 hover:border-[#ff6b9d] transition-colors group">
                <div className="relative">
                  <GraduationCap className="w-10 h-10 text-[#ff6b9d] mb-3" />
                  <div className="absolute inset-0 blur-xl bg-[#ff6b9d] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="text-white font-semibold mb-1">
                  Orientação Educacional
                </h3>
                <p className="text-gray-400 text-sm">Formação de novos devs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561]">
            <span className="text-white font-mono text-sm">
              $ system.status
            </span>
          </div>

          <div className="p-8">
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[#00ff9f]">{">"}</span>
                <span className="text-gray-400">Localização:</span>
                <span className="text-white">Brasil / Remoto</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#00ff9f]">{">"}</span>
                <span className="text-gray-400">Experiência:</span>
                <span className="text-white">+2 anos em desenvolvimento</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#00ff9f]">{">"}</span>
                <span className="text-gray-400">Status:</span>
                <span className="text-[#00ff9f]">
                  Atualmente ativo em projetos e mentorias
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
