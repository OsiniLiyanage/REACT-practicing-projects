import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hello, this is home</h1>
      <Link to="hello">
        <button>Greetings</button>
      </Link>
    </div>
  );
}

export default Home;
