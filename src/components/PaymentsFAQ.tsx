import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "What makes EVX Studio the best video editing and post-production company?", a: "Our dedicated team of professionals, global experience with 50+ brands, premium aesthetics, and our unbeatable pricing set us apart as industry leaders." },
  { q: "How much does video editing cost at your video editing and post-production company?", a: "Our plans start from just $15. We also offer a first-time trial for $10 per short and $15 per long-form video." },
  { q: "Is EVX Studio the cheapest video editing and post-production company in India?", a: "We provide the most competitive rates in the industry while maintaining high-end premium quality." },
  { q: "Who is the best video editor in India for YouTube content?", a: "EVX Studio houses a team of the most highly-skilled video editors specializing in YouTube short-form and long-form content, optimized for retention and growth." },
  { q: "What types of video editing services does EVX Studio offer?", a: "We offer Music Video, Corporate Video, Real Estate Ads, YouTube Shorts/Longs, Educational/Informational Shorts, SaaS Animation, Graphic Design, Ad Campaigns, and Thumbnail Design." },
  { q: "How fast can you deliver edited videos?", a: "Every time most projects are completed within 24 to 74 hours without compromising quality." },
  { q: "Do you offer a refund if I am not satisfied?", a: "Yes, we have a 100% Money Back Guarantee if the project is undelivered or does not meet quality standards." },
  { q: "How do I hire a video editor from EVX Studio?", a: "You can click the WhatsApp button or email us to share your brief. We will immediately set up a consultation and begin your project." },
];

export default function PaymentsFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const slideUp = {
    hidden: { opacity: 0, y: 50, rotateX: 10 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-24 relative z-10" style={{ perspective: 1000 }}>
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        
        {/* Payments */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={slideUp} className="mb-20 text-center bg-amber-100/10 backdrop-blur-md border border-amber-200/30 rounded-3xl p-8 shadow-xl">
          <h3 className="text-sm font-heading font-bold text-amber-700 uppercase tracking-widest mb-6">We Accept</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-brandDark font-black">
            {["PayPal", "Wise", "Visa", "Mastercard", "RuPay", "UPI", "NEFT", "Google Pay", "Crypto"].map(payment => (
              <span key={payment} className="px-6 py-3 bg-white/60 backdrop-blur-sm border border-amber-200/50 rounded-xl hover:border-amber-400 transition-colors cursor-default shadow-sm">{payment}</span>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={slideUp}>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-brandDark text-center mb-12 drop-shadow-sm">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-amber-100/10 backdrop-blur-md border border-amber-200/30 overflow-hidden rounded-2xl shadow-lg">
                <button 
                  className="w-full px-8 py-6 text-left flex justify-between items-center text-brandDark hover:text-amber-600 transition-colors focus:outline-none bg-white/30"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-bold pr-4 text-lg font-heading tracking-wide">{faq.q}</span>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform ${open === i ? 'rotate-180 text-amber-600' : 'text-amber-700/50'}`} />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white/40"
                    >
                      <div className="px-8 pb-6 pt-2 text-slate-800 font-medium leading-relaxed border-t border-amber-200/30">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
