import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import WhatsAppBtn from './WhatsAppBtn';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 px-6 py-6 lg:px-12 flex justify-between items-center bg-transparent backdrop-blur-sm bg-white/10 border-b border-amber-200/20 shadow-sm"
      >
        <Link to="/" onClick={closeMenu} className="text-3xl font-heading font-black text-brandDark tracking-tighter hover:text-amber-600 transition-colors drop-shadow-md">
          EVX<span className="text-amber-600">.</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-bold font-heading uppercase tracking-widest text-brandDark drop-shadow-sm">
          <Link to="/portfolio" className="hover:text-amber-600 transition-colors">Portfolio</Link>
          <button onClick={() => scrollTo('services')} className="hover:text-amber-600 transition-colors">Services</button>
          <Link to="/pricing" className="hover:text-amber-600 transition-colors">Pricing</Link>
          <Link to="/career" className="hover:text-amber-600 transition-colors">Career</Link>
        </div>
        
        <div className="hidden md:block">
          <WhatsAppBtn 
            text="Let's Talk" 
            className="px-6 py-2 bg-amber-600 text-white text-sm font-bold font-heading uppercase tracking-wider rounded-full hover:scale-105 transition-transform hover:bg-amber-700 shadow-lg" 
          />
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-brandDark hover:text-amber-600 transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </motion.nav>

      {/* Mobile Side Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-brandDark/40 backdrop-blur-sm z-[100] md:hidden"
              onClick={closeMenu}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-amber-50/95 backdrop-blur-xl z-[101] shadow-2xl flex flex-col md:hidden border-l border-amber-200/50"
            >
              <div className="flex justify-between items-center p-6 border-b border-amber-200/30">
                <Link to="/" onClick={closeMenu} className="text-3xl font-heading font-black text-brandDark tracking-tighter">
                  EVX<span className="text-amber-600">.</span>
                </Link>
                <button onClick={closeMenu} className="text-slate-500 hover:text-amber-600 transition-colors p-2 bg-white/60 rounded-full border border-amber-200 shadow-sm">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
                <Link to="/portfolio" onClick={closeMenu} className="text-xl font-heading font-black text-brandDark hover:text-amber-600 transition-colors block">Portfolio</Link>
                <button onClick={() => scrollTo('services')} className="text-xl font-heading font-black text-brandDark hover:text-amber-600 transition-colors text-left w-full block">Services</button>
                <Link to="/pricing" onClick={closeMenu} className="text-xl font-heading font-black text-brandDark hover:text-amber-600 transition-colors block">Pricing & Order</Link>
                <button onClick={() => scrollTo('why-us')} className="text-xl font-heading font-black text-brandDark hover:text-amber-600 transition-colors text-left w-full block">Why Us</button>
                <Link to="/career" onClick={closeMenu} className="text-xl font-heading font-black text-brandDark hover:text-amber-600 transition-colors block">Career</Link>
                <Link to="/terms" onClick={closeMenu} className="text-xl font-heading font-black text-brandDark hover:text-amber-600 transition-colors block">Terms and Conditions</Link>
                <button onClick={() => scrollTo('contact')} className="text-xl font-heading font-black text-brandDark hover:text-amber-600 transition-colors text-left w-full block">Connect</button>
                <a href="/sitemap.xml" onClick={closeMenu} target="_blank" rel="noreferrer" className="text-xl font-heading font-black text-brandDark hover:text-amber-600 transition-colors block">Sitemap</a>
                
                <div className="mt-auto pt-8 border-t border-amber-200/30">
                  <WhatsAppBtn 
                    text="Chat on WhatsApp" 
                    icon={true}
                    className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-[#25D366] text-white font-bold font-heading uppercase tracking-wider rounded-full shadow-lg" 
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

