import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


import './Login.css'

const Login = () => { 
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from =location.state?.from?.pathname || '/'
    const handleSignIn=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset()
            navigate(from, {replace:true})
        })
        .then(error=>console.error(error))
      
    }
    return (
        <div className='form-container'>
            <h1 className='form-tittle'>Login</h1>
            <form onSubmit={handleSignIn}>
                <div className='form-control'>
                    <label htmlFor='email'>Emali:</label>
                    <input type='email' name='email' placeholder='Email' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Password:</label>
                    <input type='password' name='password' placeholder='Password' required></input>
                </div>
                <input className='btn-submit' type='submit' value='LogIn'/>
          </form>
          <p className='p-style'>New to ema john <Link to='/signup'>Create a new account</Link></p>
        </div>
    );
};

export default Login;