import glamstore1 from "../assets/glamstore1.png";
import glamstore2 from "../assets/glamstore2.png";
import glamstore3 from "../assets/glamstore3.png";
import glamstore4 from "../assets/glamstore4.png";
import glamstore5 from "../assets/glamstore5.png";
import furniture1 from "../assets/furniture1.png";
import furniture2 from "../assets/furniture2.png";
import furniture3 from "../assets/furniture3.png";
import furniture5 from "../assets/furniture5.png";
import furniture6 from "../assets/furniture6.png";


const Portfolio = () => {
  return (
    <div id="portfolio" className="w-12/12 flex flex-col justify-center items-center py-6 lg:py-20 mx-auto min-w-[320px] bg-gradient-to-r from-bglight via-gray-700 to-bg">
      <div className="w-10/12 flex flex-col lg:flex-row">
        <div className="lg:w-6/12 pb-7 lg:p-0 text-2xl sm:text-4xl lg:text-8xl text-center text-primary">
          <h1><span className="border-b-2 border-secondary">Portfolio</span></h1>
        </div>
        <div className="lg:w-6/12 text-md md:text-xl text-primary lg:pt-7">
          <p>
          Front-end projects developed using HTML, CSS, JavaScript, React, and Tailwind. Currently, I'm gaining experience and consistently building new projects through practical work.
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto grid lg:grid-cols-2 gap-6 mt-12">
        <div className="w-full border-2 border-gray-500 rounded-xl overflow-hidden">
          <img src={glamstore1} alt=""  />
        </div>
        <div className="grid grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-6">
            <div className="w-full border-2 border-gray-500 rounded-xl overflow-hidden">
              <img src={glamstore2} alt="" />
            </div>
            <div className="w-full border-2 border-gray-500 rounded-xl overflow-hidden">
              <img src={glamstore4} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full border-2 border-gray-500 rounded-xl overflow-hidden">
              <img src={glamstore5} alt="" />
            </div>
            <div className="w-full border-2 border-gray-500 rounded-xl overflow-hidden">
              <img src={glamstore3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto grid lg:grid-cols-2 gap-6 mt-12">
        <div className="grid grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-6">
            <div className="w-full border-2 border-gray-500 rounded-xl overflow-hidden">
              <img src={furniture2} alt="" />
            </div>
            <div className="w-full border-2 border-gray-500 rounded-xl overflow-hidden">
              <img src={furniture6} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full border-2 border-gray-500 rounded-xl overflow-hidden">
              <img src={furniture3} alt="" />
            </div>
            <div className="w-full border-2 border-gray-500 rounded-xl overflow-hidden">
              <img src={furniture5} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="border-2 border-gray-500 rounded-xl overflow-hidden"><img src={furniture1} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
