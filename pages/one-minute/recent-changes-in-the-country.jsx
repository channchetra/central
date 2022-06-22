import PageTitle from '~/components/page/page-title';
import Container from '~/components/container';

export default function OneMinuteRecentChangesInTheCountry() {
  return (
    <Container>
      <PageTitle title="ការផ្លាស់ប្តរមុខមាត់ថ្មីក្នុងប្រទេស" className="my-5" />
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
