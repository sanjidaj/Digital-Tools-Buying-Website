import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {


    const totalPrice = carts.reduce((sum,item)=> sum + item.price,0)
    const handlePayment = () => {
        setCarts([])
        toast.info("Proceeding to checkout")
    }
    const handleRemove  = (item) =>{
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
        toast.error("Product Removed")
    }

    return (
        <div className='px-32 py-5'>
            <div className='px-20 py-10 border  border-[#F2F2F2] rounded-2xl space-y-4 '>
                <h1 className='text-2xl font-bold'>Your Cart</h1>
                {
                    carts.length === 0 ? <>
                    <div className='flex flex-col justify-center text-center items-center'>
                        <img className='w-15 opacity-50' src="src\assets\products\trolley.png" alt="" />
                        <p className='text-xl  text-[#627382] '>Your Cart is Empty</p>
                    </div>
                    </> :
                        <>
                            <div className='space-y-4'>
                                {
                                    carts.map(item => <div key={item.id} className='bg-[#F9FAFC] rounded-3xl p-6 flex justify-between items-center '>
                                        <div className='flex gap-4'>
                                            <i className='border border-[#F2F2F2] rounded-full p-4'>{item.icon}</i>
                                            <div>
                                                <h3 className='text-2xl font-bold'>{item.name}</h3>
                                                <p className='text-xl font-bold opacity-60'>${item.price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={()=> handleRemove(item)} className='font-bold text-error' >Remove</button>
                                        </div>


                                    </div>
                                    )
                                }
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-[#627382]  text-[16px]'>Total:</p>
                                <p className='text-2xl font-bold'>$<span>{totalPrice}</span></p>
                            </div>
                            <div>
                                <button onClick={handlePayment} className='btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]   text-white rounded-full'>Proceed to Checkout</button>
                            </div>

                        </>
                 }


                    </div>
            
        </div>
    );
};

export default Cart;