import Card from "./Card";
import { BsDownload } from "react-icons/bs";
import { ImSmile } from "react-icons/im";

const Hero = () => {
  return (
    <section className="w-full bg-bg flex justify-center items-center py-4">
      <div className="w-7/12 flex gap-12">
        <div className="flex-1">
          <Card />
        </div>
        <div className="flex-1">
          <div className="py-3">
            <h1 className="text-light font-bold text-3xl">
              We always work with the best!
            </h1>
          </div>
          <div className="py-3">
            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium velit voluptatem aut amet, aspernatur a provident molestias voluptate dolor quos?</p>
          </div>
          <div className="py-3">
            <div className="text-light flex gap-2 items-center">
              <ImSmile />
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
            </div>
          </div>
          <div className="bg-btn w-64 rounded-sm">
            <button className="text-secondary p-3 flex justify-between w-full font-bold">
              <span className="">Download CV</span>
              <BsDownload className="text-xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
