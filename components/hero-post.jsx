import Link from "next/link";
import sanitizeHtml from 'sanitize-html';
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";


export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              <a aria-label={slug} dangerouslySetInnerHTML={{ __html: sanitizeHtml(title) }} />
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4 overflow-hidden"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(excerpt) }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  );
}
