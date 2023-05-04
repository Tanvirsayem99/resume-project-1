import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navigation = () => {

  const {user, logOut} = useContext(AuthContext);
  console.log(user)
  const handleLogOut = () =>{
    logOut();
  }

  return (
        <div>
                <div className="navbar bg-slate-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Home</NavLink>
      {
        user?<button onClick={handleLogOut}>SignOUt</button> : <div className='flex  flex-col md:flex-row'><NavLink to="/register" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Register</NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Login</NavLink></div>
      }
      <NavLink to="/blog">Blog</NavLink>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Food Bazar</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-10">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Home</NavLink>
      {
        user?<button onClick={handleLogOut}>SignOUt</button> : <div className='flex gap-5 flex-col md:flex-row'><NavLink to="/register" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Register</NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Login</NavLink></div>
      }
      <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Blog</NavLink>
    </ul>
  </div>
  <div className="navbar-end "  >
    <div className='tooltip tooltip-bottom mr-16' data-tip={user?.displayName}>
    {
      user?.photoURL? <div className="avatar">
      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={user?.photoURL} />
      </div>
    </div> : <></>
    }
    </div>
  </div>
</div>
        </div>
    );
};

export default Navigation;