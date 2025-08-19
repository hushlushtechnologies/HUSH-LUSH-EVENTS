//  import { useMediaQuery } from "react-responsive";

// const FooterSection = () => {
//   const isMobile = useMediaQuery({
//     query: "(max-width: 768px)",
//   });

//   return (
//     <section className="footer-section">
//       <img
//         src="/images/footer-dip.png"
//         alt=""
//         className="w-full object-cover -translate-y-1"
//       />

//       <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
//         <div className="overflow-hidden z-10">
//           <h1 className="general-title text-center text-milk py-5">
//             #CELEBRATEWITHSTYLE
//           </h1>
//         </div>

//         <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
//           <div className="social-btn">
//             <a href="https://www.youtube.com/@HUSHLUSHEVENTS">
//             <img src="./images/yt.svg" alt="YouTube" />
//             </a>
//           </div>
//           <div className="social-btn">
//             <a href="https://www.instagram.com/hushlushevents/">
//             <img src="./images/insta.svg" alt="Instagram" />
//             </a>
//           </div>
          
//           {/* <div className="social-btn">
//             <a>
//             <img src="./images/tiktok.svg" alt="TikTok" />
//             </a>
//           </div> */}
         
//         </div>

//         <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
//           <div className="flex items-center md:gap-16 gap-5">
//             <div>
//               <p>Our Services</p>
//             </div>
//             <div>
//               <p>Wedding Planning</p>
//               <p>Corporate Events</p>
//               <p>Private Parties</p>
//             </div>
//             <div>
//               <p>About Us</p>
//               <p>Contact</p>
//               <p>Client Stories</p>
//             </div>
//           </div>

//           <div className="md:max-w-lg">
//             <p>
//               Get exclusive updates on our latest events, special offers, and
//               behind-the-scenes stories from Hush Lush.
//             </p>
//             <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full placeholder:font-sans placeholder:text-[#999999]"
//               />
//               <img src="/images/arrow.svg" alt="arrow" />
//             </div>
//           </div>
//         </div>

       
//       </div>
//        <div className="flex justify-around text-white    items-center py-10 ">
//           <p className=" ">Copyright © 2025 Hush Lush - All Rights Reserved</p>
//           <div className="flex items-center gap-7">
//             <p>Privacy Policy</p>
//             <p>Terms of Service</p>
//           </div>
//         </div>
//     </section>
//   );
// };

// export default FooterSection;

import { useMediaQuery } from "react-responsive";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CELEBRATEWITHSTYLE
          </h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex-center gap-5 relative z-10 md:mt-10 mt-5">
          <a
            href="https://www.youtube.com/@HUSHLUSHEVENTS"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-300 text-black text-2xl shadow-md hover:scale-110 hover:shadow-yellow-400 transition-all duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/hushlush_events?igsh=MW8xMzVsdGl5aGZ4ag=="
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-300 text-black text-2xl shadow-md hover:scale-110 hover:shadow-yellow-400 transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/people/Hush-Lush-Events/61577939084079/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-300 text-black text-2xl shadow-md hover:scale-110 hover:shadow-yellow-400 transition-all duration-300"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Footer Content */}
        <div className="mt-20 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div className="text-lg font-bold">
              <p>Our Services</p>
            </div>
            <div>
              <p>Wedding Planning</p>
              <p>Corporate Events</p>
              <p>Private Parties</p>
            </div>
            <div>
              <p>About Us</p>
              <p>Contact</p>
              <p>Client Stories</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get exclusive updates on our latest events, special offers, and
              behind-the-scenes stories from Hush Lush.
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999] bg-transparent focus:outline-none"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-around text-white items-center pb-10">
        <p>Copyright © 2025 Hush Lush - All Rights Reserved</p>
        <div className="flex items-center gap-7">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
