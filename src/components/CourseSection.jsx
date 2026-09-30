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
    
  )
}

export default CourseSection
