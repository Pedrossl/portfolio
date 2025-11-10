'use client';

import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Backend Engineer',
    company: 'TechCorp Inc.',
    location: 'Remote',
    period: '2022 - Present',
    color: '#00f5ff',
    achievements: [
      'Architected microservices infrastructure serving 10M+ users',
      'Reduced API latency by 60% through optimization and caching strategies',
      'Led team of 5 engineers in building real-time data processing pipeline',
      'Implemented CI/CD pipelines reducing deployment time by 75%',
    ],
  },
  {
    title: 'Backend Engineer',
    company: 'CloudScale Solutions',
    location: 'San Francisco, CA',
    period: '2020 - 2022',
    color: '#00ff9f',
    achievements: [
      'Built RESTful APIs handling 50M+ daily requests',
      'Designed and implemented distributed caching layer with Redis',
      'Migrated monolithic application to microservices architecture',
      'Improved database query performance by 80% through indexing',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'StartupHub',
    location: 'New York, NY',
    period: '2019 - 2020',
    color: '#ff6b9d',
    achievements: [
      'Developed OAuth 2.0 authentication system from scratch',
      'Created automated testing framework increasing code coverage to 90%',
      'Integrated third-party payment APIs (Stripe, PayPal)',
      'Mentored junior developers on best practices and code reviews',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561] flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-[#00f5ff]" />
            <span className="text-white font-mono text-sm">experience.log</span>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Work Experience</h2>
            <p className="text-gray-400 mb-8">Building scalable systems at leading tech companies</p>

            <div className="space-y-6 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00f5ff] via-[#00ff9f] to-[#ff6b9d]"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16">
                  <div
                    className="absolute left-3 w-6 h-6 rounded-full border-4 border-[#16213e]"
                    style={{ backgroundColor: exp.color }}
                  >
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: exp.color }}
                    ></div>
                  </div>

                  <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6 hover:border-opacity-60 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                        <p className="text-lg mb-2" style={{ color: exp.color }}>{exp.company}</p>
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
                        <li key={achIndex} className="flex items-start gap-3 text-gray-300">
                          <span className="text-[#00ff9f] mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="h-1 mt-6 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                      style={{ background: `linear-gradient(90deg, ${exp.color} 0%, transparent 100%)` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561]">
            <span className="text-white font-mono text-sm">$ education.info</span>
          </div>

          <div className="p-8">
            <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-[#00f5ff] mb-2">University of Technology</p>
              <p className="text-gray-400 text-sm">2015 - 2019 | GPA: 3.8/4.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
