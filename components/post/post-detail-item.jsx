import { find } from 'lodash';
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

  const { postFormats = [], videoLink } = post || {};
  const isVideo =
    !!find(postFormats, ['slug', 'post-format-video']) && !!videoLink;
  const videoId = isVideo ? videoLink.split("v=")[1].split("&")[0] : ''

  return (
    <article className="post-detail mt-4 sm:mt-6">
      <div id={post.databaseId}> </div>
      <Head>
        <title>
          {title} {CMS_NAME}
        </title>
        <meta property="og:image" content={post.featuredImage?.sourceUrl} />
      </Head>
      <div className="grid sm:grid-cols-3 gap-3 lg:gap-6">
        <div className="col-span-2">
          <h3 className="entry-title text-lg sm:text-2xl font-bold px-3 sm:px-0">
            {post.title}
          </h3>
          <div className="flex flex-wrap my-3 items-center">
            <span className="text-sm pl-3 sm:pl-0">
              <PostCategoryTag categories={post.categories} />
            </span>
            <span className="text-sm pl-3 sm:pl-0">
              {/* <span className="py-1 px-2 text-white bg-ams-purple dark:bg-slate-600"> */}
              {/* </span>  */} {/* | {post.author} | {post.date} */}
              <PostDate dateString={post.date} />
            </span>
          </div>
          {isVideo && (
            <div className="mb-5">
              <iframe
                width="100%"
                height="auto"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={post.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {/* <div className="relative my-3 sm:my-6 pb-[56%]">
            <Image
              src={post.featuredImage?.sourceUrl}
              layout="fill"
              objectFit="cover"
            />
          </div> */}
          <div
            className=" px-3 sm:px-0"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
          <div className="ads my-4">
            <Image
              src="https://asset.ams.com.kh/central/media/ads-olatte.jpg"
              width="900"
              height="100%"
              layout="raw"
              className="w-full"
            />
          </div>
          <div className="join-telegram my-4 sm:my-7 border">
            <Link href="https://t.me/ApsaraMediaServices">
              <a target="_blank">
                <Image
                  src="https://asset.ams.com.kh/central/media/AMS-Telegram-100.jpg"
                  width="900"
                  height="100%"
                  layout="raw"
                  className="w-full"
                />
              </a>
            </Link>
          </div>
          {/* {post.author} */}
        </div>
        <div className="mb-4 px-3 sm:px-0 col-span-2 sm:col-auto">
          <div className="sticky top-14">
            <div className="ads relative">
              <Image
                src="https://asset.ams.com.kh/central/media/cama-mf-2.jpg"
                width="400px"
                height="100%"
                layout="raw"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
