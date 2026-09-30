import React from 'react'
import Navbar from './Navbar'

import heroMan from '../assets/images/Image.png'
import bigLimeCircle from '../assets/icons/big-lime-circle.png'
import learningProgramFrame from '../assets/images/learning-program-frame.png'
import yearToDate from '../assets/images/YearToDate.png'
import happyStudentsFrame from '../assets/images/happy-students-frame.png'
import searchIcon from '../assets/icons/Style=Outlined.png'

import limeLeft from '../assets/icons/lime-left.png'
import circleShape from '../assets/icons/circle.png'
import whiteSpine from '../assets/icons/white-spine.png'
import limeCone from '../assets/icons/lime cone.png'
import whiteCone from '../assets/icons/white-cone.png'
import whiteSpine2 from '../assets/icons/white-spine-2.png'

import logo1 from '../assets/logo/logo_1.png'
import logo2 from '../assets/logo/logo_2.png'
import logo3 from '../assets/logo/logo_3.png'
import logo4 from '../assets/logo/logo_4.png'
import logo5 from '../assets/logo/logo_5.png'

function Hero() {
  return (
    <section className='w-full'>
      <div
        id='hero-section'
        className='bg-primary-blue relative overflow-hidden pt-2 pb-0'
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      >
        <img src={limeLeft} alt="" className='absolute top-6 left-4 w-28 md:w-36 pointer-events-none select-none z-10' />
        <img src={whiteSpine} alt="" className='absolute top-[28%] left-12 md:left-24 w-12 md:w-16 pointer-events-none select-none z-10' />
        <img src={circleShape} alt="" className='absolute bottom-16 left-6 md:left-14 w-20 md:w-28 pointer-events-none select-none z-10' />

        <img src={limeCone} alt="" className='absolute top-8 right-6 md:right-12 w-28 md:w-36 pointer-events-none select-none z-10' />
        <img src={whiteCone} alt="" className='absolute top-[28%] right-16 md:right-28 w-12 md:w-16 pointer-events-none select-none z-10' />
        <img src={whiteSpine2} alt="" className='absolute bottom-16 right-8 md:right-16 w-20 md:w-24 pointer-events-none select-none z-10' />

        <Navbar />

        <div className='container relative z-20 pt-8 pb-4 text-center'>
          <div className='max-w-3xl mx-auto px-4'>
            <h1 className='text-text-heading font-heading text-4xl sm:text-5xl md:text-[64px] font-semibold leading-[1.15] tracking-tight'>
              Get Access to Hundreds Courses Available
            </h1>
            <p className='font-satoshi text-text-body text-base sm:text-lg mt-4 max-w-xl mx-auto opacity-90 font-normal'>
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
          </div>

          <div className='mt-8 max-w-md mx-auto relative flex items-center bg-white rounded-full p-1.5 shadow-md'>
            <div className='pl-4 flex items-center gap-3 flex-1'>
              <img src={searchIcon} alt="search" className='w-4 h-4 opacity-60' />
              <input
                type="text"
                placeholder="Search for courses..."
                className='w-full outline-none text-black font-satoshi text-sm bg-transparent placeholder:text-gray-400'
              />
            </div>
            <button className='bg-lime text-black font-satoshi font-semibold px-6 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity cursor-pointer'>
              Search
            </button>
          </div>

          <div className='relative max-w-3xl mx-auto mt-12 flex justify-center items-end min-h-[380px] sm:min-h-[460px]'>
            <div className='absolute bottom-[-900px] w-[420px] sm:w-[500px] pointer-events-none select-none z-0 w-[1149px] h-[1149px] rounded-full border-[320px] border-[#CBFC01]'></div>

            <img
              src={learningProgramFrame}
              alt="UI UX Design"
              className='absolute top-4 right-5 sm:left-12 z-20 w-40 sm:w-52 shadow-lg rounded-xl'
            />

            <img
              src={happyStudentsFrame}
              alt="Happy Students"
              className='absolute bottom-8 left-0 sm:left-8 z-20 w-44 sm:w-56 shadow-lg rounded-xl'
            />

            <img
              src={heroMan}
              alt="Student"
              className='relative z-10 w-[340px] sm:w-[420px] object-contain drop-shadow-md'
            />
          </div>
        </div>
      </div>

      <div className='bg-white py-8 border-b border-gray-100'>
        <div className='container flex flex-wrap items-center justify-center sm:justify-between gap-6 md:gap-10 px-6'>
          <img src={logo1} alt="Logo 1" className='h-6 sm:h-7 object-contain opacity-70 hover:opacity-100 transition-opacity' />
          <img src={logo2} alt="Logo 2" className='h-6 sm:h-7 object-contain opacity-70 hover:opacity-100 transition-opacity' />
          <img src={logo3} alt="Logo 3" className='h-6 sm:h-7 object-contain opacity-70 hover:opacity-100 transition-opacity' />
          <img src={logo4} alt="Logo 4" className='h-6 sm:h-7 object-contain opacity-70 hover:opacity-100 transition-opacity' />
          <img src={logo5} alt="Logo 5" className='h-6 sm:h-7 object-contain opacity-70 hover:opacity-100 transition-opacity' />
        </div>
      </div>
    </section>
  )
}

export default Hero
