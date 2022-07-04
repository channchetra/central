import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { CMS_NAME } from '~/lib/constants';
import PostCategoryTag from './post-category-tag';
import PostDate from './post-date';

export default function PostDetailItem({ post, title }) {
  if (!post) {
    return null;
  }

  return (
    <article className="mt-4 sm:mt-6">
      <div id={post.databaseId}> </div>
      <Head>
        <title>
          {title} {CMS_NAME}
        </title>
        <meta property="og:image" content={post.featuredImage?.sourceUrl} />
      </Head>
      <div className="grid sm:grid-cols-3 gap-3 sm:gap-6">
        <div className="col-span-2">
          <h3 className="entry-title text-lg sm:text-2xl font-bold">
            {post.title}
          </h3>
          <p className="post-date my-3 text-sm">
            <PostCategoryTag categories={post.categories} />
          </p>
          <p className="post-date my-3 text-sm">
            {/* <span className="py-1 px-2 text-white bg-ams-purple dark:bg-slate-600"> */}
            {/* </span>  */} {/* | {post.author} | {post.date} */}
            <PostDate dateString={post.date} />
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
              __html: post.content,
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
  );
}
