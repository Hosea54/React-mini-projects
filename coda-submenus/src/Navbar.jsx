import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);

  return (
    <nav>
      <div className="nav-center">
        <h1 className="logo">Coda</h1>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
