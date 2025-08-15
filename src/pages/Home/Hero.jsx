import Carousal from "./Carousal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { corePillars } from "./contents";


export default function Hero(props){
    const { className } = props

    return(
        <div className={className}>
            <Carousal />
            <div className="flex flex-col justify-center items-start lg:flex-row lg:items-center lg:justify-around h-[100%] lg:h-[30%] w-full gap-5 p-5">
                {corePillars.map((pillar, index) => (
                    <div key={index} className="flex items-center gap-5 p-5 text-[#333] text-lg">
                        <FontAwesomeIcon icon={pillar.icon} className="text-3xl text-violet-600 bg-violet-50 p-7 rounded-full"/>
                        <div>
                            <h1 className="text-xl font-bold my-2">{pillar.heading}</h1>
                            <p>{pillar.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>

            </div>
        </div>
    )
}