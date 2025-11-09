import React, { useState } from 'react';
const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);
const faqData = [
  {
    id: 1,
    question: 'How do I book a tour package?',
    answer:
      'You can book directly through our "Pricing" page and click the "Book Now" button, or contact us via WhatsApp for a consultation. Our team will assist you shortly.',
  },
  {
    id: 2,
    question: 'What payment methods are accepted?',
    answer:
      'We accept various payment methods, including bank transfers (BCA, Mandiri, BRI), credit cards (Visa, Mastercard), and digital wallets (OVO, GoPay, Dana).',
  },
  {
    id: 3,
    question: 'Can I customize my trip package?',
    answer:
      'Absolutely! We are happy to help you design your dream vacation. Please contact our team via WhatsApp or email to discuss your custom travel needs.',
  },
  {
    id: 4,
    question: 'What is the cancellation and refund policy?',
    answer:
      'Cancellation policies vary depending on the package type and timing. Generally, cancellations made 30 days before departure will receive a 75% refund. Please read the terms and conditions on each package for details.',
  },
];
const FaqItem = ({ item, isOpen, onToggle }) => {
  const { question, answer } = item;
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <ChevronDownIcon />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-5 pr-10 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};
export default function Faq() {
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="rounded-lg bg-gray-50 p-6 shadow-inner sm:p-10">
          <div className="divide-y divide-gray-200">
            {faqData.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}