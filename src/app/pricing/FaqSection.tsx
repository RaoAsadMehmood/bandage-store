import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const FAQSection = () => {
  const faqItems = [
    {
      title: 'the quick fox jumps over the lazy dog',
      content:
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
    },
    {
      title: 'the quick fox jumps over the lazy dog',
      content:
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
    },
    {
      title: 'the quick fox jumps over the lazy dog',
      content:
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
    },
    {
      title: 'the quick fox jumps over the lazy dog',
      content:
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
    },
    {
      title: 'the quick fox jumps over the lazy dog',
      content:
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
    },
    {
      title: 'the quick fox jumps over the lazy dog',
      content:
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start">
              <IoIosArrowForward className="text-blue-500 mt-1 mr-3" size={20} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 text-gray-600">
        Havent got your answer? Contact our support
      </div>

      {/* Mobile responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQSection;
