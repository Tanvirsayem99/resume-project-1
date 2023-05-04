import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer bg-black p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Recipes</span> 
    <a className="link link-hover">Chicken Roast</a>
    <a className="link link-hover">Biriyani</a>
  </div> 
  <div>
    <span className="footer-title">State Food</span> 
    <a className="link link-hover">Fuchka</a>
    <a className="link link-hover">chotpoti</a>
    <a className="link link-hover">BelPuri</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;