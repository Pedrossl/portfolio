'use client';

import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561] flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#00f5ff]" />
            <span className="text-white font-mono text-sm">contact.request</span>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
            <p className="text-gray-400 mb-8">Let's build something amazing together</p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0f1729] border border-[#2d3561] rounded-lg text-white focus:border-[#00f5ff] focus:outline-none focus:ring-1 focus:ring-[#00f5ff] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0f1729] border border-[#2d3561] rounded-lg text-white focus:border-[#00f5ff] focus:outline-none focus:ring-1 focus:ring-[#00f5ff] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0f1729] border border-[#2d3561] rounded-lg text-white focus:border-[#00f5ff] focus:outline-none focus:ring-1 focus:ring-[#00f5ff] transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-[#0f1729] border border-[#2d3561] rounded-lg text-white focus:border-[#00f5ff] focus:outline-none focus:ring-1 focus:ring-[#00f5ff] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#00f5ff] to-[#00ff9f] text-[#0f1729] font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Direct Contact</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:dev@example.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-[#00f5ff] transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>dev@example.com</span>
                    </a>
                  </div>
                </div>

                <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Social Links</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 bg-[#1a1a2e] border border-[#2d3561] rounded-lg hover:border-[#00f5ff] transition-colors group"
                    >
                      <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                        GitHub
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 bg-[#1a1a2e] border border-[#2d3561] rounded-lg hover:border-[#00f5ff] transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                        LinkedIn
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 bg-[#1a1a2e] border border-[#2d3561] rounded-lg hover:border-[#00f5ff] transition-colors group"
                    >
                      <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                        Twitter
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 bg-[#1a1a2e] border border-[#2d3561] rounded-lg hover:border-[#00f5ff] transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                        Email
                      </span>
                    </a>
                  </div>
                </div>

                <div className="bg-[#0f1729] border border-[#2d3561] rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Response Time</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I typically respond within 24-48 hours. For urgent matters, please reach out via email directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561]">
            <span className="text-white font-mono text-sm">$ availability.status</span>
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#00ff9f] rounded-full animate-pulse shadow-lg shadow-[#00ff9f]/50"></div>
                <span className="text-white font-semibold">Currently available for freelance projects</span>
              </div>
              <button className="px-6 py-2 bg-gradient-to-r from-[#00f5ff] to-[#00ff9f] text-[#0f1729] font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
