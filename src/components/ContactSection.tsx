import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
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
          message: formData.message,
          source: 'Contact Form',
        },
      });

      if (error) throw error;

      setFormData({ name: '', phone: '', email: '', message: '' });
      navigate('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted overflow-hidden">
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
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? Reach out to our team for personalized assistance 
            and schedule a site visit today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-2xl p-8 md:p-10 shadow-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: '0 20px 40px hsla(210, 80%, 23%, 0.12)' }}
          >
            <h3 className="font-display text-2xl font-semibold text-primary mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="form-input transition-all duration-300 focus:ring-2 focus:ring-secondary focus:shadow-lg"
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
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
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  className="form-input resize-none transition-all duration-300 focus:ring-2 focus:ring-secondary focus:shadow-lg"
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full btn-azure inline-flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Contact Info */}
           
          </motion.div>

          {/* Map & Office Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Map */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-card h-80"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.040843130004!2d78.53235430000001!3d16.9232774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca5331896a630b%3A0x9e63e7964265a73d!2sASPIREALTY%20AVATAR%202!5e0!3m2!1sen!2sin!4v1769758726968!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aspirealty Prime Location Map"
              />
            </motion.div>

            {/* Office Info Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-card"
                whileHover={{ y: -5, boxShadow: '0 15px 30px hsla(210, 80%, 23%, 0.1)' }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="icon-azure flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MapPin className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Site Location</p>
                    <p className="text-sm text-muted-foreground">
                      Karkalpahad, Near Srisailam Highway
                      <br />
                      Hyderabad, Telangana
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-card"
                whileHover={{ y: -5, boxShadow: '0 15px 30px hsla(210, 80%, 23%, 0.1)' }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="icon-azure flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Clock className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Site Visit Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon - Sun: 9:00 AM - 7:00 PM
                      <br />
                      Prior appointment recommended
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
