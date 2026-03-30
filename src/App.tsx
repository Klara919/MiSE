import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FloatingMenu } from './components/layout/FloatingMenu';
import { SideLabel } from './components/layout/SideLabel';
import { Footer } from './components/layout/Footer';

// Pages (to be created)
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Cases from './pages/Cases';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-bg selection:bg-accent selection:text-white">
        <SideLabel text="MiSE Studio" side="left" />
        <SideLabel text="Webbureau, Aarhus" side="right" />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <FloatingMenu />
      </div>
    </Router>
  );
}
