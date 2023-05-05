import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import app from '../../Firebase/Firebase.config';
// import app from '../../Firebase/Firebase.config';

const Register = () => {
    const {createUser, updateUser, logOut} = useContext(AuthContext);
    const [faulty, setFaulty] = useState('');
    const navigate = useNavigate();
    const from = '/login';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.url.value;
        console.log(photo)

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            updateUser(loggedUser, name, photo)
            logOut()
            navigate(from, {replace:true});
            form.reset()
        })
        .catch(error =>{
            setFaulty(error.message)
        });
        console.log(faulty)
        
    }
    return (
        <div className='my-5 box mx-auto md:w-2/6 w-11/12'>
            <span className='borderLine'></span>
            <form onSubmit={handleSubmit}>
                <h1 className='text-slate-50 text-2xl text-center font-serif mt-3'> Register</h1>
                    <div className="input-box w-11/12">
                    <input type="name" name="name" id="" required />
                    <span>Username</span>
                    <i></i>
                    </div>
                    <div className="input-box w-11/12">
                    <input type="email" name="email" id="" required  />
                    <span>UserEmail</span>
                    <i></i>
                    </div>
                    <div className="input-box w-11/12">
                    <input type="password" name="password" id="" required  />
                    <span>Password</span>
                    <i></i>
                    </div>
                    <div className="input-box w-11/12">
                    <input type="url" name="url" id="" required  />
                    <span>Photo</span>
                    <i></i>
                    </div>
                    
                    <p className='link'>Already have account? Please <Link className='text-blue-500' to="/login">Login</Link></p>
                    {
                        faulty? <h1 className='text-red-500'>{faulty}</h1>: ''
                    }
                    <input type="submit" name="submit" id="" value="Register" className='bg-white w-40 rounded-xl py-2 mx-auto my-5 cursor-pointer' />
            </form>
            
        </div>
    );
};

export default Register;

// bg-slate-200 pl-3 py-3 rounded-md border border-slate-500