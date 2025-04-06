// Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-deepPurple/60 backdrop-blur-lg shadow-lg'
        : 'bg-deepPurple/30 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-beige to-golden bg-clip-text text-transparent"
              >
                Portfolio
              </motion.span>
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-golden to-crimson"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative px-3 py-2 rounded-md text-sm font-medium group"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${
                      isActive ? 'text-offWhite' : 'text-silver group-hover:text-offWhite'
                    }`}>
                      {item.name}
                    </span>
                    
                    {/* Animated background highlight */}
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavItem"
                        className="absolute inset-0 bg-gradient-to-r from-burgundy/40 to-golden/20 rounded-md -z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    ) : (
                      <span className="absolute inset-0 bg-transparent hover:bg-golden/10 rounded-md transition-colors duration-300 -z-0" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-offWhite hover:bg-golden/20 transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
              
              {/* Animated ring on hover */}
              <motion.span
                className="absolute inset-0 rounded-md border border-golden/0"
                animate={{ 
                  scale: [1, 1.2, 1],
                  borderColor: ['rgba(226,135,67,0)', 'rgba(226,135,67,0.3)', 'rgba(226,135,67,0)']
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-deepPurple/50 backdrop-blur-lg"
            >
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-burgundy/40 to-golden/20 text-offWhite' 
                          : 'hover:bg-golden/20 text-silver hover:text-offWhite'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;