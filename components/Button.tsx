type ButtonProps = {
  Btnname: string;
  className?: string;
};

export default function Button({
  Btnname,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg px-6 py-3 font-semibold ${className}`}
    >
      {Btnname}
    </button>
  );
}