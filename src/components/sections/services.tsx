"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Camera, Video, Film, Sparkles } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Mobile Photography",
    description: "Professional-grade photography captured entirely on mobile devices. Perfect compositions, expert editing.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Cinematic mobile videography for brands, events, and social media. High-quality content that engages.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Film,
    title: "Content Editing",
    description: "Transform raw footage into polished content. Color grading, effects, and storytelling that captivates.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Social Media Content",
    description: "Scroll-stopping content optimized for Instagram, TikTok, and beyond. Built for engagement and growth.",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Background decoration */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What We{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Create
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Specializing in mobile-first content creation that delivers impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700">
                  {/* Gradient background on hover */}
                  <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 mb-6 bg-gradient-to-br ${service.gradient} rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
