import { useState } from "react";

function Button() {
  const [value, setValue] = useState(0);

  function add() {
    
    setValue(value + 1);
  }

  function sub(){
    setValue(value-1);
  }

  return (
    <section>
      <h3>{value}</h3>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
    </section>
  );
}

export default Button;
