import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0d1435] to-[#0a0e27] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff88] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-sm border border-white/20 rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00ff88]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#00ccff]/20 to-transparent rounded-full blur-3xl" />

            <div className="relative text-center space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                Ready to Secure Your
                <span className="block bg-gradient-to-r from-[#00ff88] to-[#00ccff] bg-clip-text text-transparent">
                  Property on the Blockchain?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Join thousands of property owners who trust Nabhah X for secure, transparent land registry
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <div className="relative w-full sm:w-auto">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-80 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                  />
                </div>
                <button className="group w-full sm:w-auto bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-[#0a0e27] px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm text-gray-400"
              >
                No credit card required • 14-day free trial • Cancel anytime
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
