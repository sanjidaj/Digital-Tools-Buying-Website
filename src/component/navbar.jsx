import React from 'react';

const Navbar = ({carts}) => {
    return (
        
        <div className="navbar px-6 md:px-32 shadow-sm">
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
            <div className="navbar-end gap-3 relative">
                <img src="src\assets\products\shopping-cart.png" alt="" />
                 
                {carts.length > 0 && (
                    <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold text-white bg-red-500 absolute right-37 -translate-x-1/2 -translate-y-1/2">
                        {carts.length}
                    </span>
                )}
                <p className='font-semibold'>Login</p>
                <button className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</button>
            </div>
        </div>

    );
};

export default Navbar;