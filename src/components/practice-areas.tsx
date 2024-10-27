import { Card, CardContent } from "@/components/ui/card"

const practiceAreas = [
  { title: 'Personal Injury', icon: '⚖️' },
  { title: 'Family Law', icon: '👨‍👩‍👧‍👦' },
  { title: 'Corporate Law', icon: '🏢' },
  { title: 'Criminal Defense', icon: '🛡️' },
  { title: 'Estate Planning', icon: '📜' },
  { title: 'Immigration Law', icon: '🌎' },
  { title: 'Real Estate Law', icon: '🏠' },
  { title: 'Intellectual Property', icon: '💡' },
]

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Our Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area) => (
            <Card key={area.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-600">Expert legal services in {area.title.toLowerCase()} to protect your rights and interests.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}