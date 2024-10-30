import { useContext, useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import { ResumeContext } from "../context/ResumeContext";
import { IoPersonCircleOutline } from "react-icons/io5";
import { DiCode } from "react-icons/di";
import { MdLanguage } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";


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

  const { handleResume } = useContext(ResumeContext);

  return (
    <card className="w-full">
      <div className="w-11/12 overflow-hidden border rounded-full mx-auto">
        <img src={profile} alt="" className="outline-none " />
      </div>
      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between items-center gap-2 mt-8">
        <button
          onClick={() => handleResume("aboutme")}
          className="h-[75px] p-3 border-2 border-secondary cursor-pointer gruop relative hover:bg-secondary text-primary"
        >
          <h4 className="flex gap-1 items-center">
            <IoPersonCircleOutline className="text-2xl" />
            About Me
          </h4>
        </button>
        <button
          onClick={() => handleResume("skills")}
          className="h-[75px] p-3 border-2 border-secondary cursor-pointer gruop relative hover:bg-secondary text-primary"
        >
          <h4 className="flex gap-1 items-center">
            <DiCode className="text-3xl" />
            Skills
          </h4>
        </button>
        <button
          onClick={() => handleResume("language")}
          className="h-[75px] p-3 border-2 border-secondary cursor-pointer gruop relative hover:bg-secondary text-primary"
        >
          <h4 className="flex gap-1 items-center">
            <MdLanguage className="text-xl" />
            Language
          </h4>
        </button>
        <button
          onClick={() => handleResume("workexp")}
          className="h-[75px] p-3 border-2 border-secondary cursor-pointer gruop relative hover:bg-secondary text-primary"
        >
          <h4 className="flex gap-1 items-center"><MdOutlineWorkOutline className="text-3xl"/>
          Work Experience</h4>
        </button>
      </div>
    </card>
  );
};

export default Card;
