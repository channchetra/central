import find from 'lodash/find';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { CMS_NAME } from '~/lib/constants';
import ReactPlayer from 'react-player';
import PostCategoryTag from './post-category-tag';
import PostDate from './post-date';

export default function PostDetailItem({ post, title }) {
  if (!post) {
    return null;
  }

  const { postFormats = [], videoLink } = post || {};
  const isVideo =
    !!find(postFormats, ['slug', 'post-format-video']) && !!videoLink;
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
            <div className="player-wrapper mb-5">
              <ReactPlayer
                className="react-player"
                url={videoLink}
                controls
                width="100%"
                height="100%"
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
          <div className="relative ads my-4 pb-[16%]">
            <Image
              src="https://asset.ams.com.kh/central/media/2020/07/ads-olatte.jpg"
              layout="fill"
              objectFit="cover"
              alt="ads banner"
            />
          </div>
          <div className="join-telegram relative my-4 sm:my-7 border pb-[28%]">
            <Link href="https://t.me/ApsaraMediaServices">
              <a target="_blank">
                <Image
                  src="https://asset.ams.com.kh/central/media/2020/07/AMS-Telegram-100.jpg"
                  layout="fill"
                  objectFit="contain"
                  className="w-full"
                  alt="ads banner"
                />
              </a>
            </Link>
          </div>
          {/* {post.author} */}
        </div>
        <div className="mb-4 px-3 sm:px-0 col-span-2 sm:col-auto">
          <div className="sticky top-14">
            <div className="ads relative h-[750px] md:h-[400px] lg:h-[563px]">
              <Image
                src="https://asset.ams.com.kh/central/media/2021/04/cama-mf-2.jpg"
                layout="fill"
                objectFit="contain"
                className="w-full object-top"
                alt="ads banner"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
