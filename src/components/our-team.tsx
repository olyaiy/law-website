import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const attorneys = [
  { name: 'Sarah Harrison', title: 'Co-Founder & Senior Partner', photo: '/sarah-harrison.jpg' },
  { name: 'James Mitchell', title: 'Co-Founder & Senior Partner', photo: '/james-mitchell.jpg' },
  { name: 'Emily Chen', title: 'Associate Attorney', photo: '/emily-chen.jpg' },
  { name: 'David Lee', title: 'Corporate Law Specialist', photo: '/david-lee.jpg' },
  { name: 'Maria Gonzalez', title: 'Immigration Law Expert', photo: '/maria-gonzalez.jpg' },
]

export default function Team() {
  return (
    <section id="team" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Meet Our Attorneys</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attorneys.map((attorney) => (
      <Card key={attorney.name} className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative w-full aspect-square">
          <Image 
            src={attorney.photo}
            alt={attorney.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{attorney.name}</h3>
                <p className="text-gray-600">{attorney.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}