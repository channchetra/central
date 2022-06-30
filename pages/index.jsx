import Image from 'next/image';
import Link from 'next/link';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';
import home from '~/data/home';
import { getPostsForHome } from '~/lib/posts';
import Container from '../components/container';

export default function Index({ posts = {} }) {

  const news = posts.news.posts;
  const daily = posts.daily.posts;
  const politico360 = posts.politico360.posts;
  const connectToOversea = posts.connectToOversea.posts;
  const cambotory = posts.cambotory.posts;
  const sports = posts.sports.posts;
  const economy = posts.economy.posts;
  const election = posts.election.posts;
  const video = posts.video.posts;

  return (
    <>
      <Container>
        {/* Block Latest News */}
        <section className="lastet-news">
          <div className="my-5">
            <CommonSectionHeader
              type="primary"
              title={home.news.title}
              link={home.news.link}
              className="text-xl font-bold"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-7 md:mb-7">
            <PostItem
              key={news[0]?.id}
              post={news[0]}
              config={{
                showExcerpt: false,
              }}
              styles={{
                image: {
                  imageWrapper:
                    'relative lg:aspect-[4/3.07] sm:aspect-[7/6] aspect-video',
                },
              }}
            />
            <div className="block-latest grid grid-cols-1 md:grid-cols-2 gap-5">
              {
                news.map((post, index) =>
                  index > 0 &&
                  <PostItem
                    key={post.id}
                    post={post}
                    config={{
                      showExcerpt: false,
                      showLineSeparator: true,
                    }}
                    styles={{
                      lineSeparator: `border-b pb-3 sm:pb-3 mb-1 ${index > 1 ? 'sm:border-none' : ''} ${index > 2 ? 'border-none' : ''}`,
                      image: {
                        wrapper: 'mb-3 shadow',
                      },
                    }}
                  />
                )
              }
            </div>

          </div>
        </section>

        {/* Block Daily & Politico */}
        <div className="sm:grid md:grid-cols-3 gap-5">
          <section className="block-daily">
            <div className="my-5">
              <CommonSectionHeader
                type="primary"
                title={home.daily.title}
                link={home.daily.link}
                className="text-xl font-bold"
              />
            </div>
            <div className="space-y-5 mb-4">
              {daily.map((post, index) => (
                <PostItem
                  key={post.id}
                  post={post}
                  config={{
                    listView: true,
                    showExcerpt: false,
                    showLineSeparator: index < 5,
                  }}
                  styles={{
                    title: {
                      title: 'mb-2',
                    },
                    image: {
                      imageWrapper: 'aspect-video',
                    },
                    lineSeparator: `border-b pb-3 sm:pb-4 ${
                      index > 4 ? 'sm:border-none' : ''
                    } ${index > 5 ? 'border-none' : ''}`,
                  }}
                />
              ))}
            </div>
            <div className="relative h-[684px]">
              <Image
                src={home.daily.banner}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </section>

          <section className="block-politico col-span-2">
            <div className="my-5">
              <CommonSectionHeader
                type="primary"
                title={home.politico360.title}
                link={home.politico360.link}
                className="text-xl font-bold"
              />
            </div>
            <PostItem
              key={politico360[0]?.id}
              post={politico360[0]}
              config={{
                showExcerpt: false,
              }}
              styles={{
                title: {
                  wrapper: 'mb-3',
                  title: 'text-base lg:text-lg lg:leading-relaxed',
                },
                excerpt: {
                  excerpt: 'text-sm',
                },
              }}
            />
            <div className="mt-8 space-y-7">
              {politico360.map((post, index) => (
                index > 0 &&
                <PostItem
                  key={post.id}
                  post={post}
                  config={{
                    listView: true,
                    showExcerpt: true,
                    showLineSeparator: true,
                  }}
                  styles={{
                    lineSeparator: `border-b pb-3 sm:pb-6 ${
                      index > 2 ? 'sm:border-none' : ''
                    } ${index > 3 ? 'border-none' : ''}`,
                  }}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Block Connect International */}
        <section className="connected">
          <div className="my-5">
            <CommonSectionHeader
              type="primary"
              title={home.connectToOversea.title}
              link={home.connectToOversea.link}
              className="text-xl font-bold"
            />
          </div>

          <div className="connect-inter grid md:grid-cols-4 gap-5">
            {connectToOversea.map((post, index) => (
              <PostItem
                key={post.id}
                post={post}
                config={{
                  showExcerpt: true,
                  showLineSeparator: true,
                }}
                styles={{
                  lineSeparator: `border-b pb-3 sm:pb-5 ${
                    index > 3 ? 'sm:border-none' : ''
                  } ${index > 6 ? 'border-none' : ''}`,
                }}
              />
            ))}
          </div>
        </section>
      </Container>

      {/* Block banner AVI */}
      <section className="block-avi relative my-7 py-12 sm:pt-24 sm:pb-20">
        <Image
          src={home.aviVoice.banner}
          layout="fill"
          objectFit="cover"
          className="cover -z-10"
        />
        <Container>
          <div className="mb-5">
            <span className="bg-rose-900 text-white py-2 px-5 text-base sm:text-3xl inline-block">
              {home.aviVoice.title}
            </span>
          </div>
          <p className="text-white sm:w-2/5 hidden sm:block mb-3">
            {home.aviVoice.description}
          </p>
          <Link href={home.aviVoice.button.link}>
            <a className="mt-5 py-2 px-5 bg-rose-900 text-white text-base z-50">
              {home.aviVoice.button.title}
            </a>
          </Link>
        </Container>
      </section>

      {/* Block Black Crews */}
      <Container>
        <div className="my-5">
          <CommonSectionHeader
            type="primary"
            title={home.cambotory.title}
            link={home.cambotory.link}
            className="text-xl font-bold"
          />
        </div>

        <section className="grid md:grid-cols-4 gap-5">
          {cambotory.map((post, index) => (
            <PostItem
              key={post.id}
              post={post}
              config={{
                showLineSeparator: true,
              }}
              styles={{
                lineSeparator: `border-b pb-3 sm:pb-5 ${
                  index > 3 ? 'sm:border-none' : ''
                } ${index > 6 ? 'border-none' : ''}`,
              }}
            />
          ))}
        </section>
      </Container>

      {/* Block banner Cambodia 2050 */}
      <section className="relative my-7 py-12 sm:pt-24 sm:pb-20">
        <Image
          src={home.cambodia2050.banner}
          layout="fill"
          objectFit="cover"
          className="cover -z-10"
        />
        <Container>
          <div>
            <span className="bg-rose-900 text-white py-2 px-5 text-base sm:text-3xl inline-block">
              {home.cambodia2050.title}
            </span>
          </div>
          <p className="text-white sm:my-5 sm:w-2/5 hidden sm:block">
            {home.cambodia2050.description}
          </p>
          <Link href={home.cambodia2050.button.link}>
            <a className="bg-rose-900 text-white py-2 px-5 text-base z-50">
              {home.cambodia2050.button.title}
            </a>
          </Link>
        </Container>
      </section>

      {/* Block Sports & Economy */}
      <Container>
        <div className="sm:grid md:grid-cols-3 gap-5 pb-5">
          {/* Block Sports */}
          <section className="col-span-2">
            <div className="my-5">
              <CommonSectionHeader
                type="primary"
                title={home.sports.title}
                link={home.sports.link}
                className="text-xl font-bold"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <PostItem
                key={sports[0]?.id}
                post={sports[0]}
                config={{
                  showExcerpt: false,
                }}
                styles={{
                  image: {
                    imageWrapper: 'aspect-[16/8]',
                  },
                }}
              />
              <div className="space-y-4">
                {sports.map((post, index) => (
                  index > 0 &&
                  <PostItem
                    key={post.id}
                    post={post}
                    config={{
                      listView: true,
                      showExcerpt: false,
                      showLineSeparator: true,
                    }}
                    styles={{
                      lineSeparator: `border-b pb-4 ${
                        index > 1 ? 'pb-0 sm:border-none' : ''
                      } ${index > 3 ? 'border-none' : ''}`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="my-5">
              <CommonSectionHeader
                type="primary"
                title={home.election.title}
                link={home.election.link}
                className="text-xl font-bold"
              />
            </div>
            <section className="grid md:grid-cols-3 gap-5">
              {election.map((post, index) => (
                <PostItem
                  key={post.id}
                  post={post}
                  config={{
                    showLineSeparator: true,
                  }}
                  styles={{
                    lineSeparator: `border-b pb-3 sm:pb-5 ${
                      index > 2 ? 'sm:border-none' : ''
                    } ${index > 4 ? 'border-none' : ''}`,
                  }}
                />
              ))}
            </section>

            <div className="relative mt-4 sm:mt-8 h-[450px] sm:h-[1100px]">
              <Image
                src={home.election.banner}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </section>

          {/* Econoomy */}
          <section>
            <div className="my-5">
              <CommonSectionHeader
                type="primary"
                title={home.economy.title}
                link={home.economy.link}
                className="text-xl font-bold"
              />
            </div>
            <div className="space-y-4">
              {economy.map((post, index) => (
                <PostItem
                  key={post.id}
                  post={post}
                  config={{
                    listView: true,
                    showExcerpt: false,
                    showLineSeparator: true,
                  }}
                  styles={{
                    image: {
                      image: 'aspect-video',
                    },
                    lineSeparator: `border-b pb-4 ${
                      index > 17 ? 'sm:border-none' : ''
                    } ${index > 17 ? 'border-none' : ''}`,
                  }}
                />
              ))}
            </div>
          </section>
        </div>
      </Container>
      <section className="bg-slate-100 dark:bg-zinc-600 py-5">
        {/* Block Videos */}
        <Container>
          <div className="my-5">
            <CommonSectionHeader
              type="primary"
              title={home.video.title}
              link={home.video.link}
              className="text-xl font-bold"
              lineColor="before:bg-gray-300"
            />
          </div>

          <section className="grid md:grid-cols-4 gap-5">
            {video.map((post, index) => (
              <PostItem
                key={post.id}
                post={post}
                config={{
                  showExcerpt: false,
                  showLineSeparator: true,
                }}
                styles={{
                  lineSeparator: `border-b pb-3 sm:pb-5 border-gray-300 ${
                    index > 3 ? 'sm:border-none' : ''
                  } ${index > 6 ? 'border-none' : ''}`,
                }}
              />
            ))}
          </section>
        </Container>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const news = await getPostsForHome({...home.news});
  const daily = await getPostsForHome(home.daily);
  const politico360 = await getPostsForHome(home.politico360);
  const connectToOversea = await getPostsForHome(home.connectToOversea);
  const cambotory = await getPostsForHome(home.cambotory);
  const sports = await getPostsForHome(home.sports);
  const economy = await getPostsForHome(home.economy);
  const election = await getPostsForHome(home.election);
  const video = await getPostsForHome(home.video);

  return {
    props: { 
      posts: {
        news,
        daily,
        politico360,
        connectToOversea,
        cambotory,
        sports,
        economy,
        election,
        video
      }
    },
    revalidate: 10,
  };
}
