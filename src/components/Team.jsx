import React from 'react';
import { motion } from 'framer-motion';

const members = [
  { name: 'Ali Jawad', id: '22f3001825' },
  { name: 'Deepti Gurnani', id: '21f3002204' },
  { name: 'Harsh Mathur', id: '23f1000602' },
  { name: 'Harshita Jain', id: '21f1003224' },
  { name: 'Mayank Singh', id: '23f1000598' },
  { name: 'Rachita Vohra', id: '22f1001847' },
  { name: 'Mohammad Aman', id: '21f3000044' },
  { name: 'Duvvuri Sai Kyvalya', id: '21f1003975' },
];

export default function Team() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
            Meet the Visionaries Behind the AI
          </h2>
          <p className="mt-4 text-white/70">Team Intellica — building the future with curiosity, craft, and conviction.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur shadow-[inset_0_0_60px_rgba(59,130,246,0.08),0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[inset_0_0_60px_rgba(59,130,246,0.12),0_0_45px_rgba(168,85,247,0.25)] transition-shadow"
            >
              <div className="pointer-events-none absolute -inset-8 bg-gradient-to-tr from-cyan-400/10 via-fuchsia-400/10 to-transparent blur-2xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 border border-white/10 flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-semibold">
                    {m.name.split(' ').map((w) => w[0]).join('').slice(0,2)}
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold">{m.name}</h4>
                <p className="text-white/60 text-sm">{m.id}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
