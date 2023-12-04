import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import PropTypes from "prop-types"

const faqList = [
  {
    id: 1,
    question: "What is diabetes and how can I be tested for it?",
    answer: `Diabetes is a condition in which your blood sugar, or blood glucose, rises to unhealthy levels. Insulin, a hormone created in the pancreas, enables glucose from your food to be transferred from blood to your cells in order to provide energy for your body. When glucose is not properly processed or if not enough insulin is created to help the processing, glucose is trapped in the blood and cannot reach your cells.`,
    active: false,
  },
  {
    id: 2,
    question: "What health problems does it cause?",
    answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dignissimos enim quidem ratione voluptate inventore hic rerum autem.`,
    active: false,
  },
  {
    id: 3,
    question: "How can diabetes be treated?",
    answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dignissimos enim quidem ratione voluptate inventore hic rerum autem.`,
    active: false,
  },
  {
    id: 4,
    question: "What can I do to help prevent diabetes?",
    answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dignissimos enim quidem ratione voluptate inventore hic rerum autem.`,
    active: false,
  },
  {
    id: 5,
    question: "How can I manage my diabetes better?",
    answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dignissimos enim quidem ratione voluptate inventore hic rerum autem.`,
    active: false,
  },
];

const FrequentlyAskedQuestions = ({ align }) => {
  const [faqs, setFaqs] = useState(faqList);

  //Toggle questions and answers
  const openAnswer = (id) => {
    const newFaq = faqs.map((faq) => {
      if (faq.id === id) {
        return { ...faq, active: !faq.active };
      } else {
        return faq;
      }
    });
    setFaqs(newFaq);
  };
  return (
    <section>
      <div className="px-[1.5rem] py-[2.625rem] max-w-[74.8125rem] mx-auto">
        <div className={align}>
          <h2 className="text-[1.5rem] font-bold leading-normal lg:text-[4rem] mb-[3.55rem] lg:mb-[4.88rem]">
            FAQs
          </h2>
        </div>

        <div>
          <ul className="flex flex-col gap-[2.25rem] mb-[4rem] lg:mb-[4.88rem]">
            {faqs.map((faq) => {
              const { id, question, answer, active } = faq;

              return (
                <li
                  key={id}
                  className="p-[1rem] lg:py-[3rem] lg:px-[2.5rem] border border-[#CCC] rounded-[0.25rem] lg:rounded-[0.5rem]"
                >
                  <h3
                    onClick={() => openAnswer(id)}
                    className={`text-base lg:text-[2rem] ${active ? "text-[#062D45]" : "text-[#666]"
                      } font-bold leading-normal flex justify-between items-center cursor-pointer`}
                  >
                    <span>{question}</span>
                    <FaChevronDown
                      className={`text-[1.55rem]  transition-all duration-300 ${active
                          ? "rotate-180 text-[#107BC0]"
                          : "rotate-0 text-[#5D5D5D]"
                        }`}
                    />
                  </h3>
                  <p
                    className={`${active ? "block" : "hidden"
                      } mt-[1rem] lg:text-[1.5rem] lg:mt-[1.88rem] text-[#999] text-[0.75rem] font-semibold lg:font-normal leading-normal`}
                  >
                    {answer}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-[1.5rem] text-[#19364D] lg:text-[2.5rem] font-bold lg:font-semibold leading-normal mb-[1.5rem]">
            Still have questions?
          </h3>
          <p className="max-w-[44.8125rem] mx-auto text-base text-black-60 lg:text-[1.5rem] font-semibold lg:font-normal leading-normal mb-[2.5rem]">
            If you cannot find answers to your questions in our FAQs, you can
            always contact us. We will answer you shortly.
          </p>
          <Link
            to={"/"}
            className="flex items-center justify-center mx-auto bg-[#107BC0] w-[9.0625rem] md:w-[11.25rem] h-[2.5rem] md:h-[3.5rem] px-[2rem] py-[0.75rem] md:py-[1.12rem] text-white text-[0.875rem] md:text-[1.25rem] font-bold leading-normal rounded-[0.25rem]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

FrequentlyAskedQuestions.propTypes = {
  align: PropTypes.string
}

export default FrequentlyAskedQuestions;
