import React from 'react';
import fb from "../assets/social/fb.png";
import instagram from "../assets/social/Instagram.png";
import X from "../assets/social/X.png";

const Footer = () => {
    return (
        <>
            <div className='md:px-32 p-2 bg-[#101727] '>
                <footer className="footer  text-neutral-content md:flex md:justify-between grid grid-cols-2 grid-rows-2 py-20">
                    <div>
                        <h1 className='text-2xl font-bold '>DigiTools</h1>
                        <p className='text-white  text-[12px] opacity-75'>Premium digital tools for creators,<br/>professionals, and businesses. Work smarter<br/>with our suite of powerful tools.</p>
                    </div>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <div className='flex gap-3'>
                            <a><img className=" bg-white rounded-full p-2" src={instagram} alt="" /></a>
                            <a><img className=" bg-white rounded-full p-2" src={fb }alt="" /></a>
                           <a><img  className=" bg-white rounded-full p-2" src={X} alt="" /></a>
                        </div>
                    </nav>
                  
                </footer>
                 <hr className='border-gray-500' />
                <div className=' md:flex md:justify-between grid grid-row-2 text-center justify-center py-5'>
                    <div>
                        <p className='text-white  opacity-65'>&copy;2026 Digitools. All rights reserved.</p>

                    </div>

                    <div className='flex  gap-8'>
                        <p className='text-white  opacity-65'>Privacy Policy</p>
                        <p className='text-white  opacity-65'>Terms of Service</p>
                        <p className='text-white  opacity-65'>Cookies</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;