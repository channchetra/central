import { Helmet } from 'react-helmet';

import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
// import useSite from 'hooks/use-site';

import SectionTitle from 'components/SectionTitle';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import PostCard from 'components/PostCard';
import Layou from 'components/Layou';

// import Pagination from 'components/Pagination/Pagination';
// import styles from 'styles/templates/Archive.module.scss';

const DEFAULT_POST_OPTIONS = {};

export default function TemplateArchive({
  title = 'Archive',
  Title,
  posts,
  postOptions = DEFAULT_POST_OPTIONS,
  slug,
  metadata,
  // pagination,
}) {
  // console.warn(useSite());
  // const { metadata: siteMetadata = {} } = useSite();
  const siteMetadata = {};
  // if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
  //   metadata.title = `${title} - ${siteMetadata.title}`;
  //   metadata.og.title = metadata.title;
  //   metadata.twitter.title = metadata.title;
  // }

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layou>
      <Helmet {...helmetSettings} />

      <WebpageJsonLd title={title} description={metadata?.description} siteTitle={siteMetadata?.title} slug={slug} />

      <Header>
        <Container>
          <h1>{Title || title}</h1>
          {metadata?.description && (
            <p
              dangerouslySetInnerHTML={{
                __html: metadata?.description,
              }}
            />
          )}
        </Container>
      </Header>
      <div>
        <Container>
          <SectionTitle>Posts</SectionTitle>
          {Array.isArray(posts) && (
            <>
              <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                      <PostCard post={post} options={postOptions} />
                    </li>
                  ))}
              </ul>
              {/* {pagination && (
                <Pagination
                  currentPage={pagination?.currentPage}
                  pagesCount={pagination?.pagesCount}
                  basePath={pagination?.basePath}
                />
              )} */}
            </>
          )}
        </Container>
      </div>
    </Layou>
  );
}