import React from 'react';
import { motion } from 'framer-motion';

export default function AIShowcases() {
  return (
    <section id="showcases" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6 space-y-16">
        {/* RAG AI Processing */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img src="/rag_ai.webp" alt="RAG AI" className="w-full h-80 object-cover opacity-80" />
            {/* Scanning holographic lines */}
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
                style={{ top: `${(i + 1) * 12}%`, animation: `scanX ${4 + i}s linear ${i * 0.5}s infinite` }}
              />
            ))}
            {/* Data particles */}
            <div className="pointer-events-none absolute inset-0">
              {[...Array(25)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-fuchsia-300/70"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `drift ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 3}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
              Retrieval-Augmented Generation in Action
            </h3>
            <p className="mt-4 text-white/70">
              Dynamic retrieval pipelines, semantic chunking, and contextual grounding produce answers that are both precise and explainable.
            </p>
          </motion.div>
        </div>

        {/* Refund Vision AI */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
              Refund Vision AI
            </h3>
            <p className="mt-4 text-white/70">
              AI-driven product validation for instant refunds.
            </p>
          </motion.div>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img src="/refund_ai.webp" alt="Refund AI" className="w-full h-80 object-cover opacity-80" />
            {/* Split-screen scanning and approval */}
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="relative">
                <span className="absolute inset-x-0 w-full h-[2px] bg-cyan-300/80" style={{ animation: 'scanY 3.5s linear infinite' }} />
              </div>
              <div className="relative flex items-center justify-center">
                <span className="px-4 py-2 rounded-2xl text-cyan-100 bg-cyan-500/20 border border-cyan-300/30 shadow-[0_0_30px_rgba(34,211,238,0.35)] animate-approval-glow">
                  Refund Approved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scanX { 0% { transform: translateX(-100%) } 100% { transform: translateX(100%) } }
        @keyframes scanY { 0% { top: -5% } 100% { top: 105% } }
        @keyframes drift { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes approvalPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.2) } 50% { box-shadow: 0 0 40px 10px rgba(34,211,238,0.4) } }
        .animate-approval-glow { animation: approvalPulse 2.8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
