// About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, Award, Briefcase, GraduationCap, BookOpen, Trophy, Medal, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Computer Vision & Deep Learning",
      items: [
        "OpenCV, YOLO, Auto-Distill, LabelImg",
        "TensorFlow, PyTorch, Keras, CNN, RNN, GAN",
        "UNET, Auto-Encoder, U2-NET, Transformers",
        "LoRA, QLoRA"
      ],
      icon: <Brain className="w-6 h-6" />,
      color: "from-crimson to-burgundy"
    },
    {
      category: "AI & Machine Learning",
      items: [
        "LangChain, LLama, RAG, AutoGen, Mixtral, VLM, LLM",
        "Sk-Learn, Random Forest, SVM, Catboost, XGboost",
        "NLTK, SpaCy, Gensim, TF-IDF",
        "Text Processing, NER, Sentiment Analysis"
      ],
      icon: <Code className="w-6 h-6" />,
      color: "from-golden to-beige"
    },
    {
      category: "Data & Cloud",
      items: [
        "SQL, Cromadb",
        "Matplotlib, Numpy, Pandas, Seaborn",
        "Amazon Web Services (AWS)",
        "Data Collection, Sorting, and Annotation"
      ],
      icon: <Database className="w-6 h-6" />,
      color: "from-lavender to-deepPurple"
    }
  ];

  const experience = {
    title: "Computer Vision, AI-ML Jr. Developer",
    company: "Cairo Vision",
    period: "December 2022 – Dec 2023",
    location: "Bangalore, India",
    description: "I've overseen various facets of project lifecycles, with tasks such as Data Collection, Data Sorting, Data Annotation, and advancing through phases like Training, Testing, and the development of Detection. Also, in Developing: Chatbots, Prediction Models, Data Mining/Analysis, and Image Processing Models."
  };

  const education = [
    {
      degree: "B.E, Computer Science (CSE)",
      institution: "Dr. A.P.J Abdul Kalam University",
      period: "2018 – 2022",
      score: "CGPA: 7.12"
    },
    {
      degree: "HSC (12th)",
      institution: "Janta Inter College",
      period: "2017 – 2018",
      score: "78% in Science (PCM)"
    },
    {
      degree: "SSC (10th)",
      institution: "Janta Inter College",
      period: "2015 – 2016",
      score: "87%"
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
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
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-deepPurple via-beige to-paleViolet relative">
      {/* Floating background icons */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[10%] left-[85%] opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          <Cpu size={40} className="text-burgundy" />
        </motion.div>
        <motion.div 
          className="absolute top-[35%] right-[5%] opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        >
          <Trophy size={50} className="text-golden" />
        </motion.div>
        <motion.div 
          className="absolute bottom-[30%] left-[3%] opacity-20"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        >
          <BookOpen size={35} className="text-deepPurple" />
        </motion.div>
        <motion.div 
          className="absolute top-[70%] right-[10%] opacity-20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
        >
          <Medal size={45} className="text-crimson" />
        </motion.div>
        <motion.div 
          className="absolute bottom-[5%] left-[15%] opacity-20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        >
          <Award size={38} className="text-beige" />
        </motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-golden/10 rounded-full -3xl animate-pulse-slow"></div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8 relative">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -z-10 -left-6 w-16 h-16 rounded-full border-2 border-dashed border-lightPink/30"
            ></motion.div>
            <Award className="w-8 h-8 text-golden" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-golden to-crimson bg-clip-text text-transparent">
              Technical Expertise
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-offWhite/10 backdrop-sm rounded-lg p-6 border-b-4 border-transparent hover:border-golden transition-all duration-500 group"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex items-center gap-3 mb-6 relative">
                  <motion.div 
                    className={`bg-gradient-to-r ${skillSet.color} w-12 h-12 rounded-full flex items-center justify-center text-offWhite`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 10,
                    }}
                  >
                    {skillSet.icon}
                  </motion.div>
                  <h3 className="font-semibold text-lg text-offWhite group-hover:text-golden transition-colors duration-300">
                    {skillSet.category}
                  </h3>
                </div>
                <ul className="space-y-3 text-silver">
                  {skillSet.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-beige rounded-full mt-2 flex-shrink-0"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      ></motion.span>
                      <span className="group-hover:text-offWhite transition-colors duration-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="relative"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-crimson/10 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8 relative">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -z-10 -left-6 w-16 h-16 rounded-full border-2 border-dashed border-golden/30"
            ></motion.div>
            <Briefcase className="w-8 h-8 text-golden" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-golden to-crimson bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="bg-offWhite/10 backdrop-blur-sm rounded-lg p-8 border-l-4 border-golden overflow-hidden relative"
            whileHover={{ 
              boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)"
            }}
          >
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-golden/5 animate-spin-slow"></div>
            <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-crimson/5 animate-pulse-slow"></div>
            
            <div className="flex justify-between items-start mb-6 flex-wrap relative">
              <div>
                <h3 className="text-2xl font-semibold text-offWhite mb-1">{experience.title}</h3>
                <p className="text-golden text-lg">{experience.company}</p>
              </div>
              <div className="text-right text-silver">
                <p className="bg-deepPurple/30 px-4 py-1 rounded-full inline-block mb-2">{experience.period}</p>
                <p className="text-lightPink">{experience.location}</p>
              </div>
            </div>
            <p className="text-silver relative z-10">{experience.description}</p>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="relative"
        >
          <div className="absolute -left-20 top-20 w-40 h-40 bg-lavender/10 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8 relative">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -z-10 -left-6 w-16 h-16 rounded-full border-2 border-dashed border-crimson/30"
            ></motion.div>
            <GraduationCap className="w-8 h-8 text-golden" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-golden to-crimson bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>
          
          <div className="space-y-5">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-offWhite/10 backdrop-blur-sm rounded-lg p-6 border-r-4 border-crimson relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.01,
                  borderColor: '#e28743', // golden
                }}
              >
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-crimson/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                
                <h3 className="text-xl font-semibold mb-2 text-offWhite group-hover:text-golden transition-colors duration-300">{edu.degree}</h3>
                <p className="text-lightPink mb-3">{edu.institution}</p>
                <div className="flex justify-between items-center text-silver mt-2">
                  <p className="bg-deepPurple/20 px-3 py-1 rounded-full text-paleViolet text-sm">{edu.period}</p>
                  <motion.div 
                    className="bg-golden/20 px-3 py-1 rounded-full text-offWhite font-medium"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {edu.score}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;