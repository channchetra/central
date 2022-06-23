export default function CommonLoader({ color = 'border-indigo-500' }) {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full w-8 h-8 border-t-transparent border-4 rounded-full ${color}`}
      />
    </div>
  );
}
