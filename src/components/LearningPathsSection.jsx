import React from 'react'
import CategoryCard from './CategoryCard'

import iconDesign from '../assets/icons/Frame 4.png'
import iconDevelopment from '../assets/icons/Frame 4 (1).png'
import iconITSoftware from '../assets/icons/Frame 5.png'
import iconBusiness from '../assets/icons/Frame 6.png'
import iconMarketing from '../assets/icons/Frame 7.png'
import iconPhotography from '../assets/icons/Frame 8.png'

function LearningPathsSection() {
  const categories = [
    { id: 1, title: 'Design', icon: iconDesign },
    { id: 2, title: 'Development', icon: iconDevelopment },
    { id: 3, title: 'IT & Software', icon: iconITSoftware },
    { id: 4, title: 'Business', icon: iconBusiness },
    { id: 5, title: 'Marketing', icon: iconMarketing },
    { id: 6, title: 'Photography', icon: iconPhotography }
  ]

  return (
    <section className='w-full py-14 sm:py-20 bg-white border-t border-gray-100'>
      <div className='container'>
        {/* Section Header */}
        <div className='text-center max-w-4xl mx-auto px-4 mb-12 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-black tracking-tight leading-tight mb-4'>
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className='font-satoshi text-gray-500 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed'>
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6'>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningPathsSection
