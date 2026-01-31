import NavBar from "../components/NavBar";
import { navLinks } from "../constants";
import Hero from "../components/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const WelcomeAbout = () => {
useGSAP(() => {
  gsap.to("#about-heading" , {
    y : 0 ,
    opacity : 1,
    stagger : 0.5 ,
    delay : 0.2
  })
} , [])
  return (
    <section className="h-screen relative">
      <NavBar links={navLinks} containerClass="bg-black" />
      <section className="h-screen">
        <div className="w-full h-full mask-fade-top absolute inset-0 z-[9]"></div>
        <div className="absolute  mask-fade-top inset-0 w-full h-full opacity-100">
          <img
            src="/assets/about-hero.jpg"
            className="w-full h-full object-fit"
            alt="about img"
          />
        </div>
        <div className="absolute bottom-0 py-8 px-12 z-[10]">
          <span id="about-heading" className="translate-y-20 opacity-0 mb-2 block w-fit text-gold 
          max-sm:text-xs uppercase tracking-[2px] 
          max-sm:tracking-[1px] bg-[#fff] p-2 rounded-full">
            about page : discover my journey
          </span>
          <h1 id="about-heading" className="translate-y-20 opacity-0 text-7xl max-sm:text-5xl font-[1000]">
            Learning: The Adventure <br />
            Through Skills & Projects.
          </h1>
        </div>
      </section>
    </section>
  );
};

export default WelcomeAbout;
