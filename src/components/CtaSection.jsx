import React from 'react'

import limeLeft from '../assets/icons/lime-left.png'
import whiteSpine from '../assets/icons/white-spine.png'
import whiteCone from '../assets/icons/white-cone_2.png'
import circleShape from '../assets/icons/lime_circle.png'
import limeCone from '../assets/icons/lime_cone.png'
import whiteSpine2 from '../assets/icons/white_box.png'
import limeSpine from '../assets/icons/lime_spine.png'

function CtaSection() {
  return (
    <section className='w-full bg-primary-blue relative overflow-hidden py-24 sm:py-32'>
      {/* Blue Grid Pattern Background */}
      <div
        className='absolute inset-0 pointer-events-none select-none z-0'
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />

      {/* Floating 3D Decorative Shapes */}
      {/* Top Left Shapes */}
      <img
        src={limeLeft}
        alt=""
        className='absolute rotate-12 -top-20 -left-10 w-28 sm:w-44 lg:w-56 pointer-events-none select-none z-10'
      />
      <img
        src={whiteSpine}
        alt=""
        className='absolute top-8 left-28 sm:left-48 w-[175px] sm:w-[175px] pointer-events-none select-none z-10 -rotate-12'
      />

      {/* Bottom Left Shapes */}
      <img
        src={whiteCone}
        alt=""
        className='absolute bottom-12 -left-4 sm:left-0 w-20 sm:w-[188px] pointer-events-none select-none z-10'
      />
      <img
        src={circleShape}
        alt=""
        className='absolute -bottom-0 left-12 sm:left-24 w-36 sm:w-36 lg:w-[344px] pointer-events-none select-none z-10'
      />

      {/* Top Right Shapes */}
      <img
        src={limeCone}
        alt=""
        className='absolute top-2 right-40 sm:right-40 w-32 sm:w-44 pointer-events-none select-none z-10'
      />
      <img
        src={whiteSpine2}
        alt=""
        className='absolute top-4 -right-10 w-28 sm:w-44 lg:w-56 pointer-events-none select-none z-10'
      />

      {/* Bottom Right Shape */}
      <img
        src={limeSpine}
        alt=""
        className='absolute -bottom-35 right-10 sm:right-24 w-[330px] sm:w-44 lg:w-[330px] pointer-events-none select-none z-10'
      />

      {/* Center Content */}
      <div className='container relative z-20 text-center px-4'>
        <div className='max-w-[964px] w-full mx-auto'>
          <h2 className='font-heading font-semibold text-[#F5F5F6] text-center text-3xl sm:text-4xl md:text-[44px] leading-[1.2] tracking-[-0.44px] max-w-[710px] mx-auto mb-6'>
            Unlock Your Potential as a <br className='hidden sm:inline' />
            Creator with ByteSpace
          </h2>

          <p className='font-satoshi font-normal text-[#F5F5F6] text-center text-base sm:text-[18px] leading-[1.6] max-w-[964px] w-full mx-auto mb-10'>
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <button className='bg-lime text-black font-satoshi font-semibold px-8 py-3.5 rounded-full text-sm sm:text-base hover:opacity-90 transition-all duration-200 shadow-lg cursor-pointer hover:scale-105 active:scale-95'>
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
