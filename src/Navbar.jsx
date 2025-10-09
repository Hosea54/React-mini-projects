import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { links, social } from "./data";

const Navbar = () => {
  const toggleLinks = () => {};
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-header"></img>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container">
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className="social icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
