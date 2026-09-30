import { Link } from 'react-router-dom'
import logo from "../assets/logo/Header_Logo.png"
import cart from "../assets/icons/cart.png"

function Navbar() {
  return (
    <nav className='container flex items-center justify-between py-7 font-satoshi text-text-body text-[16px] relative z-30'>
      <div className='flex items-center'>
        <img className='w-34 object-contain' src={logo} alt="header_logo" />
      </div>

      <div className='flex items-center gap-8 font-medium'>
        <Link to="/" className='hover:text-lime transition-colors'>Home</Link>
        <Link to="/courses" className='hover:text-lime transition-colors'>Courses</Link>
        <Link to="/stories" className='hover:text-lime transition-colors'>Stories</Link>
      </div>

      <div className='flex items-center gap-8 font-medium'>
        <div className='flex items-center gap-6'>
          <Link to="/signin" className='hover:text-lime transition-colors'>Sign In</Link>
          <Link to="/join" className='hover:text-lime transition-colors'>Join Us</Link>
        </div>
        <div className='cursor-pointer hover:opacity-80 transition-opacity'>
          <img src={cart} alt="cart icon" className='w-6 h-6' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
