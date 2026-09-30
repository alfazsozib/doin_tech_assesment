import React from 'react'
import ReviewCard from './ReviewCard'

import avatar1 from '../assets/images/R_Ellipse.png'
import avatar2 from '../assets/images/R_Ellipse_1.png'
import avatar3 from '../assets/images/R_Ellipse_2.png'
import avatar4 from '../assets/images/Ellipse.png'
import avatar5 from '../assets/images/Ellipse (1).png'
import avatar6 from '../assets/images/Ellipse (2).png'

function ReviewsSection() {
  const reviewsData = [
    {
      id: 1,
      name: 'Leslie Alexander',
      role: 'UI/UX Designer',
      rating: 5.0,
      avatar: avatar1,
      text: 'Bytespace Courses completely changed how I approach design. The structured curriculum and hands-on projects allowed me to transition smoothly into a professional UI/UX role!',
      tag: 'Learn Figma from Basic'
    },
    {
      id: 2,
      name: 'Jacob Jones',
      role: 'Software Engineer',
      rating: 5.0,
      avatar: avatar2,
      text: 'The depth of knowledge in these courses is unmatched. I gained practical skills in data analysis and algorithms that helped me land my dream job at a tech startup.',
      tag: 'the Power of Big Data'
    },
    {
      id: 3,
      name: 'Jenny Wilson',
      role: 'Digital Marketer',
      rating: 5.0,
      avatar: avatar3,
      text: 'Outstanding quality! The step-by-step guidance made complex marketing frameworks effortless to learn and apply to my client campaigns immediately.',
      tag: 'Creative Marketing'
    },
    {
      id: 4,
      name: 'Courtney Henry',
      role: 'Product Designer',
      rating: 5.0,
      avatar: avatar4,
      text: "I've tried many online learning platforms, but Bytespace stands out with its active creator community and real-world project workflows.",
      tag: 'Build Digital Asset'
    },
    {
      id: 5,
      name: 'Robert Fox',
      role: 'Financial Analyst',
      rating: 5.0,
      avatar: avatar5,
      text: 'Clear, concise, and incredibly informative. The money management course provided actionable insights that I immediately integrated into my consulting practice.',
      tag: 'Mastering Money Management'
    },
    {
      id: 6,
      name: 'Bessie Cooper',
      role: 'Entrepreneur',
      rating: 5.0,
      avatar: avatar6,
      text: 'From idea generation to scaling, the startup course gave me the confidence and roadmap to launch my own business with real revenue in 3 months!',
      tag: 'From Idea to Startup Success'
    }
  ]

  return (
    <section className='w-full py-16 sm:py-24 bg-white border-t border-gray-100'>
      <div className='container'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto px-4 mb-12 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-[44px] font-bold font-heading text-black tracking-tight leading-tight mb-4'>
            Empowering Learners, <br className='hidden sm:inline' />
            Inspiring Success
          </h2>
          <p className='font-satoshi text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed'>
            Discover how Bytespace Courses has transformed learning journeys for students around the world.
          </p>
        </div>

        {/* 3-Column Review Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
