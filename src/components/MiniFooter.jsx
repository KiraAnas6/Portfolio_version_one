import { footerLinks } from "../constants";

const MiniFooter = ({containerClass = ""}) => {
  return (
    <footer className={`border-t-2 border-t-white p-12 flex items-center justify-between w-[90%] mx-auto ${containerClass}`}>
      <div className="flex gap-2">
        {footerLinks.map(({ img, link } , index) => (
          <span key={`${link}-${index}`}>
            <a href={link}>
              <img
                src={`/assets/${img}`}
                key={link}
                alt="social media"
              />
            </a>
          </span>
        ))}
      </div>
      <span className="text-gray max-sm:hidden">
        &copy; 2026 Anas Ezzine - All Rights Reserved.{" "}
      </span>
      <a href="#" className="w-12 aspect-square rounded-full flex items-center justify-center bg-white">
        <img className="invert" src="/public/assets/arrow-up.png" alt="arrow up" />
      </a>
    </footer>
  );
};

export default MiniFooter;
