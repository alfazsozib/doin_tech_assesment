import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseSection from './components/CourseSection'
import LearningPathsSection from './components/LearningPathsSection'

function App() {

  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <CourseSection />
    <LearningPathsSection />
    </>
  )
}

export default App
