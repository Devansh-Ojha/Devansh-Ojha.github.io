import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import ProfilePic from "../assets/img/pic.png";

const About = () => {
  return (
    <motion.section
      id="home"
      className="min-h-[85vh] flex items-center px-4 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Column (Photo & Education) */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-center gap-6 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 -z-10 blur-xl group-hover:scale-105 transition-transform duration-500" />
            <img
              src={ProfilePic}
              className="w-80 h-80 object-cover rounded-full shadow-md border-4 border-white bg-slate-50 transition-all duration-300 group-hover:shadow-lg"
              alt="Devansh Ojha"
            />
          </div>

          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white/95 border border-slate-200/70 border-l-4 border-l-blue-500 rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl hover:border-slate-300 transition-all duration-300">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-blue-600 font-bold mb-5">
                <GraduationCap size={15} />
                <span>Education</span>
              </div>
              <div className="space-y-2 text-left text-slate-600">
                <p className="text-base font-normal leading-relaxed tracking-[0.01em] text-slate-600">
                  University of California, Berkeley
                </p>
                <p className="text-base font-normal leading-relaxed tracking-[0.01em] text-slate-600">
                  B.S. in Electrical Engineering &amp; Computer Science (EECS)
                </p>
                <p className="text-base font-normal leading-relaxed tracking-[0.01em] text-slate-600">
                  Expected graduation: May 2027
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right Column (Bio Description) */}
        <motion.div 
          className="lg:col-span-5 prose prose-slate text-left" 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-light tracking-[-0.06em] text-slate-900 mb-6 uppercase">
            ABOUT ME
          </h2>
          <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed tracking-[0.01em]">
            <p>
              Hi, I'm <strong className="text-slate-900">Devansh Ojha</strong>. I'm a senior at <strong className="text-slate-900 font-semibold">UC Berkeley</strong> studying <strong className="text-slate-900 font-semibold">Electrical Engineering and Computer Science</strong>.
            </p>
            <p>
              I'm part of <a href="https://bair.berkeley.edu/" target="_blank" rel="noreferrer" className="font-semibold text-blue-900 hover:text-blue-700">Berkeley Artificial Intelligence Research (BAIR)</a> where I do NLP research. My interests include hardware-aware ML, hardware–software co-design, AI software ecosystems, scalable AI infrastructure, model evaluation, and agentic systems.
            </p>
            <p>
              I was a Software Engineering Intern — AI Tooling on <a href="https://www.tesla.com/energy" target="_blank" rel="noreferrer" className="font-semibold text-blue-900 hover:text-blue-700">Tesla Energy’s</a> Tooling, Process & Training (TPT) team this summer. I’ve also done backend engineering at <a href="https://splitsecure.com" target="_blank" rel="noreferrer" className="font-semibold text-blue-900 hover:text-blue-700">SplitSecure</a> and contributed to the development of <a href="https://apps.apple.com/us/app/berkeley-mobile/id912243518" target="_blank" rel="noreferrer" className="font-semibold text-blue-900 hover:text-blue-700">Berkeley Mobile</a> as an iOS developer for UC Berkeley's student organization.
            </p>
            <p>
              In my free time I play football and cricket, and go down YouTube rabbit holes.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;