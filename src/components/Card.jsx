import { useEffect, useState } from "react";
import profile from "../assets/profile.png";

const Card = () => {
  const [repoCount, setRepoCount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubRepoCount = async () => {
      const username = "BreweryIS";
      const url = `https://api.github.com/users/${username}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRepoCount(data.public_repos);
      } catch (error) {
        setError(error.message);
      }
    };
    console.log(error);
    fetchGitHubRepoCount();
  }, []);

  return (
    <section className="w-9/12 bg-bg  mx-auto  relative top-[20px]">
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
        <p>Repository : {repoCount}</p>
      </div>
    </section>
  );
};

export default Card;
