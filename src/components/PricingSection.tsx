import { Check, Gift, Building2, CreditCard, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingTiers = [
  { duration: '45 Days', price: '15,499', highlight: false },
  { duration: '90 Days', price: '15,799', highlight: false },
  { duration: '120 Days', price: '15,999', highlight: true },
];

const extras = [
  { name: 'East Facing Plot', price: '₹200/Sq.Yd' },
  { name: 'Corner Plot', price: '₹500/Sq.Yd' },
  { name: 'Mortgage Plot', price: '₹300/Sq.Yd' },
  { name: 'Bank Loan', price: '₹300/Sq.Yd' },
  { name: 'Corpus Fund', price: '₹200/Sq.Yd' },
];

const paymentSchedule = [
  { milestone: 'Booking Amount', amount: '₹1,00,000' },
  { milestone: '25% Payment', timeline: 'Within 15 days' },
  { milestone: '50% Payment', timeline: 'Within 30 days' },
  { milestone: '100% Payment', timeline: 'Within 45 days' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white overflow-hidden">
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
            Investment Plots Details
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Premium Open Plots
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plot size that suits your needs. Flexible payment plans available 
            with attractive early payment discounts.
          </p>
        </motion.div>

        {/* Plot Sizes Banner */}
        <motion.div 
          className="bg-gradient-hero text-white rounded-2xl p-8 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { label: 'Plot Sizes Available', value: '165 - 339 Sq. Yds' },
              { label: 'Primary Facing', value: 'West' },
              { label: 'Bank Partner', value: 'YES BANK' },
            ].map((item, index) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <p className="text-sm text-white/70 mb-1">{item.label}</p>
                <p className="text-3xl md:text-4xl font-bold">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default PricingSection;
