import React from 'react'

function CategoryCard({ category }) {
  const { title, icon } = category

  return (
    <div className='bg-white border border-[#E5E7EB] rounded-[24px] p-6 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group min-h-[160px] sm:min-h-[180px]'>
      <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-lime flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform duration-300 shadow-xs overflow-hidden'>
        <img src={icon} alt={title} className='w-full h-full object-contain' />
      </div>
      <h3 className='font-satoshi font-semibold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-primary-blue transition-colors'>
        {title}
      </h3>
    </div>
  )
}

export default CategoryCard
