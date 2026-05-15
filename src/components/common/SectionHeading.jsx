export default function SectionHeading({ title, subtitle, className = "", light = false }) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-white" : "text-gray-900 dark:text-white"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? "text-white/80" : "text-gray-600 dark:text-gray-300"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
