import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the dropdown menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state when the button is clicked
  };

  return (
    <div className="navbar bg-base-100 fixed z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Dimas Andhika
        </Link>
      </div>
      <div className="flex-none lg:hidden">
        <button className="btn btn-ghost" onClick={toggleMenu} aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className="lg:flex lg:items-center lg:justify-end flex-1 hidden">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-base-100 shadow-lg">
          <ul className="menu menu-compact">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
