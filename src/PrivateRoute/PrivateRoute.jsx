import React from 'react';

import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
          <div className="text-center my-10">
            <button className="btn btn-square loading "></button>
          </div>
        );
      }
    
    
     if(user){
        return children;
    }
    return (
        <Navigate state={{from: location}} to="/login" replace>

        </Navigate>
    );
};

export default PrivateRoute;