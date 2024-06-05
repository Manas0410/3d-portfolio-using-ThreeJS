import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn ">
        {btnText}
        <img src={arrow} className="h-4 w-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Manas </span> <br />A full stack
      Software Developper from India
    </h1>
  ),
  2: (
    <InfoBox
      text={"worked on deifferent projects and skills in various components"}
      link={"/about"}
      btnText={"learn more"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Led multiple projects to success over the years .Curious about the impact ?"
      }
      link={"/projects"}
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "If you are looking for a dev and want to contact? I'm just a few keystrokes away"
      }
      link={"/contact"}
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ CurrentStage }) => {
  return renderContent[CurrentStage] || null;
};

export default HomeInfo;
