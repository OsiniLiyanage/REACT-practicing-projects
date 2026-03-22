import { useState } from "react";

// activity 1
function Calculation() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };


  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Calculation;