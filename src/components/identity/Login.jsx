import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {googleLogin, githubLogin, signIn, loading}  = useContext(AuthContext);
    const [googleFaulty, setGoogleFaulty] = useState('');
    const [githubFaulty, setGithubFaulty] = useState('');
    const [faulty, setFaulty] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || '/';
    

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace:true});
        })
        .catch(error =>{
            setFaulty(error.message)
        });
        
    }

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace:true});
        })
        .then(error =>{
            setGoogleFaulty(error?.message)
        })
    }
    const handleGithubLogin =()=>{
        githubLogin()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace:true});
        })
        .then(error =>{
            setGithubFaulty(error?.message)
        })
    }
    return (
        <div className='my-10 w-11/12 md:w-2/6 mx-auto'>
            <div className='md:2/6 mx-auto border border-red-200 p-5 rounded-tl-3xl rounded-br-3xl bg-slate-100'>
            <form onSubmit={handleSubmit} className='grid w-11/12  md:w-full mx-auto gap-5 '>
                <h1 className='text-center text-3xl font-serif font-semibold'>Please Login</h1>
                    <input type="email" name="email" id="" required placeholder='Type Your Email' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500' />
                    <input type="password" name="password" id="" required placeholder='Type Your Password' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500' />
                    <p>If You Are New? Please <Link className='text-blue-500' to="/register" >Register</Link></p>
                    <input type="submit" name="submit" id="" value="Login" className='bg-red-300 w-40 rounded-xl py-2 mx-auto' />
            </form>
            <div className='grid justify-center gap-5 my-5'>
                    {
                        googleFaulty? <p>{googleFaulty}</p>: ''
                    }
                    {
                        githubFaulty? <p>{githubFaulty}</p>: ''
                    }
                    <button className='bg-slate-400 w-44 py-2' onClick={handleGithubLogin}>Sign in with GitHub</button>
                    <button className='bg-slate-400 w-44 py-2' onClick={handleGoogleLogin}> Sign in with Google</button>
                    </div>
            </div>
        </div>
    );
};

export default Login;