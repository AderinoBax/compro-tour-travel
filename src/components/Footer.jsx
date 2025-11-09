import React from 'react';
import { Link } from 'react-router-dom';
const IconInstagram = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.803.248 2.3.447.5.197.88.48 1.25.85.37.37.65.75.85 1.25.198.5.394 1.13.447 2.3.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.17-.248 1.803-.447 2.3-.197.5-.48.88-.85 1.25-.37.37-.75.65-1.25.85-.5.198-1.13.394-2.3.447-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.053-1.803-.248-2.3-.447-.5-.197-.88-.48-1.25-.85-.37.37-.65-.75-.85-1.25-.198-.5-.394 1.13-.447-2.3-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053 1.17.248 1.803.447 2.3.197-.5.48.88.85-1.25.37.37.75.65 1.25-.85.5-.198 1.13-.394 2.3-.447C8.416 2.175 8.796 2.163 12 2.163m0-1.638C8.74 0 8.31.011 7.05.066c-1.25.053-2.12.26-2.9.55-.78.29-1.48.72-2.12 1.36S.9 3.25.6 4.03c-.29.78-.497 1.65-.55 2.9-.054 1.26-.066 1.69-.066 7.05s.011 5.79.066 7.05c.053 1.25.26 2.12.55 2.9.29.78.72 1.48 1.36 2.12s1.34 1.07 2.12 1.36c.78.29 1.65.497 2.9.55 1.26.054 1.69.066 7.05.066s5.79-.011 7.05-.066c1.25-.053 2.12-.26 2.9-.55.78-.29 1.48-.72 2.12-1.36s1.07-1.34 1.36-2.12c.29-.78.497-1.65.55-2.9.054-1.26.066-1.69.066-7.05s-.011-5.79-.066-7.05c-.053-1.25-.26-2.12-.55-2.9-.29-.78-.72-1.48-1.36-2.12S20.75.9 19.97.6c-.78-.29-1.65-.497-2.9-.55C15.71.011 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324m0 10.82a4.658 4.658 0 110-9.316 4.658 4.658 0 010 9.316m6.406-11.875a1.465 1.465 0 100-2.93 1.465 1.465 0 000 2.93"
      clipRule="evenodd"
    />
  </svg>
);
const IconTikTok = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
    <path d="M12.53.02C13.16 0 13.77.06 14.35.17 14.28.18 14.22.2 14.15.22 13.5.39 12.9.62 12.36.9 12.24.95 12.12 1 12 1.07c-.12-.06-.24-.12-.36-.17-.54-.28-1.14-.5-1.78-.68-.1-.03-.19-.05-.29-.07.57-.1 1.17-.16 1.79-.17M10.1 2.08C9.55 2.2 9.02 2.37 8.5 2.58c-.5.19-1 .4-1.46.64-.42.22-.8.48-1.14.78-.3.27-.55.58-.75.93-.19.33-.3.69-.36 1.07-.07.41-.09.83-.09 1.26v3.25c0 .07 0 .14.02.2.01.06.02.12.04.18.04.13.1.26.17.38.08.13.18.25.3.36.12.11.26.2.4.28.14.08.3.15.45.21.05.02.1.04.16.05.06.02.12.03.18.04.29.09.58.16.88.21.28.05.56.09.84.13.43.06.86.1 1.3.13.06 0 .12.02.18.03.22.02.44.04.66.05.12 0 .24.02.36.02.12 0 .24-.02.36-.02.07 0 .14-.02.2-.03.11-.02.22-.03.33-.05.28-.05.56-.09.84-.13.43-.06.86-.1 1.3-.13.06 0 .12-.02.18-.03.22.02.44.04.66-.05.12 0 .24.02.36.02.12 0 .24-.02.36-.02.07 0 .14-.02.2-.03.11-.02.22-.03.33-.05.28-.05.56-.09.84-.13.43-.06.86-.1 1.3-.13.06 0 .12-.02.18-.03.22.02.44.04.66-.05.12 0 .24.02.36.02.12 0 .24-.02.36-.02.11 0 .22.02.33.03.14.02.28.03.42.05.07.01.14.02.2.04.14.03.28.07.41.11.14.05.28.1.41.17.13.07.25.15.36.25.11.1.2.22.28.34.07.12.14.25.18.39.04.14.07.28.09.43.02.15.03.3.03.46v3.02c0 .24-.02.48-.05.71-.03.24-.07.47-.13.69-.06.22-.13.43-.22.63-.09.2-.19.39-.3.57-.11.18-.24.34-.37.5-.14.16-.28.3-.44.43-.16.13-.32.25-.5.35-.17.1-.35.18-.54.25-.19.07-.38.13-.58.17-.2.04-.4.08-.6.11-.2.03-.4.05-.6.07-.15.01-.3.02-.46.03h-1.4v6.28c0 .35-.02.7-.05 1.05-.04.34-.1.68-.17 1.02-.07.33-.16.65-.27.96-.1.31-.23.6-.37.88-.15.28-.3.54-.47.78-.17.24-.35.46-.55.66-.2.2-.4.38-.63.54-.23.16-.47.3-.72.42-.25.12-.5.22-.76.31-.26.09-.53.16-.8.21-.28.05-.56.09-.85.11-.29.02-.58.03-.88.03-.6 0-1.18-.06-1.76-.17-.53-.1-1.05-.23-1.54-.4s-.95-.36-1.38-.58c-.43-.22-.82-.47-1.18-.74-.36-.27-.68-.57-.94-.89-.27-.32-.48-.67-.64-1.04-.16-.37-.26-.76-.31-1.17-.05-.4-.07-.81-.07-1.23V13.8c0-.07.02-.14.03-.2.01-.06.03-.12.05-.18.03-.13.08-.26.13-.38.05-.13.12-.25.2-.36.08-.11.17-.2.27-.28.1-.08.2-.15.32-.21.05-.02.1-.04.16-.05.06-.02.12-.03.18-.04.3-.09.59-.16.89-.21.28-.05.56-.09.85-.13.42-.06.84-.1 1.28-.13.06 0 .12-.02.18-.03.22-.02.44-.04.66-.05.12 0 .24.02.36.02.12 0 .24-.02.36-.02.11 0 .22.02.33.03.14.02.28.03.42.05.07.01.14.02.2.04.14.03.28.07.41.11.14.05.28.1.41.17.13.07.25.15.36.25.11.1.2.22.28.34.07.12.14.25.18.39.04.14.07.28.09.43.02.15.03.3.03.46v3.02c0 .24-.02.48-.05.71-.03.24-.07.47-.13.69-.06.22-.13.43-.22.63-.09.2-.19.39-.3.57-.11.18-.24.34-.37.5-.14.16-.28.3-.44.43-.16.13-.32.25-.5.35-.17.1-.35.18-.54.25-.19.07-.38.13-.58.17-.2.04-.4.08-.6.11-.2.03-.4.05-.6.07-.15.01-.3.02-.46.03h-1.4V3.97c0-.24.02-.48.05-.71.03-.24.07-.47.13-.69.06-.22.13-.43-.22-.63.09-.2.19-.39.3-.57.11-.18.24.34-.37.5.14-.16.28.3.44.43.16-.13.32.25-.5.35-.17-.1.35-.18.54.25.19-.07.38-.13.58.17.2-.04.4-.08.6-.11.2-.03.4-.05.6-.07.15-.01.3-.02.46-.03h1.39z"/>
  </svg>
);
const IconX = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H4.78l4.743 6.336L13.971 2.25h4.273zm-1.114 18.011h1.743L7.106 3.974H5.216l11.914 16.287z"/>
  </svg>
);
export default function Footer() {
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col">
            <Link to="/" className="text-2xl font-bold text-blue-500">
              Tour<span className="text-white">Travel</span>
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Explore the world with us. Your dream destination is just a click
              away.
            </p>
            <div className="mt-6 flex gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-blue-400"
              >
                <IconInstagram />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="transition-colors hover:text-blue-400"
              >
                <IconTikTok />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="transition-colors hover:text-blue-400"
              >
                <IconX />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="transition-colors hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/price"
                  className="transition-colors hover:text-blue-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="transition-colors hover:text-blue-400"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/faq" className="transition-colors hover:text-blue-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get Latest Updates
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Sign up for discounts and our latest vacation packages.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 flex">
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your Email"
                required
                className="w-full grow rounded-l-full border-gray-700 bg-gray-800 px-4 py-2.5 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="rounded-r-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} PT. Bax Digital Indonesia. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}