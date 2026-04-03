import React from 'react';

const Cart = ({carts}) => {
    console.log(carts)
    return (
        <div className='px-32 py-5'>
            <div className='px-20 py-10 border  border-[#F2F2F2] rounded-2xl space-y-4'>

                <h1 className='text-2xl font-bold'>Your Cart</h1>
                {
                    carts.map(item => <div key={item.id} className='bg-[#F9FAFC] rounded-3xl p-6 flex justify-between'>
                        <div className='flex gap-4'>
                            <i className='border border-[#F2F2F2] rounded-full p-4'>{item.icon}</i>
                            <div>
                                <h3 className='text-2xl font-bold'>{item.name}</h3>
                                <p className='text-xl font-bold opacity-60'>${item.price}</p>
                            </div>
                        </div>
                        <div>
                            <button className='font-bold text-[#FF3980]' >Remove</button>
                        </div>


                    </div>
                    )
                }

            </div>
        </div>
    );
};

export default Cart;