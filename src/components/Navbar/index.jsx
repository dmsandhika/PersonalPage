import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Dimas Andhika</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
    );
}

export default Navbar;
