import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Noise from './components/Noise';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Terms from './pages/Terms';
import Career from './pages/Career';
import Pricing from './pages/Pricing';
import Founder from './pages/Founder';
import PageLoader from './components/PageLoader';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical', 
      gestureOrientation: 'vertical', 
      smoothWheel: true, 
      touchMultiplier: 2, 
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Noise />
      <PageLoader />
      {/* Using a fixed div for background instead of bg-fixed to prevent mobile scroll lag */}
      <div className="fixed inset-0 w-full h-full bg-user bg-cover bg-center bg-no-repeat -z-10"></div>
      
      <div className="min-h-screen w-full overflow-hidden text-foreground flex flex-col font-sans relative">
        {/* Subtle overlay to ensure the image is bright and dreamy */}
        <div className="fixed inset-0 bg-white/20 pointer-events-none z-0"></div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/career" element={<Career />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/founder" element={<Founder />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

