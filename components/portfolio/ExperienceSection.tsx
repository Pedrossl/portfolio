"use client";

import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Back End Developer",
    company: "PriceKeeper",
    location: "Pelotas, RS · Remoto",
    period: "jan de 2025 - o momento",
    color: "#00f5ff",
    achievements: [
      "Desenvolvimento e manutenção de APIs em NestJS com GraphQL e Prisma.",
      "Implementação de casos de uso seguindo padrões de Clean Architecture e DDD.",
      "Integração com sistemas externos e automação de processos internos.",
      "Colaboração com equipes multidisciplinares para evoluir o ecossistema da plataforma.",
    ],
  },
  {
    title: "Back End Developer",
    company: "Brainny Smart Solutions",
    location: "Pelotas, RS · Remoto",
    period: "set de 2023 - jan de 2025",
    color: "#00ff9f",
    achievements: [
      "Criação de serviços backend com NestJS e GraphQL para múltiplos produtos.",
      "Integrações com APIs externas e manutenção de pipelines de sincronização de dados.",
      "Refatoração de fluxos críticos para melhoria de performance e legibilidade do código.",
      "Participação ativa no planejamento técnico e revisão de código em equipe.",
    ],
  },
  {
    title: "Orientador Educacional",
    company: "Centro Universitário Senac",
    location: "Pelotas, RS · Híbrido",
    period: "set de 2023 - o momento",
    color: "#ff6b9d",
    achievements: [
      "Acompanhamento pedagógico de alunos dos cursos de programação e tecnologia.",
      "Ministração de aulas práticas no programa Juventude Digital, com foco em HTML, CSS e introdução ao desenvolvimento web.",
      "Criação de materiais de apoio e atividades para reforço do aprendizado técnico.",
      "Mentoria e orientação profissional para estudantes iniciantes na área de TI.",
    ],
  },
  {
    title: "Gerente de Projetos",
    company: "Senatec Junior",
    location: "Pelotas, RS · Híbrido",
    period: "set de 2023 - abr de 2024",
    color: "#ffd93d",
    achievements: [
      "Coordenação de projetos internos e externos da empresa júnior.",
      "Gestão de cronogramas e acompanhamento de times técnicos em Trello.",
      "Suporte à equipe no desenvolvimento de soluções digitais.",
      "Promoção de boas práticas de comunicação e gestão ágil.",
    ],
  },
];

const education = [
  {
    course: "Mestrado em Engenharia Eletrônica e de Computação",
    institution: "Universidade Católica de Pelotas",
    period: "jan de 2025 - dez de 2026",
    color: "#00f5ff",
  },
  {
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário Senac",
    period: "jan de 2022 - dez de 2024",
    color: "#00ff9f",
  },
];

export default function ExperienceSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Experiência Profissional */}
        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561] flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-[#00f5ff]" />
            <span className="text-white font-mono text-sm">experience.log</span>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Experiências Profissionais
            </h2>
            <p className="text-gray-400 mb-8">
              Desenvolvimento backend e orientação educacional
            </p>

            <div className="space-y-6 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00f5ff] via-[#00ff9f] to-[#ff6b9d]" />

              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16">
                  <div
                    className="absolute left-3 w-6 h-6 rounded-full border-4 border-[#16213e]"
                    style={{ backgroundColor: exp.color }}
                  >
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: exp.color }}
                    />
                  </div>

                  <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6 hover:border-opacity-60 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p
                          className="text-lg mb-2"
                          style={{ color: exp.color }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-3 text-gray-300 leading-relaxed"
                        >
                          <span
                            className="mt-[2px] text-lg font-semibold"
                            style={{ color: exp.color }}
                          >
                            ▹
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="h-1 mt-6 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${exp.color} 0%, transparent 100%)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561] flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-[#00ff9f]" />
            <span className="text-white font-mono text-sm">
              $ education.info
            </span>
          </div>

          <div className="p-8 space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {edu.course}
                </h3>
                <p className="text-lg mb-2" style={{ color: edu.color }}>
                  {edu.institution}
                </p>
                <p className="text-gray-400 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
