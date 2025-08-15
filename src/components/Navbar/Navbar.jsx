import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import { useEffect, useState } from "react";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenoOpen, setIsMobileMenuOpen] = useState(false)

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', handleScroll);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenoOpen)
    }

    const navLinks = [
        {name: 'About Us', path: './about-us'},
        {name: 'Our Products', path: './our-products'},
        {name: 'careers', path: './careers'},
        {name: 'Contact', path: './contact'},
    ]

    return(
        <nav className={`flex h-[100px] justify-between px-10 bg-transparent z-100 ${isScrolled && styles.navbarScrolled} fixed top-0 left-0 w-full`}>
            <Link to='/'>
                <div className="flex h-full z-200">
                    <img src={isScrolled? '/xelton.png': '/xelton_white.png'} alt="xelton" className="object-cover" />
                </div>
            </Link>

            {/* Desktop Navigations */}
            <ul className="hidden md:flex justify-center items-center gap-[5rem] w-2/3 h-full">
                {navLinks.map((link) => (
                    <li key={link.name} className="font-semibold">
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger Menu Button (Mobile Only) */}
            <button className='hamburgerOpen lg:hidden cursor-pointer p-[10px] h-fit w-fit self-center z-200' aria-label="Toggle menu">
                <div className={`bar1 w-[25px] h-[3px] ${isScrolled? 'bg-[#333]' : 'bg-white'} my-[5px] transition-all ease-in duration-300`}></div>
                <div className={`bar2 w-[25px] h-[3px] ${isScrolled? 'bg-[#333]' : 'bg-white'} my-[5px] transition-all ease-in duration-300`}></div>
                <div className={`bar3 w-[25px] h-[3px] ${isScrolled? 'bg-[#333]' : 'bg-white'} my-[5px] transition-all ease-in duration-300`}></div>
            </button>

            {/* Mobile Navigations */}
            <ul className="flex flex-col justify-around py-20 items-center text-slate-700 bg-white fixed top-0 left-[100%] h-[100vh] w-full">
                {navLinks.map((link) => (
                    <li key={link.path} className="font-semibold">
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>


        </nav>
    )
}

export default Navbar;