import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const formatAnswer = (answer) => {
    // Assuming the answer is an array of JSX elements or strings
    return answer.map((paragraph, index) => {
      // If the paragraph is a string, it's wrapped in a <p> tag.
      // If it's a JSX element, it's rendered as-is.
      return typeof paragraph === 'string' ? (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ) : (
        paragraph
      );
    });
  };

  return (
    <div className="accordion-item">
      <button className="accordion-question" onClick={toggle}>
        {question}
      </button>
      {isOpen && <div className="accordion-answer">{formatAnswer(answer)}</div>}
    </div>
  );
};

export default AccordionItem;