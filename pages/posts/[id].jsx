import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Container from '~/components/container';
import { getPostById } from '~/lib/posts';
import sanitizeHtml from 'sanitize-html';
import InfiniteScroll from 'react-infinite-scroller';
import CommonLoader from '~/components/common/loader';
import PostCategoryTag from '~/components/post/post-category-tag';
import PostDate from '~/components/post/post-date';
import SectionSeparator from '../../components/section-separator';
import { getAllPostsWithSlug } from '../../lib/api';
import { CMS_NAME } from '../../lib/constants';

export default function Post({ post = {} }) {
  if (!post || !post?.databaseId) {
    return (
      <div className="loader my-5" key={0}>
        <CommonLoader />
      </div>
    );
  }

  const [title, setTitle] = useState(post.title);
  const [id, setId] = useState(post.databaseId);
  const [hasMore, setHasMore] = useState(true);
  const [posts, setPosts] = useState([post]);

  const previous = async () => {
    const preId = posts[posts.length - 1].previous?.databaseId || false;
    if (preId) {
      const p = await getPostById(preId);
      setPosts((pre) => [...pre, p.post]);
    } else {
      setHasMore(false);
    }
  };

  const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const spy = () => {
    const current = posts.filter((p) =>
      isInView(document.getElementById(p.databaseId))
    );
    if (current[0]) {
      const item = current[0];
      if (item.databaseId !== id) {
        window.history.pushState(null, item.title, `/posts/${item.databaseId}`);
        setTitle(item.title);
        setId(item.databaseId);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => spy(), 200);
    return () => clearInterval(timer);
  });

  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={previous}
        hasMore={hasMore}
        loader={
          <div className="loader my-5" key={0}>
            <CommonLoader />
          </div>
        }
      >
        {posts.map((item) => (
          <>
            <article key={item.id} className="mt-4 sm:mt-6">
              <div id={item.databaseId}> </div>
              <Head>
                <title>
                  {title} {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={item.featuredImage?.sourceUrl}
                />
              </Head>
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-6">
                <div className="col-span-2">
                  <h3 className="entry-title text-lg sm:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="post-date my-3 text-sm">
                    <PostCategoryTag categories={item.categories} />
                  </p>
                  <p className="post-date my-3 text-sm">
                    {/* <span className="py-1 px-2 text-white bg-ams-purple dark:bg-slate-600"> */}
                    {/* </span>  */} {/* | {item.author} | {item.date} */}
                    <PostDate dateString={item.date} />
                  </p>
                  <div className="relative my-3 sm:my-6 pb-[56%]">
                    <Image
                      src={item.featuredImage?.sourceUrl}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(item.content, {
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
                  {/* {item.author} */}
                </div>
                <div>
                  <div className="sticky top-14">
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
              </div>
            </article>

            <SectionSeparator />
          </>
        ))}
      </InfiniteScroll>
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
    fallback: false,
  };
}
