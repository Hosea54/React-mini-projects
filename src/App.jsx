import data from "./data";
import { useState } from "react";
import Questions from "./Questions";
const App = () => {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <Questions question={question} />
    </main>
  );
};
export default App;
