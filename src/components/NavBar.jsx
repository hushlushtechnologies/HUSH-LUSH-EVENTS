 import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setShowIcons((prev) => !prev), 4000);
    return () => clearInterval(interval);
  }, []);

  const linkClass = ({ isActive }) =>
    `transition-colors ${isActive ? "text-yellow-400" : "hover:text-indigo-400"}`;

  const services = [
    { to: "/services/wedding", label: "Wedding Planning" },
    { to: "/services/corporate", label: "Corporate Events" },
    { to: "/services/private-parties", label: "Private Parties" },
  ];

  const mainLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services", dropdown: services },
    { to: "/gallery", label: "Gallery" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white backdrop-blur-md shadow-sm  ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Left Links (Desktop) */}
        <ul className="hidden md:flex gap-6 font-extralight items-center">
          {mainLinks.slice(0, 5).map((link) =>
            link.dropdown ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <NavLink to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
                {dropdownOpen && (
                  <ul className="absolute top-6 left-0 bg-black text-white shadow-lg rounded-md w-48 py-2 z-50 ">
                    {link.dropdown.map((sublink) => (
                      <li key={sublink.label}>
                        <NavLink to={sublink.to} className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">
                          {sublink.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <NavLink to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Logo */}
        <div className="flex justify-center">
          <NavLink to="/">
            <img src="/logo/hushlush.png" alt="nav-logo" className="md:w-28 w-20 "/>
          </NavLink>
        </div>

        {/* Right Links (Desktop) */}
        <ul className="hidden md:flex gap-6 font-medium items-center">
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
          <div className="hidden md:flex items-center gap-6 font-medium relative w-48 justify-end">
            {/* Social icons */}
            <div className={`absolute right-0 transition-all duration-700 ${showIcons ? "opacity-100" : "opacity-0 -rotate-90"}`}>
              <div className="flex gap-3">
                {[
                  { href: "https://facebook.com/people/Hush-Lush-Events/61577939084079/", icon: <FaFacebookF /> },
                  { href: "https://instagram.com/hushlush_events", icon: <FaInstagram /> },
                  { href: "https://youtube.com/@HUSHLUSHEVENTS", icon: <FaYoutube /> },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-300 text-black text-lg shadow-md hover:scale-110 transition-all duration-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Phone */}
            <div className={`absolute right-0 transition-all duration-700 ${showIcons ? "opacity-0 rotate-90" : "opacity-100"}`}>
              <a href="tel:+971542321282" className="px-4 py-1 rounded-full bg-yellow-300 text-black font-semibold shadow-md hover:shadow-yellow-400">
                Call us: +971 542321282
              </a>
            </div>
          </div>
        </ul>

        {/* Placeholder for logo on mobile */}
        <div className="md:hidden w-8"></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4">
          <ul className="flex flex-col gap-4 text-lg font-extralight">
            {mainLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to} onClick={() => setIsOpen(false)} className={linkClass}>
                  {link.label}
                </NavLink>
                {link.dropdown && (
                  <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                    {link.dropdown.map((sublink) => (
                      <li key={sublink.label}>
                        <NavLink to={sublink.to} onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
                          {sublink.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
