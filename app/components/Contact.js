"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens the user's email client with the form data pre-filled
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:tounsim317@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    {
      label: "Email",
      value: "tounsim317@gmail.com",
      href: "mailto:tounsim317@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+216 55 196 677",
      href: "tel:+21655196677",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      value: "@mohamed__tounsii",
      href: "https://www.instagram.com/mohamed__tounsii/",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      label: "Facebook",
      value: "Mohamed Tounsi",
      href: "https://www.facebook.com/mohamed.tounsi.583",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Left — contact info */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-[#646468] text-[16px] sm:text-[17px] font-light leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a good conversation. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 border border-solid border-gray-200 flex items-center justify-center text-[#646468] group-hover:border-gray-400 group-hover:text-[#1C1C1F] transition-all shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">{item.label}</span>
                <span className="text-[15px] font-medium text-[#1C1C1F] group-hover:underline underline-offset-4 decoration-gray-300 transition-all">
                  {item.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-medium text-[#646468] uppercase tracking-widest">Your Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Mohamed Ben Ali"
            className="w-full border border-solid border-gray-200 bg-gray-50 px-4 py-3 text-[15px] text-[#1C1C1F] placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-medium text-[#646468] uppercase tracking-widest">Your Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full border border-solid border-gray-200 bg-gray-50 px-4 py-3 text-[15px] text-[#1C1C1F] placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-medium text-[#646468] uppercase tracking-widest">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or just say hi..."
            className="w-full border border-solid border-gray-200 bg-gray-50 px-4 py-3 text-[15px] text-[#1C1C1F] placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1C1C1F] text-white py-3.5 font-medium text-[15px] hover:bg-black transition-colors flex items-center justify-center gap-2"
        >
          {sent ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Message Sent!
            </>
          ) : (
            <>
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
