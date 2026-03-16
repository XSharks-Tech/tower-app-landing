import { motion } from "framer-motion";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding bg-glow-top overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse,hsl(var(--glow-cyan)/0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse,hsl(var(--glow-violet)/0.06),transparent_70%)] pointer-events-none" />

      <div className="section-container text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-glow">
            A primeira plataforma de Precificação Perfeita do mundo
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="headline-xl mt-8 mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Veja o seu <span className="glow-text">Real Lucro</span> com a nova geração da gestão em A&B
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="subtitle mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Entenda o Real CMV, precifique com mais clareza e transforme dados em decisões mais inteligentes.
        </motion.p>

        {/* Video placeholder */}
        <motion.div
          className="relative max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden glass-card group cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="aspect-video bg-gradient-to-br from-[hsl(var(--surface))] to-[hsl(var(--card))] flex items-center justify-center relative">
            {/* Glow ring around play button */}
            <div className="absolute w-24 h-24 rounded-full bg-[hsl(var(--glow-cyan)/0.15)] animate-glow-pulse" />
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-glow-cyan to-glow-violet flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 text-background ml-1" />
            </div>
          </div>
          {/* Border glow */}
          <div className="absolute inset-0 rounded-2xl border border-[hsl(var(--glow-cyan)/0.2)] pointer-events-none" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a href="#oferta" className="cta-primary">
            Quero acessar agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
