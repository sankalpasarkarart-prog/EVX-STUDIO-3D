import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const servicesList = [
  "Music Video", 
  "Corporate Video", 
  "Real Estate Ads", 
  "YouTube Short Form", 
  "YouTube Long Form", 
  "Educational Shorts", 
  "Informational Shorts", 
  "SaaS Animated Content", 
  "Graphic Design",
  "Ad Campaign",
  "Thumbnail Design"
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Slowed down scrolling so it's easier to read
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-600, 0]);

  return (
    <section ref={containerRef} className="py-24 relative z-10 overflow-hidden" id="services">
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 mb-20 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-heading font-black text-brandDark mb-6 drop-shadow-sm leading-tight">
          Our <span className="text-amber-600 font-accentItalic italic text-6xl md:text-8xl font-semibold relative top-2">Services</span>
        </h2>
        <p className="text-slate-800 font-medium text-lg max-w-2xl mx-auto">
          We offer a comprehensive suite of post-production solutions tailored to elevate your brand's presence across all platforms.
        </p>
      </div>

      <div className="flex flex-col gap-10 rotate-[-2deg] scale-110 origin-center py-10 relative z-10">
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap gap-12">
          {[...servicesList, ...servicesList].map((service, i) => (
            <h3 
              key={i} 
              className="text-5xl md:text-7xl font-heading font-black text-slate-800/90 drop-shadow-sm hover:text-amber-500 hover:scale-110 hover:drop-shadow-lg transition-all duration-300 cursor-default select-none"
            >
              {service}
            </h3>
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap gap-12">
          {[...servicesList, ...servicesList].reverse().map((service, i) => (
            <h3 
              key={i} 
              className="text-5xl md:text-7xl font-heading font-black text-slate-800/90 drop-shadow-sm hover:text-amber-500 hover:scale-110 hover:drop-shadow-lg transition-all duration-300 cursor-default select-none"
            >
              {service}
            </h3>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
