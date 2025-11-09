import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaliImage from '../assets/images/Bali.jpg';
import TokyoImage from '../assets/images/Tokyo.jpg';
import ParisImage2 from '../assets/images/Paris2.jpg';
import RajaAmpatImage from '../assets/images/RajaAmpat.jpg';
import RinjaniImage from '../assets/images/Rinjani.jpg';
import VietnamImage from '../assets/images/Vietnam.jpg';


const portfolioData = [
  {
    id: 1,
    title: 'Tokyo & Kyoto Exploration',
    category: 'International',
    img: TokyoImage,
    desc: 'A 7-day journey exploring modern wonders and ancient traditions in Japan.',
  },
  {
    id: 2,
    title: 'Raja Ampat Charm',
    category: 'Domestic',
    img: RajaAmpatImage,
    desc: 'Diving into the world\'s most beautiful underwater paradise. An unforgettable experience.',
  },
  {
    id: 3,
    title: 'Company Gathering in Bali',
    category: 'Event',
    img: BaliImage,
    desc: 'Fun moments from PT. ABC\'s gathering in Uluwatu. Successful and memorable.',
  },
  {
    id: 4,
    title: 'Vietnam-Thailand Backpacking',
    category: 'International',
    img: VietnamImage,
    desc: 'A 10-day adventure crossing historical sites and street food in Southeast Asia.',
  },
  {
    id: 5,
    title: 'Rinjani Mountain Trek',
    category: 'Domestic',
    img: RinjaniImage,
    desc: 'Conquering one of Indonesia\'s most beautiful mountains. Views from the summit.',
  },
  {
    id: 6,
    title: 'Europe Study Tour (Paris, Rome)',
    category: 'Event',
    img: ParisImage2, 
    desc: 'Documentation of SMA 1 Jakarta\'s study tour visiting iconic European landmarks.',
  },
];
const categories = ['All', 'Domestic', 'International', 'Event'];
export default function PortofolioPage() {
  const [filter, setFilter] = useState('All');
  const filteredData =
    filter === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Our Adventure Gallery
        </h1>
        <p className="mb-12 text-center text-lg text-gray-600">
          See moments and documentation from the trips we have organized.
        </p>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`transform rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-30Type"
            >
              <div className="relative h-56 w-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 inline-block rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}