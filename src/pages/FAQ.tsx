import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// interface FaqItem {
//   id: string;
//   question: string;
//   answer: string;
// }

// interface Faq3Props {
//   supportHeading: string;
//   supportDescription: string;
//   supportButtonText: string;
//   supportButtonUrl: string;
// }

const faqItems = [
  {
    id: "faq-1",
    question: "What is JatrA?",
    answer:
      "JatrA is a ride-sharing platform that helps users find, book, and manage rides efficiently.",
  },
  {
    id: "faq-2",
    question: "How do I book a ride?",
    answer:
      "To book a ride, enter your pickup and drop-off locations, choose a ride type, and confirm your booking through the app.",
  },
  {
    id: "faq-3",
    question: "Can I schedule rides in advance?",
    answer:
      "Yes! You can schedule rides in advance for a specific date and time to ensure timely pickup.",
  },
  {
    id: "faq-4",
    question: "How do I cancel a ride?",
    answer:
      "You can cancel a ride through the app before the ride starts. Cancellation fees may apply depending on the timing.",
  },
  {
    id: "faq-5",
    question: "Is JatrA safe?",
    answer:
      "Yes, JatrA prioritizes rider and driver safety by verifying drivers, providing live ride tracking, and offering 24/7 support.",
  },
];
export const FAQPage = () => {
  const heading = "Frequently Asked Questions about JatrA";
  const description =
    "Find answers to common questions about booking rides, cancellations, safety, and more with JatrA. Can't find what you're looking for? Contact our support team.";
  const items = faqItems;
  return (
    <div className="py-32">
      <div className="container space-y-16 mx-auto">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
