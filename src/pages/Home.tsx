import { User, Mail, Github, Briefcase, Award } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-6 border-b pb-8">
          <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
            <User size={64} className="text-white" />
          </div>

          <h1 className="text-4xl font-bold text-gray-800">João Silva</h1>
          <p className="text-xl text-gray-600">Desenvolvedor Web</p>

          <p className="text-gray-700 max-w-2xl">
            Olá! Sou um desenvolvedor apaixonado por tecnologia e criação de
            websites. Tenho experiência em React, TypeScript e outras tecnologias
            modernas.
          </p>

          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail size={20} />
              <span>joao@email.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Github size={20} />
              <span>github.com/joaosilva</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Award size={24} /> Habilidades
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded">HTML</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded">CSS</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded">JavaScript</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded">React</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded">TypeScript</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded">Tailwind CSS</span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Briefcase size={24} /> Experiência
          </h2>
          <div className="flex flex-col gap-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-bold text-gray-800">Desenvolvedor Frontend</h3>
              <p className="text-gray-600">Tech Company - 2023 até agora</p>
              <p className="text-gray-700 mt-2">Desenvolvimento de interfaces web com React e TypeScript.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-bold text-gray-800">Desenvolvedor Jr</h3>
              <p className="text-gray-600">Startup Digital - 2022 a 2023</p>
              <p className="text-gray-700 mt-2">Criação de websites e manutenção de aplicações web.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
          <p className="text-gray-700 leading-relaxed">
            Sou um desenvolvedor web dedicado com paixão por criar experiências digitais
            incríveis. Tenho forte conhecimento em desenvolvimento front-end e estou sempre
            aprendendo novas tecnologias. Gosto de trabalhar em equipe e resolver problemas
            complexos através da programação.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
