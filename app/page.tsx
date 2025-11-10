'use client';

import { useState } from 'react';
import Sidebar from '@/components/portfolio/Sidebar';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ContactSection from '@/components/portfolio/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="flex h-screen bg-[#1a1a2e] overflow-hidden">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}
