import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Maintenance } from './pages/Maintenance';

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
  return (
    <Router>
      <RedirectHandler />
      <ScrollToTop />
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="*" element={<Maintenance />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
