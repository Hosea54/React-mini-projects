import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [color, setColor] = useState(new Values("#3344c7").all(10));
  const handleChange = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColor(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form handleChange={handleChange} />
      <ColorList color={color} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
