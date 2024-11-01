"use client"

/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const coreValues = [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in every case.",
      icon: "⚖️"
    },
    {
      title: "Excellence",
      description: "Committed to achieving superior results through expertise and diligence.",
      icon: "🏆"
    },
    {
      title: "Compassion",
      description: "Understanding and addressing the unique needs of each client.",
      icon: "💝"
    },
    {
      title: "Innovation",
      description: "Leveraging the latest legal technologies and strategies to benefit our clients.",
      icon: "💡"
    }
  ]

  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h2 className="text-4xl font-bold mb-6 text-primary">Harrison & Mitchell LLP</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded in 1998, we've grown from a small team to over 30 dedicated professionals,
            serving clients across Illinois and beyond with excellence and integrity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide unparalleled legal representation with a focus on integrity,
                client satisfaction, and relentless pursuit of justice. We aim to empower our clients
                through knowledgeable and strategic legal solutions.
              </p>
            </Card>
          </motion.div>

          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Our History</h3>
              <p className="text-gray-600 leading-relaxed">
                Starting as a boutique firm in Chicago, we've established ourselves as a pillar of
                legal excellence. Our growth reflects our commitment to exceptional service and
                our clients' trust in our expertise.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          {...fadeIn}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-primary">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}