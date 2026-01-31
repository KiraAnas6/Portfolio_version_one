import { projects } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  useGSAP(() => {
    gsap.to(".project-card" , {
      y : 0 ,
      stagger : 0.4 ,
      opacity : 1 ,
      scrollTrigger: {
        trigger : ".carousel",
        start : "top center"
      }
    })
    gsap.from("#carousel-title" , {
      x : -20 ,
      opacity : 0 ,
      duration : 1 ,
      scrollTrigger: {
        trigger : ".carousel",
        start : "top center"
      }
    })
  }, []);
  return (
    <>
      <h1 id="carousel-title" className="text-5xl max-sm:text-2xl font-bold m-8 uppercase relative w-fit before:absolute before:w-[50%] before:h-[0.5px] before:bg-gold before:bottom-[-0px] before:left-0">
        Some Of My <span className="text-main">Projects</span> :
      </h1>
      <section className="relative carousel bg-inherit h-fit overflow-hidden pb-8">
        <div className="grid-layout px-4 md:px-12">
          {projects.map(({ name, tag, img, description, link }, index) => {
            return (
              <div
                key={name}
                className={`project-card bg-black-200 rounded-lg 
                  relative group transition-all transition-300
                  p-4 bg-black-200 overflow-hidden translate-y-10 opacity-0`}
              >
                <div
                  className={`group-hover:scale-90 transition-300 transition-all max-sm:filter-none overflow-hidden
                    rounded-xl`}
                >
                  <img
                    className="object-fit aspect-[16/10] w-full"
                    src={`/assets/${img}`}
                    alt={name}
                  />
                </div>
                <div className="absolute inset-0 p-12 bg-[#00000089] max-sm:left-0 transition-all opacity-0 group-hover:opacity-100 ">
                  <span className="mt-2 text-gold block font-bold">
                    0{index + 1} - {tag}
                  </span>
                  <h3 className="text-4xl font-bold group-hover:text-main">
                    {name}
                  </h3>
                  <p className="text-xs ">{description}</p>
                  <a
                    className="py-2 px-4 bg-main rounded-lg mt-2 block w-fit text-xs"
                    href={link}
                  >
                    Visit {name}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Certifications;
