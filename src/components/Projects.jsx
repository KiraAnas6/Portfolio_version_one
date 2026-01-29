import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { projects_two } from "../constants";
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: "bottom bottom",
        end: "top top",
        scrub: true,
        stagger: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calc The Needed Values
          const width = 20 + 40 * progress;
          const height = 100 + 250 * progress;
          gsap.to(card, {
            height: height + "px",
            duration: 0.01,
            ease: "none",
          });
          gsap.to(card.querySelector("img"), {
            width: width + "%",
            duration: 0.01,
            ease: "none",
          });
        },
      });
    });
  }, []);
  return (
    <section className="min-h-screen bg-black overflow-x-hidden">
      <h1 className="text-5xl text-center py-8 font-bold">
        <span className="text-main">P</span>rojects
      </h1>
      <div className="container">
        {projects_two.map(({name , description , img}) => {
          return <div className="project-card flex gap-2 border-t-2 p-4">
            <div className="flex flex-col justify-between">
              <h3 className="text-gold font-bold text-2xl">{name}</h3>
              <p className="max-w-[30vw] text-xs">{description}</p>
            </div>
            <img
              src={`/assets/projects/${img}`}
              className="w-48"
              alt="project img"
            />
          </div>;
        })}
      </div>
    </section>
  );
};

export default Projects;
