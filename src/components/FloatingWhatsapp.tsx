import React from "react";

const FloatingWhatsapp = () => {
  return (
    <a
      href="https://wa.me/923345215337" 
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20b857] text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 transition-transform duration-300 hover:scale-110 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default FloatingWhatsapp;
