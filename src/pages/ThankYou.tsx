import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home, Phone, ArrowLeft, Download } from 'lucide-react'; // Added Download icon
import { Link } from 'react-router-dom';

// 1. Import your brochure PDF file here
// Make sure the file exists in src/assets/
import projectBrochure from '@/assets/Aspirealty-Avatar-2-brochure.pdf'; 

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center justify-center px-4">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Success Icon */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Thank You!
        </motion.h1>

        {/* Message */}
        <motion.p
          className="text-muted-foreground text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Your enquiry has been received successfully. Our team will contact you shortly with exclusive pricing details for Aspirealty AVATAR-2.
        </motion.p>

        {/* Divider */}
        <motion.div
          className="border-t border-border my-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6 }}
        />

        {/* Contact Info */}
        <motion.div
          className="bg-muted/50 rounded-xl p-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm text-muted-foreground mb-2">
            Can't wait? Call us directly:
          </p>
          <a
            href="tel:7416285473"
            className="inline-flex items-center gap-2 text-secondary font-semibold text-lg hover:underline"
          >
            <Phone className="w-5 h-5" />
            +91 74162 85473
          </a>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {/* 2. UPDATED DOWNLOAD BUTTON: Changed Link to <a> */}
          <a
            href={projectBrochure}
            download="Aspirealty-AVATAR-2-Brochure.pdf"
            className="btn-azure inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Download Brochure
          </a>

          <Link
            to="/"
            className="btn-outline inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="text-xs text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Aspirealty AVATAR-2 by Urbanhomes
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ThankYou;