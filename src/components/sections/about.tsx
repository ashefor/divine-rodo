"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap, Heart } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "500+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
  },
  {
    icon: Zap,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Client Satisfaction",
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Background decorations */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Rodo Lens
              </span>
            </h2>
            
            <div className="space-y-4 text-zinc-300 text-lg leading-relaxed mb-8">
              <p>
                We&apos;re a team of passionate mobile content creators who believe that
                the best camera is the one you have with you. Our mission is to
                prove that professional-grade content doesn&apos;t require expensive
                equipment—just creativity, skill, and vision.
              </p>
              
              <p>
                From stunning mobile photography to cinematic videography, we
                specialize in creating content that resonates with your audience
                and tells your unique story. Every frame is crafted with attention
                to detail and artistic excellence.
              </p>
              
              <p>
                Whether you&apos;re a brand looking to elevate your social media
                presence or an individual wanting to capture life&apos;s precious
                moments, we bring professional expertise to every project.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="p-8 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl text-center transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/70">
                    <div className="inline-flex p-3 mb-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    
                    <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    
                    <div className="text-zinc-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
