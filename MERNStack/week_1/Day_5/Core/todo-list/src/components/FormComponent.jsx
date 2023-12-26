import React, { useState } from 'react'


const FormComponent = ({addPlan}) => {
  const [plan,setPlan] = useState({content:"",status:false})
  const formHandler =(e)=>{
  
    e.preventDefault()
    addPlan(plan)
    setPlan({content:""})
  }
  
  return (
    <div>
    <form onSubmit={formHandler} >
    <input
          type="text"
          onChange={(e)=>setPlan({content: e.target.value,status:false})}
         value={plan.content}
         
        />
        <button>Add</button>
    </form>
      
    </div>
  )
}

export default FormComponent
