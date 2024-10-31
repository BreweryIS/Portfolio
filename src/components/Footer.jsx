import { useEffect, useState } from "react";

const Footer = () => {
  const [birthday, setBirthday] = useState(0);
  useEffect(() => {
    const bornYear = 1988;
    const today = new Date();
    const age = today.getFullYear() - bornYear;
    setBirthday(age);
  }, []);

  return (
    <footer
      id="contact"
      className="w-12/12 flex justify-center items-center flex-col min-w-[320px] mx-auto"
    >
      <div className="bg-gradient-to-b from-bg via-gray-900 to-bglight  w-full text-primary text-center">
        <div>
          <h1 className=" font-bold text-2xl md:text-3xl p-3">
            <span className="border-b-2 border-secondary">Contact Me</span>
          </h1>
          <p className="p-2">Name : Athiprat Owkusumsirisakul</p>
          <p className="p-2">Birth Date : 12 April 1988 (Age {birthday})</p>
          <p className="p-2">Tel: 0846224306</p>
          <p className="p-2">Email: moogle.fanfare@gmail.com</p>
          <p className="p-2">
            Github:{" "}
            <a href="https://github.com/BreweryIS">
              https://github.com/BreweryIS
            </a>
          </p>
          <p className="p-2">
            Address: 172/46 หมู่บ้านกาญจน์โครงการ 12 ถนนเชียงใหม่-ลำปาง
            ต.ไชยสถาน อ.สารภี จ.เชียงใหม่
          </p>
        </div>
        <div className="flex flex-col items-center mt-8 mb-5">
          <hr className="h-[1px] w-full max-w-screen-md my-4 border-primary" />
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Beer's Resume | All rights
            reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
