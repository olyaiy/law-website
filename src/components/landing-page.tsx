'use client'

import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './about'
import PracticeAreas from './practice-areas'
import Team from './our-team'
import SuccessStories from './success-stories'
import Resources from './resources'
import Contact from './contact'
import Footer from './footer'
import { FAQ } from './faq'


export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'practice-areas', 'team', 'success-stories', 'resources', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Team />
        <SuccessStories />
        <Resources />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}