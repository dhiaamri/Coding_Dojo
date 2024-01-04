import React from 'react'

const PersonCard = props => {
  return (
    <div>
      <fieldset>
        <legend>{props.person.firstname} </legend>
        <h4> LAST NAME :{props.person.lastname}</h4>

        <h4> Email : {props.person.email}</h4>

        <h4> Password : {props.person.password}</h4>
      </fieldset>
    </div>
  )
}

export default PersonCard
