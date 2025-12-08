import { Link } from "react-router-dom";

export default function LinkButton({ to, text, onClick, target, title }) {
  const isExternal = to.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={to}
        onClick={onClick}
        target={target}
        rel="noopener noreferrer"
        title={title || text}
        className="group relative inline-flex items-center justify-center overflow-hidden bg-primary text-white font-bold text-base px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#720303] hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-100"
      >
        <span className="relative z-10">{text}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
      </a>
    );
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      target={target}
      title={text}
      className="group relative inline-flex items-center justify-center overflow-hidden bg-primary text-white font-bold text-base px-8 py-3 rounded-full transition-all duration-300 hover:bg-[#720303] hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-100"
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
    </Link>
  );
}
