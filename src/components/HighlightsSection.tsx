import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  'Layout Designed as per Vastu Principles',
  'Electricity with Transformer and Street Lighting',
  '33 ft. wide CC Roads with Curbing Stones',
  "Well-Developed Park with Children's Play Area",
  'Avenue Plantation with Landscaping',
  'Full-fledged Drainage System',
  'Compound Wall with Entrance Arch',
  'Rainwater Harvesting Pits',
  'Walking Track',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const HighlightsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-hero text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Infrastructure
            </motion.span>
            <motion.h2 
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Project Highlights
              <br />
              <span className="text-secondary">& Key Features</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Aspirealty Prime is developed with premium infrastructure that ensures 
              comfortable living and excellent investment value. Every detail has been 
              meticulously planned to provide you with the best living experience.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '33 ft', label: 'Wide CC Roads' },
                { value: '100%', label: 'Vastu Compliant' },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    y: -5
                  }}
                >
                  <p className="text-4xl font-bold text-secondary mb-2">{stat.value}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-xl font-semibold mb-6">
              What's Included
            </h3>
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 group cursor-default"
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-white/90 group-hover:text-white transition-colors">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
