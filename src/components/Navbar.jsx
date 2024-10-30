import { useEffect, useState } from "react";
import { SlNotebook } from "react-icons/sl";

const Navbar = () => {
  const link = [
    { label: "Home", path: "#home" },
    { label: "About Me", path: "#aboutme" },
    { label: "Portfolio", path: "#portfolio" },
    { label: "Contact", path: "#contact" },
  ];

  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 35 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div
      id="home"
      className={`${
        isActive ? "bg-bglight shadow-sm" : "bg-transparent"
      } fixed left-0 right-0 w-10/12 flex justify-between items-center py-4 text-primary mx-auto gap-3 min-w-[500px] z-50`}
    >
      <div className="flex gap-3 pl-7 justify-center items-center ">
        <h1 className="font-bold text-2xl text-primary">2024</h1>
      </div>
      <div>
        <ul className="flex gap-3 pr-7 font-bold text-md">
          {link.map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
