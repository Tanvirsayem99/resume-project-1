import React from 'react';

const Login = () => {
    return (
        <div className='my-10'>
            <form className='grid w-11/12  md:w-2/6 mx-auto gap-5 border border-red-200 p-5 rounded-tl-3xl rounded-br-3xl bg-slate-100'>
                <h1 className='text-center text-3xl font-serif font-semibold'>Please Login</h1>
                    <input type="email" name="email" id="" required placeholder='Type Your Email' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500' />
                    <input type="password" name="password" id="" required placeholder='Type Your Password' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500' />
                    <input type="submit" name="submit" id="" value="Register" className='bg-red-300 w-40 rounded-xl py-2 mx-auto' />
                    <button>GithHub</button>
                    <button>Google</button>
            </form>
        </div>
    );
};

export default Login;