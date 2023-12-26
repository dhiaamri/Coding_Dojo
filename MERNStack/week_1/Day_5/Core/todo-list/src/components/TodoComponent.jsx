import React from 'react'


const TodoComponent = ({plans,deletePlan,setPlans}) => {


  const deleteHandler=(idx)=>()=>{
    deletePlan(idx)
  }

  const checkHandler=(idx)=>()=>{
    console.log(plans[idx].status);
    const plansUpdated=[...plans]
    plansUpdated[idx].status= !plans[idx].status
      setPlans(plansUpdated)
    }
  

  
  return (
    <div>
      {plans.map((v, idx)=>{
       return <div key={idx}> <h3  > {v.content}  </h3> <input
       
          type="checkbox"
          checked={v.status}
          onChange={checkHandler(idx)}
        
        />
        <button onClick={deleteHandler(idx)}>Delete</button>
        </div>
        
      })}
    </div>
  )
}

export default TodoComponent
