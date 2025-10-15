import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h1 className="logo">Coda</h1>
        <button className="toggle-btn">
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
