import React, { useState } from 'react';
import { MessageCircle, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Props {
  text?: string | React.ReactNode;
  className?: string;
  icon?: boolean;
}

export default function WhatsAppBtn({ text = "Let's Talk", className = "", icon = false }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleProceed = () => {
    if (agreed) {
      window.open("https://wa.me/919332128501", "_blank");
      setShowModal(false);
      setAgreed(false);
    }
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {icon && <MessageCircle className="w-5 h-5" />}
        {text}
      </button>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ perspective: 1000 }}>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-amber-900/20 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }} 
              exit={{ opacity: 0, scale: 0.8, y: 50, rotateX: -20 }} 
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-amber-50/90 backdrop-blur-xl border border-amber-200/50 shadow-2xl p-8 max-w-md w-full rounded-3xl relative z-10 flex flex-col items-center text-center"
            >
              <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-slate-400 hover:text-amber-600 transition-colors bg-white/60 border border-amber-200 p-2 rounded-full shadow-sm hover:scale-110">
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-200/40 to-orange-200/40 border border-amber-300/50 flex items-center justify-center mb-6 text-amber-600 shadow-[0_4px_20px_rgba(245,158,11,0.2)]">
                <MessageCircle className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-heading font-black text-brandDark mb-3">Almost there!</h3>
              <p className="text-slate-700 font-medium mb-8 leading-relaxed">
                You must agree to the terms and conditions before proceeding further.
              </p>
              
              <label className="flex items-center gap-4 cursor-pointer mb-8 text-left w-full p-4 bg-white/60 border border-amber-200 rounded-2xl hover:border-amber-400 transition-all group shadow-sm hover:shadow-md">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${agreed ? 'bg-amber-500 border-amber-500 shadow-[0_4px_10px_rgba(245,158,11,0.4)]' : 'border border-slate-300 bg-white/80 group-hover:border-amber-400'}`}>
                  {agreed && <Check className="w-4 h-4 text-white" />}
                </div>
                <input type="checkbox" className="hidden" checked={agreed} onChange={() => setAgreed(!agreed)} />
                <span className="text-sm text-slate-800 font-bold select-none">
                  I have read and agree to the <Link to="/terms" onClick={() => setShowModal(false)} className="text-amber-600 hover:text-amber-700 transition-colors underline underline-offset-4">Terms and Conditions</Link>
                </span>
              </label>

              <button 
                onClick={handleProceed}
                disabled={!agreed}
                className={`w-full py-4 rounded-full font-bold font-heading uppercase tracking-widest transition-all duration-300 text-sm ${agreed ? 'bg-[#25D366] text-white shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:bg-[#128C7E] hover:scale-105' : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-200'}`}
              >
                Proceed to WhatsApp
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

