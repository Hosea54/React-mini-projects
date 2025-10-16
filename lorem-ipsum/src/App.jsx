import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <div className="section-center">
      <h4>Tired of Boring text</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount" className="label-form">
          Paragraphs
        </label>
        <input
          type="number"
          value={count}
          id="amount"
          min="1"
          max="8"
          step="1"
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((person, index) => {
          return (
            <p className="lorem-text" key={index}>
              {person}
            </p>
          );
        })}
      </article>
    </div>
  );
};
export default App;
