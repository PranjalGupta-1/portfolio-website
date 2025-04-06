// Home.tsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Code, Brain, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const iconRef = useRef(null);
  
  // Particle effect for the background
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e) => {
        if (!iconRef.current) return;
        const icons = iconRef.current.querySelectorAll('.floating-icon');
        icons.forEach(icon => {
          // Get the position of the mouse cursor
          const x = (window.innerWidth / 2 - e.clientX) / 25;
          const y = (window.innerHeight / 2 - e.clientY) / 25;
          
          // Apply a transform to the icon based on the mouse position
          icon.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-deepPurple via-burgundy to-lavender bg-animate bg-size-200 animate-gradient">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-beige to-golden bg-clip-text text-transparent relative inline-block">
              Pranjal Gupta
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1 bg-golden/50"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="text-xl sm:text-2xl mb-8 h-20"
          >
            <TypeAnimation
              sequence={[
                'Computer Vision Developer',
                2000,
                'AI/ML Engineer',
                2000,
                'Full Stack Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-paleViolet"
            />
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-silver mb-12 text-lg max-w-2xl mx-auto"
          >
            Turning complex problems into elegant solutions through AI, Machine Learning, and Computer Vision
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(226, 135, 67, 0.5)" // golden glow
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-crimson to-mauve rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-all duration-300 group"
              >
                <span>View My Work</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(185, 161, 120, 0.5)" // beige glow
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-beige rounded-full font-medium hover:bg-beige/20 transition-all duration-300 overflow-hidden relative"
              >
                <span className="relative z-10">Contact Me</span>
                <motion.div 
                  className="absolute inset-0 bg-beige/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated background shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-golden/20 rounded-full blur-3xl"
          />
        </div>

        {/* Floating tech icons */}
        <div ref={iconRef} className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
          <motion.div 
            className="floating-icon absolute top-1/6 left-1/6 opacity-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            <Code size={40} className="text-lightPink" />
          </motion.div>
          <motion.div 
            className="floating-icon absolute top-1/3 right-1/4 opacity-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          >
            <Brain size={50} className="text-golden" />
          </motion.div>
          <motion.div 
            className="floating-icon absolute bottom-1/4 left-1/3 opacity-20"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          >
            <Database size={35} className="text-beige" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;