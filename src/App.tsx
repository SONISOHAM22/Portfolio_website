import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Instagram, Mail, Code, Server, Database, Cloud, Smartphone, Brain, Globe, Lock, Cpu, Rocket, Coffee, Terminal, FileJson, Chrome, Download, Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import * as Dialog from '@radix-ui/react-dialog';
import 'swiper/css';
import 'swiper/css/navigation';
import image from './logo.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef(null);

  const projects = [
    {
      id: '01',
      title: 'AI Multitasker',
      subtitle: 'Mobile App',
      description: 'AI-powered mobile assistant using Flutter, Gemini API, and Firebase Authentication for task automation and voice commands.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
      icon: <Brain size={24} />,
      githubLink: 'https://github.com/Soham2212004/AI-Multitasker.git'
    },
    {
      id: '02',
      title: 'Accident Detection',
      subtitle: 'ML System',
      description: 'Real-time accident detection using CNN and computer vision with emergency alert system integration.',
      image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=800',
      icon: <Globe size={24} />,
      githubLink: 'https://github.com/Soham2212004/Road-Accident-Detection-Alert-System.git'
    },
    {
      id: '03',
      title: 'Investment Calculator',
      subtitle: 'Flutter App',
      description: 'Comprehensive financial planning app with SIP, Lumpsum, FD, EMI calculators using Flutter.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      icon: <Lock size={24} />,
      githubLink: 'https://github.com/Soham2212004/Investment-Calculator-App.git'
    },
    {
      id: '04',
      title: 'ML Models',
      subtitle: 'Data Science',
      description: 'Collection of machine learning models for various applications including classification, regression, and clustering.',
      image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=800',
      icon: <Brain size={24} />,
      githubLink: 'https://github.com/Soham2212004/Ml_models.git'
    },
    {
      id: '05',
      title: 'Cloud Automation',
      subtitle: 'DevOps',
      description: 'Azure cloud automation and deployment pipeline optimization for enterprise applications.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
      icon: <Cloud size={24} />,
      githubLink: 'https://github.com/Soham2212004/azure.git'
    }
  ];

  const experience = [
    {
      company: "Linde Engineering India",
      role: "Software Development Intern",
      period: "Dec 2024 - Present",
      description: "Working on Azure Cloud automation and full-stack development. Developed Contract Management App using React TypeScript and Firebase Authentication.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      driveLink: "https://drive.google.com/file/d/1yi_J9JXjcUphpQuZ14IEUaYf_pxD2W_Y/preview"
    },
    {
      company: "Uniconverge Technologies",
      role: "Cloud Computing Intern",
      period: "April 2024 - June 2024",
      description: "Worked on Google Cloud & Microsoft Azure infrastructure. Implemented AI model deployment and cloud infrastructure management.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
      driveLink: "https://drive.google.com/file/d/1MjJaN4E_KjXECI7T_jhdT7blHiwrlRCc/preview"
    },
    {
      company: "SAP Code Unnati",
      role: "Innovation Marathon Participant",
      period: "Jan 2024 - March 2024",
      description: "Participated in innovation marathon, developing solutions using SAP technologies and cloud platforms.",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800",
      driveLink: "https://drive.google.com/file/d/10PwISz-SY6Qk8MJXJ7XLykSgcRCuEaph/preview"
    },
    {
      company: "myOnsite Healthcare",
      role: "AI/ML Hackathon Finalist",
      period: "Nov 2023 - Dec 2023",
      description: "Developed an AI-powered healthcare solution, reaching finals in the hackathon competition.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      driveLink: "https://drive.google.com/file/d/1BPi6JuGA0yost7_m5XbE0Ecq2UPPn5aF/preview"
    }
  ];

  const certificates = [
    {
      title: "Oracle Cloud Infrastructure",
      issuer: "Oracle",
      date: "2024",
      description: "Generative AI Certified Professional",
      icon: <Cloud size={24} className="text-blue-400" />,
      driveLink: "https://drive.google.com/file/d/1g4BM0Lvf8v0vfNZ757EbCIevJihgMXZr/preview"
    },
    {
      title: "Advanced Machine Learning",
      issuer: "Edunet Foundation",
      date: "2023",
      description: "Deep Learning and Neural Networks",
      icon: <Brain size={24} className="text-purple-400" />,
      driveLink: "https://drive.google.com/file/d/1WBAepr8ZEfsgqEvWzPdujEGv9qLlCsKH/preview"
    },
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL",
      date: "2023",
      description: "Statistical Analysis and Visualization",
      icon: <FileJson size={24} className="text-green-400" />,
      driveLink: "https://drive.google.com/file/d/1SGSTy7Kqz1a7fV1tX4tNd9hKYmSjk-Vy/preview"
    },
    {
      title: "ABAP Programming",
      issuer: "SAP",
      date: "2023",
      description: "Enterprise Software Development",
      icon: <Code size={24} className="text-yellow-400" />,
      driveLink: "https://drive.google.com/file/d/1T-rOb0AF2OjE-SYR4ZYt7QWiItjo04gJ/preview"
    },
    {
      title: "Google Cloud Study Jam",
      issuer: "JIS University",
      date: "2023",
      description: "Cloud Architecture and Services",
      icon: <Cloud size={24} className="text-red-400" />,
      driveLink: "https://drive.google.com/file/d/16AZsqZAUBkzB9H2klKDzNI0uAE2SoIUK/preview"
    },
    {
      title: "AI/ML Hackathon Finalist",
      issuer: "myOnsite Healthcare",
      date: "2023",
      description: "Healthcare Innovation Solutions",
      icon: <Award size={24} className="text-indigo-400" />,
      driveLink: "https://drive.google.com/file/d/1BPi6JuGA0yost7_m5XbE0Ecq2UPPn5aF/preview"
    }
  ];

  const skills = [
    {
      category: "Programming",
      icon: <Code size={24} />,
      items: [
        { name: "Python", icon: <Terminal size={20} /> },
        { name: "Dart (Flutter)", icon: <Smartphone size={20} /> },
        { name: "JavaScript", icon: <FileJson size={20} /> },
        { name: "SQL", icon: <Database size={20} /> },
        { name: "C/C++", icon: <Code size={20} /> }
      ]
    },
    {
      category: "AI & Data Science",
      icon: <Brain size={24} />,
      items: [
        { name: "TensorFlow & PyTorch", icon: <Brain size={20} /> },
        { name: "Data Visualization", icon: <FileJson size={20} /> },
        { name: "MLOps", icon: <Cloud size={20} /> },
        { name: "Computer Vision", icon: <Globe size={20} /> },
        { name: "NLP & LLMs", icon: <Terminal size={20} /> }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      items: [
        { name: "Microsoft Azure", icon: <Cloud size={20} /> },
        { name: "Google Cloud", icon: <Cloud size={20} /> },
        { name: "DevOps", icon: <Github size={20} /> },
        { name: "CI/CD", icon: <Rocket size={20} /> },
        { name: "Microservices", icon: <Server size={20} /> }
      ]
    },
    {
      category: "Mobile & Web",
      icon: <Smartphone size={24} />,
      items: [
        { name: "Flutter & Firebase", icon: <Smartphone size={20} /> },
        { name: "React & TypeScript", icon: <Code size={20} /> },
        { name: "Responsive Design", icon: <Chrome size={20} /> },
        { name: "RESTful APIs", icon: <Database size={20} /> },
        { name: "Git & GitHub", icon: <Github size={20} /> }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const mailtoLink = `mailto:sonisoham91@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.open(mailtoLink);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-[#020B2D] text-white min-h-screen">
      <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-1 flex items-center justify-end">
              <div className="hidden md:flex space-x-12">
                {['home', 'about', 'projects'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-white/70 hover:text-white transition-colors duration-200 uppercase text-sm tracking-wider ${
                      activeSection === item ? 'text-white' : ''
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center mx-8">
              <div className="relative w-16 h-16">
                <div className="logo-circle"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="logo-text text-2xl font-bold">SS</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-start">
              <div className="hidden md:flex space-x-12">
                {['work', 'skills', 'contacts'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-white/70 hover:text-white transition-colors duration-200 uppercase text-sm tracking-wider ${
                      activeSection === item ? 'text-white' : ''
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/70 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-[#020B2D]/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'work', 'skills', 'contacts'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-white/70 hover:text-white uppercase text-sm tracking-wider"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#020B2D]" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(2,11,45,0)_0%,#020B2D_100%)]" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="ring-container mb-[-100px]">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
          
          <div className="text-center relative z-20 mt-[-200px]">
            <p className="text-white/60 uppercase tracking-[0.2em] text-sm mb-4">
              Welcome to my Portfolio
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Soham Soni
            </h1>
            <p className="text-white/60 uppercase tracking-[0.2em] text-sm">
              Software Developer
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020B2D] via-[#0A1A3D] to-[#020B2D] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-serif mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Coffee size={24} className="text-blue-400" />
                <h3 className="text-2xl font-semibold">AI Engineer & Data Scientist</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a passionate software developer with expertise in AI/ML, data science, and cloud computing. 
                With a B.Tech in Computer Science from Parul University, I have built and deployed AI-powered applications, 
                data visualization solutions, and cloud-based systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My work focuses on solving real-world problems using cutting-edge technologies like MLOps, DevOps, and 
                data visualization. I'm constantly exploring new ways to innovate and create impactful AI solutions.
              </p>
              <div className="flex space-x-4 pt-6">
                <a 
                  href="https://drive.google.com/file/d/1MDDKYTZM94oit5jlMAwl2eOscEUhbtUT/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 flex items-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </a>
                <a href="#contacts" className="px-6 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-full transition-colors duration-300 flex items-center space-x-2">
                  <Mail size={20} />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={image}
                  alt="Soham Soni"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020B2D] via-[#0A1A3D] to-[#020B2D] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-serif mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="relative px-12">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              className="relative"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <div className="project-card group">
                      <div className="relative h-[400px] bg-[#0A1A3D] rounded-lg overflow-hidden">
                        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020B2D] group-hover:opacity-90" />
                        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-amber-400">{project.icon}</span>
                            <span className="text-amber-400 text-sm">{project.id}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                          <p className="text-white/60 text-sm mb-2">{project.subtitle}</p>
                          <p className="text-white/80 text-sm">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev left-0"></div>
            <div className="swiper-button-next right-0"></div>
          </div>
        </div>
      </section>

      <section id="work" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020B2D] via-[#0A1A3D] to-[#020B2D] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-serif mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experience.map((job, index) => (
              <div key={index} className="group relative cursor-pointer" onClick={() => setSelectedItem(job)}>
                <div className="work-card bg-[#0A1A3D] rounded-2xl overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={job.image}
                      alt={job.company}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1A3D]" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-2">{job.company}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-blue-400">{job.role}</span>
                      <span className="text-gray-400">{job.period}</span>
                    </div>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-serif mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card group">
                <div className="bg-[#0A1A3D] rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-purple-600/5 transform group-hover:translate-y-0 translate-y-full transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="text-blue-400">{skill.icon}</div>
                      <h3 className="text-xl font-semibold">{skill.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {skill.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-center space-x-3 group">
                          <span className="text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </span>
                          <span className="group-hover:text-white transition-colors duration-300">
                            {item.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-serif mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Certifications & Achievements
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-[#0A1A3D] rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedItem(cert)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-600/10 rounded-lg">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{cert.title}</h4>
                      <p className="text-sm text-blue-400 mb-2">{cert.issuer}</p>
                      <p className="text-xs text-gray-400 mb-2">{cert.date}</p>
                      <p className="text-sm text-gray-300">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020B2D] via-[#0A1A3D] to-[#020B2D] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-serif mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <a href="mailto:sonisoham91@gmail.com" className="contact-link group flex items-center space-x-4 text-gray-300 hover:text-white">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-400">sonisoham91@gmail.com</p>
                  </div>
                </a>
              </div>
              <div className="pt-8">
                <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/Soham2212004" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center hover:bg-blue-600/20 transition-colors duration-300">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/sohamsoni220104" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center hover:bg-blue-600/20 transition-colors duration-300">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center hover:bg-blue-600/20 transition-colors duration-300">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#020B2D] rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#020B2D] rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#020B2D] rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${isSubmitting ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 rounded-lg transition-colors duration-300 flex items-center justify-center`}
                >
                  {isSubmitting ? 'Sending...' : submitSuccess ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>© 2024 Soham Soni. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Dialog.Root open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0A1A3D] rounded-2xl w-[90vw] max-w-4xl max-h-[85vh] overflow-hidden z-[70] shadow-2xl">
            <div className="flex justify-between items-start p-6 border-b border-white/10">
              <h3 className="text-2xl font-semibold text-white">{selectedItem?.title || selectedItem?.company}</h3>
              <Dialog.Close className="text-white hover:text-white/80">
                <X size={24} />
              </Dialog.Close>
            </div>
            <div className="p-1 h-[70vh]">
              <iframe
                src={selectedItem?.driveLink}
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;