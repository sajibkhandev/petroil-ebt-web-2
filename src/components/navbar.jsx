import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-red-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <img src={logo} alt="Petroil Logo" className="h-10" />

        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Gallery</a>
          <a href="#" className="hover:underline">Blog</a>
          <button className="border-2 px-5 py-2 font-semibold hover:bg-white hover:text-red-600 transition">
            CONTACT
          </button>
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-red-600 text-white flex flex-col items-center gap-6 py-6 font-medium">
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#" onClick={() => setOpen(false)}>About</a>
          <a href="#" onClick={() => setOpen(false)}>Services</a>
          <a href="#" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#" onClick={() => setOpen(false)}>Blog</a>
          <button className="border-2 px-6 py-2 hover:bg-white hover:text-red-600 transition">
            CONTACT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;