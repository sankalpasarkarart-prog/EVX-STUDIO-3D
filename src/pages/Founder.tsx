import { motion } from 'framer-motion';
import { Palette, Video, Users, Code } from 'lucide-react';

export default function Founder() {
  const slideInVar = {
    hidden: { opacity: 0, scale: 0.9, y: 50, rotateX: 15 },
    visible: { opacity: 1, scale: 1, y: 0, rotateX: 0, transition: { duration: 1 } }
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 min-h-screen relative z-10" style={{ perspective: 1000 }}>
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none -z-10"></div>
      
      <motion.div 
        initial="hidden" animate="visible" variants={slideInVar}
        className="bg-amber-100/10 backdrop-blur-md border border-amber-200/30 rounded-3xl shadow-2xl p-8 md:p-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center"
      >
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-slate-800">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-brandDark mb-2 leading-tight">
              Meet the <span className="text-amber-600 font-accentItalic italic">Founder</span>
            </h1>
            <p className="text-slate-500 font-medium font-heading uppercase tracking-widest">Eshan (Sankalpa Sarkar)</p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I am a dedicated watercolor artist with over 13 years of experience in painting and sketching. My deep roots in traditional art—spanning watercolors, pencil sketches, oils, acrylics, and pastels—have fundamentally shaped my understanding of design, composition, and aesthetics. This lifelong artistic journey has refined my visual taste and trained my eye for meticulous detail.
            </p>
            <p>
              My transition into the digital world began on YouTube, where I started recording and uploading videos of my own painting process. Editing those early videos sparked a deep passion for video production and motion graphics. Today, I am a tech enthusiast with an artist's soul, seamlessly blending technical expertise with a highly creative vision.
            </p>
            <p>
              Based in West Bengal, India, I personally designed and built <strong>evxstudio.in</strong> from the ground up to bring high-end post-production to creators and brands worldwide. Currently, I lead and mentor a talented team of over 15 video editors. I personally guide our creative process to ensure every single video we produce is crafted to perfection before it reaches you.
            </p>
          </div>
        </div>

        {/* Visual / Decorative Sidebar */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-white/40 backdrop-blur-md border border-amber-200/50 p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:scale-105 transition-transform">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><Palette className="w-6 h-6" /></div>
            <div>
              <h3 className="font-bold text-brandDark font-heading tracking-wide">13+ Years</h3>
              <p className="text-xs text-slate-600 font-medium">Fine Arts & Design</p>
            </div>
          </div>
          
          <div className="bg-white/40 backdrop-blur-md border border-amber-200/50 p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:scale-105 transition-transform">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><Video className="w-6 h-6" /></div>
            <div>
              <h3 className="font-bold text-brandDark font-heading tracking-wide">Motion Graphics</h3>
              <p className="text-xs text-slate-600 font-medium">Professional Video Editing</p>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-md border border-amber-200/50 p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:scale-105 transition-transform">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><Users className="w-6 h-6" /></div>
            <div>
              <h3 className="font-bold text-brandDark font-heading tracking-wide">Team Leader</h3>
              <p className="text-xs text-slate-600 font-medium">Directing 15+ Editors</p>
            </div>
          </div>
          
          <div className="bg-brandDark text-white border border-amber-200/20 p-6 rounded-2xl shadow-xl flex items-center gap-4 mt-4 hover:scale-105 transition-transform">
            <div className="bg-white/10 p-3 rounded-full text-amber-400"><Code className="w-6 h-6" /></div>
            <div>
              <h3 className="font-bold font-heading tracking-wide">Tech Enthusiast</h3>
              <p className="text-xs text-slate-300 font-medium">Creator of EVX Studio</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
