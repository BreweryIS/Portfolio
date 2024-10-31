
const Home = () => {
  return (
    <div
      id="home"
      className="w-12/12 mx-auto flex flex-col justify-center items-center text-center min-h-[60vh] lg:min-h-[100vh] gap-10 min-w-[320px] bg-gradient-to-r from-bglight via-gray-700 to-bg"
    >
      {/* <div className="p-3 sm:p-6">
        <h1 className="text-6xl lg:text-9xl font-bold text-primary text-glow">
          <span className="border-b-2 border-secondary">
            Meet
            <span className=" lg:border-dashed lg:border-4 p-3 hover:border-secondary transition-all duration-300 ease-linear">
              Beer
            </span>
          </span>
        </h1>
      </div>
      <div className="bg-bglight p-6 border-l-4 border-r-4 border-secondary relative">
        <h2 className="text-6xl lg:text-8xl font-bold md:p-3 text-glow">
          Front-Ent Developer
        </h2>
        <div className="bg-secondary rounded-full w-6 h-6 absolute -top-3 -left-[13px]"></div>
        <div className="bg-secondary rounded-full w-6 h-6 absolute -bottom-3 -left-[13px]"></div>
        <div className="bg-secondary rounded-full w-6 h-6 absolute -top-3 -right-[13px]"></div>
        <div className="bg-secondary rounded-full w-6 h-6 absolute -bottom-3 -right-[13px]"></div>
      </div> */}
      <div className="text-5xl md:text-8xl lg:text-9xl font-bold flex items-center gap-2 p-[200px] rounded-3xl">
        {/* <SlNotebook className="font-bold text-3xl lg:text-5xl text-primary" /> */}
        <h3 className="text-primary text-glow">Resume</h3>
      </div>
    </div>
  );
};

export default Home;
