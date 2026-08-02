// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';
import { Mail, ArrowUpRight, Code2, Cpu, Database, Send, GraduationCap, Award, ExternalLink, FolderGit2, Layers, X, Medal, LayoutGrid, ArrowRight, Sparkles, Server, Activity, ShieldCheck, PlayCircle, MapPin } from 'lucide-react';

// --- Custom Social Icons ---
const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const FacebookIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap');
    
    body { font-family: 'Plus Jakarta Sans', 'Noto Sans Thai', sans-serif; background-color: #FAFAFA; color: #171717; overflow-x: hidden; }
    
    .bg-grid-pattern { background-size: 40px 40px; background-image: linear-gradient(to right, rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.05) 1px, transparent 1px); }
    ::selection { background-color: #10B981; color: #ffffff; }
    @keyframes move-bg { 0% { background-position: 0 0; } 100% { background-position: 40px 40px; } }
    .magic-dots-bg { background-image: radial-gradient(circle, #a1a1aa 1.5px, transparent 1.5px); background-size: 40px 40px; animation: move-bg 3s linear infinite; }
    .text-shine { background: linear-gradient(120deg, #171717 30%, #10b981 50%, #171717 70%); background-size: 200% auto; color: transparent; -webkit-background-clip: text; background-clip: text; animation: shine 4s linear infinite; }
    @keyframes shine { to { background-position: 200% center; } }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .animate-spin-slow { animation: spin 3s linear infinite; }
    
    /* Project Card Custom Colors (To fix Tailwind JIT issue) */
    .theme-emerald { background-color: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.3); }
    .theme-blue { background-color: rgba(59, 130, 246, 0.15); color: #3b82f6; border-color: rgba(59, 130, 246, 0.3); }
    .theme-amber { background-color: rgba(245, 158, 11, 0.15); color: #f59e0b; border-color: rgba(245, 158, 11, 0.3); }
    .theme-violet { background-color: rgba(139, 92, 246, 0.15); color: #8b5cf6; border-color: rgba(139, 92, 246, 0.3); }
    
    /* Scrollbar for modal */
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #404040; border-radius: 20px; }
  `}</style>
);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (e: any, sectionId: any) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 py-6`}>
      <div className="max-w-5xl mx-auto px-6 flex justify-center items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 p-1.5 rounded-full border shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] bg-white/80 backdrop-blur-xl border-neutral-200/60">
            {[
              { id: 'home', label: 'Home' }, 
              { id: 'about', label: 'About' }, 
              { id: 'projects', label: 'Portfolio' }, 
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button 
                key={item.id} onClick={(e) => scrollToSection(e, item.id)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${activeSection === item.id ? 'text-emerald-900' : 'text-neutral-500 hover:text-emerald-600'}`}
              >
                {activeSection === item.id && (<motion.div layoutId="active-nav" className="absolute inset-0 rounded-full bg-emerald-100/80" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />)}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const InteractiveBadge = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  return (
    <div className="w-full h-[600px] flex items-center justify-center relative perspective-1000">
      <motion.div
        initial={{ y: -600, opacity: 0, rotate: -15 }} animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ y: { type: "spring", stiffness: 140, damping: 8, mass: 1.2, delay: 0.2 }, rotate: { type: "spring", stiffness: 90, damping: 7, delay: 0.2 }, opacity: { duration: 0.2, delay: 0.1 } }}
        style={{ x, y, rotate }} drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} dragElastic={0.65} dragTransition={{ bounceStiffness: 450, bounceDamping: 11 }} whileHover={{ scale: 1.02 }} whileDrag={{ scale: 1.05, cursor: "grabbing" }}
        className="relative w-[280px] h-[380px] bg-white rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(16,185,129,0.2)] border-4 border-white cursor-grab z-20 flex flex-col items-center justify-center p-4"
      >
        <div className="absolute bottom-[98%] left-1/2 -translate-x-1/2 w-6 h-[1000px] -z-10 overflow-hidden flex justify-center">
          <div className="w-full h-full bg-emerald-900 relative shadow-[inset_-3px_0_6px_rgba(0,0,0,0.4),inset_3px_0_6px_rgba(255,255,255,0.15)] rounded-full" style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(16, 185, 129, 0.25), rgba(16, 185, 129, 0.25) 4px, transparent 4px, transparent 8px), repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) 4px, transparent 4px, transparent 8px)`, backgroundSize: '100% 100%' }}>
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-emerald-400/20"></div>
          </div>
        </div>
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-7 h-4 bg-neutral-800 rounded-sm z-30 shadow-md border border-neutral-700 flex flex-col items-center justify-center gap-0.5">
          <div className="w-5 h-[1px] bg-neutral-600"></div><div className="w-5 h-[1px] bg-neutral-600"></div>
        </div>
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-10 h-5 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-300 rounded-sm shadow-md z-30 border border-slate-400 flex items-center justify-center">
          <div className="w-6 h-1.5 bg-neutral-900/40 rounded-full shadow-inner border border-slate-500/50"></div>
        </div>
        <div className="w-full h-full relative z-20 overflow-hidden rounded-xl shadow-inner border border-neutral-100 bg-neutral-100">
          <div className="absolute inset-0 bg-emerald-500/10 mix-blend-color z-10 pointer-events-none"></div>
          {/* Blurred Background for Vertical Image */}
          <img src="/images/profile-main.jpg" alt="" className="absolute inset-0 w-full h-full object-cover blur-md opacity-50 scale-110 pointer-events-none" />
          <img src="/images/profile-main.jpg" alt="Profile" draggable="false" className="relative z-10 w-full h-full object-contain pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

const BlurFade = ({ children, delay = 0, className = "" }: any) => {
  return (
    <motion.div initial={{ opacity: 0, filter: "blur(10px)", y: 20 }} whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
};

const TypewriterText = ({ text, delay = 0 }: any) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1)); i++;
        if (i >= text.length) clearInterval(intervalId);
      }, 45);
      return () => clearInterval(intervalId);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);
  return (<span>{displayedText}<motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} className="inline-block w-[2px] h-[1.1em] bg-emerald-500 ml-1 align-middle" /></span>);
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Restore scroll to top on page refresh
  useEffect(() => {
    if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = (e: any) => { 
    e.preventDefault(); 
    const element = document.getElementById('contact');
    if(element) window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
  };
  
  const scrollToProjects = (e: any) => { 
    e.preventDefault(); 
    const element = document.getElementById('projects');
    if(element) window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); setIsSubmitting(true);
    const formData = new FormData(e.target);
    formData.append("access_key", "55251f82-848a-4580-bb40-53839e1df27e");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      if(response.ok) { setShowSuccess(true); e.target.reset(); setTimeout(() => setShowSuccess(false), 3000); }
    } catch (error) { console.error(error); } finally { setIsSubmitting(false); }
  };

  const mockCertificates = [
    { id: 1, title: "Software Development with ChatGPT", issuer: "Coursera", img: "/certificates/Coursera 1PKTR4JSW7GW.pdf" },
    { id: 2, title: "Cybersecurity Foundation", issuer: "NCSA", img: "/certificates/cybersecurity.pdf" },
    { id: 3, title: "AWS Certified AI Practitioner", issuer: "AWS Training & Certification", img: "/certificates/Official_Practice_Exam_AWS _Certified AI Practitioner(AIF-C01).pdf" },
    { id: 4, title: "AI Governance & Ethics", issuer: "DGA (Thailand Digital Government Academy)", img: "/certificates/TDGA.pdf" },
    { id: 5, title: "Getting Started with Cisco Packet Tracer", issuer: "Cisco Networking Academy", img: "/certificates/Getting_Started_with_Cisco_Packet_Tracer_certificate.pdf" },
    { id: 6, title: "Exploring Networking with Cisco Packet Tracer", issuer: "Cisco Networking Academy", img: "/certificates/Exploring_Networking_with_Cisco_Packet_Tracer_certificate.pdf" }
  ];

  const techStackData = [
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { name: "NodeJS", slug: "nodedotjs", color: "339933" },
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
    { name: "NextJS", slug: "nextdotjs", color: "FFFFFF" }, // Changed to White
    { name: "Flutter", slug: "flutter", color: "02569B" },
    { name: "Dart", slug: "dart", color: "0175C2" },
    { name: "Firebase", slug: "firebase", color: "FFCA28" },
    { name: "GitHub", slug: "github", color: "FFFFFF" },   // Changed to White
    { name: "Figma", slug: "figma", color: "F24E1E" }
  ];

  const projectsData = [
    {
      id: "p1",
      title: "Smart Room Monitoring",
      shortDesc: "ระบบตรวจสอบห้องเรียนอัจฉริยะแบบเรียลไทม์ ด้วยเซ็นเซอร์และ AI",
      fullDesc: "ระบบตรวจสอบห้องเรียนอัจฉริยะแบบเรียลไทม์ ที่เชื่อมต่อข้อมูลจากฮาร์ดแวร์จำลองขึ้นสู่ระบบคลาวด์ แดชบอร์ด และประมวลผลต่อด้วย AI Llama เพื่อประเมินความหนาแน่นและพฤติกรรมผู้ใช้",
      image: "/project/Smart_Room_Monitoring_System_1.png",
      theme: "emerald",
      colorHex: "#10b981", 
      badgeTags: ["IoT", "Next.js", "AI Llama"],
      architecture: [
        { layer: "Device & Hardware", icon: <Cpu size={16}/>, tech: ["ESP32 DevKit", "DHT22", "Ultrasonic", "Wokwi Simulator", "C/C++"] },
        { layer: "Network & Comms", icon: <Activity size={16}/>, tech: ["HTTP POST", "SSH Tunnel", "MQTT", "Node-RED"] },
        { layer: "Backend & DB", icon: <Server size={16}/>, tech: ["Next.js API", "Supabase (PostgreSQL)", "RLS Security", "Realtime Subs"] },
        { layer: "Frontend & UI", icon: <Code2 size={16}/>, tech: ["Next.js Dashboard", "Tailwind CSS", "Live Trends Chart"] },
        { layer: "AI Intelligence", icon: <Sparkles size={16}/>, tech: ["Llama 3.3 70B", "Groq API", "Pattern Recognition"] }
      ]
    },
    {
      id: "p2",
      title: "Health Screener AI",
      shortDesc: "ระบบ AI แปลผลใบตรวจสุขภาพบนบราวเซอร์ 100%",
      fullDesc: "ระบบ AI Solutions Architect สำหรับอ่าน แปลผล และอธิบายใบตรวจสุขภาพจากรูปถ่ายให้เป็นภาษาง่ายๆ ประมวลผลทุกอย่างบนบราวเซอร์ฝั่งผู้ใช้ 100% เพื่อความปลอดภัยระดับ PDPA",
      image: "/project/AI_Healthcare_Medical_OCR.JPG",
      theme: "blue",
      colorHex: "#3b82f6",
      badgeTags: ["Vanilla JS", "Gemini AI", "PDPA"],
      architecture: [
        { layer: "Frontend (Client-Side)", icon: <Code2 size={16}/>, tech: ["HTML5", "Vanilla JavaScript", "Progress Bar UI", "Status Rendering"] },
        { layer: "Data & Simulation", icon: <Database size={16}/>, tech: ["Canvas Generator", "Mock DB (JSON)", "Base64 Encoding"] },
        { layer: "AI Engine", icon: <Sparkles size={16}/>, tech: ["Gemini 2.5 Flash", "Multimodal OCR", "Structured JSON Outputs"] },
        { layer: "Prompt Engineering", icon: <Layers size={16}/>, tech: ["Persona Lock", "Low Temperature", "Hallucination Control"] }
      ]
    },
    {
      id: "p3",
      title: "สำรวย ฟาร์ม Management",
      shortDesc: "ระบบบริหารจัดการข้อมูลฟาร์มกุ้งดิจิทัลครบวงจร",
      fullDesc: "ระบบแอปพลิเคชันบริหารจัดการข้อมูลภายในฟาร์มกุ้งแบบดิจิทัล บันทึก ค้นหา จัดการทรัพยากร พนักงาน บ่อกุ้ง พร้อมระบบ Export รายงานวิเคราะห์กำไร-ขาดทุน",
      image: "/project/Shrimp_Farm_Management.JPG",
      theme: "amber",
      colorHex: "#f59e0b",
      badgeTags: ["Azure", "SQL", "VS IDE"],
      architecture: [
        { layer: "Development Tools", icon: <Code2 size={16}/>, tech: ["Visual Studio IDE", "Web User Interface"] },
        { layer: "Cloud Infrastructure", icon: <Server size={16}/>, tech: ["Microsoft Azure Cloud", "Azure App Service"] },
        { layer: "Database Layer", icon: <Database size={16}/>, tech: ["Azure SQL Database", "Relational Data Models"] },
        { layer: "Logic & Reports", icon: <Layers size={16}/>, tech: ["Data Validation Logic", "Print & Export Engine"] }
      ]
    },
    {
      id: "p4",
      title: "Ice Cute Boy: AI Coding",
      shortDesc: "ผู้ช่วยเขียนโค้ดอัจฉริยะที่เชื่อมต่อกับ IDE โดยตรง",
      fullDesc: "ระบบผู้ช่วยเขียนโค้ดอัจฉริยะ (AI Coding Assistant) ที่ผสานโมเดลภาษา LLMs ประสิทธิภาพสูงเข้ากับหน้าต่างการพัฒนาซอฟต์แวร์ เพื่อช่วยเจนเนอเรตและแก้บั๊กโค้ด",
      image: "/project/Ice_Cute_Boy_Hub_AI_Coding_Assistant.png",
      theme: "violet",
      colorHex: "#8b5cf6",
      badgeTags: ["LLMs", "VS Code", "Qwen 2.5"],
      architecture: [
        { layer: "Integration Environment", icon: <Layers size={16}/>, tech: ["VS Code Extension API", "Central Hub Interface"] },
        { layer: "AI LLMs Engine", icon: <Sparkles size={16}/>, tech: ["Qwen 2.5 (Coding)", "GLM-4 (Logic)"] },
        { layer: "Orchestration", icon: <Server size={16}/>, tech: ["Model Routing Logic", "Task Allocation"] },
        { layer: "Optimization", icon: <Cpu size={16}/>, tech: ["Prompt Optimization", "Context Engineering", "Syntax Enforcement"] }
      ]
    },
    {
      id: "p5",
      title: "TrashSeeker",
      shortDesc: "เว็บแอปติดตามและตรวจจับขยะจากกล้องด้วย AI YOLO",
      fullDesc: "เว็บแอปพลิเคชันสำหรับติดตามและตรวจจับขยะจากกล้องในหลายสถานที่ โดยเชื่อมต่อกับ TrashTrack API และโมเดล YOLO รองรับการเพิ่ม/แก้ไข/ลบสถานที่และกล้อง การสแกนกล้องเพื่อหาขยะอัตโนมัติ และการแสดงผลภาพพร้อม bounding box จาก AI",
      image: "/project/Trash-seeker.png", // Placeholder image, replace with actual if available
      theme: "emerald", // Using emerald to match the AI/Detection vibe
      colorHex: "#10b981",
      badgeTags: ["Next.js", "FastAPI", "YOLO AI"],
      githubLink: "https://github.com/Lostinyss/trash-seeker", // Link to GitHub
      liveLink: "https://lostinyss.github.io/trash-seeker/", // Link to Live Demo
      architecture: [
        { layer: "Frontend & UI", icon: <Code2 size={16}/>, tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
        { layer: "Backend API", icon: <Server size={16}/>, tech: ["TrashTrack FastAPI", "Cloudflare Workers", "Proxy Support"] },
        { layer: "AI Detection Engine", icon: <Sparkles size={16}/>, tech: ["YOLO Object Detection", "Realtime Scanning", "Bounding Box Rendering"] },
        { layer: "Features", icon: <Activity size={16}/>, tech: ["Auto-scan (10m)", "RTSP/URL Cam Support", "Role Management"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative selection:bg-emerald-500 selection:text-white">
      <GlobalStyles />
      <Navbar />

      {/* --- Lightbox Modal (For Certificates) --- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 bg-black/80 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl cursor-default border border-neutral-800"
            >
              <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors z-20">
                <X size={24} />
              </button>
              <iframe src={`${selectedCert.img}#view=FitH`} title={selectedCert.title} className="w-full h-[75vh] border-none bg-neutral-800" />
              <div className="p-5 bg-neutral-950 text-center border-t border-neutral-800 relative z-10">
                <h3 className="font-bold text-lg text-white">{selectedCert.title}</h3>
                <p className="text-sm text-neutral-400">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Project Details Modal (Magic UI Deep Tech Details) --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/70 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-neutral-950 rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] cursor-default border border-neutral-800"
            >
              {/* Header Image Area */}
              <div className="relative h-48 md:h-64 w-full flex-shrink-0 bg-neutral-900">
                <img src={selectedProject.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xl scale-110" />
                <img src={selectedProject.image} alt={selectedProject.title} className="relative z-10 w-full h-full object-contain" />
                <div className={`absolute inset-0 bg-${selectedProject.theme}-900/40 mix-blend-multiply z-20`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-20"></div>
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <h3 className="font-extrabold text-3xl text-white drop-shadow-sm">{selectedProject.title}</h3>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 bg-neutral-950">
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
                  {selectedProject.fullDesc}
                </p>
                
                <h4 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
                  <Layers className={`text-${selectedProject.theme}-400`} size={20} /> 
                  System Architecture Details
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.architecture.map((arch: any, i: any) => (
                    <div key={i} className={`bg-neutral-900/80 p-5 rounded-2xl border border-neutral-800 shadow-sm hover:border-${selectedProject.theme}-500/50 transition-all`}>
                      <div className={`flex items-center gap-2 mb-3 text-sm font-bold tracking-wide text-${selectedProject.theme}-400`}>
                        {arch.icon} {arch.layer}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {arch.tech.map((t: string, j: number) => (
                          <span key={j} className="px-3 py-1.5 bg-neutral-800 text-neutral-200 text-xs font-semibold rounded-xl border border-neutral-700/50">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Footer Actions */}
              <div className="p-4 md:p-6 bg-neutral-950 border-t border-neutral-800 flex justify-center gap-3 flex-shrink-0">
                 <button onClick={() => setSelectedProject(null)} className="w-full md:w-auto px-12 py-3.5 bg-white hover:bg-neutral-200 text-neutral-950 text-sm font-bold rounded-xl transition-all shadow-md active:scale-95">
                    ปิดหน้าต่างรายละเอียด
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {}
      {/* ---------------- Section 1: Hero ---------------- */}
      <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-grid-pattern">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[80px] -z-10 mix-blend-multiply pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center z-10">
          <div className="space-y-8">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700 shadow-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>Welcome to my portfolio</span>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-neutral-900 leading-[1.05]">
                Sirichok <br />Ban<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">k</span> <br />Leelathawornkun
              </h1>
            </BlurFade>
            <BlurFade delay={0.3}>
              <p className="text-lg text-neutral-500 max-w-md leading-relaxed font-light min-h-[5.5rem]">
                <TypewriterText text="ผมเชื่อว่าเว็บไซต์ที่ดีไม่ใช่แค่สวยงาม แต่ต้องใช้งานง่าย มีประสิทธิภาพ และช่วยแก้ปัญหาให้กับผู้ใช้งานได้จริง" delay={500} />
              </p>
            </BlurFade>
            <BlurFade delay={0.4} className="flex flex-wrap items-center gap-4 pt-4">
              <button onClick={scrollToProjects} className="px-7 py-3.5 bg-emerald-500 text-white rounded-full text-sm font-semibold hover:bg-emerald-600 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95 cursor-pointer">ดูผลงานของฉัน</button>
              <button onClick={scrollToContact} className="group flex items-center gap-2 px-7 py-3.5 bg-white text-neutral-700 border border-neutral-200 rounded-full text-sm font-medium hover:bg-neutral-50 hover:border-emerald-200 transition-all cursor-pointer">ติดต่อพูดคุย</button>
            </BlurFade>
          </div>
          <motion.div initial={{ opacity: 0, y: '-100vh' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }} className="w-full md:w-[350px] hidden md:block">
            <InteractiveBadge />
          </motion.div>
        </div>
        <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-emerald-400 text-xs font-medium tracking-widest uppercase pointer-events-none">
          <span>Scroll</span><div className="w-px h-8 bg-gradient-to-b from-emerald-400 to-transparent"></div>
        </motion.div>
      </section>

      {}
      {/* ---------------- Section 2: About ---------------- */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-white min-h-screen flex items-center">
        <div className="absolute inset-0 z-0 magic-dots-bg opacity-[0.25]"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
        <motion.div animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 z-10 relative w-full">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
            <div>
              <BlurFade><h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-shine drop-shadow-sm">About Me<span className="text-emerald-500 font-black">.</span></h2></BlurFade>
              <BlurFade delay={0.1}>
                <div className="space-y-6 text-2xl md:text-3xl text-neutral-700 leading-relaxed font-light bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                  <p>สวัสดีครับ ผม <strong className="font-semibold text-neutral-900">แบงค์</strong> อายุ 21 ปี ตอนนี้กำลังศึกษาอยู่ที่ <strong className="font-semibold text-emerald-600">มหาวิทยาลัยกรุงเทพ</strong> <br className="hidden md:block" /> คณะเทคโนโลยีสารสนเทศและนวัตกรรม <br className="hidden md:block" /> สาขาวิทยาการคอมพิวเตอร์ <span className="text-xl text-neutral-400 font-medium tracking-tight whitespace-nowrap">(Computer Science)</span></p>
                </div>
              </BlurFade>
              <BlurFade delay={0.2} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative group rounded-[2rem] p-[2px] overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] transition-shadow duration-500">
                    <div className="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full w-full bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 flex flex-col justify-center gap-4 z-10 border border-white/50 group-hover:bg-white/95 transition-colors">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner"><GraduationCap size={28} /></div>
                      <div><p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mb-1">Education</p><p className="text-xl font-bold text-neutral-900">Bangkok University</p></div>
                    </div>
                </div>
                <div className="relative group rounded-[2rem] p-[2px] overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_0_40px_-10px_rgba(20,184,166,0.3)] transition-shadow duration-500">
                    <div className="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#14b8a6_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full w-full bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 flex flex-col justify-center gap-4 z-10 border border-white/50 group-hover:bg-white/95 transition-colors">
                      <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner"><Code2 size={28} /></div>
                      <div><p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mb-1">Major</p><p className="text-xl font-bold text-neutral-900 leading-tight">Computer Science</p></div>
                    </div>
                </div>
                <div className="relative group rounded-[2rem] p-[2px] overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)] transition-shadow duration-500">
                    <div className="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#0ea5e9_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full w-full bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 flex flex-col justify-center gap-4 z-10 border border-white/50 group-hover:bg-white/95 transition-colors">
                      <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner"><Award size={28} /></div>
                      <div><p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mb-1">GPA</p><p className="text-xl font-bold text-neutral-900 leading-tight flex items-baseline gap-1.5">3.65</p></div>
                    </div>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={0.3} className="relative w-full max-w-lg mx-auto lg:mx-0 perspective-1000">
              <div className="grid grid-cols-2 gap-4 items-center transform-gpu">
                <div className="flex flex-col mt-12">
                  <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.05, rotateY: -10, z: 20 }} className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-neutral-100 aspect-[3/4] group cursor-pointer border border-white/40">
                    <img src="/images/a1.jpg" alt="Portrait" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-4">
                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} whileHover={{ scale: 1.05, rotateY: 10, z: 20 }} className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-neutral-100 aspect-square group cursor-pointer border border-white/40">
                    <img src="/images/nakorn.jpg" alt="Coding" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  </motion.div>
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} whileHover={{ scale: 1.05, rotateX: 10, z: 20 }} className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-neutral-100 aspect-square group cursor-pointer border border-white/40">
                    <img src="/images/a3.jpg" alt="Hobby" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  </motion.div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {}
      {/* ---------------- Section 3: Portfolio Showcase (Dark Theme) ---------------- */}
      <section id="projects" className="py-32 bg-[#09090b] min-h-screen relative overflow-hidden text-white">
        {/* Ambient Dark Mode Glows */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <BlurFade>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Showcase</span></h2>
              <p className="text-neutral-400 text-lg">รวบรวมผลงานการพัฒนาซอฟต์แวร์และใบรับรองความสามารถ</p>
            </div>
          </BlurFade>

          {/* --- Tabs --- */}
          <BlurFade delay={0.1} className="flex justify-center mb-16">
            <div className="flex p-1.5 bg-neutral-900/40 backdrop-blur-xl rounded-full border border-neutral-800 shadow-sm relative">
              {[{ id: 'projects', label: 'Projects', icon: FolderGit2 }, { id: 'certificates', label: 'Certificates', icon: GraduationCap }, { id: 'tech', label: 'Tech Stack', icon: LayoutGrid }].map((tab) => (
                <button
                  key={tab.id} 
                  onClick={(e) => { e.preventDefault(); setActiveTab(tab.id); }}
                  className={`relative flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-colors z-10 ${activeTab === tab.id ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
                >
                  {activeTab === tab.id && (<motion.div layoutId="showcase-tab" className="absolute inset-0 bg-neutral-800 rounded-full border border-neutral-700 shadow-sm -z-10" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />)}
                  <tab.icon size={16} /><span>{tab.label}</span>
                </button>
              ))}
            </div>
          </BlurFade>

          {/* --- Content Area (GRID OVERLAP FIX) --- */}
          <div className="relative w-full pb-20">
            {/* 
              [เทคนิคแก้จอเด้ง/กระตุก 100%]
              ใช้ CSS Grid เพื่อซ้อนทุก Tab ไว้ในกล่องเดียวกัน และ "เรนเดอร์ทิ้งไว้ทั้งหมด"
              - ความสูงของกล่องหลักจะเท่ากับ Tab ที่ยาวที่สุดเสมอ (ไม่มีการหดตัว)
              - ใช้ opacity และ pointer-events เพื่อสลับการแสดงผลแทนการลบโค้ด
            */}
            <div className="grid grid-cols-1 grid-rows-1 items-start">
             
              {/* --- 1. Projects Tab --- */}
              <div className={`col-start-1 row-start-1 w-full transition-all duration-500 ease-in-out ${activeTab === 'projects' ? 'opacity-100 z-20 pointer-events-auto translate-y-0' : 'opacity-0 z-0 pointer-events-none translate-y-4'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectsData.map((project, index) => (
                    <motion.div key={project.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative rounded-[2rem] p-[2px] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
                      <div className="absolute inset-[-100%] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `conic-gradient(from 90deg at 50% 50%, transparent 0%, ${project.colorHex} 50%, transparent 100%)` }} />
                      
                      <div className="relative h-full w-full bg-neutral-900/90 backdrop-blur-xl rounded-[calc(2rem-2px)] flex flex-col z-10 border border-neutral-800 overflow-hidden">
                        
                        <div className="relative w-full h-[240px] p-2 pb-0 shrink-0">
                          <div className="w-full h-full rounded-t-[1.5rem] overflow-hidden relative bg-neutral-950 flex items-center justify-center">
                            <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xl scale-110 pointer-events-none" />
                            <img src={project.image} alt={project.title} className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-20"></div>
                          </div>
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="font-bold text-xl text-white mb-2 line-clamp-1 transition-colors">{project.title}</h3>
                          <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed flex-1">{project.shortDesc}</p>
                          
                          <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-neutral-800">
                            {project.badgeTags.map((tag, i) => (
                              <span key={i} className={`theme-${project.theme} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="p-4 bg-neutral-950/50 border-t border-neutral-800 mt-auto flex flex-col gap-2">
                          <button onClick={() => setSelectedProject(project)} className="w-full py-2.5 bg-neutral-800 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-700 transition-colors shadow-sm">
                            ดูรายละเอียด <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                          
                          {/* Links Container */}
                          {(project.githubLink || project.liveLink) && (
                            <div className="flex gap-2">
                               {project.githubLink && (
                                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex-1 py-2 bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 hover:bg-neutral-800 hover:text-white transition-colors">
                                    <GithubIcon size={14} /> GitHub
                                  </a>
                               )}
                               {project.liveLink && (
                                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`flex-1 py-2 bg-${project.theme}-900/30 border border-${project.theme}-500/30 text-${project.theme}-400 text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 hover:bg-${project.theme}-900/50 hover:text-${project.theme}-300 transition-colors`}>
                                    <ExternalLink size={14} /> Live Demo
                                  </a>
                               )}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* --- 2. Certificates Tab --- */}
              <div className={`col-start-1 row-start-1 w-full transition-all duration-500 ease-in-out ${activeTab === 'certificates' ? 'opacity-100 z-20 pointer-events-auto translate-y-0' : 'opacity-0 z-0 pointer-events-none translate-y-4'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockCertificates.map((cert, index) => (
                    <motion.div
                      key={cert.id} onClick={() => setSelectedCert(cert)} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="group relative bg-neutral-900/60 backdrop-blur-md rounded-3xl p-3 border border-neutral-800 shadow-sm hover:border-emerald-500/50 transition-all duration-500 cursor-pointer flex flex-col"
                    >
                      <div className="relative aspect-[1.4/1] rounded-2xl overflow-hidden bg-neutral-950 flex items-center justify-center">
                        <iframe src={`${cert.img}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="w-full h-full pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out border-none opacity-80 group-hover:opacity-100" scrolling="no" />
                        <div className="absolute inset-0 bg-neutral-900/10 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                          <div className="px-5 py-2.5 bg-neutral-900/90 backdrop-blur-md text-white text-sm font-semibold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2"><ExternalLink size={16} /> View Certificate</div>
                        </div>
                      </div>
                      <div className="pt-4 pb-2 px-3">
                          <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors text-sm line-clamp-1">{cert.title}</h4>
                          <p className="text-xs text-neutral-500 font-medium mt-1">{cert.issuer}</p>
                        </div>
                      </motion.div>
                  ))}
                </div>
              </div>

              {/* --- 3. Tech Stack Tab --- */}
              <div className={`col-start-1 row-start-1 w-full transition-all duration-500 ease-in-out ${activeTab === 'tech' ? 'opacity-100 z-20 pointer-events-auto translate-y-0' : 'opacity-0 z-0 pointer-events-none translate-y-4'}`}>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center">
                  {techStackData.map((tech, i) => (
                    <motion.div
                      key={tech.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -5, scale: 1.05 }}
                      className="group flex flex-col items-center justify-center p-6 bg-neutral-900/50 backdrop-blur-md rounded-3xl border border-neutral-800 shadow-sm hover:border-neutral-600 transition-all duration-300 relative cursor-default"
                    >
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                      <div className="relative z-10 mb-4 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center h-12 w-12">
                        <img src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`} alt={tech.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-xs font-bold text-neutral-400 group-hover:text-white transition-colors relative z-10 tracking-wide text-center">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {}
      {/* ---------------- Section 4: Contact ---------------- */}
      <section id="contact" className="py-32 relative overflow-hidden bg-white min-h-screen flex items-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full z-10 relative">
          <div>
            <BlurFade><div className="flex items-center gap-4 mb-6"><div className="w-12 h-px bg-emerald-500"></div><h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-shine pb-2">ติดต่อพูดคุย</h2></div><p className="text-neutral-500 mb-12 text-lg leading-relaxed bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-white/60 inline-block shadow-sm">สนใจร่วมงาน หรือมีโปรเจกต์ที่อยากให้ผมช่วยพัฒนา? <br/>กรอกแบบฟอร์มเพื่อส่งข้อความตรงถึงอีเมลของผมได้เลยครับ</p></BlurFade>
            <BlurFade delay={0.1}>
              <div className="space-y-8 pl-2">
                <div className="flex items-center gap-5 group">
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm border border-neutral-100 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:border-emerald-200 transition-all duration-300 overflow-hidden"><div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div><Mail size={24} className="text-neutral-600 relative z-10 group-hover:text-emerald-600 transition-colors duration-300" /></div>
                  <div><p className="text-sm text-neutral-400 font-bold uppercase tracking-widest mb-1">Email</p><p className="font-semibold text-xl text-neutral-800">sirichokbank77@gmail.com</p></div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm border border-neutral-100 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:border-emerald-200 transition-all duration-300 overflow-hidden"><div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div><MapPin size={24} className="text-neutral-600 relative z-10 group-hover:text-emerald-600 transition-colors duration-300" /></div>
                  <div><p className="text-sm text-neutral-400 font-bold uppercase tracking-widest mb-1">Location</p><p className="font-semibold text-xl text-neutral-800">Bangkok, Thailand</p></div>
                </div>
                <div className="pt-8 border-t border-neutral-200/60">
                  <p className="text-sm text-neutral-400 font-bold uppercase tracking-widest mb-4">Social Media</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/GeorgieSaddddddd" target="_blank" rel="noopener noreferrer" className="relative group w-12 h-12 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center text-neutral-600 hover:-translate-y-1 transition-all duration-300"><div className="absolute inset-0 bg-neutral-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><div className="relative z-10 group-hover:text-white transition-colors"><GithubIcon size={22} /></div></a>
                    <a href="https://www.facebook.com/bank.sirichok.2024/" target="_blank" rel="noopener noreferrer" className="relative group w-12 h-12 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center text-neutral-600 hover:-translate-y-1 transition-all duration-300"><div className="absolute inset-0 bg-[#1877F2] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_10px_20px_-10px_rgba(24,119,242,0.5)]"></div><div className="relative z-10 group-hover:text-white transition-colors"><FacebookIcon size={22} /></div></a>
                    <a href="https://www.instagram.com/b.bank._.77/" target="_blank" rel="noopener noreferrer" className="relative group w-12 h-12 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center text-neutral-600 hover:-translate-y-1 transition-all duration-300 overflow-hidden"><div className="absolute inset-0 bg-gradient-to-tr from-[#fd5949] to-[#d6249f] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_10px_20px_-10px_rgba(214,36,159,0.5)]"></div><div className="relative z-10 group-hover:text-white transition-colors"><InstagramIcon size={22} /></div></a>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.2} className="relative mt-10 lg:mt-0">
            <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#f0f9f5] to-[#e6f4ed] p-8 lg:p-10 shadow-[0_20px_40px_-15px_rgba(50,110,94,0.15)] border-2 border-[#d3ebe0]">
                <form onSubmit={handleSubmit} className="relative">
                  <AnimatePresence>
                    {showSuccess && (
                        <motion.div initial={{ opacity: 0, y: -20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute -top-4 left-0 right-0 bg-emerald-500/90 backdrop-blur text-white px-4 py-3 rounded-2xl text-sm font-medium shadow-[0_10px_30px_rgba(16,185,129,0.3)] z-20 flex items-center justify-center gap-2 border border-emerald-400"><div className="w-5 h-5 rounded-full bg-white text-emerald-500 flex items-center justify-center font-bold text-xs">✓</div>ส่งข้อความสำเร็จ! จะรีบตอบกลับนะครับ</motion.div>
                    )}
                  </AnimatePresence>
                  <div className="space-y-6 relative z-10">
                    <div className="group/input"><label htmlFor="name" className="block text-[13px] font-bold text-neutral-400 mb-2 ml-1 group-focus-within/input:text-[#326e5e] transition-colors">ชื่อ-นามสกุล</label><input type="text" id="name" name="name" required className="w-full px-5 py-4 bg-white border border-neutral-100 rounded-[1.25rem] focus:ring-4 focus:ring-[#326e5e]/10 focus:border-[#326e5e] outline-none transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-neutral-700 placeholder:text-neutral-300" placeholder="คุณชื่ออะไรครับ?" /></div>
                    <div className="group/input"><label htmlFor="email" className="block text-[13px] font-bold text-neutral-400 mb-2 ml-1 group-focus-within/input:text-[#326e5e] transition-colors">อีเมล</label><input type="email" id="email" name="email" required className="w-full px-5 py-4 bg-white border border-neutral-100 rounded-[1.25rem] focus:ring-4 focus:ring-[#326e5e]/10 focus:border-[#326e5e] outline-none transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-neutral-700 placeholder:text-neutral-300" placeholder="example@email.com" /></div>
                    <div className="group/input"><label htmlFor="message" className="block text-[13px] font-bold text-neutral-400 mb-2 ml-1 group-focus-within/input:text-[#326e5e] transition-colors">ข้อความ</label><textarea id="message" name="message" required rows={4} className="w-full px-5 py-4 bg-white border border-neutral-100 rounded-[1.25rem] focus:ring-4 focus:ring-[#326e5e]/10 focus:border-[#326e5e] outline-none transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)] resize-none text-neutral-700 placeholder:text-neutral-300" placeholder="รายละเอียดโปรเจกต์ หรือเรื่องที่ต้องการพูดคุย..."></textarea></div>
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    <button type="submit" disabled={isSubmitting} className="relative w-full py-4 mt-2 bg-[#326e5e] text-white rounded-[1.25rem] font-bold cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed hover:bg-[#28574a] hover:shadow-[0_10px_20px_-10px_rgba(50,110,94,0.6)] transition-all duration-300 group">
                      <div className="relative z-10 flex items-center justify-center gap-2">{isSubmitting ? (<div className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>กำลังส่งข้อความ...</div>) : (<>ส่งข้อความ<Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" /></>)}</div>
                    </button>
                  </div>
                </form>
            </div>
          </BlurFade>
        </div>
      </section>
      
      {}
      <footer className="py-8 text-center text-neutral-400 text-sm border-t border-neutral-100 bg-white">
          <p>© {new Date().getFullYear()} Sirichok Leelathawornkun. All rights reserved.</p>
      </footer>
    </div>
  );
}