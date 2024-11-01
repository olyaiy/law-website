import { useState } from "react"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header({ activeSection }: { activeSection: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    const navItems = ['About', 'Practice Areas', 'Success Stories', 'Resources', 'Contact']
    
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault()
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      if (isMenuOpen) setIsMenuOpen(false)
    }
  
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 md:px-0 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent transition-all hover:opacity-80"
            >
              Harrison & Mitchell LLP
            </a>
  
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium transition-all hover:text-primary relative group
                    ${activeSection === item.toLowerCase().replace(' ', '-') ? 'text-primary' : 'text-gray-600'}
                  `}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>
  
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Free Consultation
              </a>
            </div>
  
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
  
          {/* Mobile Navigation */}
          <div
            className={`lg:hidden ${
              isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            } transition-all duration-300 ease-in-out overflow-hidden`}
          >
            <nav className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium px-2 py-2 rounded-md transition-colors hover:bg-gray-100
                    ${activeSection === item.toLowerCase().replace(' ', '-') ? 'text-primary bg-primary/5' : 'text-gray-600'}
                  `}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Free Consultation
              </a>
            </nav>
          </div>
        </div>
      </header>
    )
  }