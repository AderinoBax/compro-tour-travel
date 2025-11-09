import React from 'react';
import { Link } from 'react-router-dom';
import BaliImage from '../assets/images/Bali.jpg';
import TokyoImage from '../assets/images/Tokyo.jpg';
import ParisImage from '../assets/images/Paris.jpg';
const IconPriceTag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-12 w-12 text-blue-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v12m-3-2.818.879.511C10.627 15.935 11.3 16.5 12 16.5s1.373-.565 1.87-1.007l.878-.511M12 6a3.75 3.75 0 0 1 3.75 3.75v.375a3.75 3.75 0 0 1-7.5 0v-.375A3.75 3.75 0 0 1 12 6Z"
    />
  </svg>
);
const IconMap = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-12 w-12 text-blue-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 6.75V15m6-6v8.25m.5-10.5h.5c.9 0 1.62.8 1.62 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-2.25a1.75 1.75 0 0 1-1.75-1.75v-1.5c0-.95.72-1.75 1.62-1.75h.5M9 6.75h.5c.9 0 1.62.8 1.62 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-2.25a1.75 1.75 0 0 1-1.75-1.75v-1.5c0-.95.72-1.75 1.62-1.75h.5M.75 12.75h22.5"
    />
  </svg>
);
const IconSupport = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-12 w-12 text-blue-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18a.75.75 0 0 0 .75-.75V11.25a.75.75 0 0 0-1.5 0v6A.75.75 0 0 0 12 18ZM12 5.25a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
    />
  </svg>
);
export default function HomePage() {
  return (
    <div className="w-full">
      <section className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center text-white">
        <img
          src={BaliImage}
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-20 container mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-12 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Find Your Dream Destination
          </h1>
          <p className="mb-8 text-lg text-blue-100 md:text-xl">
            Domestic and international vacation packages at the best prices.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/price"
              className="transform rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            >
              View Our Packages
            </Link>
            <Link
              to="/about"
              className="transform rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <IconPriceTag />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Best Prices</h3>
              <p className="text-gray-600">
                We offer a best price guarantee for every vacation package.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <IconMap />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Exclusive Destinations
              </h3>
              <p className="text-gray-600">
                Explore off-the-beaten-path destinations curated just for you.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <IconSupport />
              </div>
              <h3 className="mb-2 text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">
                Our team is ready to help you anytime, wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Most Popular Destinations
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
              <img
                src={BaliImage}
                alt="Bali Destination"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold">Bali, Indonesia</h3>
                <p className="mb-4 text-gray-600">
                  Enjoy the beauty of the beaches, culture, and nature of the
                  Island of the Gods.
                </p>
                <Link
                  to="/price"
                  className="font-medium text-blue-600 hover:underline"
                >
                  View Package &rarr;
                </Link>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
              <img
                src={TokyoImage}
                alt="Japan Destination"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold">Tokyo, Japan</h3>
                <p className="mb-4 text-gray-600">
                  Experience the unique blend of ancient tradition and modern
                  technology.
                </p>
                <Link
                  to="/price"
                  className="font-medium text-blue-600 hover:underline"
                >
                  View Package &rarr;
                </Link>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
              <img
                src={ParisImage}
                alt="Europe Destination"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold">Paris, France</h3>
                <p className="mb-4 text-gray-600">
                  Visit the most romantic city in the world with its iconic
                  landmarks.
                </p>
                <Link
                  to="/price"
                  className="font-medium text-blue-600 hover:underline"
                >
                  View Package &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Ready to Start Your Adventure?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Don't wait. Plan your dream vacation with us today.
          </p>
          <Link
            to="/price"
            className="transform rounded-full bg-blue-600 px-10 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
          >
            View All Packages
          </Link>
        </div>
      </section>
    </div>
  );
}