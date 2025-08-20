import React, { useState } from 'react';

export default function ContactPageContent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact from Website');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const mailto = `mailto:kezhou.tong@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

  return (
    <div className="font-jost flex flex-col items-center md:block relative">
      {/* --- Desktop layout wrapper --- */}
      <div className="hidden md:flex justify-center items-center relative w-full h-[calc(100vh-150px-68px)]">
        {/* White card (form) */}
        <form
          onSubmit={handleSubmit}
          className="
            relative bg-white shadow-2xl p-8 
            w-[600px] h-[520px] 
            flex flex-col justify-start
          "
        >
          {/* Added a wrapper to shift content to the right */}
          <div className="ml-[33%] w-[67%]">
            <h2 className="text-[24px] mb-2 text-left">Get In Touch</h2>
            <p className="text-[14px] mb-6 text-left">Leave a message below</p>

            <div className="space-y-6">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full h-12 bg-gray-200 px-4 text-[16px] focus:outline-none"
                required
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full h-12 bg-gray-200 px-4 text-[16px] focus:outline-none"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                className="w-full bg-gray-200 px-4 py-3 text-[16px] focus:outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-5 w-60 py-3 bg-black text-white text-[16px] hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Black info card, absolutely positioned on top of white card */}
        <div
          className="
            absolute top-1/4 left-[calc(50%-300px-100px)] 
            w-75 bg-black text-white p-6 shadow-xl
          "
        >
          <h3 className="text-2xl mb-2">Contact</h3>
          <p className="text-[16px]">Phone: +49 15901328435</p>
          <p className="text-[16px]">Email: kezhou.tong@gmail.com</p>
          <p className="text-[16px]">WeChat: Kenzo_Tong</p>
        </div>
      </div>

      {/* --- Mobile layout wrapper --- */}
      <div className="md:hidden w-full px-4 py-6 space-y-6">        
        {/* White card (form) */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl p-6 w-full"
        >
          <h2 className="text-[24px] mb-2 text-center">Contact</h2> 
          <p className="text-[16px] mb-1 text-center">Phone: +49 15901328435</p>
          <p className="text-[16px] mb-1 text-center">Email: kezhou.tong@gmail.com</p>
          <p className="text-[16px] mb-8 text-center">WeChat: Kenzo_Tong</p>

          <h2 className="text-[24px] mb-2 text-center">Get In Touch</h2>
          <p className="text-[16px] mb-6 text-center">Leave a message below</p>

          <div className="space-y-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full h-12 bg-gray-200 px-4 text-[16px] focus:outline-none"
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full h-12 bg-gray-200 px-4 text-[16px] focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="w-full bg-gray-200 px-4 py-3 text-[16px] focus:outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full py-3 bg-black text-white text-[16px] hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
