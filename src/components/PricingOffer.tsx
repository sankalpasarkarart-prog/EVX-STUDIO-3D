import { motion } from 'framer-motion';

export default function PricingOffer() {
  const slideInVar = {
    hidden: { opacity: 0, z: -100, y: 50, rotateX: -20 },
    visible: { opacity: 1, z: 0, y: 0, rotateX: 0, transition: { duration: 1 } }
  };

  return (
    <section className="py-20 relative z-10 border-y border-amber-200/20" id="pricing" style={{ perspective: 1000 }}>
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none"></div>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1, margin: "-100px" }} variants={slideInVar}
        className="container mx-auto px-6 lg:px-12 text-center relative z-10 bg-amber-100/10 backdrop-blur-md border border-amber-200/30 shadow-2xl rounded-3xl p-12 max-w-4xl"
      >
        <div className="inline-block bg-white/50 backdrop-blur-sm border border-amber-300/50 px-6 py-2 rounded-full mb-6 shadow-sm">
          <span className="text-amber-700 font-bold font-heading tracking-widest uppercase text-sm">Special Offer</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-heading font-black text-brandDark mb-6 drop-shadow-sm leading-tight">
          Try our services for the first time at a <br className="hidden md:block" />
          <span className="text-amber-600 font-heading font-black text-5xl md:text-7xl">cost lower than a pizza.</span>
        </h2>
        
        <p className="text-slate-800 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Experience premium video editing without breaking the bank. We guarantee jaw-dropping quality that will skyrocket your engagement. Test our skills, you won't regret it.
        </p>

        <div className="bg-white/60 backdrop-blur-md border border-amber-200/50 shadow-xl rounded-2xl inline-block p-8 hover:scale-105 hover:bg-white/80 transition-all duration-500">
          <p className="text-brandDark text-xl font-bold mb-2">
            Try for <span className="text-amber-600 font-black font-heading text-4xl">$10</span> per short and <span className="text-amber-600 font-black font-heading text-4xl">$15</span> per long-form video.
          </p>
          <p className="text-slate-600 text-sm font-medium mt-4 border-t border-amber-200/50 pt-4">
            *Applicable only for first-time try.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
