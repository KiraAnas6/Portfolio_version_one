const techStack = {
  core: ["HTML", "CSS", "JavaScript"],
  frontend: ["React", "Tailwind CSS"],
  backend: ["Python", "Flask", "SQLite"],
  animation: ["Three.js", "GSAP"],
  tools: ["Vercel", "Git", "VS Code"]
};
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
export default function Stack() {
  useGSAP(() => {
    gsap.to(".stack-card" , {
      y : 0 ,
      x : 0 ,
      opacity : 1,
      stagger : 0.4,
      scrollTrigger : {
        trigger : "#stack",
        start : "top center"
      }
    })
  } , [])
  return (
    <section id="stack" className="min-h-screen bg-black-200 border-b-black border-b-4 overflow-hidden p-8 bg-black">

      <div className="stack-card opacity-0 -translate-x-20 max-w-6xl mx-auto mb-16">
        <h1 className="text-6xl font-bold mb-2">My Toolkit</h1>
        <p className="text-gray-400 text-lg">Technologies I use to build modern web experiences</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="stack-card opacity-0 -translate-x-20 lg:col-span-2 bg-gradient-to-br from-[#6f5b3e] to-[#2a9d90] p-8 rounded-2xl min-h-64 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">Full-Stack Developer</h2>
            <p className="text-lg opacity-90">Specializing in React & modern web technologies</p>
          </div>
          <div className="text-sm opacity-75">Currently exploring the MERN stack</div>
        </div>

        <div className="stack-card opacity-0 -translate-y-20 bg-black-100 border border-gray-800 p-6 rounded-2xl hover:border-[#6f5b3e] transition-colors">
          <h3 className="text-[#6f5b3e] font-bold mb-4 text-sm uppercase tracking-wider">Core Web</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.core.map(tech => (
              <span key={tech} className="text-lg">{tech}</span>
            ))}
          </div>
        </div>

        <div className="stack-card opacity-0 translate-y-20 bg-black-100 border border-gray-800 p-6 rounded-2xl hover:border-[#2a9d90] transition-colors">
          <h3 className="text-[#2a9d90] font-bold mb-4 text-sm uppercase tracking-wider">Frontend</h3>
          <div className="space-y-2">
            {techStack.frontend.map(tech => (
              <div key={tech} className="text-lg">{tech}</div>
            ))}
          </div>
        </div>

        <div className="stack-card opacity-0 translate-y-20 bg-black-100 border border-gray-800 p-6 rounded-2xl hover:border-[#6f5b3e] transition-colors">
          <h3 className="text-[#6f5b3e] font-bold mb-4 text-sm uppercase tracking-wider">Backend</h3>
          <div className="space-y-2">
            {techStack.backend.map(tech => (
              <div key={tech} className="text-lg">{tech}</div>
            ))}
          </div>
        </div>


        <div className="stack-card opacity-0 translate-x-20 bg-black-100 border border-gray-800 p-6 rounded-2xl hover:border-[#2a9d90] transition-colors">
          <h3 className="text-[#2a9d90] font-bold mb-4 text-sm uppercase tracking-wider">Animation & 3D</h3>
          <div className="space-y-2">
            {techStack.animation.map(tech => (
              <div key={tech} className="text-lg">{tech}</div>
            ))}
          </div>
        </div>
      </div>


      <div className="stack-card opacity-0 -translate-y-20 max-w-6xl mx-auto mt-12">
        <h3 className="text-gray-400 font-bold text-sm uppercase tracking-wider mb-4">Tools & Workflow</h3>
        <div className="flex flex-wrap gap-3">
          {techStack.tools.map((tool, i) => (
            <span
              key={tool}
              className={`bg-black-100 border-2 py-3 px-6 rounded-full transition-all hover:scale-105 ${
                i % 2 === 0 ? "border-[#6f5b3e] hover:bg-[#6f5b3e]/10" : "border-[#2a9d90] hover:bg-[#2a9d90]/10"
              }`}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}