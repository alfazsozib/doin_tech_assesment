import React from 'react'
import logo from '../assets/logo/Footer_Logo.png'

function Footer() {
  const column1 = [
    'Featured Courses',
    'Featured Categories',
    'Business',
    'IT',
    'Design'
  ]

  const column2 = [
    'Development',
    'Marketing',
    'Photography',
    'Finance',
    'Sport'
  ]

  const column3 = [
    'Become a Creator',
    'Affiliate Program',
    'Contact',
    'Help',
    'About'
  ]

  return (
    <footer className='w-full font-normal bg-white pt-16 pb-12 border-t border-gray-100 font-satoshi text-[#242528]'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-14'>
          {/* Left Side: Brand & Newsletter */}
          <div className='lg:col-span-5 pr-0 lg:pr-8'>
            <img src={logo} alt="ByteSpace" className='w-[171px] h-[37px] object-contain mb-6' />
            <p className='font-satoshi text-[14px] text-[#242528] leading-relaxed max-w-sm mb-6'>
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className='flex items-center gap-3 max-w-md mb-3'>
              <input
                type="email"
                placeholder="Enter your email"
                className='flex-1 bg-white border border-gray-300 rounded-full px-5 py-2.5 font-satoshi text-[14px] text-[#242528] outline-none focus:border-gray-500 placeholder:text-gray-400'
              />
              <button
                type="submit"
                className='bg-lime text-black font-satoshi font-semibold px-6 py-2.5 rounded-full text-[14px] hover:opacity-90 transition-opacity cursor-pointer shrink-0'
              >
                Search
              </button>
            </form>

            <p className='font-satoshi text-[12px] text-[#242528]/70 max-w-sm leading-snug'>
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Side: Links Columns */}
          <div className='lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-[40px] pt-2 lg:pt-[48px]'>
            <div className='space-y-3.5'>
              {column1.map((link) => (
                <a
                  key={link}
                  href="#"
                  className='font-satoshi text-[14px] font-normal text-[#242528] hover:text-black font-medium transition-colors block'
                >
                  {link}
                </a>
              ))}
            </div>

            <div className='space-y-3.5'>
              {column2.map((link) => (
                <a
                  key={link}
                  href="#"
                  className='font-satoshi text-[14px] font-normal  text-[#242528] hover:text-black font-medium transition-colors block'
                >
                  {link}
                </a>
              ))}
            </div>

            <div className='space-y-3.5'>
              {column3.map((link) => (
                <a
                  key={link}
                  href="#"
                  className='font-satoshi text-[14px] font-normal text-[#242528] hover:text-black font-medium transition-colors block'
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-footer Bar */}
        <div className='pt-8 border-t border-gray-200/80 flex flex-col sm:flex-row justify-between items-center gap-4 font-satoshi text-[14px] text-[#242528]'>
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className='flex items-center gap-6'>
            <a href="#" className='font-satoshi font-normal text-[12px] text-[#242528] hover:text-black transition-colors'>Privacy Policy</a>
            <a href="#" className='font-satoshi font-normal text-[12px] text-[#242528] hover:text-black transition-colors'>Terms of Service</a>
            <a href="#" className='font-satoshi font-normal text-[12px] text-[#242528] hover:text-black transition-colors'>Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
