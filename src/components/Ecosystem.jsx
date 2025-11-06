import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'Customer', x: 12, y: 40 },
  { id: 'Agent', x: 78, y: 35 },
  { id: 'Vendor', x: 28, y: 72 },
  { id: 'Supervisor', x: 70, y: 70 },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
            The Intellica Ecosystem
          </h2>
          <p className="mt-4 text-white/70">Connected portals powering seamless AI collaboration.</p>
        </div>

        <div className="relative mt-12 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
          <img src="/ecosystem_network.webp" alt="Ecosystem" className="w-full h-[520px] object-cover opacity-70" />

          {/* Glowing animated lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[
              ['Customer', 'Agent'],
              ['Customer', 'Vendor'],
              ['Agent', 'Supervisor'],
              ['Vendor', 'Supervisor'],
              ['Customer', 'Supervisor'],
            ].map((pair, idx) => {
              const [a, b] = pair;
              const p1 = nodes.find((n) => n.id === a);
              const p2 = nodes.find((n) => n.id === b);
              return (
                <defs key={`defs-${idx}`}>
                  <linearGradient id={`grad-${idx}`} x1={p1.x/100} y1={p1.y/100} x2={p2.x/100} y2={p2.y/100}>
                    <stop offset="0%" stopColor="#67e8f9" stopOpacity="0" />
                    <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                  </linearGradient>
                </defs>
              );
            })}
            {[
              ['Customer', 'Agent'],
              ['Customer', 'Vendor'],
              ['Agent', 'Supervisor'],
              ['Vendor', 'Supervisor'],
              ['Customer', 'Supervisor'],
            ].map((pair, idx) => {
              const [a, b] = pair;
              const p1 = nodes.find((n) => n.id === a);
              const p2 = nodes.find((n) => n.id === b);
              const path = `M ${p1.x} ${p1.y} Q ${(p1.x + p2.x)/2} ${(p1.y + p2.y)/2 - 10} ${p2.x} ${p2.y}`;
              return (
                <g key={idx}>
                  <path d={path} fill="none" stroke={`url(#grad-${idx})`} strokeWidth="0.6" className="opacity-80" />
                  <motion.circle
                    r="0.8"
                    fill="#a78bfa"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 6 + idx, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <animateMotion dur={`${6 + idx}s`} repeatCount="indefinite" path={path} />
                  </motion.circle>
                </g>
              );
            })}
          </svg>

          {/* Floating labels */}
          {nodes.map((n, i) => (
            <motion.div
              key={n.id}
              whileHover={{ scale: 1.08, filter: 'brightness(1.3)' }}
              className="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl text-xs sm:text-sm bg-white/5 border border-white/10 backdrop-blur shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <span className="bg-gradient-to-r from-cyan-200 to-fuchsia-300 bg-clip-text text-transparent font-medium">
                {n.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
