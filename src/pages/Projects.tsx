// Projects.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Eye, X, ChevronRight, Tag, Terminal, Bot, BarChart, Layers, MonitorSmartphone } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      title: "LLM CHATBOT",
      description: "Built a Custom 'RAG' ChatBot using 'LLama' & 'LangChain'. Features include PDF text extraction, embedding process, and conversation memory. Integrated with OpenAI Model and Google Speech-Recognizer for voice input.",
      github: "https://github.com/PranjalGupta-1/CHATBOT",
      tags: ["LangChain", "LLama", "OpenAI", "RAG", "Speech Recognition"],
      details: "This chatbot uses a Retrieval-Augmented Generation (RAG) approach, which enhances language model responses with external knowledge. The system first processes PDF documents, extracting and embedding the text. When a query is made, it searches for relevant information in these embeddings and feeds this context to the language model. The model then generates a response that's both contextually relevant and factually accurate based on the provided documents."
    },
    {
      title: "Kingstone Health Counselor",
      description: "Health Counselor ChatBot using OpenAI API with fine-tuned responses. Implemented speech recognition and read-back functionality.",
      github: "https://github.com/PranjalGupta-1/Kingstone_Health_Counselor",
      tags: ["OpenAI", "ChatBot", "Healthcare", "Speech Recognition"],
      details: "The Health Counselor is designed to provide accessible health information and guidance. It leverages the OpenAI API with custom prompt engineering to ensure responses are medically appropriate. The chatbot includes speech recognition for accessibility and voice response capabilities, making it useful for users who prefer or need audio interaction. The system is fine-tuned to provide compassionate, clear health information while maintaining appropriate boundaries around medical advice."
    },
    {
      title: "Churn Prediction Model",
      description: "Customer Churn Prediction Model for Telecom Company using Random Forest Classifier. Analyzes subscription data, usage patterns, and demographics to predict customer churn.",
      link: "https://pranjal-telecom-customer-churn-predic.onrender.com/",
      tags: ["Machine Learning", "Random Forest", "Data Analysis"],
      details: "This churn prediction model helps telecom companies identify customers who are likely to discontinue their services. Using Random Forest algorithms, the model analyzes various customer data points including subscription details, service usage patterns, demographic information, and customer support interactions. The system also includes feature engineering techniques that create composite variables to better represent complex customer behaviors. The final deployed model achieved 87% accuracy in predicting customer churn."
    },
    {
      title: "Medical Cell Region Prediction",
      description: "Deep Learning model for predicting microscopic cell regions using TorchVision and UNET Architecture. Achieved accurate predictions with limited dataset of 30 images.",
      link: "https://pranjal-cell-region-prediction.onrender.com/",
      tags: ["Deep Learning", "UNET", "Computer Vision", "PyTorch"],
      details: "This project addresses the challenge of medical image segmentation with limited training data. Using the U-NET architecture, which consists of encoder-decoder pathways with skip connections, the model was trained to identify and segment cell regions in microscopic images. Despite having only 30 training images, data augmentation techniques and transfer learning were employed to achieve reliable results. The model can identify cell boundaries and regions with high precision, automating what would otherwise be a time-consuming manual process."
    },
    {
      title: "ANPR System",
      description: "Automatic Number-Plate Recognition system that reads and recognizes vehicle registration plates. Tracks vehicle entry and exit times using YOLO-based character recognition.",
      tags: ["Computer Vision", "YOLO", "OCR", "Object Detection"],
      details: "The ANPR system uses a two-stage approach to recognize vehicle license plates. First, YOLO object detection locates the license plate within an image. Then, a specialized OCR system trained on alphanumeric characters extracts the plate number. The system maintains a database of vehicle entry and exit times, allowing for automated parking management or security monitoring. The model was trained on a dataset of license plates with varying conditions including different lighting, angles, and weather conditions to ensure robustness."
    },
    {
      title: "Website Analysis Tool",
      description: "Web scraping tool using BeautifulSoup, Requests, and NLTK for sentiment analysis, word statistics, and content analysis. Processes multiple websites and saves analysis to Excel.",
      tags: ["Web Scraping", "NLP", "NLTK", "Data Analysis"],
      details: "This tool automates the process of analyzing content across multiple websites. It uses BeautifulSoup and Requests to extract textual content, then applies NLTK to perform various analyses: sentiment scores (positive/negative), readability metrics (word length, syllable count, complexity), and content classification. The tool can process websites in batch from an Excel input sheet and exports comprehensive analysis results back to Excel for further processing. It's particularly useful for content marketers, SEO specialists, and researchers needing to analyze website content at scale."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
    hover: { 
      y: -5, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.98 }
  };
  
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 300 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-lavender via-lightPink to-mauve relative">
      {/* Floating background icons */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[5%] right-[12%] opacity-29"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        >
          <Terminal size={40} className="text-deepPurple" />
        </motion.div>
        <motion.div 
          className="absolute top-[28%] left-[5%] opacity-33"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.8 }}
        >
          <Bot size={50} className="text-burgundy" />
        </motion.div>
        <motion.div 
          className="absolute bottom-[45%] right-[6%] opacity-30"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        >
          <BarChart size={35} className="text-crimson" />
        </motion.div>
        <motion.div 
          className="absolute top-[60%] left-[8%] opacity-37"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, repeatType: "reverse", delay: 1.2 }}
        >
          <Layers size={45} className="text-beige" />
        </motion.div>
        <motion.div 
          className="absolute bottom-[10%] right-[15%] opacity-30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        >
          <MonitorSmartphone size={38} className="text-lavender" />
        </motion.div>
        <motion.div 
          className="absolute top-[42%] right-[88%] opacity-35"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.7, repeat: Infinity, repeatType: "reverse", delay: 1.7 }}
        >
          <Code size={42} className="text-golden" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-deepPurple to-burgundy bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-deepPurple text-lg">
            A showcase of my work in AI, Machine Learning, and Computer Vision
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-offWhite/10 backdrop-blur-sm rounded-lg p-6 border border-lightPink/30 cursor-pointer overflow-hidden group"
              onClick={() => setActiveProject(project)}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 relative">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <motion.h2 
                      className="text-2xl font-semibold text-offWhite group-hover:text-golden transition-colors duration-300"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.title}
                    </motion.h2>
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="bg-golden/20 text-golden text-xs font-semibold px-2 py-1 rounded-full hidden md:flex items-center"
                    >
                      <ChevronRight size={14} className="mr-1" /> View Details
                    </motion.div>
                  </div>
                  <motion.p 
                    className="text-crimson mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
                <motion.div 
                  className="flex flex-wrap gap-2 md:w-1/3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      variants={tagVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 bg-deepPurple/20 rounded-full text-xs text-paleViolet whitespace-nowrap flex items-center gap-1"
                    >
                      <Tag size={10} />
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              
              <div className="flex gap-4 mt-4 relative z-10">
                {project.github && (
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-burgundy/20 hover:bg-burgundy/40 transition-colors text-offWhite"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span>Repository</span>
                  </motion.a>
                )}
                {project.link && (
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-beige/20 hover:bg-beige/40 transition-colors text-offWhite"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-20 h-20 rounded-full bg-golden/5 blur-xl group-hover:bg-golden/10 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 -ml-6 -mb-6 w-20 h-20 rounded-full bg-burgundy/5 blur-xl group-hover:bg-burgundy/10 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-deepPurple/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gradient-to-br from-deepPurple to-burgundy/90 rounded-lg max-w-2xl w-full p-6 md:p-8 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-offWhite hover:text-golden transition-colors" 
                onClick={() => setActiveProject(null)}
              >
                <X size={24} />
              </button>

              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-golden to-beige bg-clip-text text-transparent">
                  {activeProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-offWhite/10 rounded-full text-xs text-lightPink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-golden">Project Overview</h4>
                <p className="text-Crimson">{activeProject.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-golden">Technical Details</h4>
                <p className="text-golden">{activeProject.details}</p>
              </div>

              <div className="flex gap-4 mt-6">
                {activeProject.github && (
                  <motion.a 
                    href={activeProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-golden/20 hover:bg-golden/40 transition-colors text-offWhite"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </motion.a>
                )}
                {activeProject.link && (
                  <motion.a 
                    href={activeProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-offWhite/10 hover:bg-offWhite/20 transition-colors text-offWhite"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-golden/10 blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-crimson/10 blur-xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;