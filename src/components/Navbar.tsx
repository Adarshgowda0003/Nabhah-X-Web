import { motion } from 'framer-motion';
import { Globe2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/Nabhah.X.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Nabhah Logo" className="w-8 h-8 object-contain" />

            <span className="text-2xl font-bold bg-gradient-to-r from-[#00ff88] to-[#00ccff] bg-clip-text text-transparent">
              Nabhah X
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Features', 'How It Works', 'Security', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-[#0a0e27] px-6 py-2.5 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {['Features', 'How It Works', 'Security', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-gray-300 hover:text-[#00ff88] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-[#0a0e27] px-6 py-2.5 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
