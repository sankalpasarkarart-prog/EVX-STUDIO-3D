import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import WhatsAppBtn from './WhatsAppBtn';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-8 right-8 z-[90]">
      {/* Outer Glow Pulse Animation */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#25D366] rounded-full blur-xl pointer-events-none"
      />
      
      {/* The Button */}
      <div className="relative">
        <WhatsAppBtn 
          text={<MessageCircle className="w-8 h-8 text-white" />}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.5)] hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 group"
        />
        
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white/90 backdrop-blur-sm text-brandDark font-bold text-sm rounded-xl shadow-lg border border-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat with us
        </div>
      </div>
    </div>
  );
}
