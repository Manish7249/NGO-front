import React from 'react';
import Navbar from '../components/LandingPage/Navbar';
import Hero from '../components/LandingPage/Hero';
import Stats from '../components/LandingPage/Stats';
import Categories from '../components/LandingPage/Categories'
import CampaignBanner from '../components/LandingPage/CampaignBanner';
import TopNGOs from '../components/LandingPage/TopNGOs';
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
        <TopNGOs />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;