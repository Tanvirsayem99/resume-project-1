import React from 'react';

const AllBlogs = () => {
    return (
        <div>
             <div>
                <h1 className='text-center my-5 text-4xl font-serif font-semibold'>Question and Answer</h1>

                <div className='bg-slate-300 py-5 grid gap-5'>
                <div className='w-11/12 mx-auto border border-red-400 p-10'>
                    <h1 className='text-pink-900 text-2xl'>1. Differences between uncontrolled and controlled components.</h1>
                    <p>controlled components controlled by the parent components, Uncontrolled components refer to components that manage their own state internally</p>
                </div>
                <div className='w-11/12 mx-auto border border-red-400 p-10'>
                    <h1 className='text-pink-900 text-2xl'>2. How to validate React props using PropTypes?</h1>
                    <p>1. Import PropTypes from the 'prop-types' library: <br /> 2. Define the PropTypes for your component. You can define PropTypes for each prop that your component expects by adding them as properties to the component class: <br /> 3. Use the defined PropTypes to validate the props passed to your component. You can access the props using the 'this.props' object</p>
                </div>
                <div className='w-11/12 mx-auto border border-red-400 p-10'>
                    <h1 className='text-pink-900 text-2xl'>3. What is the difference between nodejs and express js.</h1>
                    <p>Node.js is a runtime environment, while Express.js is a web framework built on top of Node.js. Node.js provides the platform for executing JavaScript code on the server-side, while Express.js provides a set of tools and features for building web applications on top of Node.js.</p>
                </div>
                <div className='w-11/12 mx-auto border border-red-400 p-10'>
                    <h1 className='text-pink-900 text-2xl'>4. What is a custom hook, and why will you create a custom hook?</h1>
                    <p> Custom hooks allow developers to extract commonly used logic from components and package them into a reusable hook function that can be shared across different components or even across different projects.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;