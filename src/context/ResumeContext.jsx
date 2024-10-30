import React, { Children, createContext, useState } from "react";
export const ResumeContext = createContext();

const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState("aboutme");
  const handleResume = (e) => {
    setResume(e);
  };

  return (
    <ResumeContext.Provider value={{ resume, setResume, handleResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
