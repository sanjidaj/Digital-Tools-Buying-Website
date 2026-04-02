import React from 'react';

const Steps = () => {
    return (
        <>
            <div className='bg-[#F9FAFC] mt-20 mb-20 '>
                <div className='px-32 py-20 items-center text-center space-y-4'>
                    
                    <h1 className='text-[48px] font-bold'>Get Started in 3 Steps</h1>
                    <p className='text-[#627382]  text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
            
                <div className='grid grid-cols-3 gap-6 '>
                    <div className="card bg-base-100 w-75 shadow-sm relative py-8">
                        
                        <figure className="px-10 pt-10">
                            <img
                                src="src\assets\user.png"
                                alt=""
                                className="rounded-full bg-[#E1E7FF] p-4" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Create Account</h2>
                            <p>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                        <div>
                            <p className='bg-[#9514FA] p-1 rounded-full text-[12px] font-bold text-white absolute top-50 left-50'>01</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-75 shadow-sm relative py-8">
                        <figure className="px-10 pt-10">
                            <img
                                src="src\assets\package.png"
                                alt=""
                                className="rounded-full bg-[#E1E7FF] p-4" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Choose Products</h2>
                            <p>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                        <div>
                            <p className='bg-[#9514FA] p-1 rounded-full text-[12px] font-bold text-white absolute top-50 left-50'>02</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-75 shadow-sm relative py-8">
                        <figure className="px-10 pt-10 ">
                            <img
                                className="rounded-full bg-[#E1E7FF] p-4"
                                src="src\assets\rocket.png"
                                alt=""
                             />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Start Creating</h2>
                            <p>Download and start using your premium tools immediately.</p>
                        </div>
                        <div>
                            <p className='bg-[#9514FA] p-1 rounded-full text-[12px] font-bold text-white absolute top-50 left-50'>03</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Steps;