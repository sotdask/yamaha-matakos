import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "../assets";

function DropdownLanguage() {
  const { i18n } = useTranslation();
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative flex">
      <button onClick={() => setOpen(!open)} className="cursor-pointer">
        <img src={Icons.globe} alt="Select language" className="w-8 h-8" />
      </button>
      {open && (
        <ul className="absolute left-0 mt-12 bg-white rounded-xl shadow-lg border p-2 flex flex-col gap-2 z-50 w-28">
          <li 
            onClick={() => changeLanguage('el')}
            className={`flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition ${
              i18n.language === 'el' ? 'bg-gray-100' : ''
            }`}
          >
            <span>ΕΛ</span>
          </li>
          <li 
            onClick={() => changeLanguage('en')}
            className={`flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition ${
              i18n.language === 'en' ? 'bg-gray-100' : ''
            }`}
          >
            <span>EN</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownLanguage;
