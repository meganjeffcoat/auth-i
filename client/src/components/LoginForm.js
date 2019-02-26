import React from 'react';
import { Link } from 'react-router-dom';
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

const Login = styled.form`
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

const LoginForm = props => {
    return(
        <FormContainer>
            <h1>Login</h1>
            <Login onChange={props.handleLoginChange} onSubmit={props.handleLogin}>
                <h2>Username:</h2>
                <input type="text" name="username" required/>
                <h2>Password:</h2>
                <input type="password" name="password" required/>
                <button type="submit">Login</button>
                <Link to='/register' style={{color: 'white'}}>No account? Click here to Register</Link>
            </Login>
        </FormContainer>
    )
}

export default LoginForm;