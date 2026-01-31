import NavBar from "../components/NavBar";
import MiniFooter from "../components/MiniFooter";
import FloatingLines from "../components/FloatingLines";
import { footerLinks } from "../constants";
const newLinks = ["Home", "About", "Contact"];
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Contact = () => {
  useGSAP(() => {
    gsap.to("#contact-section", {
      x: 0,
      stagger: 0.2,
      opacity: 1,
    });
  }, []);
  return (
    <main className="relative">
      <NavBar containerClass="bg-black-200" links={newLinks} />
      <div className="mt-[68px] w-full h-screen max-md:h-[904px]">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={5}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={15}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={false}
          parallax={true}
        />
      </div>
      <section
        className="h-screen max-md:h-[904px] absolute left-0 top-0 z-1 bg-[#0000008c] 
      px-8 flex max-md:flex-col gap-2 items-center justify-between"
      >
        <div id="contact-section" className="flex-1 -translate-x-20 opacity-0 ">
          <span className="text-main font-bold">Availability </span>
          <h3 className="text-8xl font-bold max-md:text-3xl">
            Let's build <br />
            <span className="text-main">something</span>
            <br /> unique.
          </h3>
          <p className="text-gray mt-2">
            I design digital experiences where aesthetics meet precision.
            High-end interfaces built to feel effortless and work flawlessly.
          </p>
          <div className="max-md:text-center">
            <span className="text-gray text-xs font-bold block mt-6">
              EMAIL ADDRESS
            </span>
            <a href="" className="text-xl">
              anas.ezzine.03@gmail.com
            </a>
            <span className="text-gray text-xs font-bold block mt-6">
              LOCATION
            </span>
            <h4 className="text-xl">Remote / Beni Mellal, BM</h4>
            <span className="text-gray text-xs font-bold block mt-6">
              FIND ME
              <div className="flex gap-2 items-center mt-4 max-md:justify-center">
                {footerLinks.map((link) => (
                  <div className="w-12 aspect-square rounded-lg bg-black-200 flex items-center justify-center"
                  key={link.img}>
                    <img src={`/assets/${link.img}`} alt={link.link} />
                  </div>
                ))}
              </div>
            </span>
          </div>
        </div>
        <form
        id="contact-section"
          action="#"
          className=" translate-x-20 opacity-0 bg-[#1a1a1a] p-8 max-sm:p-6 rounded-md flex-1"
        >
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="font-bold">
                Full Name
              </label>
              <input
                className="p-4 rounded-lg text-gray bg-[#18181b] 
                border-2 border-[#27272a] w-full 
                focus:border-main focus:outline-none
                transition-all transition-300"
                type="text"
                id="name"
                placeholder="Anas Ezzine"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="mail" className="font-bold">
                Email Address
              </label>
              <input
                className="p-4 rounded-lg text-gray bg-[#18181b] 
                border-2 border-[#27272a] w-full 
                focus:border-main focus:outline-none
                transition-all transition-300"
                type="email"
                id="mail"
                placeholder="anas.ezzine.03@gmail.com"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="details" className="font-bold">
              Projects Details
            </label>
            <textarea
              id="details"
              className="resize-none p-4 rounded-lg text-gray 
              bg-[#18181b] border-2 border-[#27272a] 
              w-full focus:border-main focus:outline-none
              transition-all transition-300
              h-48 max-sm:h-32"
              placeholder="Tell me about your vesion..."
              required
            />
          </div>
          <input
            type="submit"
            className="w-full rounded-lg bg-main text-center py-4 mt-4 cursor-pointer hover:opacity-90"
            value={"Send"}
          />
        </form>
      </section>
      <MiniFooter containerClass="w-[100%] border-t-[0.1px] mx-none relative max-sm:py-2" />
    </main>
  );
};

export default Contact;
