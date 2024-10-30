import React, { useEffect, useState } from "react";

const TextSwitcher = () => {
  const [index, setIndex] = useState(0);
  const messages = ["Civil Engineer", "Front End"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return <div className={`fade-in-repeat text-sm`}>{messages[index]}</div>;
};

export default TextSwitcher;
