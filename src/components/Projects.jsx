import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { projects_two } from "../constants";
import { use, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
const Projects = () => {
  useGSAP(() => {
    gsap.to(".project", {
      y: 0,
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#projects-slider",
        start: "top center",
      },
    });
  });
  const [active, setActive] = useState(0);
  function handleActiveClass(index) {
    setActive(index);
    const projects = document.querySelectorAll(".project");
    projects.forEach((el) => {
      el.classList.remove("active");
    });
    projects[active].classList.add("active");
  }
  return (
    <section
      id="projects-slider"
      className="min-h-screen bg-black overflow-x-hidden"
    >
      <h1 className="text-5xl text-center py-8 font-bold">
        <span className="text-main">P</span>rojects
      </h1>
      <div className="flex gap-2 px-12 max-sm:px-2">
        {projects_two.map(({ name, description, img }, i) => {
          return (
            <div
              className={`project opacity-0 transition-all transition-400 relative flex gap-2 p-4 overflow-hidden h-[50vh] rounded-xl ${i == 0 ? "active" : ""} ${i % 2 == 0 ? "translate-y-20" : "-translate-y-20"}`}
              key={name}
              onClick={() => handleActiveClass(i)}
            >
              <span className="text-gold text-center font-bold text-xl -rotate-[90deg] absolute bottom-1/2 w-[300px] z-[100] -left-[132px]">
                {name}
              </span>
              <div
                className="w-screen h-full absolute inset-0 bg-contain"
                style={{
                  backgroundImage: `url(/public/assets/projects/${img})`,
                }}
              ></div>
              <div className="w-full h-full absolute inset-0 bg-[#000000a9] z-[99]"></div>
              <div className="information z-[100] text-white opacity-0 absolute left-4 top-4">
                <h3 className="font-bold text-2xl max-sm:text-xl mb-2">
                  {name}
                </h3>
                <p className="text-xs">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
