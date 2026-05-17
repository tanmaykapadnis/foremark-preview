import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Plus, ChevronRight, Mail, MessageSquare, Briefcase, Calendar, CheckCircle2, Globe, Share2, Info } from 'lucide-react';
import { InteractiveGridPattern } from "../components/magicui/interactive-grid-pattern";
import ServicesGrid from '../components/ServicesGrid';
import { cn } from "../lib/utils";
import { Link } from 'react-router-dom';

// --- Data ---

const stats = [
  { number: "15+", label: "Projects Delivered", text: "Successful delivery of web and mobile applications across various industries." },
  { number: "100%", label: "Client Retention", text: "We build long-term partnerships through consistent quality and technical excellence." },
  { number: "3x", label: "Avg. Client Growth", text: "Our systems are designed to scale and drive measurable business impact." },
  { number: "5+", label: "Industries Served", text: "Expertise across different domains from startups to established businesses." }
];

const curatedProjects = [
  {
    title: "Noto Café",
    desc: "A cozy digital home for a neighborhood café, featuring seasonal menus, event updates, and warm visual storytelling",
    client: "Noto Café & Bakery",
    date: "Apr 29, 2025",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
    accent: "#f59e0b"
  },
  {
    title: "Aurora Legal",
    desc: "A modern, trustworthy website for a boutique law firm, designed to convey professionalism with a human touch",
    client: "Aurora Legal Group",
    date: "May 3, 2025",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    accent: "#7c3aed"
  },
  {
    title: "Field Journal Co.",
    desc: "A blog-meets-shop experience for a travel writer, combining editorial storytelling with a curated gear collection",
    client: "Lucy Rivera",
    date: "Apr 4, 2025",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200",
    accent: "#10b981"
  }
];

const services = [
  {
    title: "Website Design",
    desc: "Craft a visual identity that speaks with clarity and confidence. From logos to brand guidelines, I help businesses tell their story through cohesive design",
    tags: ["Visual Identity", "Logo Design", "Brand Guidelines", "Typography", "+more"]
  },
  {
    title: "Framer Website",
    desc: "I build high-performing websites in Framer that are responsive, animated, and easy for clients to edit—no code required. Perfect for portfolios, startups, and product launches",
    tags: ["Landing Page", "Multipage Website", "Website Migration", "+more"]
  },
  {
    title: "UI/UX Design",
    desc: "From wireframes to high-fidelity mockups, I design intuitive user interfaces that solve problems and elevate experiences—always guided by real user needs",
    tags: ["Web Design", "Mobile Design", "Prototyping", "Design System", "+more"]
  }
];

const steps = [
  { title: "Book a Call", desc: "Let’s chat about your project, goals, and how I can help bring your vision to life", icon: Calendar },
  { title: "Hire Me on Contra", desc: "Send a request through Contra to officially kick off our collaboration", icon: Briefcase },
  { title: "Develop", desc: "We’ll work closely—sharing updates, feedback, and files—all organized through Contra", icon: CheckCircle2 },
  { title: "Deliver", desc: "Final designs will be delivered directly via Contra, polished and ready to use", icon: MessageSquare },
  { title: "Support", desc: "Enjoy 1 month of free post-launch support for tweaks, questions, or guidance", icon: Plus }
];

const testimonials = [
  { text: "We needed a quick turnaround, and Foremark delivered a Framer site that was not only fast but visually stunning. Highly recommend.", name: "Jenna Morales", role: "Design Lead at LaunchNest" },
  { text: "Their attention to detail is unmatched. Our mobile app now feels intuitive and premium—our users noticed the difference right away.", name: "Theo Barnes", role: "Product Manager at Driftly" },
  { text: "Working with Foremark felt like working with a true engineering partner. They brought clarity and elegance to our digital presence.", name: "Marcus Allen", role: "CEO at Wellnest" }
];

const carouselImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-12 overflow-hidden">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[160%] skew-y-12",
        )}
      />
      <div className="relative z-10 flex flex-col items-center text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-portfolio-dark/10 bg-white/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-portfolio-gold animate-pulse" />
          Building digital solutions that drive growth
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
        >
          We are software <br /> 
          <span className="text-portfolio-muted text-blue-600">developer company.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-portfolio-muted text-lg md:text-xl max-w-2xl mb-10"
        >
          We build scalable web applications, beautiful websites, <br /> and digital products that help businesses grow faster.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/contact" className="btn-primary flex items-center gap-2 px-10 border border-transparent hover:border-portfolio-gold transition-colors">
            <MessageSquare size={18} /> Let's Talk
          </Link>
          <a href="mailto:hello@foremark.in" className="btn-ghost flex items-center gap-2 px-10 text-white/80 hover:text-white transition-colors">
            <Mail size={18} /> Email Us
          </a>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden mt-8 pb-16">
        <motion.div 
          className="flex gap-4 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ width: "fit-content" }}
        >
          {[...carouselImages, ...carouselImages].map((img, i) => (
            <div 
              key={i} 
              className="w-[400px] md:w-[600px] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-portfolio-dark/5 shrink-0 bg-white"
            >
              <img 
                src={img} 
                alt={`Project ${i}`} 
                className="w-full h-full object-cover transition-all duration-500" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-32">
    <div className="flex flex-col mb-12">
      <span className="text-[10px] uppercase tracking-[0.2em] text-portfolio-muted font-bold mb-8">ABOUT US</span>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="lg:col-span-5 bg-portfolio-dark text-white p-12 rounded-[2rem] flex flex-col justify-center min-h-[500px]"
        >
          <div className="mb-8 w-16 h-16">
            <img src="/Foremark_Logo_-removebg-preview.png" alt="Foremark Technologies" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Foremark Technologies</h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/80">
            We design and engineer intelligent digital systems that help companies build, scale, and automate modern technology platforms. Our expertise drives impactful gains and powerful results.
          </p>
        </motion.div>
        
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] border border-portfolio-dark/5 flex flex-col justify-center group hover:shadow-xl transition-all duration-500"
            >
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">{stat.number}</h3>
                <p className="text-[10px] uppercase tracking-widest text-portfolio-muted font-bold mb-6">{stat.label}</p>
              </div>
              <p className="text-portfolio-muted text-base leading-relaxed">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CuratedWork = () => (
  <section id="projects" className="py-32">
    <div className="flex justify-between items-end mb-20">
      <div>
        <span className="text-portfolio-gold font-bold mb-3 text-xs tracking-widest block uppercase">PROJECTS</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">A curated collection of <br /> websites designed with care</h2>
      </div>
      <Link 
        to="/projects" 
        className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-portfolio-muted hover:text-portfolio-dark transition-colors"
      >
        All Projects <ChevronRight size={14} />
      </Link>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
      {curatedProjects.map((p, i) => (
        <motion.div 
          key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
          className="flex flex-col group"
        >
          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-8 shadow-sm">
            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-portfolio-muted font-bold mb-1">CLIENT</span>
                <h4 className="text-xl font-bold text-portfolio-dark">{p.client}</h4>
              </div>
              <Link 
                to="/projects"
                className="w-12 h-12 rounded-full border border-portfolio-dark/10 flex items-center justify-center hover:bg-portfolio-dark hover:text-white transition-all duration-500"
              >
                <ArrowUpRight size={20} />
              </Link>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-tight group-hover:text-portfolio-gold transition-colors duration-300">
              {p.title}
            </h3>
            <p className="text-base text-portfolio-muted leading-relaxed max-w-md">
              {p.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-32">
    <div className="bg-portfolio-dark rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col items-center text-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M0 200C100 150 200 180 300 120C400 60 500 100 600 80C700 60 800 120 1000 100" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="relative z-10 max-w-3xl">
        <span className="text-portfolio-gold font-bold mb-6 text-xs tracking-widest block uppercase">Ready to start?</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Let's build something extraordinary together.</h2>
        <p className="text-lg text-white/60 mb-12">Whether you need a full application built from scratch or just want to explore how we can help your business grow.</p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-portfolio-gold text-portfolio-dark font-bold px-10 py-5 rounded-full hover:scale-105 transition-transform uppercase tracking-widest text-sm shadow-xl shadow-portfolio-gold/20"
        >
          Contact Us <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-8 md:px-16">
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <CuratedWork />
      <CTASection />
    </div>
  );
};

export default Home;
