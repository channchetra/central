import PageTitle from '~/components/page/page-title';
import Container from '~/components/container';

export default function ConnectOverseaAsianVisionDialogue() {
  return (
    <Container>
      <PageTitle
        title="ASIAN VISION DIALOGUE (AVD)"
        className="text-center my-5"
        config={{ showLineSeparator: false }}
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
