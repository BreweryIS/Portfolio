import profile from "../assets/profile.png";

const Card = () => {
  return (
    <section className="w-10/12 bg-bg  mx-auto ">
      <div className="bg-light p-2 flex items-center">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-full">
          <img
            src={profile}
            alt=""
            height={50}
            width={50}
            className="object-contain aspect-square"
          />
        </div>
        <div className="w-full p-2">
          <h1 className="text-primary font-bold text-sm">
            Athiprat Owkusumsirisakul
          </h1>
          <p className="text-sm">Chaing Mai</p>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-primary to-secondary">
        <img src={profile} alt="" />
      </div>
      <div className="bg-light p-2">
        <p>
         
        </p>
      </div>
    </section>
  );
};

export default Card;
