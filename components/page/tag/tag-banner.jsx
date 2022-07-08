export default function TagBanner({ tag, className = '' }) {
  return (
    <section
      className={`py-7 bg-slate-200 text-center text-xl sm:text-2xl font-bold dark:bg-zinc-600 ${className}`}
    >
      <span>{tag.name}</span>
    </section>
  );
}
