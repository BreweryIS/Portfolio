import { useContext } from "react";
import Card from "./Card";
import { BsDownload } from "react-icons/bs";
import { ImSmile } from "react-icons/im";
import { ResumeContext } from "../context/ResumeContext";
import TextSwitcher from "./TextSwitcher";

const Hero = () => {
  const resume = useContext(ResumeContext);

  const resumeCase = ({ resume }) => {
    let content;
    switch (resume) {
      case "aboutme":
        content = (
          <>
            <div className="text-primary mt-7">
              <TextSwitcher />
            </div>
            <div className="py-3 text-primary">
              <h1 className="font-bold text-3xl">Athiprat Owkusumsirisakul</h1>
            </div>
            <div className="py-3">
              <p className="text-primary text-lg">
                สวัสดีครับ ผมชื่อเล่นว่า " เบียร์ " กำลังมองหางานตำแหน่ง Front
                Ent ย้ายสายงานมาจาก วิศวกรโยธา เนื่องจากอยากทำงานให้สิ่งที่ชอบ
                ค้นหาความท้าทายใหม่ๆ
                ศึกษาหาความรู้จากคอร์สเรียนออนไลน์ประกอบกับศึกษาด้วยตนเอง
                และศึกษาอย่างต่อเนื่องเพื่อเรียนรู้สิ่งใหม่ๆ
                ทดลองทำโปรเจคตลอดเวลา
              </p>
            </div>
            <div className="py-3">
              <div className="flex gap-2 items-center text-primary">
                <ImSmile className="text-3xl" />
                <span>
                  สามารถทำงาน Onsite ได้ในจังหวัดเชียงใหม่ หรือ wfh ก็ได้เช่นกัน
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <a href="/resume.pdf" download>
                <div className="group hover:bg-secondary w-64 p-3 text-primary flex justify-between items-center font-bold mt-3 border-2 border-secondary">
                  <div className="">Download CV</div>
                  <div className="p-2 rounded-full border bg-secondary group-hover:bg-bg">
                    <BsDownload className="text-xl text-white" />
                  </div>
                </div>
              </a>
            </div>
          </>
        );
        break;
      case "skills":
        content = (
          <div className="py-6 flex justify-center items-center m-4 w-full text-primary">
            <ul className="list-disc text-xl flex flex-col gap-4">
              <span className="text-4xl font-bold">Skills</span>
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS, Bootstrap</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Postman</li>
            </ul>
          </div>
        );
        break;
      case "language":
        content = (
          <div className="py-6 flex justify-center items-center m-4 w-full text-primary">
            <ul className="list-disc text-xl flex flex-col gap-4 pt-3">
              <span className="text-4xl font-bold">Language</span>
              <li>Thai: Proficient</li>
              <li>English: Intermediate</li>
            </ul>
          </div>
        );
        break;
      case "workexp":
        content = (
          <>
            <div className="py-5 flex justify-center items-center m-4 w-full text-primary">
              <h3 className="text-4xl font-bold">Work Experience</h3>
            </div>
            <div className="mb-10 text-primary border-2 p-4 bg-bg">
              <ul className="text-xl">
                Project Engineer Karnkanok Property Co., Ltd. | 2013-2024
              </ul>
              <li className="text-lg">
                Managed and supervised residential development projects. Ensured
                projects were completed on time and within budget.
              </li>
            </div>
            <div className="mb-10 text-primary border-2 p-4 bg-bg">
              <ul className="text-xl">
                Civil Engineer Italian-Thai Development Public Co., Ltd. |
                2011-2012
              </ul>
              <li className="text-lg">
                Oversaw construction activities and ensured compliance with
                project specifications. Coordinated with contractors and
                stakeholders to achieve project goals.
              </li>
            </div>
            <div>
              <div className="text-primary border-2 p-4 bg-secondary">
                *** No professional experience in front-end development.
                Currently engaged in self-study and personal projects to build
                skills in HTML, CSS, JavaScript, and front-end frameworks such
                as React and Tailwind CSS.
              </div>
            </div>
          </>
        );
        break;
      default:
        content = "aboutme";
    }
    return content;
  };

  const content = resumeCase(resume);

  return (
    <section id="aboutme" className="w-10/12 flex justify-center items-center py-8 mx-auto bg-bglight min-w-[500px]">
      <div className="w-9/12 flex flex-col xl:flex-row gap-12">
        <div className="flex-1">
          <Card />
        </div>
        <div className="flex-1">{content}</div>
      </div>
    </section>
  );
};

export default Hero;
