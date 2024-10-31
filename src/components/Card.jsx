import { useContext } from "react";
import profile from "../assets/profile.jpg";
import { ResumeContext } from "../context/ResumeContext";
import { IoPersonCircleOutline } from "react-icons/io5";
import { DiCode } from "react-icons/di";
import { MdLanguage } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";


const Card = () => {
  // const [repoCount, setRepoCount] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchGitHubRepoCount = async () => {
  //     const username = "BreweryIS";
  //     const url = `https://api.github.com/users/${username}`;

  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setRepoCount(data.public_repos);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  //   fetchGitHubRepoCount();
  // }, []);

  const { handleResume } = useContext(ResumeContext);

  return (
    <section className="w-full">
      <div className="w-10/12 sm:w-6/12 xl:w-11/12 overflow-hidden border rounded-full mx-auto shadow-2xl">
        <img src={profile} alt="" className="outline-none " />
      </div>
      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between items-center gap-2 mt-8">
        <button
          onClick={() => handleResume("aboutme")}
          className="shadow-2xl h-[55px] md:h-[60px] p-3 border-2 border-secondary cursor-pointer gruop relative hover:bg-secondary transition-all ease-in-out duration-300 text-primary"
        >
          <h4 className="flex gap-1 items-center">
            <IoPersonCircleOutline className="text-3xl" />
            About Me
          </h4>
        </button>
        <button
          onClick={() => handleResume("skills")}
          className="shadow-2xl h-[55px] md:h-[60px] p-3 border-2 border-secondary cursor-pointer gruop relative hover:bg-secondary transition-all ease-in-out duration-300 text-primary"
        >
          <h4 className="flex gap-1 items-center">
            <DiCode className="text-3xl" />
            Skills
          </h4>
        </button>
        <button
          onClick={() => handleResume("language")}
          className="shadow-2xl h-[55px] md:h-[60px] p-3 border-2 border-secondary cursor-pointer gruop relative hover:bg-secondary transition-all ease-in-out duration-300 text-primary"
        >
          <h4 className="flex gap-1 items-center">
            <MdLanguage className="text-xl" />
            Language
          </h4>
        </button>
        <button
          onClick={() => handleResume("workexp")}
          className="shadow-2xl h-[55px] md:h-[60px] p-3 border-2 border-secondary cursor-pointer gruop relative hover:bg-secondary transition-all ease-in-out duration-300 text-primary"
        >
          <h4 className="flex gap-1 items-center"><MdOutlineWorkOutline className="text-3xl"/>
          Work Experience</h4>
        </button>
      </div>
    </section>
  );
};

export default Card;
