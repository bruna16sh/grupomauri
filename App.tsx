import React, { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import { initTracking } from './lib/tracking';

const App: React.FC = () => {
  useEffect(() => {
    initTracking();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen text-mauri-white selection:bg-mauri-silver selection:text-mauri-black">
        <Background />
        <Navigation />
        <main>
          <Home />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </MotionConfig>
  );
};

export default App;
