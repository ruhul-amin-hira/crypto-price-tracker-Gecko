import React from "react";
import errorImg from "../../images/errorImg.png";
const Error = ({ rest }) => {
  return (
    <div>
      <div className="error">
        <img src={errorImg} alt="Error" />
        <h2>{rest ? rest.error.toString() : "Error!"} </h2>
      </div>
    </div>
  );
};

export default Error;
