import React, { useState } from "react";
import { Icons } from "../../assets/assets";
import { Title } from "../../assets/ui";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqQuestions = [
    {
      title: "Do you offer financing options for motorcycle purchases?",
      info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
    {
      title: "Can I schedule a test ride before buying?",
      info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
    {
      title: "Do you handle registration, insurance, and paperwork?",
      info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
    {
      title: "Do motorcycles come with a warranty?",
      info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
    {
      title: "Do you offer maintenance and repair services?",
      info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
  ];

  return (
    <div className="mb-(--html-spacing) section-padding">
      <Title text="Common Questions" />
      <div className="max-w-4xl mx-auto mt-8">
        <div className="flex flex-col gap-4">
          {faqQuestions.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "ring-2 ring-[#720303] shadow-lg"
                  : "hover:shadow-lg"
              }`}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer group"
                onClick={() => toggle(index)}
              >
                <span
                  className={`text-base md:text-lg font-semibold pr-4 transition-colors duration-300 ${
                    openIndex === index
                      ? "text-[#720303]"
                      : "text-gray-800 group-hover:text-[#720303]"
                  }`}
                >
                  {item.title}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#720303] rotate-180"
                      : "bg-gray-100 group-hover:bg-[#720303]/10"
                  }`}
                >
                  <img
                    src={Icons.down}
                    alt="Toggle"
                    className={`w-4 h-4 transition-all duration-300 ${
                      openIndex === index ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.info}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
