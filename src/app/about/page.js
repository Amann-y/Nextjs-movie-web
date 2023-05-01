import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="sm:flex sm:justify-around sm:items-center mx-auto">
      <Image
        src="/aman.png"
        alt="Pic"
        width={300}
        height={80}
        className="mx-auto"
      ></Image>
      <div className="sm:w-[60%] w-[100%]">
        <h1 className="text-center mt-3 text-2xl font-semibold">About Me !</h1>
        <h2 className="text-center p-2 mt-2 text-xl">
          I graduated from Medicaps Institute of technology in 2013. I have a
          bachelor's degree in the field of Electronics & Instrumentation. I
          once worked at Solar power plant. I am and have always been fascinated
          by Web-applications, Apps, Software and much more. I love using and
          learning new and old technology. Now I am a full time Web-Developer.
          So far I've created many web-projects
        </h2>
      </div>
    </div>
  );
};
export default About;
