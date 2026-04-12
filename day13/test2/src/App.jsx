import { useState } from 'react'

import './App.css'
import LoginForm from './Controlled/LoginForm';


  function HTMLForms() {
  return (
    <LoginForm/>
    // <div>
    //   <form>
    //     <div>
    //       <label htmlFor="firstName">First Name </label>
    //       <input
    //         type="text"
    //         placeholder="First Name"
    //         name="firstName"
    //         id="firstName"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="firstName">Last Name </label>
    //       <input
    //         type="text"
    //         placeholder="last Name"
    //         name="LastName"
    //         id="lastName"
    //       />
    //     </div>
    //     <br />
    //     <div>
    //       <label htmlFor="gender">Male </label>
    //       <input type="radio" name="gender" id="male" value="male" />
    //       <br />
    //       <label htmlFor="gender">Female </label>
    //       <input type="radio" name="gender" id="female" value="female" />
    //       <br />
    //       <label htmlFor="gender">Other </label>
    //       <input type="radio" name="gender" id="other" value="other" />
    //     </div>
    //     <div>
    //       <label htmlFor="A"></label>
    //       <input type="checkbox" value={A}  />
    //     </div>
    //   </form>
    // </div>
  );
}

export default HTMLForms;

