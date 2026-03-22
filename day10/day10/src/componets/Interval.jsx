import React, { useEffect, useState } from "react";

function Interval() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <h1>Timer</h1>
      <h2>Now it's {time}</h2>
    </div>
  );
}

export default Interval;