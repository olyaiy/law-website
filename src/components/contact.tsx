import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Our Office</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule a confidential consultation with our experienced legal team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <Input 
                    placeholder="Full Name" 
                    className="h-12 border-gray-200"
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="h-12 border-gray-200"
                    />
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="h-12 border-gray-200"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200">
                      <SelectValue placeholder="Select Practice Area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal-injury">Personal Injury</SelectItem>
                      <SelectItem value="family-law">Family Law</SelectItem>
                      <SelectItem value="corporate-law">Corporate Law</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea 
                    placeholder="Please describe your legal matter" 
                    className="min-h-[120px] border-gray-200"
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
                  >
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Office Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Vancouver Office</p>
                      <p className="text-gray-600">
                        1055 West Georgia Street, Suite 2200<br />
                        Royal Centre<br />
                        Vancouver, BC V6E 3P3
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">(604) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">contact@firmname.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 mr-4 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <div className="text-gray-600">
                        <p>Monday – Friday: 8:30 AM – 5:30 PM</p>
                        <p>Saturday & Sunday: Closed</p>
                        <p className="mt-2 text-sm">Evening appointments available upon request</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          
          </div>
        </div>
      </div>
    </section>
  )
}