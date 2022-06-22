import PageTitle from '~/components/page/page-title';
import Container from '~/components/container';

export default function ConnectOverseaBiodiversity() {
  return (
    <Container>
      <PageTitle title="ជីវចំម្រុះ" className="my-5" />
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
