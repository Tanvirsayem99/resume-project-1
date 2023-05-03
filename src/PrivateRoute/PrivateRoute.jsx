import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    
    const location = useLocation();
    if(loading){
        return <div className='grid'>
            <progress className="progress progress-primary w-56" value="0" max="100"></progress>
<progress className="progress progress-primary w-56" value="10" max="100"></progress>
<progress className="progress progress-primary w-56" value="40" max="100"></progress>
<progress className="progress progress-primary w-56" value="70" max="100"></progress>
<progress className="progress progress-primary w-56" value="100" max="100"></progress>
        </div>
    }
    
     if(user){
        return children;
    }
    return (
        <Navigate state={{from: location}} to="/login">

        </Navigate>
    );
};

export default PrivateRoute;