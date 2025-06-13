import Image from 'next/image';

export default function AuthorCard({ author, className = '' }) {

  return (
    <div className={`bg-gray-50 p-5 text-center shadow dark:bg-gray-800 ${className}`}>
      <div className="relative">
        <Image
          alt={author.name}
          src={author.amsAvatar}
          width="200"
          height="200"
          objectFit="contain"
        />
      </div>
      <div className="text-xl font-bold">{author.name}</div>
      {/* <div className="mx-auto my-3">
        <span className="post-count p-1 px-2 text-xs bg-black text-white inline-block">
          26771 ប្រកាស
        </span>
      </div> */}
      { author.description && <div className='mt-3'>{author.description}</div>}
    </div>
  );
}
