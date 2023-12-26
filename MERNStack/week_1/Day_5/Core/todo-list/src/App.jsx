import { useState,useEffect } from 'react'

import './App.css'
import FormComponent from './components/FormComponent.JSX'
import TodoComponent from './components/TodoComponent'

function App() {
  const storedPlans = JSON.parse(localStorage.getItem('plans')) || [
    { content: "Wake up at 6 am", status: false },
    { content: "Eat breakfast", status: true },
    { content: "Wake up at 6 am", status: false }
  ];
  const [plans, setPlans] = useState(storedPlans);

  const addPlan = (newPlan) => {
      const updatedPlans = [...plans, newPlan];
      setPlans(updatedPlans);
      localStorage.setItem('plans', JSON.stringify(plans));
    }

    const deletePlan = (idx) => {
      console.log("plan to delete index ",idx);
      const filteredPlans=plans.filter((v,i)=> i!=idx )
      setPlans(filteredPlans)
      localStorage.setItem('plans', JSON.stringify(filteredPlans));
    }
    
    

      
    

  return (
    <div>
      <TodoComponent deletePlan={deletePlan} setPlans={setPlans} plans={plans}/>
      <FormComponent addPlan={addPlan} />
    </div>
  )
}

export default App
