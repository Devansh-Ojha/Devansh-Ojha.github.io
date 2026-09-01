import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Project 0 — Visual Recognition",
    description: "An image classification project focused on learning robust visual features from labeled data.",
    tech: ["Python", "PyTorch", "OpenCV"],
    to: "/cvproj/proj0"
  },
  {
    title: "Project 1 — Real-time Detection",
    description: "A real-time computer vision pipeline for detecting and tracking objects in video.",
    tech: ["Python", "YOLO", "Computer Vision"],
    to: "/cvproj/proj1"
  }
];

const CVProjects = () => (
  <main className="relative min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors mb-12">
      <ArrowLeft size={16} /> Back to portfolio
    </Link>
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">Computer Vision</p>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Computer Vision Project</h1>
      <p className="text-slate-600 mt-3 max-w-2xl">Selected experiments and builds in visual understanding.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => <ProjectCard key={project.to} {...project} />)}
    </div>
  </main>
);

export default CVProjects;