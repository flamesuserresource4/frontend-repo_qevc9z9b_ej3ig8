import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } });
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="relative w-full min-h-[90vh] flex items-center justify-center">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and particles overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(64,80,255,0.15),transparent_60%)]" />

      {/* Subtle particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-400/20 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `floatY ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 4}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="relative z-10 px-6 text-center max-w-3xl"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            Revolutionizing AI Interaction
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/70">
          Harness the power of intelligent automation and adaptive reasoning.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#ecosystem"
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cyan-500/20 backdrop-blur border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/30 transition-colors shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            Get Started
          </a>
          <a
            href="#showcases"
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl bg-fuchsia-500/10 backdrop-blur border border-fuchsia-300/30 text-fuchsia-200 hover:bg-fuchsia-500/20 transition-colors shadow-[0_0_25px_rgba(244,114,182,0.25)]"
          >
            Watch Demo
          </a>
        </div>
      </motion.div>

      {/* Brain image overlay with rotation and pulse */}
      <div className="absolute bottom-6 right-6 w-28 sm:w-36 opacity-70">
        <div className="relative">
          <img
            src="/hero_brain.webp"
            alt="AI Brain"
            className="w-full h-auto animate-slow-rotate-y"
            style={{ filter: 'drop-shadow(0 0 18px rgba(56,189,248,0.55))' }}
          />
          <span className="pointer-events-none absolute inset-0 rounded-full animate-pulse-glow bg-cyan-400/10 blur-2xl" />
        </div>
      </div>

      <style>{`
        @keyframes floatY { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-20px) } }
        @keyframes rotateY { 0% { transform: rotateY(0deg) } 100% { transform: rotateY(360deg) } }
        @keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(56,189,248,0.0) } 70% { box-shadow: 0 0 35px 10px rgba(56,189,248,0.35) } }
        .animate-slow-rotate-y { animation: rotateY 18s linear infinite; }
        .animate-pulse-glow { animation: pulseGlow 3.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
