import { useState } from "react";

const SchoolPath = () => {
    const [img , setImg] = useState(0)
    const handleImgChange = () => {
        const imgs = [`/public/assets/30juillet.webp` ,`/public/assets/estbm.webp` ] 
        return imgs[img]
    }
  return (
    <section className="h-screen bg-black-200 p-8">
      <h3 className="text-5xl font-bold uppercase mb-20 max-md:mb-4">
        my school
        <span className="text-main"> path</span>
      </h3>
      <div className="flex gap-12 items-center max-md:flex-col max-md:gap-2">
        <div className="container py-4 flex-1 w-full">
          <div onMouseEnter={() => setImg(0)} className="group flex items-center gap-4 p-8 mb-4">
            <span
              className="block relative border-main border text-main font-bold cursor-pointer transition-all transition-300 group-hover:bg-main group-hover:text-white w-12 rounded-full aspect-square flex items-center justify-center
                before:absolute before:w-[0.5px] before:h-[80px] before:bg-gold before:top-[100%] before:left-1/2 before:translate-x-[-50%]"
            >
              01
            </span>
            <div>
              <h4 className="text-xs tracking-[2px] font-bold">2021-2024</h4>
              <p className="text-small">
                High School : 30 juillet Souk Sebt
              </p>
            </div>
          </div>
          <div className="group flex items-center gap-4 p-8" 
          onMouseEnter={() => setImg(1)}>
            <span
              className="block relative border-main border 
                text-main font-bold cursor-pointer transition-all 
                transition-300 group-hover:bg-main 
                group-hover:text-white w-12 rounded-full 
                aspect-square flex items-center justify-center"
            >
              02
            </span>
            <div>
              <h4 className="text-xs tracking-[2px] font-bold">
                2024-2026 (now)
              </h4>
              <p className="text-small">
                University EST BM
              </p>
            </div>
          </div>
        </div>
        <div className="w-[47vw] overflow-hidden rounded-3xl">
          <img className="w-full h-full object-fit" src={handleImgChange()} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default SchoolPath;
