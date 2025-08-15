import { productCategories } from "./contents"

export default function ProductCategories(){
    return(
        <div className="flex flex-col justify-center items-center p-5 pt-10 lg:p-20">
            <h1 className="text-3xl font-bold text-slate-700 mb-10">Heal with Our Therapeutics</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-y-10 gap-x-20 lg:gap-y-20 w-full h-fit justify-around items-center">
                {productCategories.map((category, index) => (
                    <div key={index} className="flex flex-col relative justify-end rounded-2xl overflow-hidden transition-all ease-in">
                        <div className="absolute p-5 text-white bg-[#00000075] rounded-b-2xl w-full h-[40%]">
                            <h1 className='text-2xl font-bold'>{category.title}</h1>
                            <p>{category.description}</p>
                        </div>
                        <img src={category.image} alt={category.title} className="w-[100%] h-[300px] object-cover rounded-2xl hover:scale-120" />
                    </div>
                ))}
            </div>
        </div>
    )
}