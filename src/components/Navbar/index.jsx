import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Dimas Andhika</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><a>About</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
    );
}

export default Navbar;
