// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// This component will handle the different background gradients
const PageContainer = ({ children }) => {
  const location = useLocation();
  
  const getBackgroundClass = () => {
    switch(location.pathname) {
      case '/about':
        return 'bg-about-gradient';
      case '/projects':
        return 'bg-projects-gradient';
      case '/contact':
        return 'bg-contact-gradient';
      default:
        return 'bg-home-gradient';
    }
  };
  
  return (
    <div className={`min-h-screen text-offWhite ${getBackgroundClass()}`}>
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <PageContainer>
            <Home />
          </PageContainer>
        } />
        <Route path="/about" element={
          <PageContainer>
            <About />
          </PageContainer>
        } />
        <Route path="/projects" element={
          <PageContainer>
            <Projects />
          </PageContainer>
        } />
        <Route path="/contact" element={
          <PageContainer>
            <Contact />
          </PageContainer>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;