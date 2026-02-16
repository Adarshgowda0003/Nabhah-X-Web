import { motion } from 'framer-motion';
import { UserPlus, FileSearch, CheckCircle, Key } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Register Your Property',
    description: 'Create an account and submit your property documents for blockchain verification.',
    step: '01',
  },
  {
    icon: FileSearch,
    title: 'Verification Process',
    description: 'Our system validates your documents through smart contracts and cryptographic proofs.',
    step: '02',
  },
  {
    icon: Key,
    title: 'Blockchain Recording',
    description: 'Your property is recorded on the immutable blockchain ledger with a unique digital signature.',
    step: '03',
  },
  {
    icon: CheckCircle,
    title: 'Access & Manage',
    description: 'Instantly access, transfer, or verify your property records from anywhere, anytime.',
    step: '04',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0e27] to-[#0d1435] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00ff88] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00ccff] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            How It <span className="bg-gradient-to-r from-[#00ff88] to-[#00ccff] bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four simple steps to secure your property on the blockchain
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent hidden lg:block" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-2xl blur-xl opacity-50" />
                    <div className="relative w-24 h-24 bg-gradient-to-br from-[#0d1435] to-[#0a0e27] border-2 border-[#00ff88] rounded-2xl flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-[#00ff88]" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-full flex items-center justify-center text-[#0a0e27] font-bold text-sm">
                      {step.step}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00ff88] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
