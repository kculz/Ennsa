import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-orange-500 w-screen h-24 flex justify-between items-center md:px-32 px-10">
        <h1 className="text-white text-5xl font-Permanent_Marker"><Link to="/">Ennsa</Link></h1>
        <ul className="flex gap-5">
            <li><Link to="/home" className="text-gray-100 md:text-lg text-sm">Home</Link></li>
            <li><Link to="/services" className="text-gray-100 md:text-lg text-sm">Services</Link></li>
            <li><Link to="/about-us" className="text-gray-100 md:text-lg text-sm">About Us</Link></li>
            <li><Link to="/contact-us" className="text-gray-100 md:text-lg text-sm">Contact</Link></li>
        </ul>
    </header>
  )
}

export default Navbar