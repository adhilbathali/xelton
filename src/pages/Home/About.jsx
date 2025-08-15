export default function About(props){
    const { className } = props
    return(
        <div className={className} >
            <h1 className="text-3xl font-bold text-slate-700 my-5">Pioneering Better Health</h1>
            <p className="text-slate-800 max-w-[1000px] text-center"><b>Xelton</b> is an innovation-driven pharmaceutical company dedicated to transforming healthcare worldwide. Combining cutting-edge research with advanced manufacturing, we develop high-quality medicines that address critical health needs across multiple countries.
            As an emerging global leader, Xelton focuses on excellence, compliance, and patient-centric solutions, striving to improve health outcomes and create a positive impact on communities everywhere.</p>
            <button className="py-2 px-5 bg-blue-600 border border-white text-white rounded-full my-5 hover:bg-transparent hover:text-blue-600 hover:border-blue-600">Know More</button>
        </div>
    )
}