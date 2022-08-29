import React from "react";

const Accordion = () => {
  const [selected, setSelected] = React.useState(null);

  const data = [
    {
      question: "What can i do to protect our planet?",
      answer:
        "Not to make an open fire in nature and to clean up letter, not to pollute open water bodies, to switch to alternative energy sources, to reduce the use of non-renewable resources",
    },
    {
      question: "How to save nature ecologe?",
      answer: "lihnksdjnc sbcskubc hvbds kjsbdc kjsdbsdc ksjdbsck",
    },
    {
      question: "What is nature convertation?",
      answer: "lihnksdjnc sbcskubc hvbds kjsbdc kjsdbsdc ksjdbsck",
    },
  ];

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="container">
      <div className="accordion">
        {data.map((item, i) => (
          <div key={i} className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>

            <div className={selected === i ? "content__show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
