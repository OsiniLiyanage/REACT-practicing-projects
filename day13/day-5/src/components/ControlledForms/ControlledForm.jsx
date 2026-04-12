import React, { useState } from 'react'

function ControlledForm() {
    const [name, setName] = useState();
  return (
    <div>
        <h3>Controlled Form</h3>
        <input type="text"  placeholder='your name' onChange={(e)=>setName(e.target.value)} value={name}/>
        <h3>This is {name}</h3>
    </div>
  )
}

export default ControlledForm