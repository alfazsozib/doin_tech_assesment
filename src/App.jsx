import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseSection from './components/CourseSection'
import LearningPathsSection from './components/LearningPathsSection'
import ProfessionalGrowthSection from './components/ProfessionalGrowthSection'

function App() {

  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <CourseSection />
    <LearningPathsSection />
    <ProfessionalGrowthSection />
    </>
  )
}

export default App
