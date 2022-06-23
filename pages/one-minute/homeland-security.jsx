import PageTitle from '~/components/page/page-title';
import Container from '~/components/container';

export default function OneMinuteHomelandSecurity() {
  return (
    <Container>
      <PageTitle title="សន្តិសុខមាតុភូមិខ្ញុំ" className="my-5" />
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
