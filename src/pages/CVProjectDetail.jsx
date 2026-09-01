import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const projectDetails = {
  proj0: {
    label: "Project 0",
    title: "Visual Recognition",
    description: "A closer look at the image classification work, including the model approach, dataset, and evaluation results.",
    tech: "Python, PyTorch, OpenCV"
  },
  proj1: {
    label: "Project 1",
    title: "Real-time Detection",
    description: "A closer look at the real-time detection pipeline, including video processing, object tracking, and performance considerations.",
    tech: "Python, YOLO, Computer Vision"
  }
};

const CVProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <main className="relative min-h-screen max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-slate-900">Project not found</h1>
        <Link to="/cvproj" className="inline-flex items-center gap-2 mt-6 text-blue-600 font-semibold"><ArrowLeft size={16} /> Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link to="/cvproj" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors mb-12"><ArrowLeft size={16} /> Back to Computer Vision projects</Link>
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">{project.label}</p>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{project.title}</h1>
      <p className="text-lg text-slate-600 leading-relaxed mt-6">{project.description}</p>
      <div className="mt-8 pt-5 border-t border-slate-200 text-sm text-slate-500"><span className="font-semibold text-slate-700">Stack:</span> {project.tech}</div>
    </main>
  );
};

export default CVProjectDetail;