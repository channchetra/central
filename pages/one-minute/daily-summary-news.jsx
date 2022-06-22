import PageTitle from '~/components/page/page-title';
import Container from '~/components/container';

export default function OneMinuteDailySummaryNews() {
  return (
    <Container>
      <PageTitle title="ព័ត៌មានសង្ខេបប្រចាំថ្ងៃ" className="my-5" />
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
