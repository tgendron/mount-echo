export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm dark:shadow-gray-900/20 ${
        hover ? "hover:shadow-lg dark:hover:shadow-gray-900/30 transition-shadow duration-300" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
