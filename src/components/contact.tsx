import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Get in Touch with Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
              <form className="space-y-4">
                <Input placeholder="Full Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
                <select className="w-full p-2 border rounded">
                  <option>Personal Injury</option>
                  <option>Family Law</option>
                  <option>Corporate Law</option>
                  <option>Criminal Defense</option>
                  <option>Other</option>
                </select>
                <Textarea placeholder="Your Message" />
                <Button type="submit" className="w-full">Submit Your Inquiry</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  <p>456 Liberty Avenue, Suite 1200, Chicago, IL 60601</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <p>(312) 555-1234</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <p>contact@harrisonmitchell.com</p>
                </div>
              </div>
              <h4 className="font-semibold mt-6 mb-2">Office Hours:</h4>
              <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}