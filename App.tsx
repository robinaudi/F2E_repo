
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, AbstractTechScene } from './components/QuantumScene';
import { ImpactMetrics, SkillsCloud, CertificationGrid } from './components/Diagrams';
import { ArrowDown, Menu, X, Linkedin, Mail, Phone, ExternalLink, Briefcase } from 'lucide-react';

const ExperienceCard = ({ role, company, period, highlights, stack, delay }: { role: string, company: string, period: string, highlights: string[], stack: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full border-l-4 border-l-nobel-gold hover:border-l-stone-900" style={{ animationDelay: delay }}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="font-serif text-2xl text-stone-900 mb-1">{company}</h3>
            <p className="text-nobel-gold font-bold uppercase tracking-widest text-xs mb-2">{role}</p>
          </div>
          <div className="px-3 py-1 bg-stone-100 text-stone-500 text-xs font-mono rounded-full whitespace-nowrap mt-2 md:mt-0">
            {period}
          </div>
      </div>
      
      <ul className="space-y-3 mb-6">
          {highlights.map((h, i) => (
              <li key={i} className="text-stone-600 text-sm leading-relaxed flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-300 flex-shrink-0"></span>
                  {h}
              </li>
          ))}
      </ul>
      
      <div className="mt-auto pt-4 border-t border-stone-100">
          <p className="text-xs text-stone-400 font-mono">
              <span className="font-bold text-stone-500">Tech:</span> {stack}
          </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center text-nobel-gold font-serif font-bold text-xl shadow-sm">RH</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              ROBIN HSU
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Experience</a>
            <a href="#skills" onClick={scrollToSection('skills')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Expertise</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Contact</a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Experience</a>
            <a href="#skills" onClick={scrollToSection('skills')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Expertise</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.85)_0%,rgba(249,248,244,0.4)_60%,rgba(249,248,244,0)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-1 border border-stone-300 text-stone-500 text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/40">
            20+ Years Experience
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight mb-6 text-stone-900 drop-shadow-sm">
            Robin Hsu <br/>
            <span className="font-normal text-stone-500 text-2xl md:text-4xl block mt-4 font-sans tracking-tight">Senior Technology Executive</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-10">
            Strategic leadership in Digital Transformation, ERP Integration, and Agile Development. Driving business growth through technical innovation.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
             <a href="#experience" onClick={scrollToSection('experience')} className="px-8 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all shadow-lg text-sm font-bold tracking-widest uppercase">
                View Work
             </a>
             <div className="flex gap-4 mt-4 md:mt-0">
                 <a href="mailto:robin.hsu@example.com" className="p-3 bg-white border border-stone-200 rounded-full hover:text-nobel-gold transition-colors text-stone-600 shadow-sm"><Mail size={20} /></a>
                 <a href="#" className="p-3 bg-white border border-stone-200 rounded-full hover:text-nobel-gold transition-colors text-stone-600 shadow-sm"><Linkedin size={20} /></a>
             </div>
          </div>
        </div>
      </header>

      <main>
        {/* Introduction */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-nobel-gold uppercase">Professional Profile</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">Architecture & Strategy</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
              <p className="text-stone-500 italic">
                "Standardization before Systematization."
              </p>
            </div>
            <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-6">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">W</span>ith over two decades of experience in the software industry, I specialize in building and managing agile development teams and executing comprehensive technical roadmaps.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                  <li className="flex items-start gap-3">
                      <Briefcase className="text-nobel-gold mt-1 flex-shrink-0" size={18} />
                      <span>Horizontal Integration of Web/App, POS, CRM, EIS, and ERP systems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <Briefcase className="text-nobel-gold mt-1 flex-shrink-0" size={18} />
                      <span>10+ years experience on both Client (甲方) and Vendor (乙方) sides.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <Briefcase className="text-nobel-gold mt-1 flex-shrink-0" size={18} />
                      <span>Expert in Cloud Solutions & Technical Debt Resolution.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <Briefcase className="text-nobel-gold mt-1 flex-shrink-0" size={18} />
                      <span>Successful migration of core financial systems.</span>
                  </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact & Skills */}
        <section id="skills" className="py-24 bg-[#F9F8F4] border-t border-stone-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ImpactMetrics />
                    <SkillsCloud />
                </div>
            </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 bg-white border-t border-stone-200">
             <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Career Trajectory</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">Experience</h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <ExperienceCard 
                        company="91APP"
                        role="Director / Product Development"
                        period="2022 - Present"
                        highlights={[
                            "Led digital transformation and internal system reconstruction for operational efficiency.",
                            "Implemented Oracle NetSuite ERP: Managed comparison, negotiation, and integration. Efficiency +200%.",
                            "AI Integration: Introduced RPA (PowerAutomate) reducing listing costs by 80%, and Smart Chatbots improving support efficiency by 50%.",
                            "Inventory Management: Optimized cross-platform allocation (Momo, Shopee, etc.) and reduced stock/oversell risks."
                        ]}
                        stack="C#.NET, MS-SQL, Github, AWS, GCP, Oracle Cloud"
                        delay="0s"
                    />

                    <ExperienceCard 
                        company="EZTABLE"
                        role="VP of Technology & Talent"
                        period="2020 - 2022"
                        highlights={[
                            "Rebuilt group operations and systems (Web/App/Backend). Managed 20+ IT & Ops staff.",
                            "Optimized Online Booking: Adopted AWS cloud solutions, solving technical debt and enabling new feature development.",
                            "SRE Implementation: Reduced IT costs by 40% and operations costs by 100% while maintaining GMV growth.",
                            "B2B Backend: Solved high-traffic paralysis (700k req/min) during top restaurant booking rushes."
                        ]}
                        stack="React.js, Node.JS, React Native, My-SQL, AWS, GCP"
                        delay="0.1s"
                    />

                    <ExperienceCard 
                        company="TutorABC"
                        role="Senior R&D Manager"
                        period="2014 - 2020"
                        highlights={[
                            "Built and scaled teams (80+ staff) across marketing, finance, and HR R&D.",
                            "Social CRM: Integrated CTI with LINE OA, saving 2M/year in telecom costs.",
                            "Digital Transformation: Achieved 'One-click' registration (+10% booking), deal closing (+30% conversion), and shipping (saving $100M NTD/year in admin costs).",
                            "Established #1999 internal helpdesk, improving issue resolution efficiency by 20%."
                        ]}
                        stack="C#.NET, MS-SQL, SVN, Git, Alibaba Cloud"
                        delay="0.2s"
                    />

                     <ExperienceCard 
                        company="WistronITS / GM Office"
                        role="Project Manager"
                        period="2013 - 2014"
                        highlights={[
                            "Project window for technical solution evaluation and cross-system integration.",
                            "Key Projects: Taipei City CooC-Cloud (Education), Fubon Life Insurance Underwriting Digitization."
                        ]}
                        stack="System Integration, Tech Evaluation"
                        delay="0.3s"
                    />

                    <ExperienceCard 
                        company="RSL (Tengyun Tech)"
                        role="PM / System Analyst / R&D"
                        period="2006 - 2013"
                        highlights={[
                            "Retail Ecosystem: POS+ERP setup, sales, marketing, and finance management.",
                            "System Integration: EasyCard, Credit Card acquirers, 3rd party payments, E-invoice.",
                            "Achievements: Upgraded dev stack (ASP to .NET), increased billing accuracy/speed by 50%, helped company achieve Microsoft/Oracle Gold Partner status."
                        ]}
                        stack="ASP.NET, Oracle DB, Visual SourceSafe"
                        delay="0.4s"
                    />
                </div>
             </div>
        </section>

        {/* Certifications & Education */}
        <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
                 <AbstractTechScene />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                     <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                            Credentials
                        </div>
                        <h2 className="font-serif text-4xl mb-6 text-white">Education & Certifications</h2>
                        <p className="text-lg text-stone-400 mb-8 leading-relaxed">
                           Continuous learning and professional validation through industry-recognized certifications.
                        </p>
                        
                        <div className="mb-10">
                             <h3 className="text-xl font-serif text-white mb-2">Education</h3>
                             <div className="p-4 border border-stone-700 rounded-lg bg-stone-800/50 backdrop-blur-sm">
                                <div className="text-nobel-gold font-bold">Tamkang University</div>
                                <div className="text-stone-300">EMBA, Information Management</div>
                             </div>
                        </div>

                        <CertificationGrid />
                     </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <section id="contact" className="bg-white py-24 border-t border-stone-200">
             <div className="container mx-auto px-6 text-center">
                 <h2 className="font-serif text-4xl text-stone-900 mb-8">Ready to Collaborate?</h2>
                 <p className="text-stone-600 max-w-xl mx-auto mb-12">
                    Available for consulting, speaking engagements, and senior leadership roles.
                 </p>
                 <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <a href="tel:0919309709" className="flex items-center gap-3 px-6 py-4 bg-[#F9F8F4] rounded-lg hover:bg-stone-100 transition-colors border border-stone-200 w-full md:w-auto justify-center">
                        <Phone size={20} className="text-nobel-gold" />
                        <span className="font-medium text-stone-800">0919-309-709</span>
                    </a>
                     <a href="mailto:robin.hsu@example.com" className="flex items-center gap-3 px-6 py-4 bg-[#F9F8F4] rounded-lg hover:bg-stone-100 transition-colors border border-stone-200 w-full md:w-auto justify-center">
                        <Mail size={20} className="text-nobel-gold" />
                        <span className="font-medium text-stone-800">Email Me</span>
                    </a>
                 </div>
             </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-xl mb-1">ROBIN HSU</div>
                <p className="text-xs text-stone-600 uppercase tracking-widest">Senior Technology Executive</p>
            </div>
            <div className="text-xs text-stone-600">
                © {new Date().getFullYear()} Robin Hsu. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
