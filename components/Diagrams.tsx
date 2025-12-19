
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Users, Server, Database, Cloud } from 'lucide-react';

// --- IMPACT METRICS DIAGRAM ---
export const ImpactMetrics: React.FC = () => {
  const metrics = [
    { label: "Cost Reduction", value: "100M", suffix: "+ NTD/Yr", desc: "Optimized one-click logistics & automated processes", color: "bg-green-500", width: "95%" },
    { label: "Efficiency Boost", value: "200", suffix: "%", desc: "ERP Finance module process automation", color: "bg-blue-500", width: "90%" },
    { label: "IT Cost Savings", value: "40", suffix: "%", desc: "SRE Implementation & Cloud Optimization", color: "bg-purple-500", width: "60%" },
    { label: "Team Growth", value: "80", suffix: "+", desc: "Managed large-scale R&D teams across regions", color: "bg-nobel-gold", width: "80%" },
  ];

  return (
    <div className="flex flex-col p-8 bg-white rounded-xl shadow-sm border border-stone-200 w-full">
      <h3 className="font-serif text-2xl mb-6 text-stone-800 flex items-center gap-3">
        <TrendingUp className="text-nobel-gold" /> Key Achievements
      </h3>
      
      <div className="space-y-8">
        {metrics.map((m, idx) => (
          <div key={idx} className="relative">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-bold text-stone-500 uppercase tracking-wider">{m.label}</span>
              <div className="text-right">
                <span className="text-2xl font-serif font-bold text-stone-900">{m.value}</span>
                <span className="text-sm text-stone-500 font-medium ml-1">{m.suffix}</span>
              </div>
            </div>
            
            <div className="h-3 w-full bg-stone-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: m.width }}
                transition={{ duration: 1.5, delay: idx * 0.2 }}
                className={`h-full rounded-full ${m.color}`}
              />
            </div>
            <p className="mt-2 text-xs text-stone-500 italic">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- SKILLS CLOUD ---
export const SkillsCloud: React.FC = () => {
  const categories = [
    { 
      name: "Leadership", 
      icon: <Users size={16} />,
      skills: ["Team Building (80+)", "Agile/Scrum", "Strategic Planning", "Digital Transformation", "Cross-functional Integration"] 
    },
    { 
      name: "Cloud & DevOps", 
      icon: <Cloud size={16} />,
      skills: ["AWS", "GCP", "Azure", "SRE", "Docker/K8s", "CI/CD"] 
    },
    { 
      name: "Development", 
      icon: <Server size={16} />,
      skills: ["C#.NET", "React.js", "Node.js", "React Native", "ASP.NET Core"] 
    },
    { 
      name: "Data & Systems", 
      icon: <Database size={16} />,
      skills: ["Oracle NetSuite ERP", "MS-SQL", "Oracle DB", "CRM/POS Integration", "PowerAutomate"] 
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="flex flex-col p-8 bg-[#F5F4F0] rounded-xl border border-stone-200 w-full h-full min-h-[400px]">
      <h3 className="font-serif text-2xl mb-2 text-stone-900">Technical Expertise</h3>
      <p className="text-stone-500 text-sm mb-6">20+ Years of hands-on and managerial experience.</p>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(idx)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
              activeCategory === idx 
                ? 'bg-stone-900 text-white shadow-md' 
                : 'bg-white text-stone-500 border border-stone-200 hover:border-stone-400'
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex-1 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories[activeCategory].skills.map((skill, idx) => (
                <motion.div
                    key={`${activeCategory}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm flex items-center gap-3"
                >
                    <div className="w-2 h-2 rounded-full bg-nobel-gold"></div>
                    <span className="font-medium text-stone-700">{skill}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

// --- CERTIFICATIONS ---
export const CertificationGrid: React.FC = () => {
    const certs = [
        { code: "CSM", name: "Certified Scrum Master", org: "Scrum Alliance" },
        { code: "PMP", name: "Project Management Professional", org: "PMI" },
        { code: "MCPD", name: "Microsoft Certified Professional Developer", org: "Microsoft" },
        { code: "ITILv3", name: "Information Technology Infrastructure Library", org: "Axelos" },
        { code: "ITSMS", name: "IT Service Management System", org: "ISO/IEC 20000" },
        { code: "OCA", name: "Oracle Certified Associate", org: "Oracle" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certs.map((c, i) => (
                <div key={i} className="group p-4 bg-stone-800 border border-stone-700 rounded-lg hover:border-nobel-gold transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-nobel-gold text-lg">{c.code}</span>
                        <Award size={16} className="text-stone-500 group-hover:text-nobel-gold transition-colors" />
                    </div>
                    <div className="text-stone-300 text-sm font-medium leading-tight mb-1">{c.name}</div>
                    <div className="text-stone-500 text-xs">{c.org}</div>
                </div>
            ))}
        </div>
    )
}
