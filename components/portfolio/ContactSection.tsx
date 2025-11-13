"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="border border-[#2d3561] rounded-lg bg-[#16213e]/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="bg-[#0f1729] px-6 py-3 border-b border-[#2d3561] flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#00f5ff]" />
            <span className="text-white font-mono text-sm">contact.info</span>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Vamos conversar
            </h2>
            <p className="text-gray-400 mb-8">
              Sempre aberto a novas conexões.
            </p>

            <div className="flex flex-col md:flex-row gap-8 w-full">
              <div className="flex-1 bg-[#0f1729] border border-[#2d3561] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Contato Direto
                </h3>

                <Mail className="w-5 h-5" />
                <span>pedrosslobato@gmail.com</span>
              </div>

              <div className="flex-1 bg-[#0f1729] border border-[#2d3561] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Social Links
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/Pedrossl"
                    target="_blank"
                    className="flex items-center gap-3 px-4 py-3 bg-[#1a1a2e] border border-[#2d3561] rounded-lg hover:border-[#00f5ff] transition-colors group"
                  >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pedro-lobato-a69316262/"
                    target="_blank"
                    className="flex items-center gap-3 px-4 py-3 bg-[#1a1a2e] border border-[#2d3561] rounded-lg hover:border-[#00f5ff] transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
