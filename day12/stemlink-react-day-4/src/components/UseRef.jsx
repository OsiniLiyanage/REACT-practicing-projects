import { useEffect, useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState();
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [name]);
  return (
    <div>
      <h1>UseRef</h1>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <h4>Your name is {name}</h4>
      <p>Render counts is {renderCount.current} times.</p>
      <p>This is completely seperate from our component render cycle`</p>
    </div>
  );
}

export default UseRef;
