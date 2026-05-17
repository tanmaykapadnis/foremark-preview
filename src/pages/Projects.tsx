import { motion } from 'framer-motion';
import { cn } from "../lib/utils";
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Revolutionizing Digital Healthcare",
    desc: "A comprehensive health management system focused on patient care and streamlined clinical workflows.",
    category: "HEALTHCARE",
    client: "Regius Care",
    link: "https://regiuscare.com",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Next-Gen Media Distribution",
    desc: "High-performance content platform delivering real-time news and media to millions of users.",
    category: "MEDIA & ENTERTAINMENT",
    client: "CenterSpread",
    link: "https://centerspread.in",
    image: "https://images.unsplash.com/photo-1492619339314-84124846744c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Legal Tech Transformation",
    desc: "Automated legal document management and client portal for modern law practices.",
    category: "LEGAL TECH",
    client: "Sharma & Associates",
    link: "https://sharmalaw.in",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Fintech Innovation Hub",
    desc: "Secure financial dashboard with real-time analytics and cross-border payment integration.",
    category: "FINTECH",
    client: "FinTrack Systems",
    link: "https://fintrack.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "E-commerce Experience Design",
    desc: "A luxury retail platform focused on immersive shopping experiences and high-conversion checkouts.",
    category: "RETAIL",
    client: "Luxe Wear",
    link: "https://luxewear.com",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "SaaS Analytics Dashboard",
    desc: "Powerful data visualization for enterprise-level marketing automation and lead tracking.",
    category: "ENTERPRISE",
    client: "DataFlow",
    link: "https://dataflow.io",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  }
];

const brandLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b9/Tesla_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Nike_logo.svg",
];

const ProjectsPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-16 pb-32">
      {/* Hero Section */}
      <div className="flex flex-col mb-16">
        <span className="section-label text-portfolio-gold font-bold mb-3 text-xs tracking-widest">CASE STUDIES</span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Examples of <br /> our work</h1>
        <p className="text-base text-portfolio-muted max-w-xl leading-relaxed">
          These are our projects done till now. Simple and clear.
        </p>
        
        {/* Clients Badge */}
        <div className="flex items-center gap-4 mt-10">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-portfolio-bg overflow-hidden shadow-sm">
                <img src={`https://i.pravatar.cc/150?u=acc${i}`} alt="Client" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold text-sm">15+ happy clients!</p>
            <button className="text-[10px] text-portfolio-muted hover:text-portfolio-dark flex items-center gap-1 transition-colors">
              Join them now <ArrowUpRight size={10} />
            </button>
          </div>
        </div>
      </div>

      {/* Brand Carousel - Infinite Left to Right */}
      <div className="w-full border-y border-portfolio-dark/5 py-10 mb-20 overflow-hidden">
        <motion.div 
          className="flex gap-24 items-center whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ width: "fit-content" }}
        >
          {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, i) => (
            <div key={i} className="h-6 md:h-8 w-28 shrink-0 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img src={logo} alt="Brand" className="h-full max-w-full object-contain" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid - 2 per row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="flex flex-col group"
          >
            {/* Project Image */}
            <div className="relative aspect-[16/11] rounded-xl overflow-hidden mb-8 shadow-sm">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-bold text-portfolio-dark uppercase tracking-widest shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-portfolio-muted font-bold mb-1">CLIENT</span>
                  <h4 className="text-xl font-bold text-portfolio-dark">{project.client}</h4>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-portfolio-dark/10 flex items-center justify-center hover:bg-portfolio-dark hover:text-white transition-all duration-500 group-hover:border-portfolio-dark"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-tight group-hover:text-portfolio-gold transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-base text-portfolio-muted leading-relaxed max-w-md">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
