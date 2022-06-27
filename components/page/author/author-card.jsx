import Image from 'next/image';

export default function AuthorCard({ author, className = '' }) {
  console.warn(author);
  return (
    <div className={`bg-gray-50 p-5 text-center ${className}`}>
      <div className="relative">
        <Image
          alt={author.name}
          src={author.avatar.url}
          width="200"
          height="200"
          objectFit="contain"
        />
      </div>
      <div className='text-xl font-bold mb-3'>{author.name}</div>
      <div>{author.description}</div>
    </div>
  );
}
