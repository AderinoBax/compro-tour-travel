import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import contactUsImage from '../assets/icon/contactUs.jpg';
const IconMapPin = () => (
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
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);
const IconEnvelope = () => (
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
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615A2.25 2.25 0 013 6.993V6.75"
    />
  </svg>
);
const IconPhone = () => (
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
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.857-1.467-5.13-3.74-6.6-6.6l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);
export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };
  const inputStyle =
    'mt-2 block w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500';
  return (
    <div className="bg-white">
      <section className="relative flex h-[50vh] min-h-[300px] w-full items-center justify-center bg-linear-to-r from-blue-600 to-cyan-400 py-16 text-white">
        <img
                  src={contactUsImage}
                  alt="Hero background"
                  className="absolute inset-0 h-full w-full object-cover"
                />
        <div className="container z-10 mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-blue-100 md:text-xl">
            Have questions, feedback, or suggestions? We are ready to listen.
          </p>
        </div>
      </section>
      <section className="container mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600">
              You can also reach us directly through the information
              below. We will respond as soon as possible.
            </p>
            <div className="flex items-start gap-4">
              <span className="mt-1 shrink-0 rounded-full bg-blue-100 p-3 text-blue-600">
                <IconMapPin />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Office Address</h3>
                <p className="text-gray-600">PT. Bax Digital Indonesia</p>
                <p className="text-gray-600">Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 shrink-0 rounded-full bg-blue-100 p-3 text-blue-600">
                <IconEnvelope />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Official Email</h3>
                <p className="text-gray-600">info@baxdigitalindonesia.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 shrink-0 rounded-full bg-blue-100 p-3 text-blue-600">
                <IconPhone />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Phone / WhatsApp</h3>
                <p className="text-gray-600">+62 855 8796 969</p>
              </div>
            </div>
          </div>
          <div>
            {isSubmitted ? (
              <div className="flex h-full min-h-[400px] items-center justify-center rounded-2xl bg-gray-50 p-8 text-center shadow-xl">
                <div>
                  <h3 className="text-3xl font-bold text-green-600">
                    Thank You!
                  </h3>
                  <p className="mt-3 text-lg text-gray-700">
                    Your message has been sent. Our team will get back to
                    you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl bg-gray-50 p-8 shadow-xl"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className={inputStyle}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Rino A."
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className={inputStyle}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className={inputStyle}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry about vacation package"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    required
                    className={inputStyle}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your detailed questions here..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full transform rounded-full bg-blue-600 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}