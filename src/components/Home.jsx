import React from "react";
import { SlNotebook } from "react-icons/sl";

const Home = () => {
  return (
    <div id="home" className="w-10/12 mx-auto flex flex-col justify-center items-center text-center min-h-[90vh] gap-10 min-w-[500px] bg-bg">
      <div className="p-3 sm:p-6">
        <h1 className="text-9xl font-bold text-primary">
          Meet <span className=" lg:border-dashed lg:border-4 p-3 hover:border-secondary transition-all duration-300 ease-linear">Beer</span>
        </h1>
      </div>
      <div className="bg-bglight p-6 border-l-4 border-r-4 border-secondary relative">
        <h2 className="text-8xl font-bold md:p-3 ">Front-Ent Developer</h2>
        <div className="bg-secondary rounded-full w-6 h-6 absolute -top-3 -left-[13px]"></div>
        <div className="bg-secondary rounded-full w-6 h-6 absolute -bottom-3 -left-[13px]"></div>
        <div className="bg-secondary rounded-full w-6 h-6 absolute -top-3 -right-[13px]"></div>
        <div className="bg-secondary rounded-full w-6 h-6 absolute -bottom-3 -right-[13px]"></div>
      </div>
      <div className="text-7xl font-bold flex items-center gap-2 p-5 border-secondary rounded-3xl border-2">
        <SlNotebook className="font-bold text-5xl text-primary" />
        <h3 className="text-primary">Resume</h3>
      </div>
    </div>
  );
};

export default Home;
