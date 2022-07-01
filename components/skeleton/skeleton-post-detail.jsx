export default function SkeletonPostDetail({ className = '' }) {
  return (
    <div className={`${className}`}>
      <div className="animate-pulse items-center h-full justify-center">
        <div className="w-1/2 bg-gray-300 rounded-md h-6 mb-3" />

        <div className="grid grid-cols-10 gap-2 mb-3">
          <div className="bg-gray-300 h-3 rounded" />
          <div className="bg-gray-300 h-3 rounded" />
          <div className="bg-gray-300 h-3 rounded" />
        </div>
        <div className="w-1/5 bg-gray-300 rounded h-3 mb-3" />

        <div className="w-full bg-gray-400 aspect-video mb-3" />

        <div>
          <div className="w-full bg-gray-300 rounded-md h-3 mb-2" />
          <div className="w-full bg-gray-300 rounded-md h-3 mb-2" />
          <div className="w-full bg-gray-300 rounded-md h-3 mb-2" />
          <div className="w-1/2 bg-gray-300 rounded-md h-3" />
          
          <div className="w-full bg-gray-300 rounded-md h-3 mt-4 mb-2" />
          <div className="w-full bg-gray-300 rounded-md h-3 mb-2" />
          <div className="w-full bg-gray-300 rounded-md h-3 mb-2" />
          <div className="w-1/2 bg-gray-300 rounded-md h-3" />
        </div>
      </div>
    </div>
  );
}
