import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='px-32 bg-[#101727] '>
                <footer className="footer sm:footer-horizontal  text-neutral-content flex justify-between  py-20">
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
                            <a><img className=" bg-white rounded-full p-2" src="src\assets\social\Instagram.png" alt="" /></a>
                            <a><img className=" bg-white rounded-full p-2" src="src\assets\social\fb.png" alt="" /></a>
                           <a><img  className=" bg-white rounded-full p-2" src="src\assets\social\X.png" alt="" /></a>
                        </div>
                    </nav>
                  
                </footer>
                 <hr className='border-gray-500' />
                <div className=' flex justify-between  py-5'>
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