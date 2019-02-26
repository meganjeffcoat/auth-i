import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    width: 350px;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid black;
    background: rgb(26, 26, 26, 0.7);
    opacity: 0.8;
    border-radius: 5px;
    h1{
        text-align: center;
        margin: unset;
        color: white;
    }
`;

const Register = styled.form`
    display: flex;
    flex-direction: column;
    input,button{
        padding: 10px 5px;
        margin: 5px 0;
        border: 1px solid red;
        border-radius: 5px;
    }
    button{
        margin-top: 10px
    }
    h2{
        font-size: 1.6rem;
        margin: unset;
        color: white;
    }
`;

const RegisterForm = props => {
    return(
        <FormContainer>
            <h1>Register</h1>
            <Register onChange={props.handleRegisterChange} onSubmit={props.handleRegister}>
                <h2>Username:</h2>
                <input type="text" name="username" required/>
                <h2>Password:</h2>
                <input type="password" name="password" required/>
                <button type="submit">Register</button>
            </Register>
        </FormContainer>
    )
}

export default RegisterForm;