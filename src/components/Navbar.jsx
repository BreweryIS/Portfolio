import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

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

  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };
  // console.log(menuOpened);

  return (
    <div
      className={`${
        isActive ? "bg-bglight shadow-xl" : "bg-transparent"
      } fixed left-0 right-0 w-12/12 flex justify-between items-center py-4 text-primary mx-auto gap-3 min-w-[320px] z-50`}
    >
      <div className="flex gap-3 pl-7 justify-center items-center ">
        <h1 className="font-bold text-2xl text-primary">2024</h1>
      </div>

      {/* For PC */}
      <ul className="hidden gap-3 pr-7 font-bold text-md sm:flex">
        {link.map((item, index) => (
          <li key={index}>
            <div className="hover:text-secondary transition-all duration-300 ease-in-out">
              <a href={item.path}>{item.label}</a>
            </div>
          </li>
        ))}
      </ul>
      {/* For Mobile */}
      <ul
        className={
          menuOpened
            ? "flex items-center flex-col gap-y-12 fixed top-20 right-12 p-6 bg-bglight rounded-2xl  shadow-md w-36 medium-16 ring-1 ring-slate-900/5 transition-all duration-[500ms] sm:hidden"
            : "flex items-center flex-col gap-y-12 fixed top-20 p-6 bg-bglight rounded-2xl shadow-md w-36 medium-16 ring-1 ring-slate-900/5 transition-all duration-[500ms] -right-[100%]"
        }
      >
        {link.map((item, index) => (
          <li key={index}>
            <div className="hover:text-secondary transition-all duration-300 ease-in-out">
              <a href={item.path}>{item.label}</a>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 pr-7 font-bold text-md sm:hidden">
        {!menuOpened ? (
          <MdMenu
            onClick={toggleMenu}
            className="cursor-pointer text-primary text-3xl md:hidden"
          />
        ) : (
          <MdClose
            onClick={toggleMenu}
            className="cursor-pointer text-primary text-3xl md:hidden"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
