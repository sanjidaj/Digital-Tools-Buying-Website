import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar px-6 md:px-32">
            <div className="navbar-start">
                <h1 className='text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>
              

            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-2 px-1 font-semibold">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <img src="src\assets\products\shopping-cart.png" alt="" />
                <p className='font-semibold'>Login</p>
                <a className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;