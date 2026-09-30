import React from 'react'

function ReviewCard({ review }) {
  const { name, role, text, avatar } = review

  return (
    <div className='bg-white border border-[#E5E7EB] rounded-[24px] p-7 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group'>
      <div>
        {/* Top Avatar */}
        <div className='mb-6'>
          <img
            src={avatar}
            alt={name}
            className='w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-xs'
          />
        </div>

        {/* Name & Blue Role */}
        <div className='mb-5'>
          <h3 className='font-satoshi font-bold text-xl text-black leading-tight mb-1'>
            {name}
          </h3>
          <p className='font-satoshi font-medium text-base text-primary-blue'>
            {role}
          </p>
        </div>

        {/* Review Quote */}
        <p className='font-satoshi font-normal text-gray-600 text-sm sm:text-base leading-relaxed opacity-90'>
          "{text}"
        </p>
      </div>
    </div>
  )
}

export default ReviewCard
