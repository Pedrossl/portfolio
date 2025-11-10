import { ExternalLink, Code, Star, Users, TrendingUp, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Site de Receitas',
      description: 'Um site para compartilhar receitas culinárias com a comunidade.',
      tech: ['React', 'CSS'],
      color: 'bg-orange-500',
    },
    {
      id: 2,
      title: 'App de Tarefas',
      description: 'Aplicação para gerenciar tarefas do dia a dia.',
      tech: ['JavaScript', 'HTML'],
      color: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Blog Pessoal',
      description: 'Blog onde compartilho artigos sobre programação.',
      tech: ['React', 'TypeScript'],
      color: 'bg-red-500',
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Painel de controle para visualizar dados e métricas.',
      tech: ['React', 'TypeScript', 'Tailwind'],
      color: 'bg-purple-500',
    },
  ];

  const stats = [
    { label: 'Projetos', value: '12', icon: Code },
    { label: 'Usuários', value: '1.2k', icon: Users },
    { label: 'Stars', value: '342', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex items-center gap-3">
          <Code size={32} className="text-gray-800" />
          <h1 className="text-4xl font-bold text-gray-800">Meus Projetos</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-lg p-6 shadow-md flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp size={24} />
            <h2 className="text-2xl font-bold">Destaque</h2>
          </div>
          <p className="text-blue-100 mb-4">
            Projeto em crescimento com mais de 1200 usuários ativos mensalmente
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Saiba Mais
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Projetos em Desenvolvimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className={`${project.color} h-32 flex items-center justify-center`}>
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.id}
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Ver Projeto
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contribuições</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Open Source</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Projetos Pessoais</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Documentação</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Github size={20} /> Repositórios
            </h3>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-gray-800">projeto-receitas</p>
                <p className="text-sm text-gray-600">github.com/joao/projeto-receitas</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <p className="font-semibold text-gray-800">app-tarefas</p>
                <p className="text-sm text-gray-600">github.com/joao/app-tarefas</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <p className="font-semibold text-gray-800">blog-dev</p>
                <p className="text-sm text-gray-600">github.com/joao/blog-dev</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Interessado em Colaborar?</h3>
          <p className="text-gray-300 mb-6">
            Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato comigo.
          </p>
          <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Entre em Contato
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
