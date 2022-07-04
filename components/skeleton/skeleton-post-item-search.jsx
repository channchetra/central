export default function SkeletonPostItemSearch({ className = '' }) {
  return (
    <div className={`${className}`}>
      <div className="animate-pulse h-full justify-center">
        <div className="w-full bg-gray-300 h-3 rounded-md" />
        <div className="w-1/2 bg-gray-300 h-3 rounded-md mt-2" />
      </div>
    </div>
  );
}
