import PageTitle from '~/components/page/page-title';
import Container from '~/components/container';

export default function OneMinuteBreakingNews() {
  return (
    <Container>
      <PageTitle title="ព័ត៌មានទាន់ហេតុការណ៍" className="my-5" />
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
