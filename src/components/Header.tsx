import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header({ activeSection }: { activeSection: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    const navItems = ['Home', 'About', 'Practice Areas', 'Our Team', 'Success Stories', 'Resources', 'Contact']
  
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
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
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md transition-all">
                Free Consultation
              </Button>
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
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium px-2 py-2 rounded-md transition-colors hover:bg-gray-100
                    ${activeSection === item.toLowerCase().replace(' ', '-') ? 'text-primary bg-primary/5' : 'text-gray-600'}
                  `}
                >
                  {item}
                </a>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md transition-all">
                Free Consultation
              </Button>
            </nav>
          </div>
        </div>
      </header>
    )
  }