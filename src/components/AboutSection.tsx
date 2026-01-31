import { Building2, Target, TreePine, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Building2,
    title: 'Premium Development',
    description: 'Strategically located within HMDA limits with all modern infrastructure',
  },
  {
    icon: Target,
    title: 'Strategic Location',
    description: 'Near Future City & major connectivity points including RRR',
  },
  {
    icon: TreePine,
    title: 'Green Living',
    description: 'Vastu-compliant layout with extensive landscaping and parks',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: '5,000 sq.ft clubhouse with world-class amenities',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
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
              transition={{ delay: 0.1 }}
            >
              About The Project
            </motion.span>
            <motion.h2 
              className="font-display text-3xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              AVATAR 2 Premium Open Plots on Srisailam Highway
              <br />
              {/* <span className="text-secondary">Your Gateway to Luxury</span> */}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Aspirealty AVATAR-2 is a premium 16-acre community near Bharath Future City, featuring 8 acres of DTCP and RERA-approved plots. Strategically located 550 meters from Srisailam Highway, it sits within the RRR and FCDA zones, offering seamless access to the 300-ft Ratan Tata Greenfield Road and the International Airport. The development is designed for smart living, boasting a luxury clubhouse, swimming pool, and dedicated sports zones to ensure high-growth appreciation.
            </motion.p>
            
            <motion.p 
              className="text-md text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
             Registered as Sri Gokul City (TG RERA P02400009896), this project ensures 100% transparency and full regulatory compliance with the Telangana State Real Estate Regulatory Authority. Buyers benefit from verified documentation, clear development timelines, and secure fund utilization through escrow accounts. These legal protections make Avatar 2 a safe, future-ready investment with strong potential for long-term value appreciation in Telangana.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {['DTCP Approved', 'HMDA Limits', 'FCDA Approved', 'Clear Titles'].map((badge, index) => (
                <motion.span 
                  key={badge}
                  className="bg-azure-light text-secondary px-4 py-2 rounded-full text-sm font-medium cursor-default"
                  whileHover={{ scale: 1.05, backgroundColor: 'hsl(199 96% 90%)' }}
                  transition={{ delay: index * 0.05 }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-elevated group cursor-default"
                whileHover={{ y: -8, boxShadow: '0 20px 40px hsla(210, 80%, 23%, 0.15)' }}
              >
                <motion.div 
                  className="icon-azure mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <feature.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
