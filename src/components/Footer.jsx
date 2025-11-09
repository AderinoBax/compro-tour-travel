import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-gray-900">
      <div className="container mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {new Date().getFullYear()} PT. Bax Digital Indonesia. All
            rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              to="/about"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              About Us
            </Link>
            <Link
              to="/portfolio"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Portfolio
            </Link>
            <Link
              to="/faq"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}