import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import VideoSection from '@/components/VideoSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import MasterPlanSection from '@/components/MasterPlanSection';
import GallerySection from '@/components/GallerySection';
import HighlightsSection from '@/components/HighlightsSection';
import LocationSection from '@/components/LocationSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <AmenitiesSection />
        <MasterPlanSection />
        <GallerySection />
        <HighlightsSection />
        <LocationSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
