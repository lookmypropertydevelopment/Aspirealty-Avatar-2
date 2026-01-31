import {
  BedDouble,
  UtensilsCrossed,
  Dumbbell,
  Flower2,
  PartyPopper,
  Music,
  Gamepad2,
  Circle,
  SquareStack,
  Crown,
  Baby,
  Volleyball,
  Flame,
  Footprints,
  Goal,
  Trophy,
} from 'lucide-react';
import { motion } from 'framer-motion';

const clubhouseAmenities = [
  { icon: BedDouble, name: 'Guest Rooms' },
  { icon: UtensilsCrossed, name: 'Banquet Hall' },
  { icon: Dumbbell, name: 'Modern Gym' },
  { icon: Flower2, name: 'Yoga Hall' },
  { icon: PartyPopper, name: 'Sky Party Zone' },
  { icon: Music, name: 'Music / Dance Zone' },
];

const indoorSports = [
  { icon: Gamepad2, name: 'Table Tennis' },
  { icon: Circle, name: 'Snooker' },
  { icon: SquareStack, name: 'Carroms' },
  { icon: Crown, name: 'Chess' },
];

const outdoorSports = [
  { icon: Baby, name: "Children's Play Area" },
  { icon: Trophy, name: 'Basketball Court' },
  { icon: Goal, name: 'Tennis Courts' },
  { icon: Circle, name: 'Box Cricket' },
  { icon: Volleyball, name: 'Beach Volleyball' },
  { icon: Flame, name: 'Bonfire Pit' },
  { icon: Footprints, name: 'Reflexology Pathway' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            World-Class Amenities
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            5,000 Sq.ft Clubhouse
            <br />
            <span className="text-secondary">& Sports Zone</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience resort-style living with our premium clubhouse facilities and 
            extensive indoor & outdoor sports amenities.
          </p>
        </motion.div>

        {/* Clubhouse Amenities */}
        <div className="mb-20">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-px bg-border flex-1 max-w-xs" />
            <h3 className="font-display text-2xl font-semibold text-primary text-center">
              Clubhouse Highlights
            </h3>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clubhouseAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-elevated text-center group cursor-default"
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px hsla(210, 80%, 23%, 0.15)',
                  scale: 1.02
                }}
              >
                <motion.div 
                  className="icon-azure mx-auto mb-4"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <amenity.icon className="w-6 h-6" />
                </motion.div>
                <h4 className="font-medium text-primary text-sm group-hover:text-secondary transition-colors">{amenity.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sports Zone */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Indoor Sports */}
          <motion.div 
            className="bg-muted rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Gamepad2 className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary">Indoor Sports</h3>
                <p className="text-sm text-muted-foreground">Climate-controlled facilities</p>
              </div>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {indoorSports.map((sport, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm cursor-default group"
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: '0 10px 30px hsla(210, 80%, 23%, 0.12)',
                    x: 5
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-azure-light flex items-center justify-center"
                    whileHover={{ rotate: 10 }}
                  >
                    <sport.icon className="w-5 h-5 text-secondary" />
                  </motion.div>
                  <span className="font-medium text-primary text-sm group-hover:text-secondary transition-colors">{sport.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Outdoor Sports */}
          <motion.div 
            className="bg-gradient-hero rounded-2xl p-8 text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Trophy className="w-6 h-6" />
              </motion.div>
              <div>
                <h3 className="font-display text-xl font-semibold">Outdoor Sports</h3>
                <p className="text-sm text-white/70">Open-air recreational areas</p>
              </div>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {outdoorSports.map((sport, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 cursor-default group"
                  whileHover={{ 
                    scale: 1.03, 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    x: 5
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"
                    whileHover={{ rotate: -10 }}
                  >
                    <sport.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="font-medium text-sm group-hover:text-secondary transition-colors">{sport.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
