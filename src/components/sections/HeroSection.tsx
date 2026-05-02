import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-10 md:pt-16 pb-20 md:pb-28 px-4 md:px-6 bg-glow-top bg-grid overflow-hidden">
      {/* Glow de fundo na região do vídeo */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          top: "55%",
          background: "radial-gradient(ellipse 70% 60% at center, hsl(25 95% 55% / 0.10) 0%, hsl(20 90% 50% / 0.05) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Ambient floating orbs */}
      <div
        className="absolute top-16 left-[15%] w-[320px] h-[320px] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #ff8c00, transparent 70%)",
          animation: "float-slow 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 right-[10%] w-[250px] h-[250px] rounded-full pointer-events-none opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #ff6b00, transparent 70%)",
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
          className="text-3xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.15] mt-6 mb-5 max-w-full mx-auto text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Descubra o <span className="glow-text-warm">lucro real</span> da sua operação{" "}
          <br className="hidden sm:block" />
          e pare de confundir <span className="glow-text-warm">faturamento com resultado</span>
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

        {/* Panda Video Player */}
        <motion.div
          className="relative max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              id="panda-d9eee367-8bef-4607-a464-73fcbf2a5349"
              src="https://player-vz-47e0747d-262.tv.pandavideo.com.br/embed/?v=d9eee367-8bef-4607-a464-73fcbf2a5349"
              style={{ border: "none", position: "absolute", top: 0, left: 0 }}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen
              width="100%"
              height="100%"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
