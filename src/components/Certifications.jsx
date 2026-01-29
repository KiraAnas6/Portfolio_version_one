import { certifications } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = gsap.utils.toArray(".cert-card");

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
      <h1 className="text-5xl max-sm:text-3xl font-bold m-8 uppercase relative w-fit before:absolute before:w-[50%] before:h-[0.5px] before:bg-gold before:bottom-[-0px] before:left-0">
        My <span className="text-main">Certifications</span> :
      </h1>
      <section className="relative bg-inherit overflow-hidden mask-fade">
        <div
          className="scroll-section flex flex-nowrap gap-16 w-fit px-4 md:px-12"
          ref={containerRef}
        >
          {certifications.map(({ img, name, description, tags }) => (
            <div
              className="cert-card w-[70vw] md:w-[45vw] flex flex-col border-1 border"
              key={name}
            >
              <div className="aspect-[16/10]">
                <img
                  src={`/assets/certs/${img}`}
                  className="object-contain"
                  alt={name}
                />
              </div>

              <div className="p-4">
                <h3 className="text-3xl font-bold py-4">{name}</h3>
                <p>{description}</p>

                <ul className="flex gap-1 font-bold text-xs w-fit mt-4">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-main py-1 px-2 rounded-md w-fit"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certifications;
