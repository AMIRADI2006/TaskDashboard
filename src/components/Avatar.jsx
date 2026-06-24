export default function Avatar({
  name,
  image,
  size = "w-28 h-28",
  textSize = "text-3xl",
}) {
  const initials = name
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const colors = [
    "bg-indigo-600",
    "bg-green-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-orange-600",
    "bg-cyan-600",
  ];

  const color = colors[name.length % colors.length];

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={`${size} rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800`}
      />
    );
  }

  return (
    <div
      className={`
        ${size}
        ${textSize}
        ${color}
        rounded-full
        flex
        items-center
        justify-center
        text-white
        font-bold
        shadow-xl
      `}
    >
      {initials}
    </div>
  );
}
