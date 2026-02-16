import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
