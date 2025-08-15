import Hero from "./Hero"
import About from "./About"
import ProductCategories from "./ProductCategories"

// #F8FAFC

export default function Home(){
    return(
        <>
            <Hero className='flex items-center justify-start lg:h-screen bg-[#fff] flex-col' />
            <About className='flex flex-col items-center justify-center bg-[#f5f5f5] p-5' />
            <ProductCategories />
        </>
    )
}