import React from "react";

const FAQ = ({ faq, index, toggleFAQ }) => {
    return (
        <div
            className={`bg-white p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out ${faq.open ? "bg-gray-100" : ""}`}
            onClick={() => toggleFAQ(index)}
        >
            <div className={`text-xl font-semibold mb-2 flex justify-between items-center ${faq.open ? "mb-4" : ""}`}>
                <span>{faq.question}</span>
                <span className={`text-xl ${faq.open ? "text-red-500" : "text-gray-500"}`}>{faq.open ? "-" : "+"}</span>
            </div>
            <div className={`transition-all duration-300 ease-in-out ${faq.open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                <p>{faq.answer}</p>
            </div>
        </div>
    );
};

export default FAQ;
