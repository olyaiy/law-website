import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  { title: 'Understanding Your Rights in a Personal Injury Case', date: 'June 2024' },
  { title: 'Top 5 Tips for Effective Estate Planning', date: 'May 2024' },
  { title: 'Navigating the Complexities of Business Compliance', date: 'April 2024' },
]

const legalGuides = [
  'Personal Injury Guide',
  'Family Law Handbook',
  'Corporate Law Manual',
]

const faqs = [
  'What should I bring to my initial consultation?',
  'How are legal fees structured at Harrison & Mitchell LLP?',
  'How long does it take to resolve a family law case?',
]


export default function Resources() {
    return (
      <section id="resources" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Legal Resources & Insights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Blog Highlights</h3>
                <ul className="space-y-2">
                  {blogPosts.map((post, index) => (
                    <li key={index}>
                      <a href="#" className="text-primary hover:underline">{post.title}</a>
                      <p className="text-sm text-gray-600">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Legal Guides</h3>
                <ul className="space-y-2">
                  {legalGuides.map((guide, index) => (
                    <li key={index}><a href="#" className="text-primary hover:underline">{guide}</a></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }