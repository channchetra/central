import Image from 'next/image';
import Link from 'next/link';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';
import Container from '../components/container';
import { getAllPostsForHome } from '../lib/api';

export default function Index({ allPosts: { edges } }) {
  const heroPost = edges[0]?.node;

  return (
    <>
      <Container>
        {/* Block Latest News */}
        <section className="lastet-news">
          <div className="my-5">
            <CommonSectionHeader
              type="primary"
              title="ព័ត៌មានថ្មីបំផុត"
              className="text-xl font-bold"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-7 md:mb-7">
            <PostItem
              post={heroPost}
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
              {[...Array(4)].map((post, index) => (
                <PostItem
                  key={`latest-post-${index}`}
                  post={heroPost}
                  config={{
                    showExcerpt: false,
                    showLineSeparator: true,
                  }}
                  styles={{
                    lineSeparator: `border-b pb-3 sm:pb-6 mb-3 ${
                      index > 1 ? 'sm:border-none' : ''
                    } ${index > 2 ? 'border-none' : ''}`,
                    image: {
                      wrapper: 'mb-5 shadow',
                    },
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Block Daily & Politico */}
        <div className="sm:grid md:grid-cols-3 gap-5">
          <section className="block-daily">
            <div className="my-5">
              <CommonSectionHeader
                type="primary"
                title="ព័ត៌មានប្រចាំថ្ងៃ"
                className="text-xl font-bold"
              />
            </div>
            <div className="space-y-5 mb-4">
              {[...Array(6)].map((post, index) => (
                <PostItem
                  key={`daily-post-${index}`}
                  post={heroPost}
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
                src="/images/food-panda.jpeg"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </section>
          <section className="block-politico col-span-2">
            <div className="my-5">
              <CommonSectionHeader
                type="primary"
                title="Politico 360"
                className="text-xl font-bold"
              />
            </div>
            <PostItem
              post={heroPost}
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
              {[...Array(4)].map((post, index) => (
                <PostItem
                  key={`politico-post-${index}`}
                  post={heroPost}
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
              title="កិច្ចការបរទេសផ្សាភ្ជាប់កម្ពុជាទៅកាន់អន្តរជាតិ"
              className="text-xl font-bold"
            />
          </div>

          <div className="connect-inter grid md:grid-cols-4 gap-5">
            {[...Array(8)].map((post, index) => (
              <PostItem
                key={`connect-inter-post-${index}`}
                post={heroPost}
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
          src="/images/AMS-AVI-front-cover.jpeg"
          layout="fill"
          objectFit="cover"
          className="cover -z-10"
        />
        <Container>
          <div className="mb-5">
            <span className="bg-rose-900 text-white py-2 px-5 text-base sm:text-3xl inline-block">
              AVI Voice
            </span>
          </div>
          <p className="text-white sm:w-2/5 hidden sm:block">
            គោលបំណងចែករំលែកចំណេះដឹង និងការវិភាគដល់ប្រិយមិត្តអ្នកស្តាប់
            ជាពិសេសយុវជន
            លើប្រធានបទសំខាន់ៗដូចជាភូមិសាស្រ្តនយោបាយនិងសេដ្ឋកិច្ចសកលនិងក្នុងតំបន់
            <br />
            ការអភិវឌ្ឍដោយចីរភាព សេដ្ឋកិច្ចឌីជីថល
            និងនវានុវត្តន៍បច្ចេកវិទ្យាដើម្បីរួមចំណែក <br />
            ក្នុងការអភិវឌ្ឍនូវសមត្ថភាព និងការយល់ដឹងរបស់យុវជនកម្ពុជាជំនាន់ថ្មី
            ក៏ដូចជា ផ្សព្វផ្សាយឲ្យអន្តរជាតិយល់ដឹង
            និងស្គាល់កាន់តែច្បាស់អំពីកម្ពុជា។ —
          </p>
          <Link href="/posts">
            <a className="mt-5 py-2 px-5 bg-rose-900 text-white text-base z-50">
              អត្ថបទរបស់ AVI Voice on AMS
            </a>
          </Link>
        </Container>
      </section>

      {/* Block Black Crews */}
      <Container>
        <div className="my-5">
          <CommonSectionHeader
            type="primary"
            title="សច្ចធម៌ប្រវត្តិសាស្ត្រ"
            link="/posts"
            className="text-xl font-bold"
          />
        </div>

        <section className="grid md:grid-cols-4 gap-5">
          {[...Array(8)].map((post, index) => (
            <PostItem
              key={`black-crews-${index}`}
              post={heroPost}
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
          src="/images/AMS-2050-cover.jpeg"
          layout="fill"
          objectFit="cover"
          className="cover -z-10"
        />
        <Container>
          <div>
            <span className="bg-rose-900 text-white py-2 px-5 text-base sm:text-3xl inline-block">
              Cambodia 2050
            </span>
          </div>
          <p className="text-white sm:my-5 sm:w-2/5 hidden sm:block">
            ផ្តល់ចំនេះដឹងដល់អ្នកពាក់ព័ន្ធដើម្បីសហការចូលរួមអភិវឌ្ឍន៍ប្រទេសកម្ពុជា
            ក្នុងគោលដៅប្រែក្លាយទៅជាប្រទេសចំណូលមធ្យមកំរិតខ្ពស់
            តាមរយៈកិច្ចពិភាក្សាសុីជំរៅ បង្កើនសមត្ថភាព ជំនាញ
            និងចំណេះដឹងលើគ្រប់វិស័យតាមរយៈការប្រើប្រាស់ប្រព័ន្ធបច្ចេកវិទ្យា
            និងតភ្ជាប់ទំនាក់ទំនងនៅឆាកអន្តរជាតិ។
          </p>
          <Link href="/posts">
            <a className="bg-rose-900 text-white py-2 px-5 text-base z-50">
              អត្ថបទរបស់ Cambodia 2050
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
                title="កីឡា"
                className="text-xl font-bold"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <PostItem
                post={heroPost}
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
                {[...Array(3)].map((post, index) => (
                  <PostItem
                    key={`sport-post-${index}`}
                    post={heroPost}
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
                title="ការបោះឆ្នោត"
                className="text-xl font-bold"
              />
            </div>
            <section className="grid md:grid-cols-3 gap-5">
              {[...Array(6)].map((post, index) => (
                <PostItem
                  key={`election-post-${index}`}
                  post={heroPost}
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
                src="/images/pocarisweat-ads-sport.jpeg"
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
                title="សេដ្ឋកិច្ច"
                className="text-xl font-bold"
              />
            </div>
            <div className="space-y-4">
              {[...Array(20)].map((post, index) => (
                <PostItem
                  key={`economy-post-${index}`}
                  post={heroPost}
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
                      index > 18 ? 'sm:border-none' : ''
                    } ${index > 18 ? 'border-none' : ''}`,
                  }}
                />
              ))}
            </div>
          </section>
        </div>
      </Container>
      <section className="bg-slate-100 py-5">
        {/* Block Videos */}
        <Container>
          <div className="my-5">
            <CommonSectionHeader
              type="primary"
              title="ទស្សនាវីដេអូថ្មីៗ"
              link="/posts"
              className="text-xl font-bold"
              lineColor="before:bg-gray-300"
            />
          </div>

          <section className="grid md:grid-cols-4 gap-5">
            {[...Array(8)].map((post, index) => (
              <PostItem
                key={`black-crews-${index}`}
                post={heroPost}
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

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
}
