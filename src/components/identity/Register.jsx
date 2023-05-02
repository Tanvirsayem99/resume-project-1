import React from 'react';

const Register = () => {
    return (
        <div className='my-10'>
            
            <form className='grid w-11/12  md:w-2/6 mx-auto gap-5 border border-red-200 p-5 rounded-tl-3xl rounded-br-3xl bg-slate-100'>
                <h1 className='text-center text-3xl font-serif font-semibold'>Please register</h1>
                    <input type="name" name="name" id="" required placeholder='Type Your Name' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500'/>
                    <input type="email" name="email" id="" required placeholder='Type Your Name' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500' />
                    <input type="password" name="password" id="" required placeholder='Type Your Name' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500' />
                    <input type="url" name="url" id="" required placeholder='Type Your Name' className='bg-slate-200 pl-3 py-3 rounded-md border border-slate-500' />
                    <input type="submit" name="submit" id="" value="Register" className='bg-red-300 w-40 rounded-xl py-2 mx-auto' />
            </form>
            
        </div>
    );
};

export default Register;