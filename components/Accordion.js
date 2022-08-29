import React from "react";

import style from "../styles/accordion.module.css";

const Accordion = () => {
  const [selected, setSelected] = React.useState(null);

  const data = [
    {
      question: "What can i do to protect our planet?",
      answer:
        "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
    },
    {
      question: "How to save nature ecologe?",
      answer:
        "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
    },
    {
      question: "What is nature convertation?",
      answer:
        "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
    },
  ];

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className={style.container}>
      <div className={style.accordion}>
        {data.map((item, i) => (
          <div key={i} className={style.item}>
            <div className={style.title} onClick={() => toggle(i)}>
              <div className={style.question}>
                <h2>{item.question}</h2>
              </div>
              <div>
                <span className={style.toggle}>
                  {selected === i ? "-" : "+"}
                </span>
              </div>
            </div>

            <div className={selected === i ? "content__show" : "content"}>
              <p className={style.answer}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
