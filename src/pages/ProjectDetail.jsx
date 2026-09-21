import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const projectDetails = {
  browsecheck: {
    label: "01 / Security Research",
    title: "BrowseCheck — AI Agent Runtime Security",
    description:
      "A runtime guardrail system for autonomous browser agents that enforces safer user-driven execution in real time.",
    tech: ["Python", "Claude SDK", "Playwright", "FastAPI", "Docker"],
    sections: [
      {
        heading: "Motivation",
        body:
          "Autonomous browser agents are powerful, but they often operate with too much freedom for real-world workflows. The goal of this project was to create a practical runtime layer that monitors actions, constrains risky behaviors, and keeps agent execution aligned with the user’s intent and safety requirements."
      },
      {
        heading: "Architecture",
        body:
          "The system combines a browser automation layer, a policy-aware orchestration service, and a runtime monitoring loop. Actions are inspected before execution, interpreted in context, and logged for traceability. By separating intent, validation, and execution, the stack provides a much clearer safety boundary than ad hoc agent wrappers."
      },
      {
        heading: "What I built",
        body:
          "I designed the agent runtime around a small but powerful set of guardrails: permission-aware browser actions, tool-call validation, safer workflow orchestration, and structured execution traces. The project used FastAPI and Docker to keep the system portable and easy to run in a reproducible environment while still being production-minded."
      },
      {
        heading: "Impact",
        body:
          "The result is a more trustworthy agent workflow that can be reasoned about, audited, and constrained without sacrificing the flexibility of autonomous browser-based tasks. This makes it much easier to move from prototypes toward reliable, user-facing AI systems."
      }
    ]
  },
  inference: {
    label: "02 / Systems and ML",
    title: "High-Performance LLM Inference Engine",
    description:
      "A low-latency inference stack optimized for quantized transformer models with async scheduling and memory-aware execution.",
    tech: ["Python", "MLX", "PagedAttention", "FastAPI", "AsyncIO"],
    sections: [
      {
        heading: "Problem",
        body:
          "Large language models are increasingly deployed in latency-sensitive settings, but inference systems often struggle with throughput bottlenecks, memory pressure, and poor scheduling decisions. I wanted to explore what an efficient runtime looked like when the system was designed around the needs of real-time serving instead of just model correctness."
      },
      {
        heading: "Engineering approach",
        body:
          "The project focused on reducing inference overhead via memory-efficient attention handling, careful batching, and asynchronous request coordination. By tightening the interaction between the model execution layer and the scheduler, it became possible to improve performance while keeping the implementation generic enough to experiment with different model configurations."
      },
      {
        heading: "System design",
        body:
          "The runtime was built to serve requests efficiently under variable load, with attention to token scheduling, queueing strategy, and resource use. This kind of design helps expose where throughput ceilings occur and provides a better foundation for profiling and iterative optimization."
      },
      {
        heading: "Takeaway",
        body:
          "This project sharpened my interest in systems work behind model deployment: the difference between a model that works in isolation and a model that performs reliably at scale is often rooted in the runtime itself."
      }
    ]
  },
  graphtory: {
    label: "03 / On-Device Intelligence",
    title: "Graphtory — On Device Activity Tracker",
    description:
      "A browser telemetry and memory search system that enables local, privacy-preserving indexing and retrieval of user activity.",
    tech: ["WebGPU", "ONNX Runtime Web", "IndexedDB", "JavaScript", "Chrome Extension"],
    sections: [
      {
        heading: "Context",
        body:
          "Modern browsers generate a lot of useful behavioral data, but extracting value from it while preserving privacy is difficult. I wanted to create a system that could index and search user activity locally without sending everything to the cloud."
      },
      {
        heading: "What the system does",
        body:
          "The extension captures browser interactions and stores them in a local-first data system. Semantic features are generated and queried through a lightweight retrieval pipeline so users can surface relevant prior activity, patterns, and memory anchors without needing a remote backend."
      },
      {
        heading: "Technical challenges",
        body:
          "This project required balancing inference cost, browser constraints, storage efficiency, and retrieval quality. Working with WebGPU and on-device inference meant paying close attention to latency and memory behavior while still making the experience responsive and useful."
      },
      {
        heading: "Why it matters",
        body:
          "The broader lesson was that personal AI systems do not need to rely on always-on cloud infrastructure. A carefully designed local-first stack can provide a more private and cost-efficient experience while still delivering rich interaction patterns."
      }
    ]
  },
  flixgpt: {
    label: "04 / Recommendation and Retrieval",
    title: "LLM-Based Movie Recommendation System",
    description:
      "A semantic recommendation platform that blends embeddings, personalization, and conversational interfaces around movie discovery.",
    tech: ["FastAPI", "SQLAlchemy", "PyTorch", "HugChat", "Python"],
    sections: [
      {
        heading: "Idea",
        body:
          "Recommendation systems often optimize for popularity or metadata alone, which can flatten the user experience. I wanted a system that used semantic understanding to connect user intent with movie content in a richer and more personalized way."
      },
      {
        heading: "Implementation",
        body:
          "The app used a FastAPI backend with structured storage and embedding-driven retrieval. The pipeline paired semantic similarity with a recommender layer, giving the product more expressive matching than a purely collaborative system would provide."
      },
      {
        heading: "User experience",
        body:
          "The interface was designed to make recommendations feel conversational and explainable rather than opaque. By combining both retrieval and language modeling, the system could respond in a way that felt more natural while still grounding suggestions in real movie data."
      },
      {
        heading: "Learning",
        body:
          "This project reinforced how much product value comes from the combination of a good retrieval model, clean backend design, and a polished interaction loop. Good recommendations are not just a model problem; they require thoughtful system design end to end."
      }
    ]
  },
  chronos: {
    label: "05 / Real-Time Analytics",
    title: "Chronos: Real-time Video Analytics Pipeline",
    description:
      "An event-driven analytics stack for detecting and indexing events from live video streams in near real time.",
    tech: ["Go", "Python", "Kafka", "Computer Vision", "Vector DB", "Docker", "YOLOv8"],
    sections: [
      {
        heading: "Challenge",
        body:
          "Real-time computer vision systems need to manage ingestion, model inference, event detection, and storage without becoming brittle under load. I built Chronos to explore how to combine streaming infrastructure with computer vision into a system that remains dependable and easy to reason about."
      },
      {
        heading: "Data pipeline",
        body:
          "The architecture used distributed workers, asynchronous processing, and a message-driven backbone to move frames, metadata, and detections through the stack. This allowed the project to scale more naturally and isolate bottlenecks across the pipeline."
      },
      {
        heading: "Search and retrieval",
        body:
          "Once detections were generated, they were indexed in a vector-aware search layer, making it possible to retrieve relevant events and scenes semantically rather than only by raw timestamps or file names. This expanded the usefulness of the system beyond simple event count monitoring."
      },
      {
        heading: "Outcome",
        body:
          "The result was a practical foundation for real-time vision analytics that sits at the intersection of distributed systems and applied ML. It gave me a strong sense of how production-grade ML infrastructure is built under time-sensitive conditions."
      }
    ]
  },
  securefile: {
    label: "06 / Systems Security",
    title: "Secure File Sharing System",
    description:
      "An encrypted file-sharing system with controlled access, revocation, and transparent integrity checks across shared resources.",
    tech: ["Go", "Symmetric Encryption", "Digital Signatures", "MACs", "Computer Security"],
    sections: [
      {
        heading: "Security model",
        body:
          "This project focused on the challenge of building a secure-by-default file-sharing workflow. The core emphasis was on end-to-end integrity, proper access control, and user-visible trust boundaries so that the system would remain workable even under adversarial conditions."
      },
      {
        heading: "Design decisions",
        body:
          "I implemented encryption and verification patterns that ensured files could be shared safely without exposing them to unauthorized parties. The design also included revocation-oriented primitives so access could be managed gracefully over time rather than relying on brittle assumptions."
      },
      {
        heading: "Lessons",
        body:
          "Security work is rarely just about choosing the right cryptographic primitives. It is also about the surrounding workflow: key management, permission semantics, failure handling, and user mental models all matter a great deal."
      },
      {
        heading: "Takeaway",
        body:
          "It reinforced my interest in building systems where security is not an afterthought but a central design principle that affects every layer of the architecture."
      }
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <main className="relative min-h-screen max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="editorial-title text-slate-900">Project not found</h1>
        <Link to="/projects" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors mb-10">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <article className="max-w-5xl">
          <header className="mb-10 pb-6 border-b border-slate-200">
            <p className="editorial-kicker mb-4">{project.label}</p>
            <h1 className="editorial-title text-slate-900">{project.title}</h1>
            <p className="editorial-body mt-5 max-w-3xl">{project.description}</p>
          </header>

          <div className="mb-10 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className="px-2.5 py-1 rounded-full border border-slate-200 bg-white text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600">
                {item}
              </span>
            ))}
          </div>

          <div className="space-y-10">
            {project.sections.map((section, index) => (
              <section key={section.heading} className="py-2">
                <p className="editorial-kicker mb-3">0{index + 1}</p>
                <h2 className="text-[clamp(1.7rem,2vw,2.5rem)] font-light tracking-[-0.04em] leading-[1.05] text-slate-900">
                  {section.heading}
                </h2>
                <p className="editorial-body mt-4 max-w-4xl">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
};

export default ProjectDetail;
