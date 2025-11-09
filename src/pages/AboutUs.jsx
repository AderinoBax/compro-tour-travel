import React from 'react';
import { Link } from 'react-router-dom';
import baxTeams from '../assets/BaxDigitalTeams.jpg';
import rinoImage from '../assets/member/rino.png';
import pujaImage from '../assets/member/puja.png';
import baxTravelTeam from '../assets/baxteams/Tangsel_Base_Operation.jpeg';

const IconUsers = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-8 w-8 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.75a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5m15 0a9 9 0 00-9-9 9 9 0 00-9 9m18 0H3m16.5-9a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-9 0a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"
    />
  </svg>
);
const IconRocket = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-8 w-8 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 01-5.84 7.4a6.002 6.002 0 01-5.49-5.49 6 6 0 017.4-5.84 6.002 6.002 0 015.49 5.49z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 9.75l-2.25 2.25L15 9.75l2.25-2.25L19.5 9.75zM4.5 14.25l2.25-2.25L9 14.25l-2.25 2.25L4.5 14.25z"
    />
  </svg>
);
const IconEye = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-8 w-8 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639 2.007 2.007 0 013.185-1.03l3.9-3.9a2.007 2.007 0 013.186 0l3.9 3.9a2.007 2.007 0 013.186 0l3.9-3.9a2.007 2.007 0 013.185 1.03 2.007 2.007 0 010 .639 2.007 2.007 0 01-3.185 1.03l-3.9 3.9a2.007 2.007 0 01-3.186 0l-3.9-3.9a2.007 2.007 0 01-3.186 0l-3.9 3.9a2.007 2.007 0 01-3.185-1.03z"
    />
  </svg>
);
const TeamMember = ({ img, name, title, socials }) => (
  <div className="group flex flex-col items-center text-center">
    <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-105">
      <img
        src={img}
        alt={name}
        className="h-full w-full object-cover"
      />
    </div>
    <h3 className="mt-4 text-xl font-semibold text-gray-900">{name}</h3>
    <p className="text-sm font-medium text-blue-600">{title}</p>
    <div className="mt-2 flex gap-3">
      <a href={socials.linkedin} className="text-gray-400 hover:text-blue-600">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.783 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      <a href={socials.twitter} className="text-gray-400 hover:text-blue-600">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H4.78l4.743 6.336L13.971 2.25h4.273zm-1.114 18.011h1.743L7.106 3.974H5.216l11.914 16.287z"/></svg>
      </a>
    </div>
  </div>
);
export default function AboutPage() {
  const team = [
    {
      name: 'Aderino Arya Nanda',
      title: 'Founder & CEO',
      img: rinoImage,
      socials: { linkedin: 'https://linkedin.com/in/aderinoaryananda', twitter: '#' },
    },
    {
      name: 'Puja Ayu Miswari',
      title: 'Head of Operations',
      img: pujaImage,
      socials: { linkedin: 'https://linkedin.com/in/pujaayumiswari', twitter: '#' },
    }
  ];
  return (
    <div className="bg-white text-gray-800">
      <section className="relative flex h-[50vh] min-h-[300px] w-full items-center justify-center bg-linear-to-r from-blue-600 to-cyan-400 py-16 text-white">
        <img
                  src={baxTravelTeam}
                  alt="Hero background"
                  className="absolute inset-0 h-full w-full object-cover"
                />
        <div className="container z-10 mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            About - BAX Tour
          </h1>
          <p className="mt-4 text-lg text-blue-100 md:text-xl">
            We are not just a travel agency. We are your adventure partners.
          </p>
        </div>
      </section>
      <section className="relative -mt-16 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="transform rounded-xl bg-blue-700 p-8 text-white shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4 inline-block rounded-full bg-white/20 p-3">
                <IconRocket />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Our Mission</h3>
              <p className="text-blue-100">
                To provide authentic, safe, and unforgettable vacation
                experiences for every customer.
              </p>
            </div>
            <div className="transform rounded-xl bg-blue-700 p-8 text-white shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4 inline-block rounded-full bg-white/20 p-3">
                <IconEye />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Our Vision</h3>
              <p className="text-blue-100">
                To be the leading travel agency in Indonesia that inspires
                everyone to explore the world.
              </p>
            </div>
            <div className="transform rounded-xl bg-blue-700 p-8 text-white shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4 inline-block rounded-full bg-white/20 p-3">
                <IconUsers />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Our Values</h3>
              <p className="text-blue-100">
                Integrity, Excellent Service, and a Spirit of Adventure are
                our three main pillars.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="font-semibold uppercase tracking-wider text-blue-600">
              Our Story
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Built from a Passion for Travel.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Starting from our love for exploration, TourTravel (part of <span className="font-semibold">PT. Bax Digital Indonesia</span>)
              was founded in 2020. We believe that traveling is
              not just about the destination, but about the story.
            </p>
            <p className="mt-4 text-gray-600">
              We started with small domestic trips and have now grown to
              serve hundreds of adventurers to international destinations.
              We are proud to be a part of every unforgettable moment
              on your journey.
            </p>
          </div>
          <div className="h-64 w-full overflow-hidden rounded-xl shadow-lg md:h-96">
            <img
              src={baxTeams}
              alt="TourTravel Team"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Meet Our Professional Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a group of people passionate about traveling.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}