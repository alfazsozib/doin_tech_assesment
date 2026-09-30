import React from 'react'
import ReviewCard from './ReviewCard'

import avatar1 from '../assets/images/R_Ellipse.png'
import avatar2 from '../assets/images/R_Ellipse_1.png'
import avatar3 from '../assets/images/R_Ellipse_2.png'

function ReviewsSection() {
  const reviewsData = [
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      avatar: avatar2,
      text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
    },
    {
      id: 2,
      name: 'James L.',
      role: 'Lifelong Learner',
      avatar: avatar1,
      text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
    },

    {
      id: 3,
      name: 'Alex B.',
      role: 'Inspired Creator',
      avatar: avatar3,
      text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
    }
  ]

  return (
    <section className='w-full py-16 sm:py-24 relative overflow-hidden bg-white border-t border-gray-100'>
      {/* Background Lime Radial Glow */}
      <div
        className='absolute -top-30 left-1/2 -translate-x-1/2 w-[672px] sm:w-[600px] h-[672px] rounded-full pointer-events-none select-none z-0'
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(202, 252, 1, 0.88) 0%, rgba(202, 252, 1, 0.27) 35%, rgba(202, 252, 1, 0.03) 50%)'
        }}
      />

      {/* Right Edge Radial Glow */}
      <div
        className='absolute top-1/2 -translate-y-1/2 -right-32 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full pointer-events-none select-none z-0'
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(202, 252, 1, 0.48) 0%, rgba(202, 252, 1, 0.15) 35%, rgba(202, 252, 1, 0) 80%)'
        }}
      />

      <div className='container relative z-10'>
        {/* Section Header (Flex Space Between) */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-12 mb-12 sm:mb-16'>
          <div>
            <h2 className='text-3xl sm:text-4xl md:text-[46px] font-bold font-heading text-black tracking-tight leading-[1.18]'>
              Discover What Our <br className='hidden sm:inline' />
              Community Is Saying
            </h2>
          </div>

          <div>
            <p className='font-satoshi text-gray-600 text-sm sm:text-base leading-relaxed max-w-[570px]'>
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Review Cards in 1 Row */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
