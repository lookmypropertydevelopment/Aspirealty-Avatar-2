import { Play } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Virtual Tour
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Experience Aspirealty AVATAR-2
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a virtual walkthrough of our premium development and explore the 
            world-class amenities that await you.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-primary"
            whileHover={{ scale: isPlaying ? 1 : 1.02 }}
            transition={{ duration: 0.4 }}
          >
            {!isPlaying ? (
              <>
                {/* Thumbnail with Play Button */}
                <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.button
                      onClick={() => setIsPlaying(true)}
                      className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 shadow-lg"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(3, 141, 205, 0.4)',
                          '0 0 0 20px rgba(3, 141, 205, 0)',
                        ],
                      }}
                      transition={{
                        boxShadow: {
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: 'loop',
                        },
                      }}
                    >
                      <Play className="w-10 h-10 ml-1" fill="white" />
                    </motion.button>
                    <motion.p 
                      className="text-lg font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Watch Project Walkthrough
                    </motion.p>
                    <motion.p 
                      className="text-sm text-white/70 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      2 min video
                    </motion.p>
                  </div>
                </div>
              </>
            ) : (
              /* Embed Video - Replace with actual YouTube/Vimeo embed */
              <motion.iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/_ECEY04H27c?autoplay=1"
                title="Aspirealty Prime Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
        </motion.div>

        {/* Video Features */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { title: 'Site Overview', desc: 'Complete layout walkthrough' },
            { title: 'Amenities Tour', desc: 'Explore clubhouse & sports zone' },
            { title: 'Location Benefits', desc: 'Connectivity highlights' },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="text-center cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, backgroundColor: 'hsl(199 96% 41%)' }}
              >
                <span className="text-secondary font-bold group-hover:text-white">{index + 1}</span>
              </motion.div>
              <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
