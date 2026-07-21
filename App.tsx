import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TecnologiaIA from './pages/TecnologiaIA';
import FinOpsCloud from './pages/FinOpsCloud';
import EstrategiaCrescimento from './pages/EstrategiaCrescimento';
import CaseDetail from './pages/CaseDetail';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tecnologia-ia" element={<TecnologiaIA />} />
          <Route path="/finops-cloud" element={<FinOpsCloud />} />
          <Route path="/estrategia-crescimento" element={<EstrategiaCrescimento />} />
          <Route path="/cases/:slug" element={<CaseDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
