import React from 'react';

const Pricing = () => {
    return (
        <>
           <div className='px-32 py-10 space-y-6'>
             <div className='items-center text-center'>
                 <h1 className='text-[48px] font-bold'>Simple, Transparent Pricing</h1>
                 <p className='text-[#627382]  text-[16px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
             </div>
             <div className='grid grid-cols-3 gap-4 '>
                <div className="card w-78 h-90 bg-[#F2F2F2] shadow-sm flex flex-col">
                    <div className="card-body">
                        <div className="">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p className='text-[#627382]  text-[12px]'>Perfect for getting started</p>
                            <p><span className='text-2xl font-bold'>$0</span><span className='text-[#627382]  text-[16px]'>/month</span></p>
                        </div>
                        <ul className="mt-2 flex flex-col gap-2 text-xs flex-1 ">
                            <li>
                                <span className='text-green-500 font-bold'>✓ </span>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <span className='text-green-500 font-bold'>✓ </span>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <span className='text-green-500 font-bold'>✓ </span>
                                <span>Community support</span>
                            </li>
                            <li>
                                <span className='text-green-500 font-bold'>✓ </span>
                                <span>1 project per month</span>
                            </li>
                           
                            
                           
                        </ul>
                        <div className="mt-3">
                            <button className="btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card relative w-78 h-90 bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm flex flex-col">
                    <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <span className="badge badge-sm badge-warning  bg-[#FEF3C6] text-[#BB4D00] ">Most Popular</span>
                    </div>
                    <div className="card-body">
                        <div className="">
                            <h2 className="text-white text-3xl font-bold">Pro</h2>
                            <p className='text-white  text-[12px]'>Best for professionals</p>
                            <p><span className='text-white text-2xl font-bold'>$29</span><span className='text-white  text-[16px]'>/month</span></p>
                        </div>
                        <ul className="mt-2 flex flex-col gap-2 text-white text-xs flex-1 ">
                            <li>
                                <span className='text-white font-bold'>✓ </span>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <span className='text-white font-bold'>✓ </span>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <span className='text-white font-bold'>✓ </span>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <span className='text-white font-bold'>✓ </span>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <span className='text-white font-bold'>✓ </span>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <span className='text-white font-bold'>✓ </span>
                                <span>Advanced analytics</span>
                            </li>
                            
                           
                        </ul>
                        <div className="mt-3">
                            <button className="btn btn-primary btn-outline bg-white btn-block rounded-full">Start Pro Trial</button>
                        </div>
                    </div>
                </div>
                <div className="card w-78 h-90 bg-[#F2F2F2] shadow-sm flex flex-col">
                    <div className="card-body">
                        <div className="">
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p className='text-[#627382]  text-[12px]'>For teams and businesses</p>
                            <p><span className='text-2xl font-bold'>$99</span><span className='text-[#627382]  text-[16px]'>/month</span></p>
                        </div>
                        <ul className="mt-2 flex flex-col gap-2 text-xs flex-1 ">
                            <li>
                                <span className='text-green-500 font-bold'>✓ </span>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <span className='text-green-500 font-bold'>✓ </span>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <span className='text-green-500 font-bold'>✓ </span>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <span className='text-green-500 font-bold'>✓ </span>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <span className='text-green-500 font-bold'>✓ </span>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <span className='text-green-500 font-bold'>✓ </span>
                                <span>Custom branding</span>
                            </li>
                            
                           
                        </ul>
                        <div className="mt-3">
                            <button className="btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]  btn-block rounded-full">Contact Sales</button>
                        </div>
                    </div>
                </div>

             </div>

           </div> 
            <div className=' mt-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA]   items-center text-center '>
                <div className='p-20 space-y-4'>
                    <h1 className='text-4xl font-bold text-white'>Ready to Transform Your Workflow?</h1>
                    <p className='text-white text-[12px] opacity-75'>Join thousands of professionals who are already using Digitools to work smarter.<br/>Start your free trial today.</p>
                    <div className='flex gap-2 justify-center'>
                        <button className='btn btn-outline text-[#9514FA] bg-white rounded-full'>Explore Products</button>
                        <button className='btn btn-outline outline-white rounded-full text-white'>View Pricing</button>
                    </div>
                    <p className='text-white text-[12px] opacity-75'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </>
    );
};

export default Pricing;