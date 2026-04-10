import { useRef } from "react";

function CounterRef() {
  const countRef = useRef(0);

  const increase = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  return (
    <div>
      <h2>{countRef.current}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default CounterRef;
