import Background from './assets/css/background.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About';
import { Analytics } from "@vercel/analytics/react";
import { Route, Routes } from "react-router-dom";
import CVProjects from "./pages/CVProjects";
import CVProjectDetail from "./pages/CVProjectDetail";
import ProjectDetail from "./pages/ProjectDetail";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ThoughtsPage from "./pages/ThoughtsPage";

const Home = () => (
  <div className="relative min-h-screen">
    <Background />
    <Navbar />
    <main className="pt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <About />
    </main>

    <footer className="text-center text-sm text-slate-500 py-12 mt-16 border-t border-slate-200/40 bg-white/20 backdrop-blur-md">
      © Devansh Ojha 2026. All rights reserved.
    </footer>
    <Analytics />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
      <Route path="/thoughts" element={<ThoughtsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cvproj" element={<CVProjects />} />
      <Route path="/cvproj/:projectId" element={<CVProjectDetail />} />
    </Routes>
  );
}

export default App;
