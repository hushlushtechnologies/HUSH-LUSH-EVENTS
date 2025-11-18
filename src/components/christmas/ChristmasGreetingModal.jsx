import { useState, useEffect } from "react";

const ChristmasGreetingModal = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white p-8 rounded-xl text-center max-w-md shadow-xl">
        <img src="/assets/img/santa.gif" className="mx-auto w-40 mb-4" />
        <h2 className="text-3xl font-bold text-red-600">Merry Christmas! 🎄</h2>
        <p className="mt-2 text-gray-600">Wishing you joy, love & warmth!</p>
        <button
          onClick={() => setShow(false)}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg"
        >
          🎅 Close
        </button>
      </div>
    </div>
  );
};

export default ChristmasGreetingModal;
