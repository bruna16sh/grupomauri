import React from 'react';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-mauri-white selection:bg-mauri-silver selection:text-mauri-black">
      <Background />
      <Navigation />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
