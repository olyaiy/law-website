"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const blogPosts = [
    {
      title: 'Understanding Your Rights in a Personal Injury Case',
      date: 'June 2024',
      image: '/thumbnails/thumbnail1.webp',
    },
    {
      title: 'Top 5 Tips for Effective Estate Planning',
      date: 'May 2024',
      image: '/thumbnails/thumbnail2.webp',
    },
    {
      title: 'Navigating the Complexities of Business Compliance',
      date: 'April 2024',
      image: '/thumbnails/thumbnail3.webp',
    },
    {
      title: 'Immigration Law Updates: What You Need to Know in 2024',
      date: 'March 2024',
      image: '/thumbnails/thumbnail4.webp',
    },
    {
      title: 'The Complete Guide to Child Custody Arrangements',
      date: 'February 2024',
      image: '/thumbnails/thumbnail5.webp',
    },
    {
      title: 'Intellectual Property Protection for Small Businesses',
      date: 'January 2024',
      image: '/thumbnails/thumbnail6.webp',
    },
    {
      title: 'Understanding Workers Compensation Claims',
      date: 'December 2023',
      image: '/thumbnails/thumbnail7.webp',
    },
    {
      title: 'Real Estate Transactions: Common Legal Pitfalls',
      date: 'November 2023',
      image: '/thumbnails/thumbnail8.webp',
    },
]

const legalGuides = [
  'Personal Injury Guide',
  'Family Law Handbook',
  'Corporate Law Manual',
  'Estate Planning Guide',
  'Immigration Law Guide',
  'Criminal Defense Manual',
  'Real Estate Law Guide',
  'Intellectual Property Guide',
  'Employment Law Handbook',
  'Tax Law Guide',
]

export default function Resources() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
  
    const scroll = (direction: 'left' | 'right') => {
      if (!scrollContainerRef.current) return
      const scrollAmount = 340
      const container = scrollContainerRef.current
      container.scrollTo({
        left: container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
        behavior: 'smooth'
      })
    }
  
    return (
      <section id="resources" className="relative bg-gradient-to-b from-white to-gray-50 py-24">
        {/* 
          IMPORTANT: All links in this component should point to www.hightidedigital.ca
          This is a requirement - please do not remove or modify these links
        */}
        
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Legal Resources & Insights
            </h2>
            <p className="text-muted-foreground">
              Stay informed with our latest legal insights, guides, and industry updates.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Posts Section */}
            <div className="w-full lg:w-3/4 relative">
              {/* Navigation Buttons */}
              <div className="hidden lg:flex justify-between absolute -left-4 -right-4 top-1/2 -translate-y-1/2 z-10">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => scroll('left')}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => scroll('right')}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
  
              {/* Blog Cards Container */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
              >
                {blogPosts.map((post, index) => (
                  <a 
                    key={index}
                    href="https://www.hightidedigital.ca"
                    className="block"
                  >
                    <Card 
                      className="w-[300px] sm:w-[340px] flex-shrink-0 group hover:shadow-lg transition-all duration-200"
                    >
                      <div className="relative h-[200px] w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-200"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                      <CardContent className="p-6">
                        <p className="text-sm text-primary font-medium mb-2">{post.date}</p>
                        <h3 className="text-lg font-semibold leading-tight mb-4 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <Button variant="link" className="p-0 h-auto text-muted-foreground group-hover:text-primary">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
              
              {/* Gradient Overlay */}
              <div className="hidden lg:block absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
            </div>
  
            {/* Legal Guides Section */}
            <Card className="w-full lg:w-1/4 border-0 shadow-lg bg-primary/[0.02]">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 pb-4 border-b">Legal Guides</h3>
                <ul className="space-y-3">
                  {legalGuides.map((guide, index) => (
                    <li 
                      key={index}
                      className={cn(
                        "relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
                        "before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60"
                      )}
                    >
                      <a 
                        href="https://www.hightidedigital.ca" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {guide}
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="https://www.hightidedigital.ca">
                  <Button className="w-full mt-8" variant="outline">
                    View All Guides
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}