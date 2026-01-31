import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'About Project', href: '#about' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Master Plan', href: '#masterplan' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact Us', href: '#contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white overflow-hidden">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold mb-1">Aspirealty AVATAR-2</h3>
              <p className="text-white/70">by Urbanhomes</p>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              A premium DTCP-approved residential plot development at Karkalpahad, 
              near Future City. Experience luxury living with world-class amenities 
              and excellent connectivity.
            </p>
            <div className="flex flex-wrap gap-4">
              {['DTCP Approved', 'HMDA Limits', 'FCDA'].map((badge, index) => (
                <motion.span 
                  key={badge}
                  className="bg-white/10 text-sm px-4 py-2 rounded-full border border-white/20 cursor-default"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {quickLinks.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="tel:8328089839"
                  className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  <span>+91 8328089839</span>
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="mailto:info@urbanhomess.in"
                  className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5 text-secondary" />
                  <span>info@urbanhomess.in</span>
                </a>
              </motion.li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  Karkalpahad, Near Srisailam Highway
                  <br />
                  Hyderabad, Telangana
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm text-white/50 mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              © {new Date().getFullYear()} Aspirealty AVATAR-2 by Look My Property. All rights reserved.
            </p>
            
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
