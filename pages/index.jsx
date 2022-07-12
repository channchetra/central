import { compact, find, keys, map } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import {
  HomeCambotory,
  HomeConnectToOversea,
  // HomeDailyNews,
  HomeEconomy,
  HomeElection,
  HomeLatestNews,
  HomePolitico360,
  HomeSport,
  HomeVideo,
} from '~/components/page/home';
import home from '~/data/home';
import { getCategoriesWithPostsBySlugs } from '~/lib/categories';
import Container from '../components/layout/container';

export default function Index({ posts = {} }) {
  const news = posts.news.posts;
  // const daily = posts.daily.posts;
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
        <HomeLatestNews
          title={home.news.title}
          link={home.news.link}
          posts={news}
        />
        <div className="md:grid md:grid-cols-3 gap-5">
          <section className="flex flex-col">
            {/* <HomeDailyNews
              title={home.daily.title}
              link={home.daily.link}
              posts={daily}
            /> */}
            <HomeEconomy
              title={home.economy.title}
              link={home.economy.link}
              posts={economy}
            />
            <div className="relative md:flex-1 aspect-[2/3]">
              <Image src={home.economy.banner} layout="fill" objectFit="cover" />
            </div>
          </section>
          <section className="col-span-2">
            <HomePolitico360
              title={home.politico360.title}
              link={home.politico360.link}
              posts={politico360}
            />
          </section>
        </div>
        <HomeConnectToOversea
          title={home.connectToOversea.title}
          link={home.connectToOversea.link}
          posts={connectToOversea}
        />
      </Container>

      <section className="block-avi relative my-7 py-12 sm:py-7 md:py-14 lg:py-20 lg:pb-20">
        <Image
          src={home.aviVoice.banner}
          layout="fill"
          objectFit="cover"
          className="cover -z-10"
        />
        <Container>
          <div className="mb-5 hidden sm:block">
            <span className="bg-rose-900 text-white py-2 px-5 text-base sm:text-3xl inline-block">
              {home.aviVoice.title}
            </span>
          </div>
          <p className="text-white sm:w-2/3 lg:w-1/2 xl:w-2/5 hidden sm:block mb-3 text-sm md:text-base">
            {home.aviVoice.description}
          </p>
          <Link href={home.aviVoice.button.link}>
            <a className="py-2 px-5 bg-rose-900 text-white text-sm md:text-base inline-block">
              {home.aviVoice.button.title}
            </a>
          </Link>
        </Container>
      </section>

      <Container>
        <HomeCambotory
          title={home.cambotory.title}
          link={home.cambotory.link}
          posts={cambotory}
        />
      </Container>

      {/* Block banner Cambodia 2050 */}
      <section className="block-cambodia relative my-7 py-12 sm:py-7 md:py-14 lg:py-20 lg:pb-20">
        <Image
          src={home.cambodia2050.banner}
          layout="fill"
          objectFit="cover"
          className="cover -z-10"
        />
        <Container>
          <div className="mb-5 hidden sm:block">
            <span className="bg-rose-900 text-white py-2 px-5 text-base sm:text-3xl inline-block">
              {home.cambodia2050.title}
            </span>
          </div>
          <p className="text-white sm:w-2/3 lg:w-1/2 xl:w-2/5 hidden sm:block mb-3 text-sm md:text-base">
            {home.cambodia2050.description}
          </p>
          <Link href={home.cambodia2050.button.link}>
            <a className="py-2 px-5 bg-rose-900 text-white text-sm md:text-base inline-block">
              {home.cambodia2050.button.title}
            </a>
          </Link>
        </Container>
      </section>

      {/* Block Sports & Economy */}
      <Container>
        <div className="md:grid md:grid-cols-3 gap-5 pb-5">
          <section className="col-span-2">
            <HomeSport
              title={home.sports.title}
              link={home.sports.link}
              posts={sports}
            />

            <HomeElection
              title={home.election.title}
              link={home.election.link}
              posts={election}
              className="my-5"
            />
          </section>

          <section>
            <div className="mt-4 sm:mt-8 aspect-[3/4] sticky top-14">
              <Image
                src={home.election.banner}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* <HomeEconomy
              title={home.economy.title}
              link={home.economy.link}
              posts={economy}
            /> */}
          </section>
        </div>
      </Container>
      <section className="bg-slate-100 dark:bg-zinc-600 py-5">
        <Container>
          <HomeVideo
            title={home.video.title}
            link={home.video.link}
            posts={video}
          />
        </Container>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const { categories } =
    await getCategoriesWithPostsBySlugs(
      compact(map(home, (category) => category.categoryName))
    );

  const posts = {};
  keys(home).forEach((categoryKey) => {
    const { categoryName, first } = home[categoryKey];
    let category = find(categories, ['slug', categoryName]);
    if (category) {
      category = {
        ...category,
        posts: category.posts.slice(0, first),
      };
      Object.assign(posts, {
        [categoryKey]: category,
      });
    }
  });

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
