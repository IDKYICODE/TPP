import React from "react";
import bgImage from "..\\assets\\stats-copy.png"
import content_number from "../assets/content_number.svg"
const Stats = () => {
  return (
    <div
    className="flex justify-center items-center "
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover', 
      height: '300px',
      width: '100%',
    }}
    >
      <img src={content_number}></img>
    </div>
  );
};

export default Stats;
