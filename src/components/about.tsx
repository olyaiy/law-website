export default function About() {
    return (
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">About Harrison & Mitchell LLP</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">Our mission is to provide unparalleled legal representation with a focus on integrity, client satisfaction, and relentless pursuit of justice. We aim to empower our clients through knowledgeable and strategic legal solutions.</p>
              <h3 className="text-xl font-semibold mb-4">Our History</h3>
              <p className="text-gray-600">Founded in 1998, Harrison & Mitchell LLP has been a pillar of legal excellence in the heart of Chicago. Starting with a small team, the firm has grown to include over 30 dedicated professionals, serving clients across Illinois and beyond.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Core Values</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Integrity: We uphold the highest ethical standards in every case.</li>
                <li>Excellence: Committed to achieving superior results through expertise and diligence.</li>
                <li>Compassion: Understanding and addressing the unique needs of each client.</li>
                <li>Innovation: Leveraging the latest legal technologies and strategies to benefit our clients.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }