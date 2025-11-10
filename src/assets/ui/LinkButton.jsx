import { Link } from "react-router-dom";

export default function LinkButton({ to, text }) {
  return (
    <Link
      to={to}
      className="inline-block bg-transparent text-lg text-[#C2BABA] font-bold px-3 py-2 hover:border-primary hover:text-primary border-2 border-[#C2BABA] transition"
    >
      {text}
    </Link>
  );
}
