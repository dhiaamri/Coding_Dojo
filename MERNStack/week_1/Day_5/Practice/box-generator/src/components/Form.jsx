import React, { useState } from "react";
import Display from "./display";


const Form = () => {

    const [color,setColor] = useState("")
    const [colors,setColors] = useState(["red","black"])

    const [height,setHeight] =useState("")
    const boxHandler =(e)=> {

        e.preventDefault();

        setColors([...colors,color]);

        setColor("")
    }

  return (
    <div>
      <form onSubmit={ boxHandler}>
        <div>
          <label htmlFor="">Color : </label>
          <br />
          <input
            type="color"
            onChange={(e)=> setColor(e.target.value)}
            value={color}
            />
        :
        </div>
        <button>Add</button>
      </form>
      <Display colors={colors} ></Display>

    </div>
  );
};

export default Form;
