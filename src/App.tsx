import { useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Meu Portfólio</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-4 py-2 rounded ${currentPage === 'home' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            >
              Início
            </button>
            <button
              onClick={() => setCurrentPage('projects')}
              className={`px-4 py-2 rounded ${currentPage === 'projects' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            >
              Projetos
            </button>
          </div>
        </div>
      </nav>

      {currentPage === 'home' ? <Home /> : <Projects />}
    </div>
  );
}

export default App;
