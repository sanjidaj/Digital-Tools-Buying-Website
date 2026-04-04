import { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({modelPromise ,carts, setCarts}) => {
    const models = use(modelPromise)
    
    
    

    return (
        <>
            
            <div className='grid md:grid-cols-3 grid-cols-1  md:px-32 px-2 gap-6 mt-10 mb-10 '>
                {models.map(model => <div key={model.id} className='shadow-lg rounded-lg border border-[#F2F2F2] px-6 py-4 space-y-2'>
                <ModelCard  model={model} carts={carts} setCarts={setCarts}/>
                    
                </div> )}
            </div>
        </>
    );
};

export default Models;