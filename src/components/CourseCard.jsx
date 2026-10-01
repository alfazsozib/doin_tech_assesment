import React from 'react'

import avatar1 from '../assets/images/Ellipse.png'
import avatar2 from '../assets/images/Ellipse (1).png'
import avatar3 from '../assets/images/Ellipse (2).png'
import avatar4 from '../assets/images/Ellipse (3).png'
import levelIcon from "../assets/icons/Vector.png"


function CourseCard({ course }) {
  const {
    title,
    instructor = 'purepearl studio',
    rating = 4.5,
    lessons = '17 Lessons',
    duration = '2 hours 16 mins',
    comments = '59 Comments',
    level = 'Beginner',
    price = '$25',
    period = '/lifetime',
    image,
    enrolledCount = '26+'
  } = course

  return (
    <div className='bg-white rounded-[24px] border border-[#E5E7EB] p-3.5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group'>
      <div>
        {/* Course Thumbnail Image with Overlay Stats */}
        <div className='relative rounded-2xl overflow-hidden aspect-[16/10] mb-4 bg-gray-100'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />

          {/* Bottom Stats Overlay Bar */}
          <div className='absolute flex justify-between gap-2 bottom-2.5 left-2.5 right-2.5 '>
            <span className='backdrop-blur-md rounded-full px-3 py-1.5 text-[11px] font-medium  shadow-xs text-gray-700 bg-white/80'>{lessons}</span>
            <span className='backdrop-blur-md rounded-full px-3 py-1.5 text-[11px] font-medium  shadow-xs text-gray-700 bg-white/80'>{duration}</span>
            <span className='backdrop-blur-md rounded-full px-3 py-1.5 text-[11px] font-medium  shadow-xs text-gray-700 bg-white/80'>{comments}</span>
          </div>
        </div>

        {/* Title & Rating */}
        <div className='flex items-start justify-between gap-2 mb-1'>
          <h3 className='font-heading font-bold text-lg text-black leading-snug line-clamp-1 group-hover:text-primary-blue transition-colors'>
            {title}
          </h3>
          <div className='flex items-center gap-1 text-sm font-semibold text-gray-700 shrink-0 mt-0.5'>
            <span>{rating}</span>
            <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* Instructor */}
        <p className='text-xs text-gray-500 font-satoshi mb-3'>
          by <span className='text-primary-blue font-medium hover:underline cursor-pointer'>{instructor}</span>
        </p>

        {/* Level Badge & Enrolled Avatars */}
        <div className='flex items-center gap-4 mt-3'>
          <div className='flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F4F6] text-xs font-medium text-gray-700'>
            <img src={levelIcon} alt="level icon" />
            <span>{level}</span>
          </div>

          <div className='flex items-center -space-x-2'>
            <img src={avatar1} alt="Student" className='w-7 h-7 rounded-full border-2 border-white object-cover z-30' />
            <img src={avatar2} alt="Student" className='w-7 h-7 rounded-full border-2 border-white object-cover z-20' />
            <img src={avatar3} alt="Student" className='w-7 h-7 rounded-full border-2 border-white object-cover z-10' />
            <img src={avatar4} alt="Student" className='w-7 h-7 rounded-full border-2 border-white object-cover z-0' />
            <div className='w-7 h-7 rounded-full border-2 border-white bg-lime flex items-center justify-center text-[10px] font-bold text-black z-40 relative -ml-2 shadow-xs'>
              {enrolledCount}
            </div>
          </div>
        </div>
      </div>

      {/* Price Footer */}
      <div className='mt-4 pt-3 border-t border-gray-100 flex items-baseline gap-1'>
        <span className='text-xl font-bold text-primary-blue font-satoshi'>{price}</span>
        <span className='text-xs text-gray-400 font-normal'>{period}</span>
      </div>
    </div>
  )
}

export default CourseCard
