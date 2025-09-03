 import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState({ sending: false });

  async function onSubmit(data) {
    setStatus({ sending: true });

    try {
      await emailjs.send(
        "service_41as7fk",   // your EmailJS service ID
        "template_tagivmb",  // your EmailJS template ID
        data,
        "_DVTHeE3c0_9ZfOcp"  // your EmailJS public key
      );

      toast.success("✅ Thanks! We’ll get back to you shortly.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("❌ Something went wrong. Please try again.");
    } finally {
      setStatus({ sending: false });
    }
  }

  return (
    <main className="bg-[#111] text-white min-h-screen">
      {/* Header */}
      <section className="bg-[#111] text-white py-10 relative overflow-hidden text-center">
        <p className="text-2xl md:text-4xl mb-5 font-light leading-snug max-w-4xl mx-auto font-playfair">
          Share your vision—whether it’s a wedding, corporate gala, or private celebration—and we’ll make it unforgettable.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-8 mb-16">
        <InfoCard icon={<FaEnvelope />} title="Email Us" text="info@hushlushevents.com" />
        <InfoCard icon={<FaPhoneAlt />} title="Call Us" text="+971 542321282" />
        <InfoCard icon={<FaMapMarkerAlt />} title="Visit Us" text="crystal plaza Sharjah al majaz 1 Dubai, UAE" />
      </section>

      {/* Form + Map */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-20">
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#1a1a1a] p-8 rounded-xl space-y-5 shadow-lg"
        >
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="w-full bg-[#0f0f10] border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-300"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Your Email"
            className="w-full bg-[#0f0f10] border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-300"
          />
          <input
            type="text"
            {...register("phone")}
            placeholder="Your Phone"
            className="w-full bg-[#0f0f10] border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-300"
          />
          <input
            type="text"
            {...register("subject")}
            placeholder="Subject"
            className="w-full bg-[#0f0f10] border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-300"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
            rows="5"
            className="w-full bg-[#0f0f10] border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-300"
          ></textarea>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-yellow-300 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            disabled={status.sending}
          >
            <FaPaperPlane />
            {status.sending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Hush Lush Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.806662527687!2d55.38155128015326!3d25.344267919902492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b129a3b9c23%3A0x611d3e8b1335256b!2sHushlush%20Events!5e0!3m2!1sen!2sin!4v1756726053846!5m2!1sen!2sin"
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
      <div className="text-yellow-300 text-3xl mb-3 mx-auto w-fit">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-400 mt-1">{text}</p>
    </div>
  );
}
