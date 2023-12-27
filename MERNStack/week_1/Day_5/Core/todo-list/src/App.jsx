import { useState,useEffect } from 'react'

import './App.css'
import FormComponent from './components/FormComponent.JSX'
import TodoComponent from './components/TodoComponent'

function App() {
  const storedPlans = JSON.parse(localStorage.getItem('plans')); 
  const [plans, setPlans] = useState(storedPlans);
  const [plan, setPlan] = useState({content:"",status:false})
  // grab all the items from local storage


  // add task to local storage
  useEffect(()=>{
    localStorage.setItem('plans', JSON.stringify(plans));
  },[plans])
  // const addPlan = (newPlan) => {
  //     const updatedPlans = [...plans, newPlan];
  //     setPlans(updatedPlans);
  //     localStorage.setItem('plans', JSON.stringify(plans));
  //   }

    const deletePlan = (idx) => {
      console.log("plan to delete index ",idx);
      const filteredPlans=plans.filter((v,i)=> i!=idx )
      setPlans(filteredPlans)
    }
    

    
  return (
    <div>
    {/* {JSON.stringify(plans)} */}
      <TodoComponent deletePlan={deletePlan} setPlans={setPlans} plans={plans}/>
      <FormComponent setPlans={setPlans} plans={plans} />
    </div>
  )
}

export default App
