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
            <div>
                {models.map(model => <div>
                    <div>
                        <i>{model.icon}</i>
                        <h3>{model.name}</h3>
                        <p>{model.description}</p>
                        <p>${model.price}<span>/{model.period}</span></p>
                        <ul>
                            {model.features.map((feature,index) =>(
                                <li key={index}><span className='text-green-500 font-bold'>✓ </span>{feature}</li>
                            ))}
                        </ul>
                        <button>Buy Now</button>
                    </div>
                    <div>
                        <p>{model.tag}</p>
                    </div>
                </div> )}
            </div>
        </>
    );
};

export default Models;