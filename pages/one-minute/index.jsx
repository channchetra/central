import PageTitle from '~/components/page/page-title';
import Container from '~/components/container';

export default function OneMinute() {
  return (
    <Container>
      <PageTitle
        title="One-Minute"
        subtitle="ចំណេះដឹង និងព័ត៌មានពិត ខ្លី ខ្លឹម ត្រឹម ១នាទី។"
        className="my-5"
      />
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
