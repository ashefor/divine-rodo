"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Urban Exploration",
    category: "Photography",
    image: "/placeholder-1.jpg",
  },
  {
    id: 2,
    title: "Brand Campaign",
    category: "Video",
    image: "/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "Event Coverage",
    category: "Hybrid",
    image: "/placeholder-3.jpg",
  },
  {
    id: 4,
    title: "Product Showcase",
    category: "Photography",
    image: "/placeholder-4.jpg",
  },
];

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A showcase of our recent mobile content creation projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  index,
  scrollYProgress,
}: {
  item: typeof portfolioItems[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardScrollProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(cardScrollProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(cardScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ scale, opacity }}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Placeholder background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />
      
      {/* Content */}
      <motion.div
        className="absolute inset-0 p-8 flex flex-col justify-end z-20"
        initial={false}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm mb-3">
            {item.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {item.title}
          </h3>
          <p className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View project details →
          </p>
        </motion.div>
      </motion.div>

      {/* Hover effect */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]"
      />
    </motion.div>
  );
}
