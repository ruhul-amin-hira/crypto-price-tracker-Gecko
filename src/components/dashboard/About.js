import React from "react";

const About = () => {
  return (
    <div className="about">
      <h2>No need to refresh the page to get the updated data.</h2>
      <p>This app auto update the data</p>

      <div className="about__getTouch">
        <a href="https://github.com/ruhul-amin-hira" target="blank">
          github
        </a>
        <a href="https://www.behance.net/ruhulaminhira" target="blank">
          behance
        </a>
      </div>
      <h4>2021, Created by Ruhul Amin</h4>
    </div>
  );
};

export default About;
