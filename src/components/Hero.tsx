import { motion } from 'framer-motion';
import { ChevronRight, Shield, Globe2, Lock } from 'lucide-react';
import Globe from './Globe';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#0d1435] to-[#0a0e27]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full px-4 py-2"
            >
              <Lock className="w-4 h-4 text-[#00ff88]" />
              <span className="text-sm text-[#00ff88] font-medium">Blockchain-Secured Land Registry</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Revolutionizing
              <span className="block bg-gradient-to-r from-[#00ff88] to-[#00ccff] bg-clip-text text-transparent">
                Land Ownership
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Secure, transparent, and immutable property records powered by blockchain technology.
              Experience the future of land registry with Nabhah X.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-[#0a0e27] px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300">
                Get Started
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00ff88]/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#00ff88]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Secure</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00ccff]/10 rounded-lg flex items-center justify-center">
                  <Globe2 className="w-6 h-6 text-[#00ccff]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-gray-400">Properties</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[600px] lg:h-[700px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 to-[#00ccff]/20 rounded-full blur-3xl" />
            <Globe />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#00ff88]/50 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#00ff88] rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
