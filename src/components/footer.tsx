import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { name: 'About', id: 'about' },
                { name: 'Practice Areas', id: 'practice-areas' },
                { name: 'Our Team', id: 'team' },
                { name: 'Success Stories', id: 'success-stories' },
                { name: 'Resources', id: 'resources' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.id || ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      if (item.action) {
                        item.action()
                      } else if (item.id) {
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="hover:text-primary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.hightidedigital.ca" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.hightidedigital.ca" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.hightidedigital.ca" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.hightidedigital.ca" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-2">Stay updated with the latest legal insights and firm news.</p>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none">Subscribe</Button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.hightidedigital.ca" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.hightidedigital.ca" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Harrison & Mitchell LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}