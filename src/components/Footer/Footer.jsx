import styles from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faArrowRightArrowLeft, faArrowRightFromBracket, faArrowRightFromFile, faArrowRightRotate, faArrowRightToBracket, faEnvelope, faLocation, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"

export default function Footer(){
    return(
        <footer className="p-5 pl-10 lg:p-20 pb-10 bg-gradient-to-br from-[royalblue] to-[blueviolet] text-white">
            <div className="flex flex-col lg:flex-row gap-10 justify-around items-start">
                <div className="max-w-[500px] flex flex-col justify-around items-start">
                    <div className="flex justify-around items-center">
                        <img src="/xelton_white.png" alt="xelton" className="h-[100px] lg:h-[150px]" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quaerat ullam nobis qui ipsum nisi doloremque facilis</p>
                    </div>
                    <button className="mt-3 lg:mt-0 py-1.5 px-7 rounded-full text-lg font-bold border hover:bg-blue-700">Join Us <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
                <div>
                    <h1>Quick Links</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Our Products</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h1>Products</h1>
                    <ul>
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                        <li>Product 4</li>
                        <li>Product 5</li>
                    </ul>
                </div>
                <div>
                    <h1>Contact</h1>
                    <ul>
                        <li><FontAwesomeIcon className='mr-2 text-xl' icon={faEnvelope}/>abc@xelton.com</li>
                        <li><FontAwesomeIcon className='mr-2 text-xl' icon={faLocationDot}/>Address abc street</li>
                        <li><FontAwesomeIcon className='mr-2 text-xl' icon={faPhone}/>+91 1234567890</li>
                    </ul>
                </div>
            </div>
            <hr className="my-[3rem]" />
            <div className="flex flex-col justify-center items-center text-center">
                <div className="flex mb-10 gap-10">
                    <FontAwesomeIcon className='mr-2 text-3xl' icon={faWhatsapp}/>
                    <FontAwesomeIcon className='mr-2 text-3xl' icon={faInstagram}/>
                    <FontAwesomeIcon className='mr-2 text-3xl' icon={faFacebook}/>
                    <FontAwesomeIcon className='mr-2 text-3xl' icon={faYoutube}/>
                </div>
                <p>&#169; 2025 xelton. All Rights Reserved.</p>
            </div>
        </footer>
    )
}