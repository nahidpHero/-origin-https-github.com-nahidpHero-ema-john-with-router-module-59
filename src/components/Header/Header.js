import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogout=()=>{
        logOut()
        .then(()=>{
            //LogOut successful
        })
        .catch((error)=>{
            //error
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link>{user?.email}</Link>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
               {
                user?.uid?
                <Link onClick={handleLogout} >LogOut</Link>
                :<>
                 <Link to='/signup'>SignUp</Link>
                <Link to='/login'>LogIn</Link>
                </>   
               }

            </div>
        </nav>
    );
};

export default Header;