import { useAppContext } from "./context";

const Home = () => {
  const { openModal } = useAppContext();

  return (
    <main>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};
export default Home;
