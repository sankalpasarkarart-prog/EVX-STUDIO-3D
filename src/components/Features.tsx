import { motion } from 'framer-motion';
import { PlayCircle, Scissors, CheckCircle, Clock, Users, Globe, DollarSign, Headphones } from 'lucide-react';

export default function Features() {
  const steps = [
    { icon: <PlayCircle className="w-8 h-8 text-amber-600" />, title: "1. Share your brief", desc: "Send us your raw footage and tell us your vision." },
    { icon: <Scissors className="w-8 h-8 text-orange-500" />, title: "2. We edit and create", desc: "Our expert team crafts your video with premium effects." },
    { icon: <CheckCircle className="w-8 h-8 text-amber-500" />, title: "3. Review and deliver", desc: "Get your polished video, ready to go viral." },
  ];

  const features = [
    { icon: <Clock />, title: "Fast Turnaround", desc: "Every time most projects are completed within 24 to 74 hours without compromising quality." },
    { icon: <Globe />, title: "Global Experience", desc: "We have worked with popular brands across the world, bringing diverse perspectives and international standards." },
    { icon: <DollarSign />, title: "Unbeatable Pricing", desc: "Plans starting from just $15. Premium quality at prices that make professional video editing accessible to everyone." },
    { icon: <Users />, title: "Dedicated Team", desc: "A team of 15+ highly-skilled video editors, graphic designers, and cinematographers dedicated to your vision." },
    { icon: <CheckCircle />, title: "Premium Quality", desc: "We ensure top-tier aesthetics, pacing, and retention-driven edits for maximum growth." },
    { icon: <Headphones />, title: "24/7 Support", desc: "We are always here to assist you, no matter the timezone or urgent request." },
  ];

  const slideInVar = {
    hidden: { opacity: 0, z: -100, y: 50, rotateX: 20 },
    visible: { opacity: 1, z: 0, y: 0, rotateX: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-24 relative z-10" id="why-us" style={{ perspective: 1000 }}>
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Stats */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInVar}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 pb-16 bg-amber-100/10 backdrop-blur-md border border-amber-200/30 shadow-2xl rounded-3xl p-10"
        >
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-heading font-black text-amber-600 mb-2 drop-shadow-sm">4</h3>
            <p className="text-brandDark font-bold tracking-wide uppercase text-sm font-heading">Years of Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-heading font-black text-amber-600 mb-2 drop-shadow-sm">15+</h3>
            <p className="text-brandDark font-bold tracking-wide uppercase text-sm font-heading">Team Members</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-heading font-black text-amber-600 mb-2 drop-shadow-sm">500+</h3>
            <p className="text-brandDark font-bold tracking-wide uppercase text-sm font-heading">Projects Delivered</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-heading font-black text-amber-600 mb-2 drop-shadow-sm">50+</h3>
            <p className="text-brandDark font-bold tracking-wide uppercase text-sm font-heading">Global Clients</p>
          </div>
        </motion.div>

        {/* How It Works */}
        <div className="mb-24">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInVar}
            className="text-3xl md:text-5xl font-heading font-black text-brandDark text-center mb-12 drop-shadow-sm"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, z: -50, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, z: 0, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-amber-100/10 backdrop-blur-md border border-amber-200/30 shadow-xl rounded-3xl p-8 hover:bg-amber-100/30 hover:border-amber-300/50 transition-all duration-300 group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/60 border border-amber-200/50 shadow-sm group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading text-brandDark mb-3">{step.title}</h3>
                <p className="text-slate-800 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Us Detailed */}
        <div>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInVar}
            className="text-3xl md:text-5xl font-heading font-black text-brandDark text-center mb-4 drop-shadow-sm"
          >
            Why Choose EVX Studio?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black font-medium text-sm md:text-base italic text-center max-w-2xl mx-auto mb-12 bg-white/30 backdrop-blur-sm border border-amber-200/50 p-3 rounded-xl shadow-sm"
          >
            "They say money can't buy time—but it can definitely pay us to save yours."
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 bg-amber-100/10 backdrop-blur-sm border border-amber-200/30 shadow-lg rounded-3xl hover:bg-amber-100/30 hover:border-amber-300/50 group transition-all duration-300"
              >
                <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform origin-left w-10 h-10">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-brandDark mb-2">{feat.title}</h3>
                <p className="text-slate-800 text-sm font-medium leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
