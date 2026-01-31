import { useState } from 'react';
import { ZoomIn, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import masterPlanImg from '@/assets/master-plan.jpeg';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const MasterPlanSection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <section id="masterplan" className="py-20 md:py-28 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Layout Design
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Master Plan
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our meticulously designed layout with premium plots, wide roads, 
              and thoughtfully planned amenities. Click to view in detail.
            </p>
          </motion.div>

          {/* Master Plan Image */}
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
              onClick={() => setIsLightboxOpen(true)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={masterPlanImg}
                alt="Aspirealty Prime Master Plan Layout"
                className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                <motion.div 
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-white text-center mt-4 font-medium">Click to Zoom</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={() => setIsLightboxOpen(true)}
                className="btn-azure inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <ZoomIn className="w-5 h-5" />
                View Full Size
              </motion.button>
              <motion.a 
  href={masterPlanImg} 
  download="@/assets/master-plan.jpeg"
  className="btn-outline-azure inline-flex items-center gap-2"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
>
  <Download className="w-5 h-5" />
  Download Master Plan
</motion.a>
            </motion.div>
          </motion.div>

          {/* Layout Highlights */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: '165-339', label: 'Sq. Yds Plot Sizes' },
              { value: '33 ft', label: 'Wide CC Roads' },
              { value: '8', label: 'Acres Phase-1' },
              { value: 'Vastu', label: 'Compliant Design' },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="text-center bg-white rounded-xl p-6 shadow-card cursor-default"
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  boxShadow: '0 15px 30px hsla(210, 80%, 23%, 0.12)' 
                }}
              >
                <p className="text-2xl md:text-3xl font-bold text-secondary mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setIsLightboxOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
            
            <motion.img
              src={masterPlanImg}
              alt="Aspirealty Prime Master Plan Layout - Full Size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MasterPlanSection;
