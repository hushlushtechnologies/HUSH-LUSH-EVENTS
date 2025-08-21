 import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ sending: true, ok: null, msg: "" });

    const form = new FormData(e.currentTarget);

    try {
      await new Promise((r) => setTimeout(r, 1000)); // Simulate request
      setStatus({ sending: false, ok: true, msg: "Thanks! We’ll get back to you shortly." });
      e.currentTarget.reset();
    } catch {
      setStatus({ sending: false, ok: false, msg: "Something went wrong. Please try again." });
    }
  }

  return (
    <main className="bg-[#111] text-white min-h-screen">
      {/* Header */}
      <section className="bg-[#111] text-white py-10 relative overflow-hidden text-center">
        {/* <h1 className="text-4xl md:text-6xl font-light">
          Contact <span className="text-yellow-300">Hush Lush</span>
        </h1> */}
        <p className="text-2xl md:text-4xl mb-5 font-light leading-snug max-w-4xl mx-auto font-playfair">
          Share your vision—whether it’s a wedding, corporate gala, or private celebration—and we’ll make it unforgettable.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-8 mb-16">
        <InfoCard icon={<FaEnvelope />} title="Email Us" text="info@hushlushevents.com" />
        <InfoCard icon={<FaPhoneAlt />} title="Call Us" text="+971 542321282" />
        <InfoCard icon={<FaMapMarkerAlt />} title="Visit Us" text="crystal plaza Sharjah al majaz 1
Dubai, UAE" />
      </section>

      {/* Form + Map */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-20">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a] p-8 rounded-xl space-y-5 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-[#0f0f10] border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-[#0f0f10] border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-300"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="w-full bg-[#0f0f10] border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full bg-[#0f0f10] border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full bg-[#0f0f10] border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-300"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-yellow-300 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            disabled={status.sending}
          >
            <FaPaperPlane />
            {status.sending ? "Sending..." : "Send Message"}
          </button>

          {status.msg && (
            <p className={`text-sm ${status.ok ? "text-green-400" : "text-red-400"}`}>{status.msg}</p>
          )}
        </form>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Hush Lush Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.806660140149!2d55.3864222!3d25.344268000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b4ad1f84c95%3A0x905e1932b1c879a2!2sAfaq%20Alkhaleej%20Management%20Consultants!5e0!3m2!1sen!2sin!4v1755601131471!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ minHeight: "400px", border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl text-center shadow-lg">
      <div className="text-yellow-300 text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-400 mt-1">{text}</p>
    </div>
  );
}
