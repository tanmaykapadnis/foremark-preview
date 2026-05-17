import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { cn } from "../lib/utils";
import { ArrowUpRight, Code, Server, Zap, ChevronRight } from 'lucide-react';

const ServiceCard = ({ title, desc, children, className }: { title: string, desc: string, children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
    className={cn("bg-white border border-portfolio-dark/5 rounded-[2rem] p-8 flex flex-col h-full group hover:shadow-2xl transition-all duration-500", className)}
  >
    <div className="flex-1 mb-10 overflow-hidden rounded-2xl bg-portfolio-dark/[0.02] relative min-h-[300px] flex items-center justify-center">
      {children}
    </div>
    <div className="mt-auto">
      <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-portfolio-gold transition-colors">{title}</h3>
      <p className="text-portfolio-muted text-base leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const WebsiteAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0.3, 0.6], [0, -60]);
  const xRight = useTransform(scrollYProgress, [0.3, 0.6], [0, 60]);
  const rotateLeft = useTransform(scrollYProgress, [0.3, 0.6], [0, -10]);
  const rotateRight = useTransform(scrollYProgress, [0.3, 0.6], [0, 10]);
  const opacitySide = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center p-8">
      {/* Side Pages */}
      <motion.div 
        style={{ x: xLeft, rotate: rotateLeft, opacity: opacitySide }}
        className="absolute w-40 h-56 bg-white rounded-xl shadow-lg border border-portfolio-dark/5 overflow-hidden z-0"
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
          <div className="w-8 h-2 bg-portfolio-dark/10 rounded mb-4" />
          <div className="w-full h-24 bg-portfolio-dark/5 rounded mb-4" />
          <div className="space-y-2">
            <div className="w-full h-1 bg-portfolio-dark/5 rounded" />
            <div className="w-2/3 h-1 bg-portfolio-dark/5 rounded" />
          </div>
        </div>
      </motion.div>
      <motion.div 
        style={{ x: xRight, rotate: rotateRight, opacity: opacitySide }}
        className="absolute w-40 h-56 bg-white rounded-xl shadow-lg border border-portfolio-dark/5 overflow-hidden z-0"
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 p-4">
          <div className="w-8 h-2 bg-portfolio-dark/10 rounded mb-4" />
          <div className="w-full h-24 bg-portfolio-dark/5 rounded mb-4" />
          <div className="space-y-2">
            <div className="w-full h-1 bg-portfolio-dark/5 rounded" />
            <div className="w-2/3 h-1 bg-portfolio-dark/5 rounded" />
          </div>
        </div>
      </motion.div>
      {/* Main Page */}
      <motion.div className="relative w-48 h-64 bg-white rounded-xl shadow-2xl border border-portfolio-dark/10 overflow-hidden z-10">
        <div className="w-full h-full p-4">
          <div className="flex justify-between mb-6">
            <div className="w-10 h-3 bg-portfolio-dark/10 rounded" />
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>
          </div>
          <div className="w-full h-32 bg-gradient-to-tr from-portfolio-gold/20 to-orange-100 rounded-lg mb-4" />
          <div className="space-y-3">
            <div className="w-full h-2 bg-portfolio-dark/10 rounded" />
            <div className="w-3/4 h-2 bg-portfolio-dark/10 rounded" />
            <div className="w-1/2 h-2 bg-portfolio-gold/20 rounded" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WebAppAnimation = () => {
  const [code, setCode] = useState('');
  const fullCode = [
    'class ChatBot {',
    '  address public owner;',
    '  int private response;',
    '  constructor() {',
    '    owner = msg.sender;',
    '  }',
    '  function respond() {',
    '    // logic here',
    '  }',
    '}'
  ];

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentLine = fullCode[lineIdx];
      
      if (!isDeleting) {
        setCode(prev => {
          const lines = prev.split('\n');
          lines[lineIdx] = currentLine.substring(0, charIdx + 1);
          return lines.join('\n');
        });
        charIdx++;

        if (charIdx === currentLine.length) {
          if (lineIdx === fullCode.length - 1) {
            timeout = setTimeout(() => { isDeleting = true; }, 2000);
          } else {
            lineIdx++;
            charIdx = 0;
            setCode(prev => prev + '\n');
            timeout = setTimeout(type, 200);
          }
        } else {
          timeout = setTimeout(type, 50);
        }
      } else {
        // Deleting last 2 lines
        if (lineIdx > fullCode.length - 3) {
          const lines = code.split('\n');
          const lastLine = lines[lines.length - 1];
          if (lastLine.length > 0) {
            lines[lines.length - 1] = lastLine.substring(0, lastLine.length - 1);
            setCode(lines.join('\n'));
            timeout = setTimeout(type, 30);
          } else {
            lines.pop();
            setCode(lines.join('\n'));
            lineIdx--;
            timeout = setTimeout(type, 100);
          }
        } else {
          isDeleting = false;
          lineIdx = fullCode.length - 2;
          charIdx = 0;
          timeout = setTimeout(type, 500);
        }
      }
    };

    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="w-full max-w-[280px] bg-portfolio-dark rounded-xl p-6 shadow-2xl border border-white/5 font-mono text-[11px] leading-relaxed overflow-hidden">
        <div className="flex gap-1.5 mb-4">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
        </div>
        <div className="text-white/40 mb-2">{'// Custom Web App'}</div>
        <pre className="text-portfolio-gold/90 whitespace-pre-wrap">
          {code}
          <motion.span 
            animate={{ opacity: [1, 0] }} 
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1.5 h-3 bg-portfolio-gold ml-0.5"
          />
        </pre>
      </div>
    </div>
  );
};

const ServerAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="relative">
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 1, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-40 h-48 bg-portfolio-dark rounded-xl border border-white/10 p-4 flex flex-col gap-3 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-2">
            <Server size={16} className="text-portfolio-gold" />
            <div className="flex gap-1">
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            </div>
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} className="h-6 w-full bg-white/5 rounded flex items-center px-3 gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-portfolio-gold/40" />
              <div className="h-1 w-12 bg-white/10 rounded" />
              <motion.div 
                animate={{ x: [0, 40, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className="ml-auto w-1 h-1 rounded-full bg-blue-400"
              />
            </div>
          ))}
          <div className="mt-auto flex justify-between">
            <div className="h-1 w-8 bg-white/10 rounded" />
            <div className="h-1 w-4 bg-white/10 rounded" />
          </div>
        </motion.div>
        {/* Glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-portfolio-gold/20 blur-[60px] rounded-full" />
      </div>
    </div>
  );
};

const AutomationAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-4 relative">
        <div className="absolute w-[2px] h-full bg-gradient-to-b from-portfolio-dark/5 via-portfolio-gold/30 to-portfolio-dark/5" />
        
        {/* Trigger */}
        <motion.div 
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1, 0.95],
            boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 20px rgba(212,175,55,0.2)", "0 0 0px rgba(212,175,55,0)"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative z-10 px-6 py-3 bg-white border border-portfolio-dark/10 rounded-xl flex items-center gap-3 shadow-lg"
        >
          <div className="w-8 h-8 rounded-lg bg-portfolio-dark flex items-center justify-center text-white">
            <Zap size={14} />
          </div>
          <span className="text-sm font-bold text-portfolio-dark">Trigger</span>
        </motion.div>

        {/* Arrow */}
        <div className="h-6 w-px bg-portfolio-dark/10" />

        {/* Prompts */}
        <motion.div 
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1, 0.95],
            boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 20px rgba(212,175,55,0.2)", "0 0 0px rgba(212,175,55,0)"]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="relative z-10 px-6 py-3 bg-white border border-portfolio-dark/10 rounded-xl flex items-center gap-3 shadow-lg"
        >
          <div className="w-8 h-8 rounded-lg bg-portfolio-gold flex items-center justify-center text-white">
            <Code size={14} />
          </div>
          <span className="text-sm font-bold text-portfolio-dark">Prompts</span>
        </motion.div>

        {/* Arrow */}
        <div className="h-6 w-px bg-portfolio-dark/10" />

        {/* Send Email */}
        <motion.div 
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1, 0.95],
            boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 20px rgba(212,175,55,0.2)", "0 0 0px rgba(212,175,55,0)"]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          className="relative z-10 px-6 py-3 bg-white border border-portfolio-dark/10 rounded-xl flex items-center gap-3 shadow-lg"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">
            <ArrowUpRight size={14} />
          </div>
          <span className="text-sm font-bold text-portfolio-dark">Send Email</span>
        </motion.div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  return (
    <section id="services-grid" className="py-32">
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          What We Offer
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Premium engineering <br /> for modern businesses
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-portfolio-muted text-lg max-w-2xl mx-auto"
        >
          From concept to code, we craft functional, high-performing websites and digital products.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <ServiceCard 
          title="Website Development" 
          desc="Crafting responsive, stunning websites tailored perfectly to your business goals."
        >
          <WebsiteAnimation />
        </ServiceCard>

        <ServiceCard 
          title="Web App / Software Development" 
          desc="Creating powerful web apps streamlining workflows, enhancing experiences."
        >
          <WebAppAnimation />
        </ServiceCard>

        <ServiceCard 
          title="Web Servers & Hosting" 
          desc="Secure, scalable infrastructure and managed hosting for high-performance applications."
        >
          <ServerAnimation />
        </ServiceCard>

        <ServiceCard 
          title="Business Automation" 
          desc="We map your business processes and build intelligent automations that save time."
        >
          <AutomationAnimation />
        </ServiceCard>
      </div>
    </section>
  );
};

export default ServicesGrid;