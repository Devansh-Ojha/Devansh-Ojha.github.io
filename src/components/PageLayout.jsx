import Background from "../assets/css/background.jsx";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/react";

const PageLayout = ({ children }) => (
  <div className="relative min-h-screen">
    <Background />
    <Navbar />
    <main className="pt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </main>
    <footer className="text-center text-sm text-slate-500 py-12 mt-16 border-t border-slate-200/40 bg-white/20 backdrop-blur-md">
      © Devansh Ojha 2026. All rights reserved.
    </footer>
    <Analytics />
  </div>
);

export default PageLayout;