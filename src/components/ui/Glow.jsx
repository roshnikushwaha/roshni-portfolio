export default function Glow({
  className = "",
}) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] opacity-30 ${className}`}
    />
  );
}