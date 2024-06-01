import React from "react";
import "./input.css";

function Input(props) {
  return (
    <div className="inp">
      <label htmlFor=""> {props.titulo}</label>
      {props.type === "textarea" ? (
        <textarea name="" id=""></textarea>
      ) : (
        <input type={props.type} />
      )}
    </div>
  );
}

export default Input;
