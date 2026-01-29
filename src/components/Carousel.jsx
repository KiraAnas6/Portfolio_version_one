import { projects } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = gsap.utils.toArray(".project-card");

    const totalScroll = container.scrollWidth - window.innerWidth + 180;

    const scrollTrack = gsap.to(container, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: container.parentElement,
        start: "top 10%",
        end: `+=${totalScroll}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        pinType: "transform",
      },
    });

    cards.forEach((card) => {
      gsap.to(
        card,
        {
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTrack,
            start: "left 80%",
            end: "right 20%",
            scrub: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <h1 className="text-5xl font-bold m-8 uppercase relative w-fit before:absolute before:w-[50%] before:h-[0.5px] before:bg-gold before:bottom-[-0px] before:left-0">
        Some Of My <span className="text-main">Projects</span> :
      </h1>
      <section className="relative bg-inherit h-screen overflow-hidden pb-8 mask-fade">
        <div
          className="scroll-section flex flex-nowrap gap-20 w-fit px-4 md:px-12"
          ref={containerRef}
        >
          {projects.map(({ name, tag, img, description, link }, index) => {
            return (
              <div
                key={name}
                className={`project-card bg-black-200 rounded-lg relative w-[70vw] md:w-[40vw] h-[80vh] group transition-all transition-300 ${index  % 2 != 0 ? "top-16" : ""}`}
              >
                <div
                  className={`grayscale group-hover:filter-none max-sm:filter-none `}
                >
                  <img
                    className="object-fit aspect-[16/10] w-full"
                    src={`/public/assets/${img}`}
                    alt={name}
                  />
                </div>
                <div className="bg-black-200 p-6 max-sm:left-0 max-sm:w-full max-sm:opacity-0 max-sm:text-small max-sm:hover:opacity-100 transition-all">
                  <span className="mt-2 text-gold block font-bold">
                    0{index + 1} - {tag}
                  </span>
                  <h3 className="text-4xl font-bold group-hover:text-main">
                    {name}
                  </h3>
                  <p>{description}</p>
                  <a className="py-2 px-4 bg-main rounded-lg mt-2 block w-fit" href={link}>Visit {name}</a>
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
