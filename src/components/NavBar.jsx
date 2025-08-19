 import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIcons, setShowIcons] = useState(true);

  // Toggle every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowIcons((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Left Links (Desktop) */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-yellow-400" : "hover:text-indigo-400"}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-yellow-400" : "hover:text-indigo-400"}`
              }
            >
              Services
            </NavLink>
          </li>
        </ul>

        {/* Center Logo */}
        <div className="flex justify-center">
          <NavLink to="/">
            <img
              src="/logo/hushlush.png"
              alt="nav-logo"
              className="md:w-28 w-20"
            />
          </NavLink>
        </div>

        {/* Right Links (Desktop) */}
        <ul className="hidden md:flex gap-6 font-medium items-center">
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-yellow-400" : "hover:text-indigo-400"}`
              }
            >
              Contact
            </NavLink>
          </li>

          <div className="hidden md:flex items-center gap-6 font-medium relative w-48 justify-end">
            {/* Fade/rotate effect */}
            <div
              className={`absolute right-0 transition-all duration-700 ease-in-out ${
                showIcons ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            >
              <div className="flex gap-3">
                {[
                  { href: "https://www.facebook.com/people/Hush-Lush-Events/61577939084079/", icon: <FaFacebookF /> },
                  { href: "https://www.instagram.com/hushlushevents/", icon: <FaInstagram /> },
                { href: "https://www.youtube.com/@HUSHLUSHEVENTS", icon: <FaYoutube /> },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-300 text-black text-lg shadow-md hover:scale-110 hover:shadow-yellow-400 transition-all duration-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Phone number pill */}
            <div
              className={`absolute right-0 transition-all duration-700 ease-in-out ${
                showIcons ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`}
            >
              <span className="px-4 py-1 rounded-full bg-yellow-300 text-black font-semibold shadow-md hover:shadow-yellow-400 transition-all duration-300">
                Call us: +97 1551084366
              </span>
            </div>
          </div>
        </ul>

        {/* Placeholder to keep logo centered on mobile */}
        <div className="md:hidden w-8"></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-yellow-400" : "hover:text-indigo-400"}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-yellow-400" : "hover:text-indigo-400"}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-yellow-400" : "hover:text-indigo-400"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
