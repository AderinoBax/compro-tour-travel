import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? 'text-blue-600 font-bold'
      : 'text-gray-600 hover:text-gray-900 transition-colors duration-300';
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/95 backdrop-blur-sm">
      <nav className="container relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Tour<span className="text-gray-900">Travel</span>
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <NavLink to="/" className={getNavLinkClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/price" className={getNavLinkClass}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={getNavLinkClass}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className={getNavLinkClass}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavLinkClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="rounded-md p-2 text-gray-900 transition-colors hover:bg-gray-100"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      <div
        className={`absolute left-0 w-full origin-top transform bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? 'visible scale-y-100 opacity-100 shadow-lg'
            : 'invisible scale-y-90 opacity-0'
        } border-t border-gray-200/50`}
      >
        <ul className="flex flex-col items-center gap-6 px-6 py-8">
          <li>
            <NavLink
              to="/"
              className={getNavLinkClass}
              end
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/price"
              className={getNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={getNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={getNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={getNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="w-full max-w-xs rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}