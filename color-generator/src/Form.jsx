import { useState } from "react";
const Form = ({ handleChange }) => {
  const [colors, setColors] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    handleChange(colors);
  };
  return (
    <section className="container">
      <h4> color generator</h4>
      <form className="color-form" onSubmit={formSubmit}>
        <input
          type="color"
          value={colors}
          onChange={(e) => setColors(e.target.value)}
        />
        <input
          type="text"
          value={colors}
          onChange={(e) => setColors(e.target.value)}
          placeholder="#f15025"
        />

        <button type="submit" className="btn" style={{ background: colors }}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
