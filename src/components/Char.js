import React from "react";

const Char = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center"
  };
  return (
    <div style={style} onClick={props.clicked}>
      <p>{props.letter}</p>
    </div>
  );
};

export default Char;
