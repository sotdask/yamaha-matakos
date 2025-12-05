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
        <ul className="absolute top-full right-0 mt-2 bg-[#F7F7F7] rounded-xl shadow-lg border border-gray-200 p-2 flex flex-col gap-1 z-50 w-28">
          <li 
            onClick={() => changeLanguage('el')}
            className={`block px-4 py-2 hover:bg-primary/10 hover:text-[#720303] rounded-lg cursor-pointer transition-colors text-base font-semibold ${
              i18n.language === 'el' ? 'bg-primary/10 text-[#720303]' : ''
            }`}
          >
            <span>ΕΛ</span>
          </li>
          <li 
            onClick={() => changeLanguage('en')}
            className={`block px-4 py-2 hover:bg-primary/10 hover:text-[#720303] rounded-lg cursor-pointer transition-colors text-base font-semibold ${
              i18n.language === 'en' ? 'bg-primary/10 text-[#720303]' : ''
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
