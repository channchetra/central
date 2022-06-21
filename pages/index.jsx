import Head from 'next/head';
import Layout from '~/components/layout/layout';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';
import PageTitle from '~/components/page/page-title';
import Container from '../components/container';
import Header from '../components/header';
import { getAllPostsForHome } from '../lib/api';
import { CMS_NAME } from '../lib/constants';

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;

  return (
    <Layout preview={preview}>
      <Head>
        <title>AMS Central {CMS_NAME}</title>
      </Head>
      <Header />
      <Container>
        <div className="my-10">
          <PageTitle title="AVI VOICE" />
        </div>
        <div className="my-5">
          <CommonSectionHeader
            type="primary"
            title="ព័ត៌មានថ្មីបំផុត"
            className="text-xl font-bold"
          />
        </div>
        <section className="grid md:grid-cols-2 gap-5 mb-7 md:mb-7">
          <PostItem
            post={heroPost}
            config={{
              showExcerpt: false,
            }}
            styles={{}}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <PostItem
              post={heroPost}
              config={{ showExcerpt: false }}
              styles={{
                title: {
                  wrapper: 'mb-3',
                  title: 'text-lg lg:text-xl lg:leading-relaxed',
                },
              }}
            />
            <PostItem
              post={heroPost}
              config={{ showExcerpt: false }}
              styles={{
                title: {
                  wrapper: 'mb-3',
                  title: 'text-lg lg:text-xl lg:leading-relaxed',
                },
              }}
            />
            <PostItem
              post={heroPost}
              config={{ showExcerpt: false }}
              styles={{
                title: {
                  wrapper: 'mb-3',
                  title: 'text-lg lg:text-xl lg:leading-relaxed',
                },
              }}
            />
            <PostItem
              post={heroPost}
              config={{ showExcerpt: false }}
              styles={{
                title: {
                  wrapper: 'mb-3',
                  title: 'text-lg lg:text-xl lg:leading-relaxed',
                },
              }}
            />
          </div>
        </section>

        {/* Block Politico */}
        <div className="grid md:grid-cols-3 gap-5">
          <section>
            <div className="my-5">
              <CommonSectionHeader
                type="primary"
                title="ព័ត៌មានប្រចាំថ្ងៃ"
                className="text-xl font-bold"
              />
            </div>
            <div className="space-y-6">
              <PostItem
                post={heroPost}
                config={{
                  listView: true,
                  showExcerpt: false,
                  imageHeight: 562,
                  imageWidth: 1000,
                }}
                styles={{
                  title: {
                    wrapper: 'mb-3',
                    title: 'text-base lg:leading-relaxed',
                  },
                  image: {
                    image: 'aspect-video',
                  },
                }}
              />
              <PostItem
                post={heroPost}
                config={{
                  listView: true,
                  showExcerpt: false,
                  imageHeight: 562,
                  imageWidth: 1000,
                }}
                styles={{
                  title: {
                    wrapper: 'mb-3',
                    title: 'text-base lg:leading-relaxed',
                  },
                  image: {
                    image: 'aspect-video',
                  },
                }}
              />
              <PostItem
                post={heroPost}
                config={{
                  listView: true,
                  showExcerpt: false,
                  imageHeight: 562,
                  imageWidth: 1000,
                }}
                styles={{
                  title: {
                    wrapper: 'mb-3',
                    title: 'text-base lg:leading-relaxed',
                  },
                  image: {
                    image: 'aspect-video',
                  },
                }}
              />
              <PostItem
                post={heroPost}
                config={{
                  listView: true,
                  showExcerpt: false,
                  imageHeight: 562,
                  imageWidth: 1000,
                }}
                styles={{
                  title: {
                    wrapper: 'mb-3',
                    title: 'text-base lg:leading-relaxed',
                  },
                  image: {
                    image: 'aspect-video',
                  },
                }}
              />
              <PostItem
                post={heroPost}
                config={{
                  listView: true,
                  showExcerpt: false,
                  imageHeight: 562,
                  imageWidth: 1000,
                }}
                styles={{
                  title: {
                    wrapper: 'mb-3',
                    title: 'text-base lg:leading-relaxed',
                  },
                  image: {
                    image: 'aspect-video',
                  },
                }}
              />
              <PostItem
                post={heroPost}
                config={{
                  listView: true,
                  showExcerpt: false,
                  imageHeight: 562,
                  imageWidth: 1000,
                }}
                styles={{
                  title: {
                    wrapper: 'mb-3',
                    title: 'text-base lg:leading-relaxed',
                  },
                  image: {
                    image: 'aspect-video',
                  },
                }}
              />
              <PostItem
                post={heroPost}
                config={{
                  listView: true,
                  showExcerpt: false,
                  imageHeight: 562,
                  imageWidth: 1000,
                }}
                styles={{
                  title: {
                    wrapper: 'mb-3',
                    title: 'text-base lg:leading-relaxed',
                  },
                  image: {
                    image: 'aspect-video',
                  },
                }}
              />
            </div>
          </section>
          <section className="col-span-2">
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
                imageHeight: 400,
                imageWidth: 1000,
              }}
              styles={{
                title: {
                  wrapper: 'mb-3',
                  title: 'text-lg lg:text-xl lg:leading-relaxed',
                },
              }}
            />
            <div className="space-y-8">
              <PostItem
                post={heroPost}
                config={{
                  listView: true,
                  showExcerpt: true,
                  imageHeight: 562,
                  imageWidth: 1000,
                  showLineSeparator: true,
                }}
                styles={{
                  title: {
                    title: 'text-lg lg:text-xl lg:leading-relaxed',
                  },
                  image: {},
                  lineSeparator: '',
                }}
              />
              <PostItem
                post={heroPost}
                config={{
                  listView: true,
                  showExcerpt: false,
                  imageHeight: 562,
                  imageWidth: 1000,
                }}
                styles={{
                  title: {
                    wrapper: 'mb-3',
                    title: 'text-lg lg:text-xl lg:leading-relaxed',
                  },
                  image: {
                    image: 'aspect-video',
                  },
                }}
              />
            </div>
          </section>
        </div>

        <div className="my-5">
          <CommonSectionHeader
            type="primary"
            title="កិច្ចការបរទេសផ្សាភ្ជាប់កម្ពុជាទៅកាន់អន្តរជាតិ"
            className="text-xl font-bold"
          />
        </div>

        <section className="grid md:grid-cols-4 gap-5">
          <PostItem
            post={heroPost}
            config={{
              showExcerpt: false,
              imageHeight: 400,
              imageWidth: 1000,
            }}
            styles={{
              title: {
                wrapper: 'mb-3',
                title: 'text-lg lg:text-xl lg:leading-relaxed',
              },
            }}
          />
          <PostItem
            post={heroPost}
            config={{
              showExcerpt: false,
              imageHeight: 400,
              imageWidth: 1000,
            }}
            styles={{
              title: {
                wrapper: 'mb-3',
                title: 'text-lg lg:text-xl lg:leading-relaxed',
              },
            }}
          />
          <PostItem
            post={heroPost}
            config={{
              showExcerpt: false,
              imageHeight: 400,
              imageWidth: 1000,
            }}
            styles={{
              title: {
                wrapper: 'mb-3',
                title: 'text-lg lg:text-xl lg:leading-relaxed',
              },
            }}
          />
          <PostItem
            post={heroPost}
            config={{
              showExcerpt: false,
              imageHeight: 400,
              imageWidth: 1000,
            }}
            styles={{
              title: {
                wrapper: 'mb-3',
                title: 'text-lg lg:text-xl lg:leading-relaxed',
              },
            }}
          />
          <PostItem
            post={heroPost}
            config={{
              showExcerpt: false,
              imageHeight: 400,
              imageWidth: 1000,
            }}
            styles={{
              title: {
                wrapper: 'mb-3',
                title: 'text-lg lg:text-xl lg:leading-relaxed',
              },
            }}
          />
          <PostItem
            post={heroPost}
            config={{
              showExcerpt: false,
              imageHeight: 400,
              imageWidth: 1000,
            }}
            styles={{
              title: {
                wrapper: 'mb-3',
                title: 'text-lg lg:text-xl lg:leading-relaxed',
              },
            }}
          />
          <PostItem
            post={heroPost}
            config={{
              showExcerpt: false,
              imageHeight: 400,
              imageWidth: 1000,
            }}
            styles={{
              title: {
                wrapper: 'mb-3',
                title: 'text-lg lg:text-xl lg:leading-relaxed',
              },
            }}
          />
          <PostItem
            post={heroPost}
            config={{
              showExcerpt: false,
              imageHeight: 400,
              imageWidth: 1000,
            }}
            styles={{
              title: {
                wrapper: 'mb-3',
                title: 'text-lg lg:text-xl lg:leading-relaxed',
              },
            }}
          />
        </section>

        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.databaseId}
            excerpt={heroPost.excerpt}
          />
        )} */}
        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
}
