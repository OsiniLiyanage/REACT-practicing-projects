import React, { useRef } from 'react'

function InputFocus() {
  const inputRef = useRef();
  const makeItFocus = () => {
    inputRef.current.focus();
  }

  function addName() {
    inputRef.current.value = 'Ashan Dimantha'
  }

  return (
    <div>
      <input type="text" placeholder='enter text' ref={inputRef} />
      <button onClick={makeItFocus}>Click Me</button>
      <button onClick={addName}>Add Name</button>
      <button onClick={()=> {inputRef.current.value='';}}>Clear</button>
    </div>
  )
}

export default InputFocus