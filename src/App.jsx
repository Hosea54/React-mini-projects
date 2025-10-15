import { useGlobalContext } from "./context";

const App = () => {
  const { name } = useGlobalContext();
  console.log(name);

  return <h2>Coda submenus</h2>;
};
export default App;
