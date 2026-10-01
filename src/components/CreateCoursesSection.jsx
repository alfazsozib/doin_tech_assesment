import React from 'react'

import imageGirl from '../assets/images/Image Girl.png'
import totalRevenueCard from '../assets/images/total_reveniew.png'
import yearToDateCard from '../assets/images/YearToDate.png'
import happyStudentsCard from '../assets/images/happy-students-frame.png'
import limeSpineShape from '../assets/icons/lime_spine.png'

function CreateCoursesSection() {
  const checklist = [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community'
  ]

  return (
    <section className='w-full py-20 sm:py-24 relative overflow-hidden bg-white border-t border-gray-100'>
      {/* Bottom Right Blue Radial Glow */}
      <div
        className='absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full pointer-events-none select-none z-0'
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 60, 226, 0.22) 0%, rgba(0, 60, 226, 0.03) 53%, rgba(190, 190, 190, 0) 75%, rgba(0, 60, 226, 0) 100%)'
        }}
      />

      {/* Bottom Left Lime Radial Glow */}
      <div
        className='absolute -bottom-10 -left-30 translate-y-1/3 -translate-x-1/3 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full pointer-events-none select-none z-0'
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(202, 252, 1, 0.93) 0%, rgba(202, 252, 1, 0.16) 35%, rgba(203, 252, 1, 0.06) 35%, rgba(203, 252, 1, 0) 50%)'
        }}
      />

      <div className='container relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center'>
          {/* Left Column: Image Composition & Cards */}
          <div className='relative flex items-center justify-center lg:justify-start min-h-[460px] sm:min-h-[520px]'>
            {/* Total Revenue Card (Top Left) */}
            <img
              src={totalRevenueCard}
              alt="Total Revenue"
              className='absolute left-2 sm:left-8 top-4 sm:top-8 z-10 w-44 sm:w-56 shadow-lg rounded-2xl pointer-events-none select-none'
            />

            <img
              src={yearToDateCard}
              alt="Year to Date"
              className='absolute left-2 sm:left-8 top-36 sm:top-44 z-10 w-44 sm:w-24 shadow-lg rounded-2xl pointer-events-none select-none'
            />

            {/* Main Girl Image with Lime Spine anchored relative to it */}
            <div className='relative z-20 inline-block'>
              <img
                src={imageGirl}
                alt="Course Creator"
                className='w-[310px] sm:w-[440px] md:w-[470px] translate-x-8 sm:translate-x-8 object-contain drop-shadow-2xl'
              />

              {/* Lime Spine Shape */}
              <img
                src={limeSpineShape}
                alt="Lime Spine"
                className='absolute -right-6 sm:-right-4 top-10 sm:top-14 z-50 w-16 sm:w-[216px] rotate-38 pointer-events-none'
              />
            </div>

            {/* Happy Students Overlay Card (Bottom Right) */}
            <img
              src={happyStudentsCard}
              alt="Happy Students"
              className='absolute right-0 sm:right-26 bottom-34 sm:bottom-34 z-30 w-56 sm:w-56 shadow-xl rounded-2xl pointer-events-none select-none'
            />
          </div>

          {/* Right Column: Title, Description & Checklist */}
          <div className='max-w-xl mx-auto lg:mx-0 pl-0 lg:pl-6'>
            <h2 className='text-3xl sm:text-4xl md:text-[44px] font-normal font-heading text-black tracking-tight leading-[1.2] mb-6'>
              Create & Manage <br className='hidden sm:inline' />
              Courses Easily.
            </h2>

            <p className='font-satoshi text-gray-500 text-base sm:text-[18px] leading-relaxed mb-8 max-w-lg'>
              <span className='font-semibold text-gray-900'>ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className='space-y-4'>
              {checklist.map((item, index) => (
                <div key={index} className='flex items-center gap-3.5'>
                  <div className='w-5 h-5 rounded-full bg-primary-blue flex items-center justify-center text-white shrink-0 shadow-xs'>
                    <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className='font-satoshi font-medium text-gray-900 text-base sm:text-[18px]'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateCoursesSection
