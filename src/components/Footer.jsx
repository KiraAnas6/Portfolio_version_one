import MiniFooter from "./MiniFooter";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="h-screen overflow-hidden flex flex-col justify-between">
      <div className="h-[70%] text-center pt-48 relative before:absolute before:content-['CONNECTON'] before:text-[#ffffff12] before:font-bold before:text-[26vw] before:left-0 before:top-2">
        <h3 className="text-8xl uppercase font-bold">
          Ready to start <br />{" "}
          <span className="text-main italic">moving?</span>
        </h3>
        <button className="bg-main py-2 px-4 rounded-full cursor-pointer relative">
          <a to={"/contact"}>Contact Now</a>
        </button>
      </div>
      <MiniFooter />
    </section>
  );
};

export default Footer;
