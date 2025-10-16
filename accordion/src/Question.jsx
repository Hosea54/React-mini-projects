import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  //   const buttonHandler = () => {
  //     setShowInfo(true);
  //   };
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};
export default Question;
