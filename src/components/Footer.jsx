import React, { useEffect, useState } from "react";

const Footer = () => {
  const [birthday, setBirthday] = useState(0);
  useEffect(() => {
    const bornYear = 1988;
    const today = new Date();
    const age = today.getFullYear() - bornYear;
    setBirthday(age);
  }, []);

  return (
    <footer id="contact" className="w-full flex justify-center items-center flex-col min-w-[500px]">
      <div className="bg-bg p-9  w-10/12 text-primary">
        <div>
          <h1 className=" font-bold text-3xl p-3">Contact Me</h1>
          <p className="p-2">Name : Athiprat Owkusumsirisakul</p>
          <p className="p-2">Birth Date : 12 April 1988 (Age {birthday})</p>
          <p className="p-2">Tel: 0846224306</p>
          <p className="p-2">Email: moogle.fanfare@gmail.com</p>
          <p className="p-2">Github: <a href="https://github.com/BreweryIS">https://github.com/BreweryIS</a></p>
          <p className="p-2">
            Address: 172/46 หมู่บ้านกาญจน์โครงการ 12 ถนนเชียงใหม่-ลำปาง
            ต.ไชยสถาน อ.สารภี จ.เชียงใหม่
          </p>
        </div>
      <div className="flex flex-col items-center mt-8">
        <hr className="h-[1px] w-full max-w-screen-md my-4 border-gray-700"/>
          <p className="text-center text-sm">&copy; {new Date().getFullYear()} Beer's Resume | All rights reserved </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
