import { Link } from 'react-router-dom'
import logo from "../assets/logo/Header_Logo.png"
import cart from "../assets/icons/cart.png"

function Navbar() {
  return (
    <div>
        <nav className='container inline-flex h-30 px-30.5 pt-8.75 pb-11.75 justify-center items-end gap-[321.5px] font-satoshi text-[#F5F5F6]'>
            <div>
                <img className='w-33.5' src={logo} alt="header_logo" />
            </div>
            <div className='navitems'>
                 <div className='flex gap-6'>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
             <div className='top-right-cart flex gap-6'>
                <div className='flex gap-6'>
                    <Link to={"signin"}>Sign In</Link>
                    <Link to={"signin"}>Join Us</Link>
                </div> 
                <div>
                    <img src={cart} alt="cart icon" />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar