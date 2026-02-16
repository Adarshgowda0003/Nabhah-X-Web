import { motion } from 'framer-motion';
import { Shield, Zap, Lock, Globe2, FileCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Immutable Records',
    description: 'Once recorded on the blockchain, land ownership data cannot be altered or tampered with, ensuring permanent security.',
    color: 'from-[#00ff88] to-[#00cc66]',
  },
  {
    icon: Zap,
    title: 'Instant Verification',
    description: 'Verify property ownership in seconds, not days. Real-time access to authenticated land records.',
    color: 'from-[#00ccff] to-[#0099ff]',
  },
  {
    icon: Lock,
    title: 'Cryptographic Security',
    description: 'Advanced encryption and multi-signature authentication protect every transaction and record.',
    color: 'from-[#00ff88] to-[#00ccff]',
  },
  {
    icon: Globe2,
    title: 'Global Accessibility',
    description: 'Access your land records from anywhere in the world with our distributed ledger technology.',
    color: 'from-[#00ccff] to-[#00ff88]',
  },
  {
    icon: FileCheck,
    title: 'Smart Contracts',
    description: 'Automate property transfers and agreements with self-executing smart contracts.',
    color: 'from-[#00ff88] to-[#00cc66]',
  },
  {
    icon: TrendingUp,
    title: 'Cost Effective',
    description: 'Reduce administrative costs by up to 90% with automated blockchain processes.',
    color: 'from-[#00ccff] to-[#0099ff]',
  },
];

export default function Features() {
  return (
    <section className="relative py-24 bg-[#0a0e27] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,136,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,204,255,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Powered by
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00ccff] bg-clip-text text-transparent"> Blockchain</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the next generation of land registry with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 to-[#00ccff]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-[#00ff88]/30 transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-[#0a0e27]" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff88]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
