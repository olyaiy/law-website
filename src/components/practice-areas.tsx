"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface PracticeArea {
  title: string
  icon: string
  description: string
  keyServices: string[]
}

const practiceAreas: PracticeArea[] = [
  {
    title: 'Personal Injury',
    icon: '⚖️',
    description: 'Dedicated representation for accident victims seeking rightful compensation.',
    keyServices: ['Auto Accidents', 'Workplace Injuries', 'Medical Malpractice', 'Slip and Fall']
  },
  {
    title: 'Family Law',
    icon: '👨‍👩‍👧‍👦',
    description: 'Compassionate guidance through complex family matters and transitions.',
    keyServices: ['Divorce', 'Child Custody', 'Spousal Support', 'Adoption']
  },
  {
    title: 'Corporate Law',
    icon: '🏢',
    description: 'Strategic legal counsel for businesses of all sizes.',
    keyServices: ['Mergers & Acquisitions', 'Contract Law', 'Business Formation', 'Compliance']
  },
  {
    title: 'Criminal Defense',
    icon: '🛡️',
    description: 'Aggressive defense strategies protecting your rights and freedom.',
    keyServices: ['Federal Crimes', 'White Collar', 'DUI Defense', 'Appeals']
  },
  {
    title: 'Estate Planning',
    icon: '📜',
    description: 'Comprehensive planning to protect your legacy and loved ones.',
    keyServices: ['Wills & Trusts', 'Asset Protection', 'Elder Law', 'Probate']
  },
  {
    title: 'Immigration Law',
    icon: '🌎',
    description: 'Expert guidance through complex immigration procedures.',
    keyServices: ['Visas', 'Citizenship', 'Business Immigration', 'Asylum']
  }
]

export default function PracticeAreas() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="practice-areas" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Practice Areas</Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">Legal Excellence in Every Field</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our experienced attorneys provide comprehensive legal services across multiple practice areas,
            delivering exceptional results for our clients.
          </p>
        </div>

        <motion.div 
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {practiceAreas.map((area) => (
            <motion.div key={area.title} variants={itemVariants}>
              <Card className="h-full group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{area.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{area.title}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {area.keyServices.map((service) => (
                      <li key={service} className="flex items-center text-gray-600">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <p className="text-gray-500 mb-6">
            Need assistance in another area? Contact us to discuss your specific legal needs.
          </p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}