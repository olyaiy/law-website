import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const successStories = [
  {
    id: 'case1',
    title: 'Securing a Multi-Million Dollar Settlement for a Workplace Injury',
    description: 'After suffering a severe injury in a construction accident, our client faced significant medical expenses and lost wages. Harrison & Mitchell LLP successfully negotiated a $2.5 million settlement, ensuring comprehensive coverage for medical bills and future rehabilitation costs.',
    quote: 'The team at Harrison & Mitchell LLP was incredible. They handled my case with professionalism and empathy, and I couldn\'t be more grateful for the outcome.',
    author: 'Mark T., Chicago'
  },
  {
    id: 'case2',
    title: 'Defending Against Unwarranted Criminal Charges',
    description: 'James Mitchell expertly defended a client accused of fraud, resulting in the charges being dismissed due to lack of evidence. His strategic defense ensured the client\'s reputation and freedom were preserved.',
    quote: 'James Mitchell was my rock during a very challenging time. His expertise and dedication made all the difference in my case.',
    author: 'Laura S., Evanston'
  },
  {
    id: 'case3',
    title: 'Facilitating a Smooth Corporate Merger',
    description: 'Our firm guided two major tech companies through a complex merger, addressing all legal hurdles and ensuring compliance with state and federal regulations. The merger was completed successfully, benefiting both parties.',
    quote: 'Harrison & Mitchell LLP provided exceptional legal guidance throughout our merger process. Their attention to detail and proactive approach were invaluable.',
    author: 'Tom R., Springfield Tech'
  }
]


export default function SuccessStories() {
    return (
      <section id="success-stories" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Our Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <Card key={story.id}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <blockquote className="italic text-gray-700 border-l-4 border-primary pl-4 py-2 mb-4">
                    {story.quote}
                  </blockquote>
                  <p className="text-right text-gray-600">— {story.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }