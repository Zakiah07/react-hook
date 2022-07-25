import React, { useState } from "react";

// const StateTutorial = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <div>
//       {counter} <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Zaza");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="Type Something..." onChange={onChange}/> {inputValue}
    </div>
  );
};

export default StateTutorial;
