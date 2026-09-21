import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import blab from "../assets/img/berkeley-lab.png";
import split from "../assets/img/splitsecure_logo.jpeg";
import berkeley from "../assets/img/berkeley.svg";
import cfg from "../assets/img/images.png";
import bair from "../assets/img/BAIR.png";
import bmob from "../assets/img/b-mobile.jpeg";
import tesla from "../assets/img/tesla.png";

const experiences = [
  {
    logo: tesla,
    role: "Software Engineering Intern, Generative AI Tooling",
    company: "Tesla",
    duration: "Summer 2026",
    type: "work",
    description: [
      "Coming Soon"
    ],
    skills: ["Coming Soon"]
  },
  {
    logo: bmob,
    role: "iOS Developer",
    company: "Berkeley Mobile",
    duration: "Sep 2025 - Present",
    type: "work",
    description: [
      "Helping build Berkeley Mobile, an iOS app developed by student government to provide transit routes, library & gym info, and campus resources.",
      "Serving 30K+ students with over 3K+ monthly active users to navigate campus efficiently."
    ],
    skills: ["iOS Development", "Swift", "SwiftUI", "Git", "API Integration"]
  },
  {
    logo: bair,
    role: "Undergraduate Researcher",
    company: "Berkeley Artificial Intelligence Research (BAIR)",
    duration: "Aug 2025 - Present",
    type: "research",
    description: [
      "Conducting machine translation research for Asian low-resource languages under Prof. Kurt Keutzer.",
      "Working on optimization and model tuning to improve translation quality and accuracy."
    ],
    skills: ["Machine Learning", "NLP", "PyTorch", "Model Evaluation"]
  },
  {
    logo: split,
    role: "Software Engineering Intern",
    company: "SplitSecure",
    duration: "June 2025 – Aug 2025",
    type: "work",
    description: [
      "Implemented fine-grained access control by mapping resource ownership and permissions across services.",
      "Enabled efficient cross-service communication through global-to-local resource mapping.",
      "Built a secure stack-based system for reliable service-to-service calls."
    ],
    skills: ["Backend Engineering", "Access Control", "Security", "Distributed Systems"]
  },
  {
    logo: berkeley,
    role: "Course Staff (Academic Intern)",
    company: "UC Berkeley",
    duration: "Jan 2025 – May 2025",
    type: "teaching",
    description: [
      "Assisted student learning in CS61B (Data Structures & Algorithms), a core course with 1,000+ students.",
      "Held office hours to explain complex algorithms, and guided students on large programming projects."
    ],
    skills: ["Data Structures", "Algorithms", "Java", "Teaching & Mentoring"]
  },
  {
    logo: blab,
    role: "Undergraduate Researcher",
    company: "Berkeley Lab (LBNL)",
    duration: "Nov 2024 – May 2025",
    type: "research",
    description: [
      "Collaborated in the Laser Technology Group under Professor Vassilia Zorba on experimental research systems."
    ],
    skills: ["Research", "Laser Systems", "Data Analysis"]
  },
  {
    logo: cfg,
    role: "Software & Data Engineering Intern",
    company: "Coforge",
    duration: "May 2024 – July 2024",
    type: "work",
    description: [
      "Utilized Pandas for data manipulation and analysis, deriving insights to guide business decisions.",
      "Collaborated with the IT team to design and deploy software solutions, increasing system reliability."
    ],
    skills: ["Python", "Pandas", "Data Engineering", "Software Development"]
  }
];

const Experience = () => {
  const [showMore, setShowMore] = useState(false);

  // Show first 4 items, hide last 2 initially
  const displayedExperiences = showMore ? experiences : experiences.slice(0, 4);

  return (
    <section id="experience" className="py-12 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">
            EXPERIENCE
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200/80 ml-3 md:ml-5 pl-6 md:pl-10 space-y-7">
          <AnimatePresence initial={false}>
            {displayedExperiences.map((exp) => {
              const isResearchOrTeaching = exp.type === "research" || exp.type === "teaching";
              
              return (
                <motion.div
                  key={exp.company + exp.role}
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden"
                >
                  {/* Timeline Icon Node */}
                  <div className="absolute -left-[35px] md:-left-[47px] top-6 flex items-center justify-center w-9 h-9 rounded-full bg-white border-2 border-slate-200 group-hover:border-blue-500 group-hover:bg-blue-50/50 transition-all duration-300 shadow-sm z-10">
                    {isResearchOrTeaching ? (
                      <GraduationCap className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className="bg-white/90 backdrop-blur-sm border border-slate-200/70 rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:border-blue-200 transition-all duration-300 my-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                                      {exp.logo && (
                                        <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-slate-100 flex-shrink-0 bg-white flex items-center justify-center p-2 shadow-sm">
                                          <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                                        </div>
                                      )}
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 leading-snug">
                            {exp.role}
                          </h3>
                          <p className="text-base font-semibold text-blue-600 mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      {/* Date Badge (Clean on all devices) */}
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 bg-blue-50/70 border border-blue-100 px-3 py-1.5 rounded-full w-max flex-shrink-0">
                        <Calendar size={14} className="text-blue-500" />
                        <span className="font-mono">{exp.duration}</span>
                      </div>
                    </div>

                    {/* Bullet Descriptions */}
                    <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5 mb-1">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dropdown Expand Button */}
        <div className="flex justify-center mt-8 pl-4">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-600 hover:text-slate-800 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
          >
            {showMore ? (
              <>
                Show Less <ChevronUp size={14} />
              </>
            ) : (
              <>
                Show More <ChevronDown size={14} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
