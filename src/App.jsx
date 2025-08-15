import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutUs from './pages/About/AboutUs'
import OurProducts from './pages/Products/OurProducts'
import Careers from './pages/Careers/Careers'
import Contact from './pages/Contact/Contact'

export default function App(){
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/our-products" element={<OurProducts/>}/>
        <Route path="/careers" element={<Careers />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  )
}