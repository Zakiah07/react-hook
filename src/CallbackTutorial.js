import axios from "axios";
import { useState } from "react";
import Child from "./Child";

export default function CallbackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hello Bello!");

  const returnComment = () => {
    return data;
  };

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
