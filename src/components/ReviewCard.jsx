import React from 'react'

function ReviewCard({ review }) {
  const { name, role, rating = 5.0, text, tag, avatar } = review

  return (
    <div className='bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group'>
      <div>
        {/* Top User Info & Rating */}
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-3'>
            <img
              src={avatar}
              alt={name}
              className='w-12 h-12 rounded-full object-cover border border-gray-100'
            />
            <div>
              <h4 className='font-satoshi font-bold text-gray-900 text-base leading-tight group-hover:text-primary-blue transition-colors'>
                {name}
              </h4>
              <p className='text-xs text-gray-500 font-satoshi mt-0.5'>
                {role}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-1 bg-[#FFFDF0] border border-amber-200/60 px-2.5 py-1 rounded-full text-xs font-semibold text-gray-800 shrink-0'>
            <span>{rating}</span>
            <svg className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* Review Text */}
        <p className='font-satoshi text-gray-600 text-sm leading-relaxed mb-6 opacity-90 italic'>
          "{text}"
        </p>
      </div>

      {/* Course Tag Badge */}
      {tag && (
        <div className='pt-2 border-t border-gray-100'>
          <span className='inline-block bg-[#F3F4F6] text-gray-700 font-satoshi text-xs font-medium px-3 py-1.5 rounded-full'>
            Course: <span className='text-gray-900 font-semibold'>{tag}</span>
          </span>
        </div>
      )}
    </div>
  )
}

export default ReviewCard
