import React from 'react';
import Hero from './components/Hero.jsx';
import Ecosystem from './components/Ecosystem.jsx';
import AIShowcases from './components/AIShowcases.jsx';
import Team from './components/Team.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060814] via-[#080a1c] to-[#0a0f24] text-white overflow-x-hidden">
      <Hero />
      <Ecosystem />
      <AIShowcases />
      <Team />
      <footer className="py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Intellica — Built for the future of intelligent automation.
      </footer>
    </div>
  );
}
