import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const addData = () =>{
    inputRef.current.value = "Ashan"
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={addData}>Add Value</button>
    </div>
  );
}

export default InputFocus;
