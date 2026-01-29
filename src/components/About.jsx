const About = () => {
  return (
    <section className="min-h-screen bg-black-200 flex p-8 gap-4 items-center overflow-hidden">
      <div>
        <span className="text-main uppercase block mb-4">my approach</span>
        <h2 className="text-7xl mb-4">
          Beyond templates. <br /> Building <br />{" "}
          <span className="italic font-bold">experiences.</span>
        </h2>
        <p className="text-gray max-w-[60%]">
          I bridge the gap between design vision and functional code, crafting interactive web experiences using React, GSAP, and modern technologies.
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <div
          className="rounded-full w-[45%] aspect-square relative 
        before:absolute before:content-[''] before:rounded-full before:left-1/2 before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:w-[220%] before:aspect-square before:border-main before:border-[0.5px]
        after:absolute after:content-[''] after:rounded-full after:left-1/2 after:top-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:w-[235%] after:aspect-square after:border-gray after:border-[0.5px] "
        >
          <img
            src="/public/assets/profile.jpg"
            alt="profile"
            className="object-fit rounded-full aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default About;