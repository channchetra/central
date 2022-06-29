export default function SkeletonPostItem({ className = '', listView = false }) {
  if (listView) {
    return (
      <div className={`${className}`}>
        <div className="sm:flex animate-pulse h-full justify-center">
          <div className="w-full sm:w-1/3 bg-gray-400 h-48 sm:h-24" />
          <div className="mt-4 sm:mt-0 sm:flex-1 sm:pl-4">
            <div className="w-10/12 bg-gray-300 rounded-md h-5" />
            <div className="w-1/5 bg-gray-300 h-3 rounded-md mt-4" />

            <div className="w-full bg-gray-300 rounded-md h-3 mt-4" />
            <div className="w-1/2 bg-gray-300 rounded-md h-3 mt-1" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="animate-pulse items-center h-full justify-center">
        <div className="w-full bg-gray-400 h-48 md:h-36" />
        <div className="mt-4">
          <div className="w-10/12 bg-gray-300 rounded-md h-5" />
          <div className="w-1/5 bg-gray-300 h-3 rounded-md mt-4" />

          <div className="w-full bg-gray-300 rounded-md h-3 mt-4" />
          <div className="w-1/2 bg-gray-300 rounded-md h-3 mt-1" />
        </div>
      </div>
    </div>
  );
}
