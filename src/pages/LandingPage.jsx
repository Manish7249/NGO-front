import Navbar from '../components/LandingPage/Navbar';
import Hero from '../components/LandingPage/Hero';
import Stats from '../components/LandingPage/Stats';
import Categories from '../components/LandingPage/Categories'
import FeaturedCampaigns from '../components/LandingPage/FeaturedCampaigns';
import CampaignBanner from '../components/LandingPage/CampaignBanner';
import WhySupportUs from '../components/LandingPage/WhySupportUs';
import TrustedNGOs from '../components/LandingPage/TrustedNGOs';
import Footer from '../components/LandingPage/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CampaignBanner />
        <Stats />
        <Categories />
        <FeaturedCampaigns />
        <WhySupportUs />
        <TrustedNGOs />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
