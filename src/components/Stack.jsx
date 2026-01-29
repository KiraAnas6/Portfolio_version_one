const techStack = {
  core: ["HTML", "CSS", "JavaScript"],
  frontend: ["React", "Tailwind CSS"],
  backend: ["Python", "Flask", "SQLite"],
  animation: ["Three.js", "GSAP"],
  tools: ["Vercel", "Git", "VS Code"]
};

export default function Stack() {
  return (
    <section className="min-h-screen p-8 bg-black">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-6xl font-bold mb-2">My Toolkit</h1>
        <p className="text-gray-400 text-lg">Technologies I use to build modern web experiences</p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Hero Card - spans 2 columns */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#6f5b3e] to-[#2a9d90] p-8 rounded-2xl min-h-64 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">Full-Stack Developer</h2>
            <p className="text-lg opacity-90">Specializing in React & modern web technologies</p>
          </div>
          <div className="text-sm opacity-75">Currently exploring the MERN stack</div>
        </div>

        {/* Core Technologies */}
        <div className="bg-black-100 border border-gray-800 p-6 rounded-2xl hover:border-[#6f5b3e] transition-colors">
          <h3 className="text-[#6f5b3e] font-bold mb-4 text-sm uppercase tracking-wider">Core Web</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.core.map(tech => (
              <span key={tech} className="text-lg">{tech}</span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="bg-black-100 border border-gray-800 p-6 rounded-2xl hover:border-[#2a9d90] transition-colors">
          <h3 className="text-[#2a9d90] font-bold mb-4 text-sm uppercase tracking-wider">Frontend</h3>
          <div className="space-y-2">
            {techStack.frontend.map(tech => (
              <div key={tech} className="text-lg">{tech}</div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-black-100 border border-gray-800 p-6 rounded-2xl hover:border-[#6f5b3e] transition-colors">
          <h3 className="text-[#6f5b3e] font-bold mb-4 text-sm uppercase tracking-wider">Backend</h3>
          <div className="space-y-2">
            {techStack.backend.map(tech => (
              <div key={tech} className="text-lg">{tech}</div>
            ))}
          </div>
        </div>

        {/* Animation */}
        <div className="bg-black-100 border border-gray-800 p-6 rounded-2xl hover:border-[#2a9d90] transition-colors">
          <h3 className="text-[#2a9d90] font-bold mb-4 text-sm uppercase tracking-wider">Animation & 3D</h3>
          <div className="space-y-2">
            {techStack.animation.map(tech => (
              <div key={tech} className="text-lg">{tech}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="max-w-6xl mx-auto mt-12">
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