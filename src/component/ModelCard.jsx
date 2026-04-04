import { toast } from 'react-toastify';

const ModelCard = ({model ,carts, setCarts}) => {
    const isAdded = carts.some(item => item.id === model.id);

    const handleAddedToCart = () =>{
        

        const isFound = carts.find(item => item.id === model.id)

        if(isFound){
            toast.warning("Product already in cart!")
            return
        }


        setCarts([...carts,model])
        toast.success("Added to Cart")

    }
    return (
        <div className='space-y-2'>
            <div className='flex justify-between'>
                <i className='border border-[#F2F2F2] rounded-full p-1'>{model.icon}</i>
                <p className={
                    model.tagType === "popular" ? "text-sm bg-[#E1E7FF] text-[#9514FA] px-2 py-1 rounded-full" : model.tagType === "new" ? "text-sm bg-[#DBFCE7] text-[#0A883E] px-3 py-1 rounded-full" : "text-sm bg-[#FEF3C6] text-[#BB4D00] px-3 py-1 rounded-full"

                }>{model.tag}</p>

            </div>
            <h3 className='text-2xl font-bold line-clamp-1'>{model.name}</h3>
            <p className='line-clamp-2 text-[#627382]  text-[16px] '>{model.description}</p>
            <p><span className='text-2xl font-bold'>${model.price}</span><span className='text-[#627382]  text-[16px]'>/{model.period}</span></p>
            <ul>
                {model.features.map((feature, index) => (
                    <li key={index} className='line-clamp-1'><span className='text-green-500 font-bold'>✓ </span><span className='text-[#627382]  text-[16px]'>{feature}</span></li>
                ))}
            </ul>
            <button onClick={handleAddedToCart} className ={`rounded-full text-white btn w-full ${isAdded ?
                "bg-green-500"
                :"bg-linear-to-r from-[#4F39F6] to-[#9514FA] "
            }`}>
                {isAdded ? "Added to Cart" : "Buy Now"}
            </button>
        </div>
    );
};

export default ModelCard;