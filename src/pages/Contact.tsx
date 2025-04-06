// Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, Check, AlertCircle, MessageCircle, AtSign, MapPin, Globe, Share2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'success', 'error'

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "pranjalgupta.works@gmail.com",
      link: "mailto:pranjalgupta.works@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-8057506672",
      link: "tel:+918057506672"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/pranjalgupta-",
      link: "https://www.linkedin.com/in/pranjalgupta-/"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/PranjalGupta-1",
      link: "https://github.com/PranjalGupta-1/"
    }
  ];
  
  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1500);
  };

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
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-deepPurple via-beige to-lavender relative">
      {/* Floating background icons */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[8%] right-[8%] opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, repeatType: "reverse" }}
        >
          <MessageCircle size={40} className="text-burgundy" />
        </motion.div>
        <motion.div 
          className="absolute top-[40%] left-[4%] opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", delay: 0.7 }}
        >
          <AtSign size={50} className="text-crimson" />
        </motion.div>
        <motion.div 
          className="absolute bottom-[15%] right-[7%] opacity-20"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.7, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
        >
          <MapPin size={35} className="text-golden" />
        </motion.div>
        <motion.div 
          className="absolute top-[68%] left-[6%] opacity-20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
        >
          <Globe size={45} className="text-deepPurple" />
        </motion.div>
        <motion.div 
          className="absolute top-[15%] left-[9%] opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.3, repeat: Infinity, repeatType: "reverse", delay: 2.2 }}
        >
          <Share2 size={38} className="text-mauve" />
        </motion.div>
        <motion.div 
          className="absolute bottom-[32%] right-[85%] opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, repeatType: "reverse", delay: 1.8 }}
        >
          <Mail size={36} className="text-beige" />
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-crimson to-mauve bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-silver text-lg">
              I'm always open to new opportunities and collaborations.
            </p>
            
            {/* Animated underline */}
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-golden to-crimson rounded-full mx-auto mt-4"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "32px", opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-offWhite/10 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4 hover:bg-deepPurple/20 transition-all duration-300 border border-beige/20 group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-deepPurple/0 to-golden/0 group-hover:from-deepPurple/10 group-hover:to-golden/10 transition-all duration-500"></div>
                
                {/* Ring animation on hover */}
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-golden/0 group-hover:border-golden/30"
                    animate={{ scale: [1, 1.1, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                  />
                  <div className="bg-gradient-to-br from-golden to-crimson w-12 h-12 rounded-full flex items-center justify-center text-offWhite">
                    {item.icon}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-medium text-sm text-silver group-hover:text-golden transition-colors duration-300">{item.label}</h3>
                  <p className="text-lg text-offWhite">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-offWhite/10 backdrop-blur-sm rounded-lg p-8 border border-beige/20 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-golden/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-crimson/5 rounded-full blur-xl"></div>
            
            <h2 className="text-2xl font-semibold mb-6 text-offWhite relative z-10">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-silver mb-2">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full bg-lavender/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-golden transition-all duration-300 text-offWhite placeholder-silver/50"
                      placeholder="Your name"
                      required
                    />
                    <div className="absolute inset-0 border border-transparent group-focus-within:border-golden/30 rounded-lg pointer-events-none"></div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-silver mb-2">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full bg-lavender/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-golden transition-all duration-300 text-offWhite placeholder-silver/50"
                      placeholder="your.email@example.com"
                      required
                    />
                    <div className="absolute inset-0 border border-transparent focus-within:border-golden/30 rounded-lg pointer-events-none"></div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-silver mb-2">Message</label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-lavender/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-golden transition-all duration-300 text-offWhite placeholder-silver/50"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                  <div className="absolute inset-0 border border-transparent focus-within:border-golden/30 rounded-lg pointer-events-none"></div>
                </div>
              </div>
              
              <div className="relative">
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-crimson to-burgundy py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 text-offWhite flex items-center justify-center gap-2"
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-offWhite border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
                
                {/* Form status message */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-r from-deepPurple/40 to-golden/40 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2 text-offWhite"
                  >
                    <Check size={18} className="text-golden" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-r from-crimson/40 to-burgundy/40 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2 text-offWhite"
                  >
                    <AlertCircle size={18} className="text-crimson" />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;