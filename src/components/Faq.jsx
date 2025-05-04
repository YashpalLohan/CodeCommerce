import React, { useState } from "react";

const faqs = [
    {
        question: "What is your return policy?",
        answer: "We offer a 7-day return policy for all products.",
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to over 50 countries worldwide.",
    },
    {
        question: "How can I track my order?",
        answer: "You can track your order using the tracking link sent to your email.",
    },
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border rounded">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left px-4 py-2 font-medium"
                        >
                            {faq.question}
                        </button>
                        {activeIndex === index && (
                            <div className="px-4 py-2 text-gray-600">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
