import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import GraphSection from '../components/GraphSection';
import PricingOffer from '../components/PricingOffer';
import Guarantee from '../components/Guarantee';
import PaymentsFAQ from '../components/PaymentsFAQ';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <PricingOffer />
      <Features />
      <Services />
      <GraphSection />
      <Guarantee />
      <PaymentsFAQ />
      <FloatingWhatsApp />
    </div>
  );
}
