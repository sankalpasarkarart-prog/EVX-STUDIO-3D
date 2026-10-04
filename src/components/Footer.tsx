import { Link } from 'react-router-dom';
import WhatsAppBtn from './WhatsAppBtn';

export default function Footer() {
  const scrollTo = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 pt-16 pb-10 border-t border-amber-200/20" id="contact">
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Global CTA Banner */}
        <div className="bg-amber-100/30 backdrop-blur-md border border-amber-300/50 p-8 md:p-12 rounded-3xl shadow-lg text-center mb-16 mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-heading font-black text-brandDark mb-4">
            Stop editing your own content. It is 2026.
          </h2>
          <p className="text-slate-800 font-bold text-lg md:text-xl">
            Let the pros handle the keyframes while you handle the business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Connect */}
          <div className="md:col-span-12 lg:col-span-6">
            <h2 className="text-4xl font-heading font-black text-brandDark mb-6 drop-shadow-sm">
              EVX<span className="text-amber-600">.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 items-stretch">
              <div className="flex-1 space-y-3 text-slate-800 font-medium bg-amber-100/10 backdrop-blur-md border border-amber-200/30 rounded-2xl p-6 shadow-lg">
                <p><strong className="text-brandDark font-heading tracking-wide uppercase text-xs">Founder:</strong><br/>ESHAN (Sankalpa Sarkar)</p>
                <p><strong className="text-brandDark font-heading tracking-wide uppercase text-xs">Location:</strong><br/>West Bengal, India</p>
                <p><strong className="text-brandDark font-heading tracking-wide uppercase text-xs">Phone:</strong><br/>+91 93321 28501</p>
                <p><strong className="text-brandDark font-heading tracking-wide uppercase text-xs">Email:</strong><br/>sankalpa@evxstudio.in</p>
              </div>
              
              <div className="flex-1 bg-amber-100/10 backdrop-blur-md border border-amber-200/30 rounded-2xl p-6 shadow-lg flex flex-col justify-center items-center text-center">
                <p className="text-brandDark font-bold mb-4 font-heading tracking-wide uppercase text-sm">Get a 100% Free Consultation</p>
                <WhatsAppBtn 
                  text="Chat on WhatsApp"
                  icon={true}
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 bg-[#25D366] text-white font-bold font-heading uppercase tracking-wider rounded-full hover:bg-[#128C7E] transition-colors shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-lg font-bold font-heading text-brandDark mb-6">Quick Links</h3>
            <ul className="space-y-3 text-slate-800 font-medium">
              <li><button onClick={() => scrollTo('services')} className="hover:text-amber-600 transition-colors text-left w-full">Services</button></li>
              <li><Link to="/pricing" className="hover:text-amber-600 transition-colors block">Pricing & Order</Link></li>
              <li><button onClick={() => scrollTo('why-us')} className="hover:text-amber-600 transition-colors text-left w-full">Why Us</button></li>
              <li><Link to="/career" className="hover:text-amber-600 transition-colors block">Career</Link></li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-lg font-bold font-heading text-brandDark mb-6">Connect</h3>
            <ul className="space-y-3 text-slate-800 font-medium mb-8">
              <li>
                <WhatsAppBtn text="WhatsApp Support" className="hover:text-amber-600 transition-colors flex items-center gap-2" />
              </li>
              <li><a href="mailto:support@evxstudio.in" className="hover:text-amber-600 transition-colors">support@evxstudio.in</a></li>
              <li><Link to="/portfolio" className="hover:text-amber-600 transition-colors text-amber-600 font-bold">View Portfolio</Link></li>
            </ul>
            
            <h3 className="text-lg font-bold font-heading text-brandDark mb-6">Legal</h3>
            <ul className="space-y-3 text-slate-800 font-medium">
              <li><Link to="/terms" className="hover:text-amber-600 transition-colors">Terms and Conditions</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-amber-600 transition-colors" target="_blank" rel="noreferrer">Sitemap</a></li>
            </ul>
          </div>
          
        </div>

        <div className="flex justify-center mb-12">
          <Link 
            to="/founder" 
            className="px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-black font-heading uppercase tracking-widest text-lg md:text-xl rounded-full shadow-[0_10px_40px_rgba(217,119,6,0.4)] hover:scale-105 hover:shadow-[0_15px_50px_rgba(217,119,6,0.6)] transition-all duration-300 flex items-center justify-center gap-3 animate-pulse"
          >
            Know About the Founder
          </Link>
        </div>
        
        <div className="border-t border-amber-200/20 pt-8 flex flex-col md:flex-row justify-between items-center text-black font-black font-sans gap-4">
          <p>&copy; {new Date().getFullYear()} EVX Studio. All rights reserved.</p>
          <a href="/pricing" className="px-6 py-2 bg-brandDark text-white font-bold font-sans rounded-full hover:bg-amber-600 transition-colors shadow-lg not-italic uppercase tracking-widest text-xs">
            View Pricing
          </a>
          <p>Made with ❤️ by EVX STUDIO in India.</p>
        </div>
      </div>
    </footer>
  );
}

