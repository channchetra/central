import { getAllMenus } from '~/lib/menu';
import TemplateArchive from '~/templates/archive';
import { getAllPosts } from '../lib/posts';

export default function Posts({posts, menus}) {
  console.warn(menus);
  const attr = {
    pageTitle: {
      description: 'កម្មវិធី AVI VOICE on AMS ជាកម្មវិធីថ្មីមួយ ដែលត្រូវបានបង្កើតឡើងក្រោមកិច្ចសហការរវាង AMS និង AVI (វិទ្យាស្ថានចក្ខុវិស័យអាស៊ី) ក្នុងគោលបំណងចែករំលែកនូវចំណេះដឹង និងការវិភាគដល់ប្រិយមិត្តអ្នកស្តាប់ ជាពិសេសយុវជន លើប្រធានបទសំខាន់ៗ ដូចជាភូមិសាស្រ្តនយោបាយនិងសេដ្ឋកិច្ចសកលនិងក្នុងតំបន់ ការអភិវឌ្ឍដោយចីរភាព សេដ្ឋកិច្ចឌីជីថល និងនវានុវត្តន៍បច្ចេកវិទ្យា ដើម្បីរួមចំណែកក្នុងការអភិវឌ្ឍនូវសមត្ថភាព និងការយល់ដឹងរបស់យុវជនកម្ពុជាជំនាន់ថ្មី'
    }
  }
  return <TemplateArchive posts={posts} attributes={attr} />;
}

export async function getStaticProps() {
  const {menus = {}} = getAllMenus()
  const options = {
    queryIncludes: 'archive'
  } 
  const {posts} = await getAllPosts( options );
  return {
    props: { 
      posts, menus
    },
    revalidate: 10,
  };
}
