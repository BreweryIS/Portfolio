import { SlNotebook } from "react-icons/sl";

const Navbar = () => {
  const link = [
    { label: "Home", path: "#home" },
    { label: "Portfolio", path: "#portfolio" },
    { label: "Contact", path: "#contact" },
  ];
  return (
    <div
      id="home"
      className="w-full flex justify-between items-center py-6 bg-bg"
    >
      <div className="flex gap-3 pl-7 justify-center items-center text-light ">
        <SlNotebook className="font-bold text-4xl" />
        <h1 className="font-bold text-2xl">
          Meet Beer - Front-End Developer Resume
        </h1>
      </div>
      <div>
        <ul className="flex gap-3 pr-7 text-light font-bold text-md">
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
