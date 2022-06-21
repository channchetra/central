import Link from "next/link";
import parse from 'html-react-parser';
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a
            className="hover:underline"
            aria-label={title}
          >
            { parse(title) }
          </a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div
        className=" overflow-hidden"
      >
        { parse(excerpt) }
      </div>
      <Avatar author={author} />
    </div>
  );
}
