import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const carousals = [
    <>
        <div className="flex flex-col items-center text-center pt-10 px-15 lg:pt-0 lg:text-left lg:w-[50%] lg:justify-center lg:items-baseline lg:pl-20">
            <h1 className="text-4xl lg:text-6xl font-bold text-white font-body">Advancing Healthcare, One Innovation at a Time</h1>
            <h2 className="lg:text-xl mt-3 text-white font-body">Delivering safe, reliable, and innovative pharmaceutical solutions for a healthier tomorrow.</h2>
            <div className="flex gap-5 ">
                <button className="text-white text-xl font-bold bg-violet-700 py-2 px-6 rounded-full mt-5 hover:bg-violet-600">Products</button>
                <button className="text-white text-xl font-bold border border-white  py-2 px-6 rounded-full mt-5 hover:bg-white hover:text-blue-600">Join
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                </button>
            </div>
        </div>
        <div className="h-full lg:w-[50%]">
            <img src="images/doctor_suggests.png" className="h-full object-cover scale-x-[-1]" alt="doctor_suggests" />
        </div>
    </>
]

export default function Carousal(){
    return(
        <div className="w-full lg:h-[70%] bg-gradient-to-br from-blue-900 to-blue-400 flex flex-col md:flex-row lg:flex-row justify-between items-center pt-[100px] rounded-b-4xl">
            {carousals.map((carousal, index) => (
                <>
                    {carousal}
                </>
            ))}
        </div>
    )
}