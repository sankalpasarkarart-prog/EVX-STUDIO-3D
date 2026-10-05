import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Scene from './Scene';
import WhatsAppBtn from './WhatsAppBtn';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center pt-24 pb-32">
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Content with 3D sliding animation */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, z: -100, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, z: 0, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center w-full"
          style={{ transformPerspective: 1000 }}
        >
          <h1 className="sr-only">Best video editing agency and company in India - EVX Studio</h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-slate-800 font-heading font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm drop-shadow-sm"
          >
            Trusted by 50+ Global Brands
          </motion.h2>
          
          <div className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-brandDark leading-[1] mb-6 drop-shadow-md">
            EVX STUDIO
          </div>
          
          <p className="text-slate-900 text-lg md:text-xl lg:text-2xl max-w-3xl font-medium leading-relaxed mb-6 drop-shadow-sm">
            The top video editing and post-production company. We deliver YouTube shorts, corporate videos, SaaS animation, and more at the most competitive rates in the industry.
          </p>
          
          <p className="text-brandDark font-heading font-black tracking-widest uppercase text-xl md:text-3xl mb-8 leading-snug drop-shadow-md">
            No need to stress, let EVX handle the mess.
          </p>
          
          <div className="flex flex-col items-center text-slate-800 font-bold text-sm md:text-base opacity-90 mb-10 max-w-2xl bg-white/20 backdrop-blur-md border border-amber-200/50 p-4 rounded-xl shadow-sm">
            <p>We are among the top 1% in India. The #1 video editing agency in India.</p>
            <p className="mt-1 font-accentItalic italic text-amber-700">"Who provides this quality of work in such price?"</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 items-center mt-4 mb-12"
          >
            <WhatsAppBtn 
              text="Get Free Consultation" 
              className="px-8 py-4 bg-brandDark text-white font-bold rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-xl font-heading tracking-wide uppercase text-sm"
            />
            <a href="/portfolio" className="px-8 py-4 bg-transparent border-2 border-brandDark text-brandDark font-bold rounded-full hover:bg-brandDark hover:text-white transition-all duration-300 shadow-lg font-heading tracking-wide uppercase text-sm">
              View Portfolio
            </a>
            <a href="/pricing" className="px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-brandDark transition-all duration-300 shadow-lg font-heading tracking-wide uppercase text-sm">
              View Pricing
            </a>
          </motion.div>
          
          <span className="text-brandDark font-accentItalic italic text-2xl font-bold bg-white/40 px-6 py-2 rounded-full backdrop-blur-md">
            Plans from $15
          </span>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-brandDark uppercase tracking-widest font-heading font-bold">Scroll</span>
        <div className="w-[2px] h-10 bg-gradient-to-b from-brandDark to-transparent"></div>
      </motion.div>
    </section>
  );
}
