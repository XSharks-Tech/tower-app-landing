import { motion } from "framer-motion";

interface DeviceMockupProps {
  src: string;
  alt: string;
  variant?: "desktop" | "floating";
  className?: string;
  delay?: number;
}

/**
 * Stylish device mockup frame with glow effects.
 * "desktop" = browser-like frame with top bar dots.
 * "floating" = clean floating card with perspective tilt.
 */
const DeviceMockup = ({
  src,
  alt,
  variant = "desktop",
  className = "",
  delay = 0,
}: DeviceMockupProps) => {
  if (variant === "floating") {
    return (
      <motion.div
        className={`relative group ${className}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
      >
        {/* Glow behind */}
        <div
          className="absolute -inset-4 rounded-3xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(25 95% 55% / 0.08), transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Card */}
        <div
          className="relative rounded-2xl overflow-hidden border transition-all duration-500 group-hover:scale-[1.01]"
          style={{
borderColor: "hsl(25 95% 55% / 0.15)",
            boxShadow: `
              0 8px 25px -5px hsl(25 95% 55% / 0.1),
              0 0 0 1px hsl(25 95% 55% / 0.05)
            `,
          }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </motion.div>
    );
  }

  // Desktop / Browser mockup
  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {/* Glow behind */}
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, hsl(25 95% 55% / 0.10), transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Browser frame */}
      <div
        className="relative rounded-2xl overflow-hidden border transition-all duration-500 group-hover:scale-[1.005]"
        style={{
          borderColor: "hsl(25 95% 55% / 0.15)",
          background:
            "linear-gradient(180deg, hsl(210 20% 12% / 0.95) 0%, hsl(210 20% 8% / 0.90) 100%)",
          boxShadow: `
            0 8px 30px -5px hsl(25 95% 55% / 0.1),
            0 0 0 1px hsl(25 95% 55% / 0.05)
          `,
        }}
      >
        {/* Top bar — browser dots */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{
            borderColor: "hsl(25 95% 55% / 0.08)",
            background: "hsl(210 20% 10% / 0.6)",
          }}
        >
          <div className="flex gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "hsl(0 60% 50% / 0.7)" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "hsl(45 70% 55% / 0.7)" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "hsl(130 50% 45% / 0.7)" }}
            />
          </div>

          {/* URL bar */}
          <div
            className="flex-1 ml-3 h-6 rounded-md flex items-center px-3"
            style={{
              background: "hsl(210 20% 8% / 0.6)",
              border: "1px solid hsl(25 95% 55% / 0.06)",
            }}
          >
            <span
              className="text-[10px] font-mono tracking-wide"
              style={{ color: "hsl(25 95% 55% / 0.4)" }}
            >
              tower.estrategos.online
            </span>
          </div>
        </div>

        {/* Screenshot */}
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>

      {/* Reflection */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, hsl(25 95% 55% / 0.03))",
          filter: "blur(12px)",
          transform: "translateY(100%)",
        }}
      />
    </motion.div>
  );
};

export default DeviceMockup;
