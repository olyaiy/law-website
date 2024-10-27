'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
      question: "What should I bring to my initial consultation?",
      answer: "Bring any relevant documents related to your case, including contracts, court papers, and identification."
    },
    {
      question: "How are legal fees structured at Harrison & Mitchell LLP?",
      answer: "We offer various fee structures depending on the case type, including contingency fees, flat rates, and hourly billing. We discuss all options during your consultation."
    },
    {
      question: "How long does it take to resolve a family law case?",
      answer: "The duration varies based on the complexity of the case. On average, uncontested cases may take a few months, while contested cases could extend over a year."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes, we offer secure video consultations for clients who prefer remote meetings or are unable to visit our office in person."
    }
  ]
  
  export function FAQ() {
    return (
      <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="space-y-4 text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our services and legal processes
            </p>
          </div>
          
          <div className="mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }