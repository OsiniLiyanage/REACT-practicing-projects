import { useEffect, useState } from "react";

function UseState() {
  const [name, setName] = useState();
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((previousCount) => previousCount + 1);
  }, [name]);
  return (
    <div>
      <h1>UseState</h1>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <h4>Your name is {name}</h4>
      <p>Render counts is {renderCount} times.</p>
    </div>
  );
}

export default UseState;
