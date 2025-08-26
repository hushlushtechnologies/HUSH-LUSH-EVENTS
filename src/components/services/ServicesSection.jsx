 import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Weddings",
    description:
      "Romantic, traditional, or modern — we design weddings that tell your love story beautifully, from pre-wedding events to the big day itself.",
    image: "/images/gallery1.jpg",
    subcategories: {
      "Planning & Coordination": [
        "Full Wedding Planning",
        "Partial Planning",
        "Day-of Coordination",
      ],
      "Wedding Types": [
        "Destination Weddings",
        "Traditional / Cultural Weddings",
        "Beach / Outdoor Weddings",
        "Luxury Weddings",
        "Intimate / Micro Weddings",
      ],
      "Pre-Wedding Events": [
        "Engagement Parties",
        "Bridal Showers",
        "Bachelor / Bachelorette Parties",
        "Mehndi / Henna Nights",
        "Sangeet / Cultural Nights",
      ],
      "Wedding Day Services": [
        "Venue Styling & Decoration",
        "Stage & Floral Arrangements",
        "Lighting & Ambience Design",
        "Photography & Videography",
        "Entertainment (Live Bands, DJs, Dancers)",
        "Catering & Menu Planning",
        "Guest Management & Hospitality",
      ],
    },
  },
  {
    title: "Private Events",
    description:
      "From intimate celebrations to grand parties, we create unforgettable experiences tailored to your style and occasion.",
    image: "/images/gallery2.jpg",
    subcategories: {
      Celebrations: [
        "Birthday Parties (Kids, Adults, Milestone)",
        "Anniversaries",
        "Baby Showers / Gender Reveal Parties",
        "Family Reunions",
      ],
      "Themed & Seasonal Events": [
        "Holiday Parties (Christmas, New Year, Eid, Diwali, Halloween)",
        "Theme Nights (Masquerade, Bollywood, 90s Retro, etc.)",
        "Cultural & Religious Celebrations",
      ],
      "Luxury & Lifestyle Events": [
        "Yacht Parties",
        "Private Dinners",
        "House/Villa Parties",
        "Garden & Poolside Events",
      ],
      Entertainment: [
        "Live Performances",
        "DJs & MCs",
        "Games & Fun Activities",
        "Photo Booths & Themed Props",
      ],
    },
  },
  {
    title: "Corporate Events",
    description:
      "Professional, innovative, and brand-focused events designed to impress, inspire, and deliver meaningful connections.",
    image: "/images/cop.jpg",
    subcategories: {
      "Business & Networking": [
        "Conferences & Seminars",
        "Trade Shows & Exhibitions",
        "Product Launches",
        "Networking Events",
      ],
      "Corporate Celebrations": [
        "Annual Dinners & Gala Nights",
        "Award Ceremonies",
        "Staff Appreciation Events",
      ],
      "Team Engagement": [
        "Team Building Activities",
        "Corporate Retreats",
        "Training & Workshops",
      ],
      "Brand & Marketing": [
        "Brand Activations",
        "Pop-up Events",
        "Press Conferences & Media Events",
      ],
    },
  },
  {
    title: "Additional Services",
    description:
      "Enhance your event with our optional add-ons that make every detail perfect.",
    image: "/images/event (1).avif",
    subcategories: {
      Extras: [
        "Venue Selection & Booking",
        "Catering & Menu Curation",
        "Decoration & Theming",
        "Lighting & Audio-Visual Setup",
        "Photography & Videography",
        "Entertainment Booking",
        "Invitations & Stationery",
        "Transport & Logistics",
        "Event Staffing & Hostesses",
      ],
    },
  },
];

export default function ServicesSection() {
  const servicesRefs = useRef([]);

 

  useEffect(() => {
  const ctx = gsap.context(() => {
    servicesRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
    });
  });

  return () => ctx.revert(); // cleanup
}, []);


  return (
  <section className="bg-[#111] text-white py-10 relative overflow-hidden ">
  <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
    <h4 className="uppercase mb-4 tracking-[0.25em] text-sm md:text-base text-gray-300  ">
      What we do
    </h4>
    <h2 className="text-2xl md:text-4xl mb-5  t leading-snug max-w-4xl mx-auto  ">
      From elegant weddings to high-impact corporate events and vibrant private celebrations,
      Hush Lush delivers seamless planning, stunning design, and unforgettable moments.
    </h2>
  </div>

  <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 mt-10">
    {services.map((service, i) => (
      <div
        key={i}
        ref={(el) => (servicesRefs.current[i] = el)}
        className="bg-[#1a1a1a]/80 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-yellow-500/20 transition duration-500"
      >
        {/* Image */}
        <div className="h-80 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="object-cover w-full h-full transform hover:scale-110 transition duration-700"
          />
        </div>

        {/* Text + Subcategories */}
        <div className="p-10">
          <h3 className="font-cinzel text-3xl md:text-4xl font-semibold mb-6 gold">
            {service.title}
          </h3>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-10">
            {service.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(service.subcategories).map(([category, items], idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition"
              >
                <h4 className="gold font-semibold text-lg mb-3">
                  {category}
                </h4>
                <ul className="list-disc pl-5 text-white text-sm md:text-base space-y-2">
                  {items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


  );
}
