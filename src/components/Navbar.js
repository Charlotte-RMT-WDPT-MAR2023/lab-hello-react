import logo from "../images/ironhack-logo-xs.png";

import menu from "../images/menu-top-xs.png";

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="ironhack logo" />
      <img src={menu} alt="menu icon" />
    </nav>
  );
}

export default Navbar;
