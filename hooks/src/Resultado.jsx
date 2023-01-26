import React from 'react'

const Resultado = ({dato}) => {
    const { firstName, lastName, email, password, confirmPassword}= dato;
  return (
    <div>
        <h3> Resultado </h3>
    <p>First Name : {firstName}</p>
    <p>Last Name : {lastName}</p>
    <p>Email : {email}</p>
    <p>Password: {password}</p>
    <p>Confirm Password : {confirmPassword}</p>
    </div>
  )
}

export default Resultado;