import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import google from '../../assets/google.png'
import gitHub from '../../assets/github.png'

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
        setFaulty('');
        setGoogleFaulty('');
        setGithubFaulty('');
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
        <div className='my-5 box mx-auto md:w-2/6 w-11/12'>
            <span className='borderLine'></span>
            
            <form onSubmit={handleSubmit}>
                <h1 className='text-slate-50 text-2xl text-center font-serif mt-3'> Login</h1>
                <div className="input-box w-11/12">
                <input type="email" name="email" id="" required/>
                    <span>Username</span>
                    <i></i>
                </div>    
                <div className="input-box w-11/12">
                <input type="password" name="password" id="" required />
                    <span>Password</span>
                    <i></i>
                </div>        
                   
                    
                <p className='link'>If You Are New? Please <Link className='text-blue-500' to="/register" >Register</Link></p>
                    <input type="submit" name="submit" id="" value="Login" className='bg-white w-40 rounded-xl py-2 mx-auto my-5 cursor-pointer text-black' />
                    <div>
                    {
                        faulty? <p className='text-red'>{faulty}</p>: ''
                    }
                    {
                        googleFaulty? <p className='text-red'>{googleFaulty}</p>: ''
                    }
                    {
                        githubFaulty? <p className='text-red'>{githubFaulty}</p>: ''
                    }
                    <div className='grid justify-center gap-5'>
                    <div className=' cursor-pointer flex gap-2 btn' onClick={handleGithubLogin}> <img src={gitHub} alt="" className='w-6'/> Sign in with GitHub</div>
                    <div className='cursor-pointer flex gap-2 btn' onClick={handleGoogleLogin}> <img src={google} alt="" className='w-6'/> Sign in with Google</div>
                    </div>
            </div>
            </form>
           
            
        </div>
    );
};

export default Login;