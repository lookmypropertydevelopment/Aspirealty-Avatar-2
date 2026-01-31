import { MapPin, Navigation, Clock, Car, Plane, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const locationHighlights = [
  { time: '1 min', place: 'Srisailam Highway', icon: Navigation },
  { time: '6 mins', place: 'Ratan Tata Greenfield Road', icon: Navigation },
  { time: '13 mins', place: 'Regional Ring Road (RRR)', icon: Car },
  { time: '17 mins', place: 'Bharath Future City', icon: Building },
  { time: '38 mins', place: 'ORR Exit No.14', icon: Car },
  { time: '47 mins', place: 'International Airport', icon: Plane },
];

const LocationSection = () => {
  return (
    <section id="location" className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" />
            Strategic Location
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Prime Connectivity
          </h2>
        </motion.div>

        {/* Compact Grid Layout */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {locationHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px hsla(210, 80%, 23%, 0.1)' }}
              className="bg-white rounded-xl p-4 shadow-card text-center group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
              </div>
              <p className="text-xl font-bold text-secondary mb-1">{item.time}</p>
              <p className="text-xs text-muted-foreground leading-tight">{item.place}</p>
            </motion.div>
          ))}
        </div>

        {/* Map Row */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Map */}
          <div className="bg-white rounded-xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.040843130004!2d78.53235430000001!3d16.9232774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca5331896a630b%3A0x9e63e7964265a73d!2sASPIREALTY%20AVATAR%202!5e0!3m2!1sen!2sin!4v1769758726968!5m2!1sen!2sin"
              width="100%"
              height="268"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aspirealty Prime Location"
            />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              className="bg-gradient-to-br from-secondary to-secondary/80 rounded-xl p-5 text-white"
              whileHover={{ scale: 1.03 }}
            >
              <Navigation className="w-6 h-6 mb-2" />
              <p className="text-2xl font-bold">550m</p>
              <p className="text-white/80 text-sm">From Highway</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-5 text-white"
              whileHover={{ scale: 1.03 }}
            >
              <Building className="w-6 h-6 mb-2" />
              <p className="text-2xl font-bold">11.7km</p>
              <p className="text-white/80 text-sm">Future City</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-violet-600 to-violet-500 rounded-xl p-5 text-white"
              whileHover={{ scale: 1.03 }}
            >
              <Car className="w-6 h-6 mb-2" />
              <p className="text-2xl font-bold">11.9km</p>
              <p className="text-white/80 text-sm">To RRR</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-5 text-white"
              whileHover={{ scale: 1.03 }}
            >
              <Plane className="w-6 h-6 mb-2" />
              <p className="text-2xl font-bold">47min</p>
              <p className="text-white/80 text-sm">To Airport</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
