import React, { useState } from 'react'


const FormComponent = ({setPlans, plans}) => {
  // const [plan,setPlan] = useState({content:"",status:false})
  const [input, setInput] = useState({content: "",status:false})
  const formHandler =(e)=>{
    e.preventDefault()
    if(!input.content){
      return;
    }

    setPlans([...plans, input])
    setInput({content:""})
  }
  
  return (
    <div>
    <form onSubmit={formHandler} >
    {/* {JSON.stringify(input)} */}
    {/* {JSON.stringify(plans)} */}
    <input
          type="text"
          onChange={(e)=>setInput({content: e.target.value,status:false})}
         value={input.content}
         
        />
        <button>Add</button>
    </form>
      
    </div>
  )
}

export default FormComponent
