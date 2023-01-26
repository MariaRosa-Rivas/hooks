import React from 'react';

const Formulario = (props) => {
    const {inputs, setInputs} = props;

    const dato = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
  return (
    <form>
        <div>
            <h1>Formulario</h1>
            <label htmlFor="firsName">First Name: </label>
            <input onChange= {dato} type="text" name = "firstName"/>
        </div>
        <div>
            <label htmlFor="lastName">Last Name: </label>
            <input onChange= {dato} type="text" name = "lastName"/>
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input onChange= {dato} type="text" name = "email"/>
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input onChange= {dato} type="password" name = "password"/>
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input onChange= {dato} type="password" name = "confirmPassword"/>
        </div>
    </form>
  )
}

export default Formulario