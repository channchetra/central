export default function Container({ children, className = '' }) {
  return (
    <div
      className={`max-w-screen-xl container mx-auto sm:px-5 ${className}`}
    >
      {children}
    </div>
  );
}
