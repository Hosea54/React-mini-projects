import data from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);

  const { name, id, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  console.log(name);

  const nextPerson = () => {
    setIndex((currentIndex) => {
      let newPerson = currentIndex + 1;

      return checkNumber(newPerson);
    });
  };
  const PrevPerson = () => {
    setIndex((currentIndex) => {
      let newPerson = currentIndex - 1;
      if (newPerson < 0) {
        return data.length - 1;
      }
      return newPerson;
    });
  };
  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    return setIndex(checkNumber(randomNum));
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <FaChevronLeft className="prev-btn" onClick={PrevPerson} />
          <FaChevronRight className="next-btn" onClick={nextPerson} />
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
