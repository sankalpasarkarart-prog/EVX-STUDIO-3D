import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import WhatsAppBtn from './WhatsAppBtn';

const data = [
  { month: 'Month 0', growth: 10 },
  { month: 'Month 1', growth: 25 },
  { month: 'Month 2', growth: 45 },
  { month: 'Month 3', growth: 70 }, // Mid-level
  { month: 'Month 4', growth: 110 },
  { month: 'Month 5', growth: 160 },
  { month: 'Month 6', growth: 220 }, // Top
];

export default function GraphSection() {
  const leftSlide = {
    hidden: { opacity: 0, x: -100, rotateY: -15, z: -50 },
    visible: { opacity: 1, x: 0, rotateY: 0, z: 0, transition: { duration: 1 } }
  };
  const rightSlide = {
    hidden: { opacity: 0, x: 100, rotateY: 15, z: -50 },
    visible: { opacity: 1, x: 0, rotateY: 0, z: 0, transition: { duration: 1 } }
  };

  return (
    <section className="py-24 relative z-10 border-y border-amber-200/20" style={{ perspective: 1200 }}>
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={leftSlide} className="lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-brandDark mb-4 md:mb-6 drop-shadow-sm leading-tight">
            Grow your business <span className="text-amber-600 font-accentItalic italic text-4xl sm:text-5xl md:text-7xl font-semibold relative top-1">30% faster</span> with us
          </h2>
          <p className="text-slate-800 font-medium text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            High-quality, retention-optimized videos are the secret to algorithm dominance. 
            By partnering with EVX Studio, you aren't just getting edits; you are investing in a proven growth strategy. 
            Watch your engagement, followers, and revenue multiply as we take your content to the top.
          </p>
          <WhatsAppBtn 
            text="Start Scaling Today"
            className="w-full sm:w-auto text-center inline-block px-6 py-3 md:px-8 md:py-4 bg-brandDark text-white font-bold font-heading uppercase tracking-wide text-xs md:text-sm rounded-full hover:bg-amber-600 transition-colors shadow-lg hover:scale-105 duration-300"
          />
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={rightSlide}
          className="lg:w-1/2 w-full h-[400px] bg-amber-100/10 backdrop-blur-md border border-amber-200/30 shadow-2xl rounded-3xl p-6 relative"
        >
          <h3 className="text-center text-slate-700 mb-4 font-heading font-bold text-sm uppercase tracking-widest">Projected Social Media Growth</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" stroke="#475569" tick={{fill: '#1e293b', fontWeight: 600}} />
              <YAxis stroke="#475569" tick={{fill: '#1e293b'}} hide />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(255, 251, 235, 0.9)', border: '1px solid rgba(253, 230, 138, 0.5)', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#d97706', fontWeight: 'bold' }}
              />
              <Line 
                type="monotone" 
                dataKey="growth" 
                stroke="#d97706" 
                strokeWidth={5} 
                dot={{ fill: '#fbbf24', r: 6, strokeWidth: 2, stroke: '#fff' }} 
                activeDot={{ r: 8, fill: '#f59e0b', stroke: '#fff', strokeWidth: 2 }} 
                animationDuration={2000}
              />
            </LineChart>
          </ResponsiveContainer>
          
          {/* Annotations */}
          <div className="absolute top-[45%] left-[50%] text-xs text-amber-700 font-bold bg-white/60 backdrop-blur-sm border border-amber-200/50 px-3 py-1.5 rounded-full hidden md:block shadow-md">
            Mid-Level (Month 3)
          </div>
          <div className="absolute top-[10%] right-[5%] text-xs text-white font-bold bg-amber-600 border border-amber-400 px-3 py-1.5 rounded-full shadow-[0_4px_15px_rgba(217,119,6,0.4)] hidden md:block">
            Peak Growth (Month 6)
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
