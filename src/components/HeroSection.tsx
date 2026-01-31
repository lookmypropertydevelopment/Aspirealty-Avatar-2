import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, MapPin, Shield, Award, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import heroBg from '@/assets/gallery-4.jpg';

const HeroSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-lead', {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: '',
          source: 'Hero Form',
        },
      });

      if (error) throw error;

      setFormData({ name: '', phone: '', email: '' });
      navigate('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroBg}
          alt="Aspirealty Prime Development"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badges */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-default">
                <Shield className="w-4 h-4 text-secondary" />
                DTCP Approved
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-default">
                <Award className="w-4 h-4 text-secondary" />
                HMDA Limits
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Luxury Living at{' '}
              <span className="text-secondary">Aspirealty AVATAR-2</span>
              <br />
              @ Karkalpahad
            </motion.h1>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* <p className="text-lg md:text-xl text-white/90 mb-4">
                Near Future City
              </p> */}
              <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl">
                8 Acres DTCP Approved Layout in Phase-1 (Proposed 16 Acres) within HMDA Limits & FCDA
              </p>
            </motion.div>

            {/* Location Tag */}
            <motion.div 
              className="flex items-center gap-2 text-white/90 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <MapPin className="w-5 h-5 text-secondary" />
              <span>Karkalpahad, Hyderabad</span>
            </motion.div>

            {/* CTA Button */}
            <motion.button 
              className="btn-azure inline-flex items-center gap-3 text-lg group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Book your dream plot today →
            </motion.button>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              {[
                { value: '8', label: 'Acres Phase-1' },
                { value: '165+', label: 'Sq. Yds Plots' },
                { value: '5000', label: 'Sq.ft Clubhouse' },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="cursor-default"
                >
                  <p className="text-3xl md:text-4xl font-bold text-secondary">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"
              whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
                  Get Exclusive Pricing
                </h2>
                <p className="text-muted-foreground">
                  Download Latest Brochure
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="form-input transition-all duration-300 focus:ring-2 focus:ring-secondary focus:shadow-lg"
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="form-input transition-all duration-300 focus:ring-2 focus:ring-secondary focus:shadow-lg"
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="form-input transition-all duration-300 focus:ring-2 focus:ring-secondary focus:shadow-lg"
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full btn-azure text-lg py-4 disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Get Price Details'
                  )}
                </motion.button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to receive communication from Aspirealty AVATAR-2
                </p>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-secondary" />
                    100% Secure
                  </span>
                  <span>•</span>
                  <span>No Spam</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
