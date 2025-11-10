export default function Title({ text }) {
  return (
    <div className="text-center">
      <div className="inline-block text-left">
        <h2 className="text-2xl lg:text-3xl font-bold uppercase text-primary tracking-wide">
          {text}
        </h2>
        <div className="w-[45px] h-[3px] bg-primary"></div>
      </div>
    </div>
  );
}
