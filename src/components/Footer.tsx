// Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/PranjalGupta-1'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/pranjalgupta-/'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:pranjalgupta.works@gmail.com'
    }
  ];

  return (
    <footer className="bg-deepPurple/30 backdrop-blur-sm border-t border-beige/10 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 left-20 w-80 h-80 bg-burgundy/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 right-20 w-80 h-80 bg-golden/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-silver">
              © {new Date().getFullYear()} Pranjal Gupta. All rights reserved.
            </p>
            <motion.div 
              className="ml-2 flex items-center text-sm text-silver"
              whileHover={{ scale: 1.1 }}
            >
              <span className="mr-1">Built with</span>
              <Heart size={14} className="text-crimson mx-1" />
              <span className="bg-gradient-to-r from-beige to-golden bg-clip-text text-transparent">
                using React
              </span>
            </motion.div>
          </motion.div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-silver hover:text-golden transition-colors relative group"
                aria-label={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                {link.icon}
                
                {/* Hover tooltip */}
                <motion.span
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-deepPurple/80 text-offWhite text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  {link.name}
                </motion.span>
                
                {/* Highlight effect */}
                <motion.span
                  className="absolute -inset-1 rounded-full bg-golden/0 group-hover:bg-golden/10 transition-colors duration-300"
                ></motion.span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;