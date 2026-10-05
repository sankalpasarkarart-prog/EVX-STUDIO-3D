import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Guarantee() {
  const slideInVar = {
    hidden: { opacity: 0, scale: 0.9, y: 50, rotateX: 15 },
    visible: { opacity: 1, scale: 1, y: 0, rotateX: 0, transition: { duration: 1 } }
  };

  return (
    <section className="py-20 relative z-10" style={{ perspective: 1000 }}>
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none border-y border-amber-200/20"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1, margin: "-50px" }} variants={slideInVar}
          className="bg-amber-100/10 backdrop-blur-md border border-amber-200/30 shadow-2xl rounded-3xl text-center relative overflow-hidden py-16 px-8 max-w-5xl mx-auto"
        >
          {/* Decorative background elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

          <h2 className="text-3xl md:text-5xl font-heading font-black text-brandDark mb-6 relative z-10 drop-shadow-sm leading-tight">
            100% Money Back <span className="text-amber-600 font-accentItalic italic text-5xl md:text-7xl font-semibold relative top-1">Guarantee</span>
          </h2>
          
          <p className="text-slate-800 font-medium text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed relative z-10">
            We stand behind our work. If your project is undelivered or does not meet quality standards, you will receive a full 100% refund, no questions asked. Your satisfaction is our top priority.
          </p>

          <p className="text-xs text-amber-700 font-bold uppercase font-heading tracking-widest mt-8 relative z-10">
            <Link to="/terms" className="hover:text-amber-500 transition-colors underline decoration-amber-300 underline-offset-4">Terms and Condition Applied</Link>. The terms and conditions are available at the bottom of the website.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

