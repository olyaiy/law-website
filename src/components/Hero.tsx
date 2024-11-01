"use client"

import * as motion from "framer-motion/client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, StarHalf } from 'lucide-react'
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative lg:pt-16 pt-20 min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/10 px-4 sm:px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Floating Shapes */}
      <motion.div 
        className="absolute top-10 right-10 sm:top-20 sm:right-20 w-32 sm:w-64 h-32 sm:h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container py-8 sm:py-12 md:py-20 relative z-10">
        {/* Reorder grid items with flex on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image - Now first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative order-first lg:order-last w-full lg:mt-0"
          >
            <div className="relative w-full mx-auto">
              {/* Different aspect ratio for mobile/desktop */}
              <div className="aspect-[16/9] lg:aspect-square max-w-[400px] lg:max-w-[600px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl rotate-6" />
                <Image
                  src="/law-hero.jpg"
                  alt="Law Office"
                  fill
                  priority
                  className="rounded-2xl shadow-2xl object-cover hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 640px) 400px, (max-width: 1024px) 600px, 800px"
                  quality={90}
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content - Now second on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-last lg:order-first"
          >
            {/* Rating Section */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                  #1 Rated Law Firm in Vancouver, BC
                </span>
                <span className="hidden sm:block text-muted-foreground">•</span>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                  500+ 5-Star Reviews
                </span>
              </div>
            </motion.div>

            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 sm:px-4 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium"
              >
                Trusted Legal Partners Since 1998
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-primary">
                <span className="block">Advocating for</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 pb-4">
                  Your Rights
                </span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Dedicated legal professionals committed to achieving the best outcomes for our clients through integrity and expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="default"
                className="group text-base sm:text-lg font-medium"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                size="default"
                variant="outline"
                className="text-base sm:text-lg font-medium"
                onClick={() => {
                  document.getElementById('practice-areas')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8">
              {[
                { number: "25+", label: "Years Experience" },
                { number: "1000+", label: "Cases Won" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}