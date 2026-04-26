import React from "react";
import { useThemeStore } from "../../context/useThemeStore";

function Content() {
  const { theme } = useThemeStore();
  const style = {
    background: theme === "light" ? "#fff" : "#000",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px"
  };

  return (
    <div style={style}>
      <h4>This is the content</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maxime magnam consequuntur, voluptatem atque tenetur possimus hic nihil veniam velit ex recusandae, odio, autem assumenda voluptatum nostrum consectetur! Aspernatur quia aut minima necessitatibus consequuntur tempore laudantium, et earum magni beatae sunt iure eveniet totam harum explicabo optio vero, animi doloremque ullam commodi. Possimus, dolore. Facere expedita nesciunt animi voluptatum suscipit repellendus voluptatibus fuga ad maxime perspiciatis a nisi doloribus deserunt veritatis vero aut soluta, sequi aliquam provident dolor modi recusandae. Blanditiis ab quasi tempore suscipit consectetur nesciunt tempora accusamus debitis similique delectus, ad, tenetur alias autem. Neque quod voluptatem repudiandae!
        
        
      </p>
    </div>
  );
}

export default Content;