import { motion } from 'framer-motion';
import WhatsAppBtn from '../components/WhatsAppBtn';

export default function Career() {
  const slideInVar = {
    hidden: { opacity: 0, scale: 0.9, y: 50, rotateX: 15 },
    visible: { opacity: 1, scale: 1, y: 0, rotateX: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 min-h-screen flex flex-col items-center text-center relative z-10" style={{ perspective: 1000 }}>
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none -z-10"></div>
      
      <motion.div initial="hidden" animate="visible" variants={slideInVar} className="w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-heading font-black text-brandDark mb-6 drop-shadow-sm leading-tight">Join Our <span className="text-amber-600 font-accentItalic italic text-6xl md:text-8xl font-semibold relative top-2">Team</span></h1>
        <p className="text-slate-800 font-medium max-w-2xl text-lg mb-12">
          We are always looking for passionate video editors, motion graphics experts, and graphic designers to join EVX Studio.
        </p>
        
        <div className="bg-amber-100/10 backdrop-blur-md border border-amber-200/30 shadow-2xl rounded-3xl p-8 md:p-12 max-w-3xl w-full text-left">
          <h2 className="text-2xl font-heading font-black text-brandDark mb-4">Eligibility Criteria</h2>
          <p className="text-slate-800 font-medium mb-6">
            You must be proficient in one or more of the following industry-standard software:
          </p>
          <ul className="list-disc list-inside text-brandDark space-y-3 mb-8 font-bold bg-white/40 border border-amber-200/50 rounded-2xl p-6 shadow-sm">
            <li>Adobe Premiere Pro</li>
            <li>Adobe After Effects</li>
            <li>Adobe Photoshop</li>
            <li>DaVinci Resolve</li>
            <li>Final Cut Pro</li>
          </ul>
          <p className="text-sm text-brandDark font-bold mb-8 bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl inline-block shadow-sm">
            *Note: We do not work on CapCut or any mobile video editing software.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-t border-amber-200/30 pt-8">
            <div>
              <h3 className="text-lg font-bold font-heading text-brandDark mb-2">Contact Details</h3>
              <p className="text-slate-800 font-medium">Email: <a href="mailto:sankalpa@evxstudio.in" className="text-amber-600 hover:underline font-bold">sankalpa@evxstudio.in</a></p>
              <p className="text-slate-800 font-medium">Phone: +91 93321 28501</p>
            </div>
            
            <WhatsAppBtn 
              text="Apply via WhatsApp"
              className="px-8 py-4 bg-[#25D366] text-white font-bold font-heading uppercase tracking-wider rounded-full hover:bg-[#128C7E] transition-colors flex items-center gap-2 shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
