import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <Logo />
      </Link>

      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={"/categoria/shirts"}>Shirts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/categoria/hoodies"}>Hoodies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/categoria/shorts"}>Shorts</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
