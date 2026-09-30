import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseSection from './components/CourseSection'
import LearningPathsSection from './components/LearningPathsSection'
import ProfessionalGrowthSection from './components/ProfessionalGrowthSection'
import CreateCoursesSection from './components/CreateCoursesSection'
import ReviewsSection from './components/ReviewsSection'
import CtaSection from './components/CtaSection'

function App() {

  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <CourseSection />
    <LearningPathsSection />
    <ProfessionalGrowthSection />
    <CreateCoursesSection />
    <ReviewsSection />
    <CtaSection />
    </>
  )
}

export default App
