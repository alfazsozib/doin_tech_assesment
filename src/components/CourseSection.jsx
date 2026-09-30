import React, { useState } from 'react'
import CourseCard from './CourseCard'

function CourseSection() {
  const [activeCategory, setActiveCategory] = useState('Featured')

  const categories = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
    'Productivity',
    'Web Development',
    'Data Science',
    'Cooking',
    '+ More'
  ]

  const coursesData = [
    {
      id: 1,
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
    },
    {
      id: 2,
      title: 'Build Digital Asset',
      instructor: 'purepearl studio',
      rating: 4.5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      level: 'Beginner',
      price: '$25',
      period: '/lifetime',
      enrolledCount: '26+',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'the Power of Big Data',
      instructor: 'purepearl studio',
      rating: 4.5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      level: 'Beginner',
      price: '$25',
      period: '/lifetime',
      enrolledCount: '26+',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Balancing Productivity an...',
      instructor: 'purepearl studio',
      rating: 4.5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      level: 'Beginner',
      price: '$25',
      period: '/lifetime',
      enrolledCount: '26+',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Mastering Money Manage...',
      instructor: 'purepearl studio',
      rating: 4.5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      level: 'Beginner',
      price: '$25',
      period: '/lifetime',
      enrolledCount: '26+',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'From Idea to Startup Succ...',
      instructor: 'purepearl studio',
      rating: 4.5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      level: 'Beginner',
      price: '$25',
      period: '/lifetime',
      enrolledCount: '26+',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <section className='w-full py-16 sm:py-20 bg-white'>
      <div className='container'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto px-4 mb-10'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-black tracking-tight leading-tight'>
            Discover Your Passion, <br className='hidden sm:inline' />
            Build Your Skills
          </h2>
          <p className='font-satoshi text-gray-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed'>
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className='flex flex-wrap justify-center items-center gap-2.5 max-w-5xl mx-auto mb-12 px-2'>
          {categories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-satoshi font-medium transition-all duration-200 cursor-pointer ${isActive
                    ? 'bg-lime text-black shadow-xs font-semibold'
                    : 'bg-[#F3F4F6] text-gray-700 hover:bg-gray-200'
                  } ${category === '+ More' ? 'text-primary-blue hover:text-blue-700' : ''}`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Courses Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseSection
