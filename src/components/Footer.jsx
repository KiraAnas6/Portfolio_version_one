import MiniFooter from "./MiniFooter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  useGSAP(() => {
    gsap.to("#link" , {
      x : 0 ,
      y : 0 ,
      opacity : 1,
      stagger : 0.3,
      scrollTrigger : {
        trigger : "#footer" ,
        start : "top center"
      }
    })
  } , [])
  return (
    <section id="footer" className="h-screen overflow-hidden flex flex-col justify-between">
      <div className="h-[70%] text-center pt-48 relative before:absolute before:content-['CONNECTON'] before:text-[#ffffff12] before:font-bold before:text-[26vw] before:left-0 before:top-2">
        <h3 className="text-8xl max-sm:text-6xl uppercase font-bold">
          Ready to start <br />{" "}
          <span className="text-main italic">moving?</span>
        </h3>
        <button id="link" className="opacity-0 translate-y-20 bg-main py-2 px-4 rounded-full cursor-pointer relative mr-2">
          <a href={"/contact"}>Contact Now</a>
        </button>
        <button id="link" className="opacity-0 translate-y-20 bg-main py-2 px-4 rounded-full cursor-pointer relative">
          <a href={"/about"}>Discover More</a>
        </button>
      </div>
      <MiniFooter id="link" containerClass="opacity-0 translate-y-20" />
    </section>
  );
};

export default Footer;
