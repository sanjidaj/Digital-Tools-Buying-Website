import React from 'react';

const Banner = () => {
     return (
        <>
         <div className="relative min-h-w flex items-center overflow-hidden px-6 md:px-32 py-10 mb-8">
             <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 items-center relative z-10">
                 <div className="space-y-4">
                     <div className="inline-flex items-center gap-2 bg-[#E1E7FF]  text-[#9514FA] text-sm font-medium px-5 py-2 rounded-full">
                         <img src="src\assets\dot.png" alt="" />New: AI-Powered Tools Available
                     </div>

                     <h1 className="text-4xl lg:text-6xl font-bold">Supercharge Your<br/>Digital Workflow</h1>

                     <p className="text-[#627382] max-w-lg">
                         Access premium AI tools, design assets, templates, and productivity software—all in one place.Start creating faster today.
                         <br />Explore Products
                     </p>

                     <div className="flex flex-wrap gap-4 pt-4">
                         <div>
                            <button className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Explore Products</button>
                         </div>
                         
                         <div>
                            <button className='btn btn-outline btn-primary rounded-full'><img src="src\assets\Play.png" alt="" />Watch demo</button>
                            </div>


                     </div>

                 </div>

                 <div className="relative flex justify-center lg:justify-end">
                     <div className="relative">


                         <img
                             className="relative h-130 w-auto object-contain drop-shadow-xl rounded-2xl"
                             src="src\assets\banner.png"
                             alt=""
                         />
                     </div>
                 </div>
             </div>


         </div>
         <div className='flex justify-evenly bg-linear-to-r from-[#4F39F6] to-[#9514FA]  py-10 mb-20'>

                 <div className="text-center">
                     <h1 className="text-[60px] font-bold text-white">50K+</h1>
                     <p className='text-white/70 text-[24px]'>Active Users</p>
                 </div>
                 <div className="text-center">
                     <h1 className="text-[60px] font-bold text-white">200+</h1>
                     <p className='text-white/70 text-[24px]'>Premium Tools</p>
                 </div>
                 <div className="text-center">
                     <h1 className="text-[60px] font-bold text-white">4.9</h1>
                     <p className='text-white/70 text-[24px]'>Rating</p>
                 </div>

         </div>
      </>
    );
};

export default Banner;