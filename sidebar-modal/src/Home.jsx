import { FaBars } from "react-icons/fa";
import { useAppContext } from "./context";

const Home = () => {
  const { openModal, openSidebar } = useAppContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};
export default Home;
