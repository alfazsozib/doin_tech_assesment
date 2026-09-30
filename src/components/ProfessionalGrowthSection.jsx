import React from 'react'
import CourseCard from './CourseCard'

import heroManImage from '../assets/images/Image.png'
import learningProgressFrame from '../assets/images/learning-program-frame.png'
import limeSpineShape from '../assets/icons/Group 4.png'

function ProfessionalGrowthSection() {
  const bgCardData = {
    id: 99,
    title: 'Learn Figma from Basic',
    instructor: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    enrolledCount: '26+',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80'
  }

  return (
    <section className='w-full py-16 sm:py-24 relative overflow-hidden bg-white'>

      <div
        className='absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full pointer-events-none select-none z-0'
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 60, 226, 0.22) 0%, rgba(0, 60, 226, 0.03) 53%, rgba(190, 190, 190, 0) 75%, rgba(0, 60, 226, 0) 100%)'
        }}
      />

      <div className='container relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center'>
          <div className='max-w-xl mx-auto lg:mx-0 relative'>
            {/* Radial Gradient Glow centered directly behind heading */}
            <div
              className='absolute -top-10 -left-10 sm:-top-80 sm:-left-28 w-[1137px] sm:w-[900px] h-[450px] sm:h-[600px] rounded-full pointer-events-none select-none z-0'
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(202, 252, 1, 0.57) 0%, rgba(203, 252, 1, 0.23) 53%, rgba(203, 252, 1, 0.06) 75%, rgba(203, 252, 1, 0) 100%)'
              }}
            />

            <h2 className='relative z-10 text-3xl sm:text-4xl md:text-[46px] font-bold font-heading text-black tracking-tight leading-[1.2] mb-6'>
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className='relative z-10 font-satoshi text-gray-600 text-base sm:text-lg leading-relaxed mb-10 opacity-90'>
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Statistics Row */}
            <div className='relative z-10 flex items-center gap-8 sm:gap-12 pt-2'>
              <div>
                <h3 className='text-3xl sm:text-4xl font-bold text-primary-blue font-heading font-medium tracking-tight'>
                  12K
                </h3>
                <p className='text-sm text-gray-500 font-satoshi mt-1 font-medium'>
                  Students
                </p>
              </div>

              <div>
                <h3 className='text-3xl sm:text-4xl font-bold text-primary-blue font-heading font-medium tracking-tight'>
                  70+
                </h3>
                <p className='text-sm text-gray-500 font-satoshi mt-1 font-medium'>
                  Courses
                </p>
              </div>

              <div>
                <h3 className='text-3xl sm:text-4xl font-bold text-primary-blue font-heading font-medium tracking-tight'>
                  16
                </h3>
                <p className='text-sm text-gray-500 font-satoshi mt-1 font-medium'>
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right Column*/}
          <div className='relative flex items-center justify-center lg:justify-end min-h-[440px] sm:min-h-[500px] mt-4 lg:mt-0'>

            {/* Background Course Card */}
            <div className='absolute left-0 sm:left-2 top-2 sm:top-6 w-[290px] sm:w-[377px] z-10 shadow-lg rounded-[24px] pointer-events-none select-none opacity-95 transform -rotate-1'>
              <CourseCard course={bgCardData} />
            </div>

            {/* Lime Spine Spiral Shape */}
            <img
              src={limeSpineShape}
              alt="Lime Spine"
              className='absolute right-0 sm:right-2 top-8 sm:top-12 z-30 w-16 sm:w-22 pointer-events-none select-none animate-pulse'
            />

            {/* Hero Man Image with Headphones & Laptop */}
            <img
              src={heroManImage}
              alt="Hero Student"
              className='relative z-20 w-[300px] sm:w-[578px] md:w-[578px] translate-x-6 sm:translate-x-10 translate-y-6 sm:translate-y-8 object-contain drop-shadow-2xl'
            />

            {/* Learning Progress Frame 55% */}
            <img
              src={learningProgressFrame}
              alt="Learning Progress 55%"
              className='absolute right-0 sm:right-6 bottom-10 sm:bottom-16 z-30 w-40 sm:w-52 shadow-xl rounded-2xl pointer-events-none select-none'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalGrowthSection
