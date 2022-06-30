export default function TagBanner({ tag, className = '' }) {
  return (
    <section
      className={`sm:py-7 sm:text-2xl py-12 bg-slate-200 text-center text-xl font-bold dark:bg-zinc-600 ${className}`}
    >
      <span>{tag.name}</span>
    </section>
  );
}
