import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

// import Metadata from 'components/Metadata';

// import { FaMapPin } from 'react-icons/fa';
// import styles from './PostCard.module.scss';

function PostCard({ post, options = {} }) {
  const { title, excerpt, slug, date, author, categories } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }


  // if (isSticky) {
  //   postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  // }

  return (
    <div>
      {/* {isSticky && <FaMapPin aria-label="Sticky Post" />} */}
      <Link href={postPathBySlug(slug)}>
        <a>
          <h3
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </a>
      </Link>
      {/* <Metadata className={styles.postCardMetadata} {...metadata} /> */}
      {excerpt && (
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeExcerpt(excerpt),
          }}
        />
      )}
    </div>
  );
}

export default PostCard;