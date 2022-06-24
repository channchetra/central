import PageTitle from '~/components/page/page-title';
import Container from '~/components/container';
import PageBanner from '~/components/page/page-banner';
import PostItem from '~/components/post/post-item';
import { getAllPostsForHome } from '~/lib/api';
import { map } from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import CommonLoader from '~/components/common/loader';
import useStaticInfiniteScroll from '~/hooks/use-static-infinite-scroll';

export default function ConnectOverseaAVIVoice({ posts }) {
  const { items, hasMore, loadMore } = useStaticInfiniteScroll(posts);

  return (
    <>
      <PageBanner image="https://asset.ams.com.kh/central/media/AMS-Cover-AVI-Voice.jpg" />
      <Container>
        <PageTitle
          title="AVI VOICE"
          subtitle="កម្មវិធី AVI VOICE on AMS ជាកម្មវិធីថ្មីមួយ ដែលត្រូវបានបង្កើតឡើងក្រោមកិច្ចសហការរវាង AMS និង AVI (វិទ្យាស្ថានចក្ខុវិស័យអាស៊ី) ក្នុងគោលបំណងចែករំលែកនូវចំណេះដឹង និងការវិភាគដល់ប្រិយមិត្តអ្នកស្តាប់ ជាពិសេសយុវជន លើប្រធានបទសំខាន់ៗ ដូចជាភូមិសាស្រ្តនយោបាយនិងសេដ្ឋកិច្ចសកលនិងក្នុងតំបន់ ការអភិវឌ្ឍដោយចីរភាព សេដ្ឋកិច្ចឌីជីថល និងនវានុវត្តន៍បច្ចេកវិទ្យា ដើម្បីរួមចំណែកក្នុងការអភិវឌ្ឍនូវសមត្ថភាព និងការយល់ដឹងរបស់យុវជនកម្ពុជាជំនាន់ថ្មី"
          image="https://asset.ams.com.kh/central/media/AVI-Voice-on-AMS.jpg"
          className="my-5"
        />
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={
            <div className="loader my-5" key={0}>
              <CommonLoader />
            </div>
          }
        >
          <section className="grid md:grid-cols-4 gap-5 mb-5">
            {items.map((post) => (
              <PostItem
                key={`post-${post.databaseId}`}
                post={post}
                config={{
                  showExcerpt: false,
                  showMeta: false,
                }}
                styles={{
                  
                }}
              />
            ))}
          </section>
        </InfiniteScroll>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsForHome();

  return {
    props: { posts: map(posts.edges, 'node') },
    revalidate: 10,
  };
}
