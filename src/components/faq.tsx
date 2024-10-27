'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
    question: 'How are legal fees structured at Harrison & Mitchell LLP?',
    answer: 'Our fee structure varies depending on the type of case.'  // Note: removed comment, added complete string
    },
    {
        question: 'How are legal fees structured at Harrison & Mitchell LLP?',
        answer: 'Our fee structure varies depending on the type of case...'  // Make sure there's a comma here
    },
    {
        question: 'How long does it take to resolve a family law case?',
        answer: 'The duration varies significantly based on the complexity of the case and whether it can be resolved through negotiation or requires court intervention. Simple, uncontested matters might take a few months, while complex cases could take a year or longer.'
    },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
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