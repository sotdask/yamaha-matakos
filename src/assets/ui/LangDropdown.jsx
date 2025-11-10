import { useState, useRef, useEffect } from "react";
import { Icons } from "../assets";

const DropdownLanguage = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex">
      <button onClick={() => setOpen(!open)} className="cursor-pointer">
        <img src={Icons.globe} alt="globe" className="w-8 h-8" />
      </button>
      {open && (
        <ul className="absolute left-0 mt-12 bg-white rounded-xl shadow-lg border p-2 flex flex-col gap-2 z-50 w-28">
          <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition">
            <span>GR</span>
          </li>

          <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition">
            <span>EN</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownLanguage;
