import React from "react";

function HTMLForms() {
  return (
    <div>
      HTMLForms
      <form action="">
        <div>
          <label htmlFor="firstName"></label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="first name"
          />
          <br />
          <label htmlFor="lastName"></label>
          <input
            type="text"
            name="firstName"
            id="lastName"
            placeholder="last name"
          />
        </div>
        <div>
          <h3>Select your favorite language:</h3>

          <label>
            <input type="radio" value="JavaScript" name="language" />
            JavaScript
          </label>

          <br />

          <label>
            <input type="radio" value="Python" name="language" />
            Python
          </label>

          <br />

          <label>
            <input type="radio" value="Java" name="language" />
            Java
          </label>
        </div>
        <div>
          <label htmlFor="car">I have a car</label>
          <input type="checkbox" value="car" />
          <br />
          <label htmlFor="bus">I have a bus</label>
          <input type="checkbox" value="bus" />
          <br />
          <label htmlFor="bike">I have a bike</label>
          <input type="checkbox" value="bike" />
        </div>
      </form>
    </div>
  );
}

export default HTMLForms;
