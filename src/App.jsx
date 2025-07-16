import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import APPrep from './pages/APPrep';
import AskAdmitra from './pages/AskAdmitra';
import WhatsNext from './pages/WhatsNext';
import Pricing from './pages/Pricing';
import Admin from './pages/Admin';
import Projects from './pages/Projects';

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => setShowPopup(true), 2 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <nav style={{ padding: '1rem', background: '#f3f3f3' }}>
        <Link to="/">AP Prep</Link> |{' '}
        <Link to="/ask">AskAdmitra</Link> |{' '}
        <Link to="/next">What’s Next</Link> |{' '}
        <Link to="/projects">Projects</Link> |{' '}
        <Link to="/pricing">Pricing</Link> |{' '}
        <Link to="/admin">Admin</Link>
      </nav>
      {showPopup && (
        <div style={{ backgroundColor: '#ffd700', padding: '1rem', margin: '1rem' }}>
          🚀 Upgrade to Premium or Expert for personalized AI answers + internships! <button onClick={() => setShowPopup(false)}>Dismiss</button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<APPrep />} />
        <Route path="/ask" element={<AskAdmitra />} />
        <Route path="/next" element={<WhatsNext />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}