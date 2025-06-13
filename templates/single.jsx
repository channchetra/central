// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import HTMLReactParser from 'html-react-parser';
import Head from 'next/head';
// import Link from 'next/link';
import Container from '~/components/layout/container';
import PostDetailItem from '~/components/post/post-detail-item';
// import { postPathById } from '~/lib/posts';

export default function TemplateSingle({ post = {} }) {
  const { seo = {} } = post || {};

  return (
    <>
      <Head>{HTMLReactParser(seo.fullHead || '')}</Head>
      <Container>
        <PostDetailItem title={post.title} key={post.id} post={post} />
        {/* <div className="flex justify-center">
          {post.previous ? (
            <Link href={postPathById(post.previous.databaseId)}>
              <a className="p-3 sm:p-4 bg-slate-100 dark:bg-gray-600 shadow focus:outline-none">
                <ChevronLeftIcon className="h-5 w-5" />
              </a>
            </Link>
          ) : (
            <div className="p-3 sm:p-4 bg-slate-100 dark:bg-gray-600 shadow focus:outline-none">
              <ChevronLeftIcon className="h-5 w-5" />
            </div>
          )}
          {post.next ? (
            <Link href={postPathById(post.next.databaseId)}>
              <a className="p-3 sm:p-4 bg-slate-100 dark:bg-gray-600 shadow focus:outline-none">
                <ChevronRightIcon className="h-5 w-5" />
              </a>
            </Link>
          ) : (
            <div className="p-3 sm:p-4 bg-slate-100 dark:bg-gray-600 shadow focus:outline-none">
              <ChevronRightIcon className="h-5 w-5" />
            </div>
          )}
        </div> */}
      </Container>
    </>
  );
}
