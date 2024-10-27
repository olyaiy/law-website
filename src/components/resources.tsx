import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import Image from "next/image"

const blogPosts = [
    {
      title: 'Understanding Your Rights in a Personal Injury Case',
      date: 'June 2024',
      image: '/blog/personal-injury.webp',
    },
    {
      title: 'Top 5 Tips for Effective Estate Planning',
      date: 'May 2024',
      image: '/blog/estate-planning.webp',
    },
    {
      title: 'Navigating the Complexities of Business Compliance',
      date: 'April 2024',
      image: '/blog/business-compliance.webp',
    },
    {
      title: 'Immigration Law Updates: What You Need to Know in 2024',
      date: 'March 2024',
      image: '/blog/immigration-updates.webp',
    },
    {
      title: 'The Complete Guide to Child Custody Arrangements',
      date: 'February 2024',
      image: '/blog/child-custody.webp',
    },
    {
      title: 'Intellectual Property Protection for Small Businesses',
      date: 'January 2024',
      image: '/blog/ip-protection.webp',
    },
    {
      title: 'Understanding Workers Compensation Claims',
      date: 'December 2023',
      image: '/blog/workers-comp.webp',
    },
    {
      title: 'Real Estate Transactions: Common Legal Pitfalls',
      date: 'November 2023',
      image: '/blog/real-estate.webp',
    },
    {
      title: 'Criminal Defense: Know Your Rights During Arrest',
      date: 'October 2023',
      image: '/blog/criminal-defense.webp',
    },
]

const legalGuides = [
  'Personal Injury Guide',
  'Family Law Handbook',
  'Corporate Law Manual',
]

export default function Resources() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
  
    const scroll = (direction: 'left' | 'right') => {
      if (!scrollContainerRef.current) return
  
      const scrollAmount = 340 // card width + gap
      const container = scrollContainerRef.current
      const newScrollPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount
  
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  
    return (
      <section id="resources" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Legal Resources & Insights</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Posts Section */}
            <div className="w-full lg:w-3/4 relative">
              {/* Navigation Buttons - Hidden on mobile */}
              <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100"
                  onClick={() => scroll('left')}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100"
                  onClick={() => scroll('right')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
  
              {/* Blog Cards Container */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
              >
                {blogPosts.map((post, index) => (
                  <Card key={index} className="w-[280px] sm:w-[320px] flex-shrink-0">
                    <div className="relative h-[180px] w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-6">
                      <a href="#" className="group">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                      </a>
                      <p className="text-sm text-gray-600">{post.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {/* Fade effect overlay - Hidden on mobile */}
              <div className="hidden lg:block absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>
  
            {/* Legal Guides Section */}
            <Card className="w-full lg:w-1/4">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Legal Guides</h3>
                <ul className="space-y-2">
                  {legalGuides.map((guide, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {guide}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}