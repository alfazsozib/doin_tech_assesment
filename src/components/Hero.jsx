import React from 'react'
import Navbar from './Navbar'

import heroMan from '../assets/images/Image.png'
import bigLimeCircle from '../assets/icons/big-lime-circle.png'
import learningProgramFrame from '../assets/images/learning-program-frame.png'
import yearToDate from '../assets/images/YearToDate.png'
import happyStudentsFrame from '../assets/images/happy-students-frame.png'
import searchIcon from '../assets/icons/search_icon.png'
import ui_uxCard from "../assets/images/ui_ux_card.png"

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
        <img src={limeLeft} alt="" className='absolute top-36 rotate-5 -left-10 w-28 md:w-[386px] lg:w-[300px] pointer-events-none select-none z-10' />
        <img src={limeCone} alt="" className='absolute top-40 -right-10 w-28 md:w-[150px] lg:w-[180px] pointer-events-none select-none z-10' />

        <div className='max-w-[1440px] mx-auto relative'>
          <img src={whiteSpine} alt="" className='absolute top-[40%] left-1/2 -translate-x-[500px] w-12 md:w-[188px] pointer-events-none select-none z-10' />
          <img src={circleShape} alt="" className='absolute top-130 left-1/2 -translate-x-[670px] w-20 md:w-[344px] pointer-events-none select-none z-50' />

          <img src={whiteCone} alt="" className='absolute top-[40%] left-1/2 translate-x-[300px] w-52 md:w-[188px] pointer-events-none select-none z-10' />
          <img src={whiteSpine2} alt="" className='absolute bottom-0 left-1/2 translate-x-[440px] md:translate-x-[365px] w-20 md:w-[300px] -rotate-10 pointer-events-none select-none z-50' />
          <Navbar />

          <div className='container relative z-20 pt-8 pb-0 text-center'>
            <div className='max-w-5xl mx-auto px-4'>
              <h1 className='text-text-heading font-heading text-4xl sm:text-5xl md:text-[72px] font-semibold leading-[1.15] tracking-tight'>
                Get Access to Hundreds Courses Available
              </h1>
              <p className='font-satoshi text-text-body text-[18px] mt-4 max-w-5xl mx-auto opacity-90 font-normal lg:whitespace-nowrap'>
                Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
              </p>
            </div>

            <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative z-30 px-4'>
              <div className='flex w-full sm:w-[461px] h-[52px] px-[24px] py-[12px] items-center gap-[8px] rounded-[24px] bg-white'>
                <img src={searchIcon} alt="search" className='w-5 h-5 opacity-60 shrink-0' />
                <input
                  type="text"
                  placeholder="Course, topic, creator"
                  className='w-full outline-none text-black font-satoshi text-base bg-transparent placeholder:text-[#9CA3AF]'
                />
              </div>
              <button
                type="button"
                className='flex h-[52px] px-[24px] py-[12px] justify-center items-center gap-[8px] rounded-[24px] bg-lime text-black font-satoshi font-medium text-base hover:opacity-90 transition-opacity cursor-pointer'
              >
                Search
              </button>
            </div>


            <div className='relative max-w-3xl mx-auto -mt-20 flex justify-center items-end min-h-[400px] sm:min-h-[500px] pb-0'>
              <div className='absolute bottom-[-800px] left-1/2 -translate-x-1/2 w-[1149px] h-[1149px] rounded-full border-[320px] border-[#CBFC01] pointer-events-none select-none z-0'></div>
              <div className='absolute bottom-[-620px] left-1/2 -translate-x-1/2 w-[678px] h-[678px] rounded-full border-[320px] border-primary-blue pointer-events-none select-none z-10'></div>
              <div className='relative z-10 flex justify-center items-end'>
                <img
                  src={heroMan}
                  alt="Student"
                  className='w-[425px] sm:w-[540px] md:w-[578px] block align-bottom translate-x-6 sm:translate-x-6'
                />

                <img
                  src={ui_uxCard}
                  alt="UI UX Design"
                  className='absolute top-25 left-[250px] sm:left-0 z-20 w-36 sm:w-48 shadow-lg rounded-xl pointer-events-none'
                />

                <img
                  src={learningProgramFrame}
                  alt="Winning Rate 55%"
                  className='absolute top-24 -right-20 sm:-right-0 z-20 w-40 sm:w-54 shadow-lg rounded-xl pointer-events-none'
                />

                <img
                  src={happyStudentsFrame}
                  alt="Happy Students"
                  className='absolute bottom-16 -left-10 sm:-left-14 z-20 w-44 sm:w-56 shadow-lg rounded-xl pointer-events-none'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#F5F5F6] py-12 border-b border-gray-100'>
        <div className='container flex flex-wrap items-center justify-center sm:justify-between gap-6 md:gap-10 px-6'>
          <img src={logo1} alt="Logo 1" className='h-6 sm:h-7 object-contain opacity-70 hover:opacity-100 transition-opacity' />
          <img src={logo2} alt="Logo 2" className='h-6 sm:h-7 object-contain opacity-70 hover:opacity-100 transition-opacity' />
          <img src={logo3} alt="Logo 3" className='h-6 sm:h-7 object-contain opacity-70 hover:opacity-100 transition-opacity' />
          <img src={logo4} alt="Logo 4" className='h-6 sm:h-7 object-contain opacity-70 hover:opacity-100 transition-opacity' />
          <img src={logo5} alt="Logo 5" className='h-6 sm:h-7 object-contain opacity-70 hover:opacity-100 transition-opacity' />
        </div>
      </div>
    </section >
  )
}

export default Hero
