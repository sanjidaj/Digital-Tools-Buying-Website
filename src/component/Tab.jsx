

const Tab = ({ activeTab, setActiveTab ,carts}) => {
    console.log(activeTab);
   
    return (
        <>
            <div>
                <div className='text-center items-center space-y-6'>
                    <div>
                        <h1 className='text-[48px] font-bold'>Premium Digital Tools</h1>
                        <p className='text-[#627382]  text-[16px]'>Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
                    </div>
                    <div className="tabs tabs-box justify-center bg-transparent  shadow-none">
                        <input type="radio" name="my_tabs_1" className={`tab rounded-full w-30 ${activeTab === "model"
                                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                                : ""
                            }`} aria-label="Products" defaultChecked onClick={() => setActiveTab("model")} />
                        <input type="radio" name="my_tabs_1" className={`tab rounded-full w-30 ${activeTab === "cart"
                                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                                : ""
                            }`} aria-label={`Cart (${carts.length})`} onClick={() => setActiveTab("cart")} />
                    </div>
                    {/* <div className='border border-[#F6F6F6] rounded-full  inline-block space-x-4'>
                        <button id='productsBtn' className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white py-1 px-2'>Products</button>
                        <button id='cartBtn' className='rounded-full py-1 px-2'>Cart (<span id='cartCount'>0</span>)</button>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Tab;