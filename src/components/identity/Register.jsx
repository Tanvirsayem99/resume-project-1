import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import app from '../../Firebase/Firebase.config';
// import app from '../../Firebase/Firebase.config';

const Register = () => {
    const {createUser, updateUser} = useContext(AuthContext);

    const auth = getAuth(app)

    const [faulty, setFaulty] = useState('');

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
            form.reset()
        })
        .catch(error =>{
            setFaulty(error.message)
        });
        console.log(faulty)
        
    }
    return (
        <div className='my-10'>
            
            <form onSubmit={handleSubmit} className='grid w-11/12  md:w-2/6 mx-auto gap-5 border border-red-200 p-5 rounded-tl-3xl rounded-br-3xl bg-slate-100'>
                <h1 className='text-center text-3xl font-serif font-semibold'>Please register</h1>
                    <input type="name" name="name" id="" required placeholder='Type Your Name' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500'/>
                    <input type="email" name="email" id="" required placeholder='Type Your Email' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500' />
                    <input type="password" name="password" id="" required placeholder='Type Your Password' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500' />
                    <input type="url" name="url" id="" required placeholder='Type Your Photo URL' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500' />
                    <p>Already have account? Please <Link className='text-blue-500' to="/login">Login</Link></p>
                    {
                        faulty? <h1>{faulty}</h1>: ''
                    }
                    <input type="submit" name="submit" id="" value="Register" className='bg-red-300 w-40 rounded-xl py-2 mx-auto' />
            </form>
            
        </div>
    );
};

export default Register;