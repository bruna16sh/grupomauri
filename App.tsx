import React from 'react';
import { MotionConfig } from 'framer-motion';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen text-mauri-white selection:bg-mauri-silver selection:text-mauri-black">
        <Background />
        <Navigation />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default App;
