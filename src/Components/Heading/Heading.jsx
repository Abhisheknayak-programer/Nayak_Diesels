import React from "react";
import "./Heading.css";

const Heading = (props) => {
  return (
    <div className="heading__container">
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Heading;
