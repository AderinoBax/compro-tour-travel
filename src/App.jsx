import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home.jsx';
import PricingPage from './pages/pricing.jsx';
import PortofolioPage from './pages/Porto.jsx';
import AboutPage from './pages/AboutUs.jsx';
import ContactUsPage from './pages/ContactUs.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Faq from './pages/Faq.jsx';

function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-gray-900">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/price" element={<PricingPage />} />
          <Route path="/portfolio" element={<PortofolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;