import { navLinks } from "../constants";
import NavBar from "./NavBar";
const Hero = () => {
  return (
    <section className="bg-black-100">
      <div className="absolute z-0 inset-0 w-full h-screen bg-[url('/assets/hero.png')] bg-cover bg-center grayscale opacity-30 mix-blend-lighten"></div>
      <div className="relative z-1 inset-0 h-screen">
        <NavBar  links={navLinks}/>
        <div className="absolute inset-1/2 text-center -translate-x-1/2 -translate-y-1/2  w-fit h-fit  ">
          <h3 className="text-main uppercase tracking-tighter font-semibold text-xs mb-2">
            Welcome to Anas World's
          </h3>
          <div className="text-[12vw] font-bold leading-none">
            <h1>VISION</h1>
            <h1 className="italic hero-text-outline">UNBOUND</h1>
          </div>
          <p className="text-gray italic text-[12px]">
            Crafting cinematic digital experiences for brands that demand more
            than the ordinary.
          </p>
          <div className="animation relative h-24 w-[0.5px] bg-main mx-auto mt-4">
            <div className="absolute -inset-[12px] -left-[11.8px] hero-icon-animation w-[24px] w-fit h-fit">
                <img src="/assets/arrow-down.png" className="object-fit" width={24} height={24} alt="arrow down" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
