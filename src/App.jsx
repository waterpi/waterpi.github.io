import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { NotFound } from './pages/NotFound';
import MaintenanceMode from './Maintenance';

// Component to handle GitHub Pages SPA redirect
const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get('p');
    if (p) {
      navigate('/' + p, { replace: true });
    }
  }, [navigate]);

  return null;
};

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if not navigating to a hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default function App() {
  const [isMaintenance] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const previewMode = params.get('preview') === 'true';
    const storedPreview = localStorage.getItem('waterpi_preview') === 'true';

    if (previewMode) {
      localStorage.setItem('waterpi_preview', 'true');
      return false;
    }
    return !storedPreview;
  });

  useEffect(() => {
    // Feature Flag Logic handled in initializer
  }, []);

  if (isMaintenance) {
    return <MaintenanceMode />;
  }

  return (
    <Router>
      <RedirectHandler />
      <ScrollToTop />
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
