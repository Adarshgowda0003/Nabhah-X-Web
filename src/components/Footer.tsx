import { Github, Twitter, Linkedin, Globe2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0e27] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe2 className="w-8 h-8 text-[#00ff88]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00ff88] to-[#00ccff] bg-clip-text text-transparent">
                Nabhah X
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionizing land registry with blockchain technology for a secure, transparent future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#00ff88]/10 border border-white/10 hover:border-[#00ff88]/30 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-[#00ff88] transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#00ff88]/10 border border-white/10 hover:border-[#00ff88]/30 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#00ff88] transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#00ff88]/10 border border-white/10 hover:border-[#00ff88]/30 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-[#00ff88] transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Security', 'Pricing', 'API'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Security', 'Compliance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Nabhah X. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
