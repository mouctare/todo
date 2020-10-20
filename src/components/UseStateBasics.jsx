import React, { useState } from "react";

const UseStateBasics = () => {
  // UseState est une function qui peut prendre des tableaux , objet etc--
  const [text, setText] = useState("random title"); // Ceci est une destructuration
  const handleClick = () => {
    if (text === "random title") {
      setText("hello word");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
