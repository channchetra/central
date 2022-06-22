import PageTitle from '~/components/page/page-title';
import Container from '~/components/container';
import PageBanner from '~/components/page/page-banner';

export default function ConnectOverseaCambodia2050() {
  return (
    <>
      <PageBanner image="https://asset.ams.com.kh/central/media/AMS-2050-Cover-3-1.jpg" />
      <Container>
        <PageTitle
          title="Cambodia 2050"
          subtitle="ផ្តល់ចំនេះដឹងដល់អ្នកពាក់ព័ន្ធដើម្បីសហការចូលរួមអភិវឌ្ឍន៍ប្រទេសកម្ពុជា ក្នុងគោលដៅប្រែក្លាយទៅជាប្រទេសចំណូលមធ្យមកំរិតខ្ពស់ តាមរយៈកិច្ចពិភាក្សាសុីជំរៅ បង្កើនសមត្ថភាព ជំនាញ និងចំណេះដឹងលើគ្រប់វិស័យតាមរយៈការប្រើប្រាស់ប្រព័ន្ធបច្ចេកវិទ្យា និងតភ្ជាប់ទំនាក់ទំនងនៅឆាកអន្តរជាតិ។"
          image="https://asset.ams.com.kh/central/media/Cambodia-2050-1.png"
          className="my-5"
          styles={{
            image: {
              wrapper: 'relative aspect-[1] lg:-mt-20',
            },
          }}
        />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
