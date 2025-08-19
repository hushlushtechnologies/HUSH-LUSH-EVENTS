// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
 

// export default function CustomCursor() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 pointer-events-none z-[9999]"
//       animate={{ x: mousePos.x - 25, y: mousePos.y - 25 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//     >
//       <img
//         src="/favicon.png"
//         alt="Custom Cursor"
//         width={50}
//         height={50}
//         style={{ display: "block" }}
//       />
//     </motion.div>
//   );
// }


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Hide the default cursor
    document.body.style.cursor = "none";

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto"; // restore cursor on unmount
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{ x: mousePos.x - 25, y: mousePos.y - 25 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img
        src="/favicon.png"
        alt="Custom Cursor"
        width={50}
        height={50}
        style={{ display: "block" }}
      />
    </motion.div>
  );
}
