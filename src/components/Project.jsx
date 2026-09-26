import ProjectCard from "./ProjectCard";

const Project = () => {
  const projects = [
    {
      title: "BrowseCheck — AI Agent Runtime Security",
      description: "Built a runtime guardrail system for autonomous browser agents using Claude SDK, Playwright, FastAPI and Docker.",
      github: "https://github.com/Devansh-Ojha/BrowseCheck",
      tech: ["Python", "Claude SDK", "Playwright", "FastAPI", "Docker"],
      to: "/projects/browsecheck"
    },
    {
      title: "DoctorBoom — Automated Hardware Bug Repair",
      description: "Fine-tuned LLM agent (Qwen2.5-Coder-7B + QLoRA) for automated RISC-V/Chisel hardware bug repair, closed-loop verified via Verilator/Spike.",
      github: "https://github.com/Devansh-Ojha/DoctorBoom",
      tech: ["Machine Learning", "LLMs", "Qwen2.5-Coder", "QLoRA", "RISC-V", "Chisel", "Verilator", "Spike", "Python"],
      to: "/projects/doctorboom"
    },
    {
      title: "Graphtory — On Device Activity Tracker",
      description: "Shipped a browser telemetry search engine using on-device embeddings, WebGPU inference, and IndexedDB-backed storage.",
      github: "https://chromewebstore.google.com/detail/graphtory/jgjoiknnfdohifhmjennggfpioamokni?pli=1",
      tech: ["WebGPU", "ONNX Runtime Web", "IndexedDB", "JavaScript", "Chrome Extension"],
      to: "/projects/graphtory"
    },
    {
      title: "High-Performance LLM Inference Engine",
      description: "Developed a low-latency Python inference engine with PagedAttention and async scheduling for quantized transformer models.",
      github: "https://github.com/Devansh-Ojha/High-Performance-Inference-Engine",
      tech: ["Python", "MLX", "PagedAttention", "FastAPI", "AsyncIO"],
      to: "/projects/inference"
    },
    {
      title: "LLM-Based Movie Recommendation System",
      description: "Semantic movie recommendation platform with FastAPI and vector embeddings.",
      github: "https://github.com/Devansh-Ojha/FlixGPT",
      tech: ["FastAPI", "SQLAlchemy", "PyTorch", "HugChat", "Python"],
      to: "/projects/flixgpt"
    },
    {
      title: "Chronos: Real-time Video Analytics Pipeline",
      description: "Event-driven real-time video analytics pipeline with distributed workers and vector search.",
      github: "https://github.com/Devansh-Ojha/chronos",
      tech: ["Go", "Python", "Kafka", "Computer Vision", "Vector DB", "Docker", "YOLOv8"],
      to: "/projects/chronos"
    },
    {
      title: "Secure File Sharing System",
      description: "End-to-end encrypted file storage with secure sharing and revocation.",
      github: "https://github.com/your-username/mt-low-resource",
      tech: ["Go", "Symmetric Encryption", "Digital Signatures", "MACs", "Computer Security"],
      isNDA: true,
      ndaReason: "Can't share due to school's honesty policy",
      to: "/projects/securefile"
    },
    {
      title: "Computer Vision Project",
      description: "A collection of computer vision projects exploring visual understanding, detection, and image-based learning.",
      tech: ["Computer Vision", "Python", "Deep Learning"],
      to: "/cvproj"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-light text-slate-900 tracking-[-0.06em] text-center">
            PROJECTS
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
