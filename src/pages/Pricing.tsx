import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { CreditCard, ShoppingCart, CheckCircle, Smartphone, Landmark, Bitcoin, DollarSign, Send, ShieldCheck, X, Check, MessageCircle } from 'lucide-react';

const paymentLogos = [
  { name: 'UPI', icon: <Smartphone className="w-8 h-8 mb-2" /> },
  { name: 'Bank Transfer', icon: <Landmark className="w-8 h-8 mb-2" /> },
  { name: 'Crypto', icon: <Bitcoin className="w-8 h-8 mb-2" /> },
  { name: 'PayPal', icon: <DollarSign className="w-8 h-8 mb-2" /> },
  { name: 'Wise', icon: <Send className="w-8 h-8 mb-2" /> },
  { name: 'NEFT', icon: <Landmark className="w-8 h-8 mb-2" /> },
  { name: 'IMPS', icon: <Smartphone className="w-8 h-8 mb-2" /> },
  { name: 'VISA', icon: <CreditCard className="w-8 h-8 mb-2" /> },
  { name: 'MasterCard', icon: <CreditCard className="w-8 h-8 mb-2" /> },
  { name: 'RuPay', icon: <ShieldCheck className="w-8 h-8 mb-2" /> },
];

const services = [
  { id: 1, name: 'Normal clean editing', price: 600 },
  { id: 2, name: 'Short motion graphics, engaging visuals, and standard motion graphics', price: 900 },
  { id: 3, name: 'Documentary style', price: 1100 },
  { id: 4, name: 'Realistic shorts', price: 1500 },
  { id: 5, name: 'Advanced motion graphics', price: 1700 },
];

export default function Order() {
  const [cart, setCart] = useState<number[]>([]);
  const [retainerCount, setRetainerCount] = useState(3);
  const [isRetainerInCart, setIsRetainerInCart] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(84); // Fallback
  const [showModal, setShowModal] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(res => res.json())
      .then(data => {
        if (data && data.rates && data.rates.INR) {
          setExchangeRate(data.rates.INR);
        }
      })
      .catch(err => console.error("Failed to fetch exchange rate", err));
  }, []);

  const retainerPrice = 5000 + (retainerCount - 3) * 1200;
  const retainerPriceUsd = (retainerPrice / exchangeRate).toFixed(2);
  const perVideoPrice = Math.round(retainerPrice / retainerCount);
  const perVideoPriceUsd = (perVideoPrice / exchangeRate).toFixed(2);

  const toggleCart = (id: number) => {
    if (cart.includes(id)) setCart(cart.filter(item => item !== id));
    else setCart([...cart, id]);
  };

  const getCartTotal = () => {
    const singleTotal = cart.reduce((total, id) => {
      const s = services.find(x => x.id === id);
      return total + (s ? s.price : 0);
    }, 0);
    return singleTotal + (isRetainerInCart ? retainerPrice : 0);
  };

  const handleCheckout = () => {
    const selectedServices = cart.map(id => services.find(s => s.id === id)).filter(Boolean);
    
    let message = `Hello EVX Studio! I would like to place an order:%0A%0A`;
    
    if (selectedServices.length > 0) {
      message += `*Selected Services:*%0A`;
      selectedServices.forEach(s => {
        if (s) message += `- ${s.name} (₹${s.price} / $${(s.price / exchangeRate).toFixed(2)})%0A`;
      });
      message += `%0A`;
    }
    
    if (isRetainerInCart) {
      message += `*Monthly Retainer Package:*%0A`;
      message += `- ${retainerCount} videos/month (₹${retainerPrice} / $${retainerPriceUsd})%0A%0A`;
    }
    
    const total = getCartTotal();
    const totalUsd = (total / exchangeRate).toFixed(2);
    message += `*Total Estimated Price:* ₹${total} / $${totalUsd}%0A%0A`;
    message += `Looking forward to working with you!`;

    window.open(`https://wa.me/919332128501?text=${message}`, "_blank");
  };

  const barRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: barRef,
    offset: ["start end", "end start"]
  });
  
  const logoX = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 min-h-screen relative z-10" style={{ perspective: 1000 }}>
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1, margin: "-100px" }}
        className="mb-24 text-center overflow-hidden"
        ref={barRef}
      >
        <h1 className="text-4xl md:text-6xl font-heading font-black text-brandDark mb-6 drop-shadow-sm leading-tight">
          Pricing & <span className="text-amber-600 font-accentItalic italic text-6xl md:text-8xl font-semibold relative top-2">Order</span>
        </h1>
        <p className="text-slate-800 font-accentItalic italic max-w-2xl mx-auto text-xl mb-12 drop-shadow-sm">
          Premium post-production tailored to your scale. We support a global range of payment options.
        </p>
        
        <div className="w-full max-w-6xl mx-auto bg-amber-100/10 backdrop-blur-md border border-amber-200/30 rounded-full py-6 px-12 shadow-2xl overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/20 to-transparent z-10 rounded-l-full pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/20 to-transparent z-10 rounded-r-full pointer-events-none"></div>
          
          <motion.div 
            style={{ x: logoX }} 
            className="flex items-center gap-12 w-max mx-auto text-brandDark hover:text-amber-600 transition-colors duration-500"
          >
            {paymentLogos.map((logo, i) => (
              <div key={i} className="flex flex-col items-center justify-center w-24">
                {logo.icon}
                <span className="font-heading font-bold text-[10px] uppercase tracking-widest whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-heading font-black text-brandDark mb-8">Single Services</h2>
          {services.map((service, i) => {
            const usd = (service.price / exchangeRate).toFixed(2);
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/40 backdrop-blur-md border border-amber-200/30 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-heading text-brandDark mb-2">{service.name}</h3>
                  <p className="text-amber-700 font-bold font-heading text-2xl">
                    ₹{service.price} <span className="text-sm text-slate-500 font-medium">/ ${usd}</span>
                  </p>
                </div>
                <button 
                  onClick={() => toggleCart(service.id)}
                  className={`px-6 py-3 rounded-full font-bold font-heading uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-2 shadow-md ${
                    cart.includes(service.id) 
                    ? 'bg-amber-100 text-amber-700 border border-amber-300 hover:bg-amber-200' 
                    : 'bg-brandDark text-white hover:bg-amber-600'
                  }`}
                >
                  {cart.includes(service.id) ? <><CheckCircle className="w-4 h-4" /> Added</> : <><ShoppingCart className="w-4 h-4" /> Add to Cart</>}
                </button>
              </motion.div>
            )
          })}
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="bg-amber-100/10 backdrop-blur-md border border-amber-200/50 rounded-3xl p-8 mt-12 shadow-2xl"
          >
            <h2 className="text-3xl font-heading font-black text-brandDark mb-4">Monthly Retainer Package</h2>
            <p className="text-slate-800 font-medium mb-8">
              Scale your content consistently. <strong>Minimum 3 videos, Maximum 50 videos.</strong>
            </p>
            
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4 flex-wrap gap-4">
                <span className="text-2xl font-bold font-heading text-brandDark">{retainerCount} Videos / Month</span>
                <span className="text-3xl font-black font-heading text-amber-600">
                  ₹{retainerPrice} <span className="text-lg text-slate-600 font-bold">/ ${retainerPriceUsd}</span>
                </span>
              </div>
              <input 
                type="range" 
                min="3" 
                max="50" 
                value={retainerCount}
                onChange={(e) => setRetainerCount(parseInt(e.target.value))}
                className="w-full h-3 bg-white/60 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-xs text-slate-600 font-bold font-heading uppercase tracking-widest mt-2">
                <span>3 Videos (₹5000 / ${ (5000/exchangeRate).toFixed(2) })</span>
                <span>+₹1200 (${(1200/exchangeRate).toFixed(2)}) / extra</span>
                <span>50 Videos</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-amber-200/50 pt-8 mt-8">
              <div>
                <span className="font-bold text-slate-800 block mb-1">Per Video Cost:</span>
                <span className="font-black text-brandDark text-xl">
                  ₹{perVideoPrice} <span className="text-base text-slate-600">/ ${perVideoPriceUsd}</span>
                </span>
              </div>
              
              <button 
                onClick={() => setIsRetainerInCart(!isRetainerInCart)}
                className={`px-8 py-4 rounded-full font-bold font-heading uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full md:w-auto ${
                  isRetainerInCart 
                  ? 'bg-amber-100 text-amber-700 border border-amber-300 hover:bg-amber-200' 
                  : 'bg-brandDark text-white hover:bg-amber-600'
                }`}
              >
                {isRetainerInCart ? <><CheckCircle className="w-5 h-5" /> Retainer Added</> : <><ShoppingCart className="w-5 h-5" /> Add Retainer Package</>}
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="sticky top-32 bg-amber-100/20 backdrop-blur-xl border border-amber-200/50 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-heading font-black text-brandDark mb-6 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-amber-600" /> Your Order
            </h3>
            
            <div className="space-y-4 mb-6 border-b border-amber-200/30 pb-6">
              {cart.map(id => {
                const s = services.find(x => x.id === id);
                if (!s) return null;
                const usd = (s.price / exchangeRate).toFixed(2);
                return (
                  <div key={id} className="flex justify-between items-start text-sm font-bold text-slate-800">
                    <span className="line-clamp-2 pr-4">{s.name}</span>
                    <div className="text-right whitespace-nowrap">
                      <div className="text-brandDark">₹{s.price}</div>
                      <div className="text-slate-500 text-xs">${usd}</div>
                    </div>
                  </div>
                );
              })}
              {cart.length === 0 && !isRetainerInCart && <p className="text-sm text-slate-500 font-medium italic">Your cart is empty.</p>}
            </div>
            
            {isRetainerInCart && (
              <div className="mb-8 border-b border-amber-200/30 pb-6">
                <p className="text-xs text-amber-700 font-bold font-heading uppercase tracking-widest mb-2">Retainer Package</p>
                <div className="flex justify-between items-start text-sm font-bold text-slate-800">
                  <span>{retainerCount} Videos</span>
                  <div className="text-right">
                    <div className="text-brandDark font-black">₹{retainerPrice}</div>
                    <div className="text-slate-500 text-xs">${retainerPriceUsd}</div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-end mb-8">
              <span className="text-lg font-bold text-brandDark">Total:</span>
              <div className="text-right">
                <div className="text-4xl font-black font-heading text-amber-600">₹{getCartTotal()}</div>
                <div className="text-lg font-bold text-slate-600">${(getCartTotal() / exchangeRate).toFixed(2)}</div>
              </div>
            </div>
            
            <button 
              onClick={() => setShowModal(true)}
              disabled={cart.length === 0 && !isRetainerInCart}
              className={`w-full py-4 font-bold font-heading uppercase tracking-widest rounded-full transition-all shadow-xl flex justify-center items-center gap-2 ${
                cart.length === 0 && !isRetainerInCart 
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed opacity-70' 
                : 'bg-[#25D366] text-white hover:bg-[#128C7E] hover:scale-105'
              }`}
            >
              Checkout on WhatsApp
            </button>
            
            <p className="text-xs font-accentItalic italic text-slate-600 mt-6 text-center leading-relaxed">
              *This is only the starting price. The main pricing and the original pricing may vary on the complexity of the work.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Checkout Modal */}
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
                  I have read and agree to the <a href="/terms" target="_blank" rel="noreferrer" className="text-amber-600 hover:text-amber-700 transition-colors underline underline-offset-4">Terms and Conditions</a>
                </span>
              </label>

              <button 
                onClick={handleCheckout}
                disabled={!agreed}
                className={`w-full py-4 rounded-full font-bold font-heading uppercase tracking-widest transition-all duration-300 text-sm ${agreed ? 'bg-[#25D366] text-white shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:bg-[#128C7E] hover:scale-105' : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-200'}`}
              >
                Proceed to WhatsApp
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

