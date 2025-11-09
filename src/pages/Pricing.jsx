import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5 text-blue-600"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);
const domesticPackages = [
  {
    name: 'Bali Saver',
    price: 'IDR 2.5M',
    popular: false,
    features: [
      'Roundtrip Flight Tickets',
      '3-Star Hotel (3 Nights)',
      '2-Day Tour (Ubud & Kuta)',
      'Transportation (Avanza)',
    ],
  },
  {
    name: 'Raja Ampat',
    price: 'IDR 7M',
    popular: true,
    features: [
      'Roundtrip Flight Tickets (via Sorong)',
      'Beachfront Resort (4 Nights)',
      'Full Day Island Hopping (Piaynemo)',
      'Snorkeling Gear Rental',
      '3 Meals per Day',
    ],
  },
  {
    name: 'Sumba Adventure',
    price: 'IDR 5M',
    popular: false,
    features: [
      'Roundtrip Flight Tickets (via Tambolaka)',
      '4-Star Hotel (3 Nights)',
      'West & East Sumba Tour',
      'Transportation (Hiace)',
    ],
  },
];
const internationalPackages = [
  {
    name: 'Japan Golden Route',
    price: 'IDR 15M',
    popular: true,
    features: [
      'Roundtrip Flight Tickets (Tokyo)',
      '4-Star Hotel (6 Nights)',
      'Shinkansen (Tokyo - Osaka)',
      'Tour (Tokyo, Kyoto, Osaka)',
      'Universal Studios Japan Ticket',
    ],
  },
  {
    name: 'Turkey Delight',
    price: 'IDR 12M',
    popular: false,
    features: [
      'Roundtrip Flight Tickets (Istanbul)',
      '4-Star Hotel (7 Nights)',
      'Tour (Istanbul & Cappadocia)',
      'Hot Air Balloon (Optional)',
    ],
  },
  {
    name: 'Europe Classic',
    price: 'IDR 30M',
    popular: false,
    features: [
      'Roundtrip Flight Tickets (Paris)',
      '4-Star Hotel (10 Nights)',
      'Tour (Paris, Rome, Amsterdam)',
      'Inter-country High-Speed Train',
    ],
  },
];
export default function PricingPage() {
  const [isInternational, setIsInternational] = useState(false);
  const packages = isInternational ? internationalPackages : domesticPackages;
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Choose Your Perfect Package
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Honest and transparent pricing for your unforgettable adventure.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="relative flex w-full max-w-xs rounded-full bg-gray-200 p-1">
            <span
              className={`absolute top-0 left-0 h-full w-1/2 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
                isInternational ? 'translate-x-full' : 'translate-x-0'
              }`}
              aria-hidden="true"
            />
            <button
              onClick={() => setIsInternational(false)}
              className={`relative z-10 w-1/2 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                !isInternational ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Domestic
            </button>
            <button
              onClick={() => setIsInternational(true)}
              className={`relative z-10 w-1/2 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                isInternational ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              International
            </button>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex transform flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 ${
                pkg.popular
                  ? 'border-4 border-blue-600'
                  : 'border border-gray-200'
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-0 right-0 z-10 -mr-6 mt-6 rotate-45 transform bg-blue-600 px-8 py-1.5 text-xs font-semibold text-white">
                  Popular
                </span>
              )}
              <div className="grow p-8">
                <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {pkg.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /person
                  </span>
                </p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="shrink-0">
                        <CheckIcon />
                      </div>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6">
                <Link
                  to="/contact"
                  className="block w-full transform rounded-full bg-blue-600 px-6 py-3.5 text-center text-base font-medium text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:scale-105"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}