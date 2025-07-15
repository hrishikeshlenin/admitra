import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import APPrep from './pages/APPrep';
import AskAdmitra from './pages/AskAdmitra';
import WhatsNext from './pages/WhatsNext';
import Pricing from './pages/Pricing';
import Admin from './pages/Admin';

export default function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/">AP Prep</Link> |{' '}
        <Link to="/ask">Ask Admitra</Link> |{' '}
        <Link to="/next">What’s Next</Link> |{' '}
        <Link to="/pricing">Pricing</Link> |{' '}
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<APPrep />} />
        <Route path="/ask" element={<AskAdmitra />} />
        <Route path="/next" element={<WhatsNext />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}