import React, { useRef } from "react";

function UncontrolledForm() {
  const emailRef = useRef();
  const passRef = useRef();

  const submit = (e) => {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" placeholder="email" ref={emailRef} />
        <br />
        <input type="password" placeholder="password" ref={passRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
