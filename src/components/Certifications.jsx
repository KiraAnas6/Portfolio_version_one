import { certifications } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  useGSAP(() => {
    gsap.to(".cert-card", {
      x: 0,
      opacity : 1,
      stagger : 0.4 ,
      scrollTrigger : {
        trigger : "#cert-section" ,
        start : "top center"
      }
    });
  }, []);
  return (
    <>
      <h1
        className="text-5xl max-sm:text-2xl font-bold m-8 uppercase relative w-fit before:absolute 
      before:w-[50%] before:h-[0.5px] before:bg-gold before:bottom-[-0px] before:left-0"
      >
        My <span className="text-main">Certifications</span> :
      </h1>

      <section id="cert-section" className="relative flex max-md:flex-col pb-12 overflow-hidden gap-4 px-4 md:px-12">
        {certifications.map(({ img, name, description, tags }) => (
          <div
            className={`cert-card translate-x-20 opacity-0 relative p-4 bg-[#393947] overflow-hidden rounded-xl group`}
            key={name}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={`/assets/certs/${img}`}
                className="object-contain"
                alt={name}
              />
            </div>

            <div className="p-6 absolute inset-0 w-full h-full bg-[#000000ba] transition-300 transition-all opacity-0 group-hover:opacity-100">
              <h3 className="text-3xl font-bold py-4 max-sm:text-xl">{name}</h3>
              <p>{description}</p>

              <ul className="flex gap-1 font-bold text-xs w-fit mt-4">
                {tags.map((tag) => (
                  <li key={tag} className="bg-main py-1 px-2 rounded-md w-fit">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Certifications;
