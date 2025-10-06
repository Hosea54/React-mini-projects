import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({ color }) => {
  return (
    <section className="colors">
      {color.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};
export default ColorList;
