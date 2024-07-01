import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  skills,
  experiences,
  FrontendSkills,
  BackendSkils,
  Miscelleneus,
} from "../Constants";
import CTA from "../Components/CTA";
import ToolTip from "../Components/ToolTip";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Manas
        </span>
      </h1>
      <div className="mt-5 flex-col flex gap-3 text-slate-500">
        <p>
          Full Stack MERN Developer with about 3 years of industry experience in
          building dynamic web applications. Passionate about creating seamless
          user experiences and scalable solutions. Let's transform your ideas
          into reality!
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <h4 className="subhead-text-2">Frontend Skills</h4>
        <div className="mt-9 flex flex-wrap gap-12">
          {FrontendSkills.map((skill, i) => (
            <ToolTip title={skill.name} key={i}>
              <div
                index={i}
                title={skill.name}
                className="block-container w-20 h-20"
              >
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl element-center ">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </div>
            </ToolTip>
          ))}
        </div>
        <h4 className="subhead-text-2">Backend Skills</h4>
        <div className="mt-9 flex flex-wrap gap-12">
          {BackendSkils.map((skill, i) => (
            <ToolTip title={skill.name} key={i}>
              <div
                index={i}
                title={skill.name}
                className="block-container w-20 h-20"
              >
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl element-center ">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </div>
            </ToolTip>
          ))}
        </div>
        <h4 className="subhead-text-2">Miscelleneus</h4>
        <div className="mt-9 flex flex-wrap gap-12">
          {Miscelleneus.map((skill, i) => (
            <ToolTip title={skill.name} key={i}>
              <div
                index={i}
                title={skill.name}
                className="block-container w-20 h-20"
              >
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl element-center ">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </div>
            </ToolTip>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <p className="mt-5 flex-col flex gap-3 text-slate-500">
          I am having overall work experience of 3+ years in the industry with
          all sort of companies in web developement and MERN stack. I have
          worked on some amazing projects and utilised most of my skills there
        </p>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
