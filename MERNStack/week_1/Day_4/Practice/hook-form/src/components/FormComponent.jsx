import React,{useState} from 'react'
import PersonCard from './PersonCard'

const FormComponent = props => {

    const [people,setPeople]  = useState([
        {firstname:"John",lastname:"doe", email:"a@a.com", password:"red"},
        {firstname:"mark",lastname:"zac", email:"a@a.com", password:"red"},
        {firstname:"dhia",lastname:"amri", email:"a@a.com", password:"red"},
    ])


    const [firstname,setfirstname]=useState("")
    const [lastname,setLastname]=useState("")

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

    

    const addUser=(e)=>{
        e.preventDefault();

        const newUser = { firstname, lastname, email,password};
        setPeople([...people,newUser])
        

    }

  return (
    <div>
      <form onSubmit={(e)=> addUser(e) }>
        <div>
          <label>First name </label>
          <input type='text' onChange={e => setfirstname(e.target.value)} />
        </div>
        <h4>{firstname}</h4>
        <div>
          <label>Last name </label>
          <input type='text' onChange={e => setLastname(e.target.value)} />
        </div>
        <h4>{lastname}</h4>

        <div>
          <label>Email Address: </label>
          <input type='text' onChange={e => setEmail(e.target.value)} />
        </div>
        <h4>{email}</h4>

        <div>
          <label>Password: </label>
          <input type='text' onChange={e => setPassword(e.target.value)} />
        </div>
                <h4>{password}</h4>

        <div>
          <label>Confirm Password: </label>
          <input type='text' onChange={e => setConfirmPassword(e.target.value)} />
        </div>
        <h4>{confirmPassword}</h4>

        <input type='submit' value='Create User' />
      </form>
      {people.map((person, idx)=><PersonCard key={idx} person={person}></PersonCard>)}
    </div>
  )
}

export default FormComponent
