import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Form = () => {

  const navigate = useNavigate()

const [choice,setChoice] = useState("")
const [id,setId] = useState(0) 
const formHandler=(e)=>{

  e.preventDefault()

  navigate(`/${choice}/${id}`)
  
   
  
}


  return (
    <div>
    <form onSubmit={formHandler}>
    <select onChange={(e)=>setChoice(e.target.value)} >
    <option value="people"  >Choose</option>
      <option value="people"  >People</option>
      <option value="planets" >Planets</option>
    </select>
    <label>
    ID : 
    </label>
    <input type="number"
      onChange={(e)=>setId(e.target.value)}
    />
      <button>Search</button>
    </form>
      
    </div>
  )
}

export default Form
