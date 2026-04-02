import React, { use } from 'react';

const Models = ({modelPromise}) => {
    const models = use(modelPromise)
    console.log(models);
    return (
        <>
            <div>
                <div className='text-center items-center space-y-4'>
                    <div>
                        <h1 className='text-[48px] font-bold'>Premium Digital Tools</h1>
                        <p className='text-[#627382]  text-[16px]'>Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
                    </div>
                    <div className='border border-[#F6F6F6] rounded-full  inline-block space-x-4'>
                        <button id='productsBtn' className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white py-1 px-2'>Products</button>
                        <button id='cartBtn' className='rounded-full py-1 px-2'>Cart (<span id='cartCount'>0</span>)</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 px-32 gap-6 mt-10 mb-10 '>
                {models.map(model => <div className='shadow-lg rounded-lg border border-[#F2F2F2] px-6 py-4 space-y-2'>
                    <div className='space-y-2'>
                        <div className='flex justify-between'>
                            <i className='border border-[#F2F2F2] rounded-full p-1'>{model.icon}</i>
                            <p className={
                            model.tagType === "popular"?"text-sm bg-[#E1E7FF] text-[#9514FA] px-2 py-1 rounded-full":model.tagType === "new"?"text-sm bg-[#DBFCE7] text-[#0A883E] px-3 py-1 rounded-full":"text-sm bg-[#FEF3C6] text-[#BB4D00] px-3 py-1 rounded-full"

                        }>{model.tag}</p>

                        </div>
                        <h3 className='text-2xl font-bold line-clamp-1'>{model.name}</h3>
                        <p className='line-clamp-2 text-[#627382]  text-[16px] '>{model.description}</p>
                        <p><span className='text-2xl font-bold'>${model.price}</span><span className='text-[#627382]  text-[16px]'>/{model.period}</span></p>
                        <ul>
                            {model.features.map((feature,index) =>(
                                <li key={index} className='line-clamp-1'><span className='text-green-500 font-bold'>✓ </span><span className='text-[#627382]  text-[16px]'>{feature}</span></li>
                            ))}
                        </ul>
                        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white btn w-full '>Buy Now</button>
                    </div>
                    
                </div> )}
            </div>
        </>
    );
};

export default Models;