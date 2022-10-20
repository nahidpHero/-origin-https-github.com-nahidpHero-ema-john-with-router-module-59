import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const PrivetRoutes = ({children}) => {
    const {user,lodding}=useContext(AuthContext)
    let location=useLocation()
    if(lodding){

        return <div>Lodding...</div>
    }
   if(user && user.uid){
    return children
   }
   return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoutes;