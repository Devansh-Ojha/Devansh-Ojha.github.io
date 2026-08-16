import React, { useState, useEffect, useRef } from "react";

const NavLink = ({ to, children, onClick, isActive }) => {
  const base = "text-slate-600 hover:text-blue-600 text-[15px] font-medium cursor-pointer py-1.5 transition-all duration-200";
  const active = "text-blue-600 font-semibold border-b-2 border-blue-600";
  return (
    <button
      onClick={() => onClick && onClick(to)}
      className={`${base} ${isActive ? active : ""}`}
    >
      {children}
    </button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeId, setActiveId] = useState("home");
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ids = ["home", "experience", "projects", "contact"];
    sectionsRef.current = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { root: null, rootMargin: "-20% 0px -50% 0px", threshold: 0 }
    );
    sectionsRef.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (to) => {
    const el = document.getElementById(to);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
    setActiveId(to);
  };

  const navClass = scrolled
    ? 'py-3 bg-white/80 border-b border-slate-200/40 shadow-sm'
    : 'py-4 bg-white/70 border-b border-transparent';

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 md:px-8 backdrop-blur-md transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto flex justify-between items-center">
        <span 
          onClick={() => scroll.scrollToTop()} 
          className="font-bold text-lg tracking-tight text-slate-800 hover:text-blue-600 cursor-pointer transition-colors duration-200"
        >
          Devansh Ojha
        </span>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="home" onClick={handleNavClick} isActive={activeId==="home"}>About</NavLink>
          <NavLink to="experience" onClick={handleNavClick} isActive={activeId==="experience"}>Experience</NavLink>
          <NavLink to="projects" onClick={handleNavClick} isActive={activeId==="projects"}>Projects</NavLink>
          <a href="/thoughts.html" className="text-slate-600 hover:text-blue-600 text-[15px] font-medium py-1.5">Thoughts</a>
          <NavLink to="contact" onClick={handleNavClick} isActive={activeId==="contact"}>Contact</NavLink>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Open Menu" className="text-slate-700 hover:text-blue-600">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 bg-white/90 backdrop-blur-lg border border-slate-200/50 rounded-xl p-4 shadow-lg">
          <NavLink to="home" onClick={handleNavClick} isActive={activeId==="home"}>About</NavLink>
          <NavLink to="experience" onClick={handleNavClick} isActive={activeId==="experience"}>Experience</NavLink>
          <NavLink to="projects" onClick={handleNavClick} isActive={activeId==="projects"}>Projects</NavLink>
          <a href="/thoughts.html" className="text-slate-600 hover:text-blue-600 text-[15px] font-medium py-1.5">Thoughts</a>
          <NavLink to="contact" onClick={handleNavClick} isActive={activeId==="contact"}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;