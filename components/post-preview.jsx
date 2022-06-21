import Link from "next/link";
import sanitizeHtml from 'sanitize-html';
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
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(title) }}
          />
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div
        className=" overflow-hidden"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(excerpt) }}
      />
      <Avatar author={author} />
    </div>
  );
}
