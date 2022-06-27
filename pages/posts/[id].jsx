import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '~/components/container';
import { getPostById } from '~/lib/posts';
import sanitizeHtml from 'sanitize-html';
// import PostBody from '../../components/post-body';
import SectionSeparator from '../../components/section-separator';
import { getAllPostsWithSlug } from '../../lib/api';
// import PostTitle from '../../components/post-title';
import { CMS_NAME } from '../../lib/constants';

export default function Post({ post }) {
  // console.warn(post);
  const router = useRouter();
  if (!router.isFallback && !post && !post?.databaseId) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container>
      {router.isFallback ? (
        <h3
          className="mb-5 lg:mb-3 text-2xl md:text-3xl lg:text-3xl font-bold tracking-tighter lg:leading-relaxed md:leading-none text-center md:text-left"
          dangerouslySetInnerHTML={{ __html: 'Loading…' }}
        />
      ) : (
        <>
          <article className="mt-4 sm:mt-6">
            <Head>
              <title>
                {post.title} {CMS_NAME}
              </title>
              <meta
                property="og:image"
                content={post.featuredImage?.sourceUrl}
              />
            </Head>
            {/* <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={post.date}
              author={post.author}
              categories={post.categories}
            /> */}
            {/* <PostBody content={post.content} /> */}
            <div className="grid sm:grid-cols-3 gap-3 sm:gap-6">
              <div className="col-span-2">
                <h3 className="entry-title text-lg sm:text-2xl font-bold">
                  {post.title}
                </h3>
                <p className="post-date my-3 text-sm">
                  {/* <span className="py-1 px-2 text-white bg-ams-purple dark:bg-slate-600">{post.categories}</span>  */}{' '}
                  | {/* {post.author} */} | {post.date}
                </p>
                <div className="relative my-3 sm:my-6 pb-[56%]">
                  <Image
                    src={post.featuredImage?.sourceUrl}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(post.content, {
                      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                        'img',
                      ]),
                    }),
                  }}
                />
                <div className="ads relative my-4 sm:my-7 pb-[16%]">
                  <Image
                    src="https://asset.ams.com.kh/central/media/ads-olatte.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="join-telegram relative my-4 sm:my-7 pb-[25%] border">
                  <Link href="https://t.me/ApsaraMediaServices">
                    <a target="_blank">
                      <Image
                        src="https://asset.ams.com.kh/central/media/AMS-Telegram-100.jpg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </a>
                  </Link>
                </div>
                {/* {post.author} */}
              </div>
              <div className="sticky top-0">
                <div className="ads relative my-4 sm:my-7">
                  <Image
                    src="https://asset.ams.com.kh/central/media/cama-mf-2.jpg"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </article>

          <SectionSeparator />
        </>
      )}
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const { post } = await getPostById(params.id);
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.databaseId}`) || [],
    fallback: true,
  };
}
