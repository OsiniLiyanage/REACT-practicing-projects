import { useEffect } from "react";

function Sync() {
  useEffect(() => {
    console.log("Welcome to useEffect!");
  },[]);

  return <div>Hello</div>;
}

export default Sync;