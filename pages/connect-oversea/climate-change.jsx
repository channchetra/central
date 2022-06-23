import PageTitle from '~/components/page/page-title';
import Container from '~/components/container';

export default function ConnectOverseaClimateChange() {
  return (
    <Container>
      <PageTitle title="Climate Change" className="my-5" />
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
