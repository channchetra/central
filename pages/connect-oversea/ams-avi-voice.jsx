import Head from 'next/head';
import Layout from '~/components/layout/layout';
import CommonSectionHeader from '~/components/common/section-header';
import PageTitle from '~/components/page/page-title';
import { CMS_NAME } from '~/lib/constants';
import Header from '~/components/header';
import Container from '~/components/container';
import PageBanner from '~/components/page/page-banner';

export default function AVIVoice({ preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>AMS Central {CMS_NAME}</title>
      </Head>
      <Header />
      <PageBanner image='https://asset.ams.com.kh/central/media/AMS-Cover-AVI-Voice.jpg' />
      <Container>
        <PageTitle 
          title="AVI VOICE" 
          subtitle="កម្មវិធី AVI VOICE on AMS ជាកម្មវិធីថ្មីមួយ ដែលត្រូវបានបង្កើតឡើងក្រោមកិច្ចសហការរវាង AMS និង AVI (វិទ្យាស្ថានចក្ខុវិស័យអាស៊ី) ក្នុងគោលបំណងចែករំលែកនូវចំណេះដឹង និងការវិភាគដល់ប្រិយមិត្តអ្នកស្តាប់ ជាពិសេសយុវជន លើប្រធានបទសំខាន់ៗ ដូចជាភូមិសាស្រ្តនយោបាយនិងសេដ្ឋកិច្ចសកលនិងក្នុងតំបន់ ការអភិវឌ្ឍដោយចីរភាព សេដ្ឋកិច្ចឌីជីថល និងនវានុវត្តន៍បច្ចេកវិទ្យា ដើម្បីរួមចំណែកក្នុងការអភិវឌ្ឍនូវសមត្ថភាព និងការយល់ដឹងរបស់យុវជនកម្ពុជាជំនាន់ថ្មី" 
          image="https://asset.ams.com.kh/central/media/AVI-Voice-on-AMS.jpg"
          className='my-5'
        />
        <div className="my-5">
          <CommonSectionHeader
            type="secondary"
            title="វិដេអូដែលអ្នកអាចចាប់អារម្មណ៍"
          />
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
