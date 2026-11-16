import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EarningsCalculator from './components/EarningsCalculator';
import VideoTestimonials from './components/VideoTestimonials';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section4 from './components/Section4';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import ApplicationForm from './components/ApplicationForm';
import ReferModel from './components/ReferModel';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';

function HomePage() {
  return (
    <>
      <Hero />
      <EarningsCalculator />
      <VideoTestimonials />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <ApplicationForm />
      <ReferModel />
    </>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [path]);

  const page = (() => {
    if (path === '/privacy' || path === '/privacy-policy') return 'privacy';
    if (path === '/how-it-works') return 'how-it-works';
    if (path === '/about' || path === '/about-us') return 'about';
    return 'home';
  })();

  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      {page === 'privacy' ? (
        <PrivacyPolicy />
      ) : page === 'how-it-works' ? (
        <HowItWorks />
      ) : page === 'about' ? (
        <About />
      ) : (
        <>
          <Navbar />
          <HomePage />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
