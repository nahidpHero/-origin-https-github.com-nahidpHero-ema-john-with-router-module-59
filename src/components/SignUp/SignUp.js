
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css'

const SignUp = () => {
    const {register}=useContext(AuthContext)
    const [massage,setMassage]=useState(null)
    const handleRegister=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirmPassword=form.confirmpassword.value;
        if(password<6){
            setMassage('Your password must be six charectar')
            return;
        }
        if(password !==confirmPassword){
            setMassage('Your password does not match')
            return;
        }
        register(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset()
        })
        .catch(error=>console.error(error))
    }
    return (
        <div className='form-container'>
        <h1 className='form-tittle'>Sign Up</h1>
        <form onSubmit={handleRegister}>
            <div className='form-control'>
                <label htmlFor='email'>Emali:</label>
                <input type='email' name='email' placeholder='Email' required></input>
            </div>
            <div className='form-control'>
                <label htmlFor='email'>Password:</label>
                <input type='password' name='password' placeholder='Password' required></input>
            </div>
            <div className='form-control'>
                <label htmlFor='email'>Confirm Password:</label>
                <input type='password' name='confirmpassword' placeholder='Confirm Password' required></input>
            </div>
            {massage && <p className='p-style'>{massage}</p>}
            <input className='btn-submit' type='submit' value='Sign Up'/>

      </form>
      <p className='p-style'>Already have an acount <Link to='/login'>LogIn</Link></p>
    </div>
    );
};

export default SignUp;