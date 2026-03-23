import { motion } from "framer-motion";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Load VTurb player script dynamically
    const existingScript = document.querySelector(
      'script[src*="converteai.net"][src*="69c1972c596c6131b74363e9"]'
    );
    if (!existingScript) {
      const s = document.createElement("script");
      s.src =
        "https://scripts.converteai.net/f753492c-cab9-4c47-933a-4731a85ad0f0/players/69c1972c596c6131b74363e9/v4/player.js";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-10 md:pt-16 pb-20 md:pb-28 px-4 md:px-6 bg-glow-top bg-grid overflow-hidden">
      {/* Glow de fundo na região do vídeo */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          top: "55%",
          background: "radial-gradient(ellipse 70% 60% at center, hsl(187 82% 53% / 0.10) 0%, hsl(199 89% 48% / 0.05) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Ambient floating orbs */}
      <div
        className="absolute top-16 left-[15%] w-[320px] h-[320px] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #22d3ee, transparent 70%)",
          animation: "float-slow 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 right-[10%] w-[250px] h-[250px] rounded-full pointer-events-none opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          animation: "float-slow 10s ease-in-out infinite 2s",
        }}
      />

      <div className="section-container text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-glow">
            A 1ª Aplicação de Ficha Técnica de Desempenho do Mundo
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.1] mt-6 mb-5 max-w-full mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Entenda o <span className="glow-text">lucro real</span> da sua operação e pare de confundir <span className="glow-text">faturamento com resultado</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
          style={{ color: "hsl(195 30% 75%)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Mais do que mostrar números, a Tower ajuda sua operação a entender com clareza o que sustenta o resultado — e o que <span className="glow-text-warm">corrói sua margem</span>.
        </motion.p>

        {/* VTurb Video Player */}
        <motion.div
          className="relative max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* @ts-expect-error - vturb-smartplayer is a custom element */}
          <vturb-smartplayer
            id="vid-69c1972c596c6131b74363e9"
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
