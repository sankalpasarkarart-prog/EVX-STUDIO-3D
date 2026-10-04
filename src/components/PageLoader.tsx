import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 800ms loading animation
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, pointerEvents: "auto" }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brandDark/90 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut", 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-widest drop-shadow-lg">
              EVX<span className="text-amber-500">.</span>
            </h1>
            <div className="h-[2px] w-0 bg-amber-500 mt-4 rounded-full"
                 style={{ animation: "expandWidth 0.8s ease-in-out forwards" }} />
          </motion.div>
          <style>{`
            @keyframes expandWidth {
              0% { width: 0%; opacity: 0; }
              50% { opacity: 1; }
              100% { width: 100%; opacity: 0; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
