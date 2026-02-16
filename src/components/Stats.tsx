import { motion } from 'framer-motion';
import { TrendingUp, Users, MapPin, Award } from 'lucide-react';

const stats = [
  {
    icon: MapPin,
    value: '50,000+',
    label: 'Properties Registered',
    color: 'from-[#00ff88] to-[#00cc66]',
  },
  {
    icon: Users,
    value: '25,000+',
    label: 'Active Users',
    color: 'from-[#00ccff] to-[#0099ff]',
  },
  {
    icon: TrendingUp,
    value: '$2.5B+',
    label: 'Property Value Secured',
    color: 'from-[#00ff88] to-[#00ccff]',
  },
  {
    icon: Award,
    value: '99.9%',
    label: 'Transaction Success Rate',
    color: 'from-[#00ccff] to-[#00ff88]',
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 bg-[#0d1435] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 to-[#00ccff]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group-hover:border-[#00ff88]/30 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-[#0a0e27]" />
                </div>

                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="text-4xl font-bold bg-gradient-to-r from-[#00ff88] to-[#00ccff] bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>

                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
