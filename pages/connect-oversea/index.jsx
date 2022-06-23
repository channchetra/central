import PageTitle from '~/components/page/page-title';
import Container from '~/components/container';

export default function ConnectOversea() {
  return (
    <Container>
      <PageTitle
        title="កិច្ចការបរទេសផ្សាភ្ជាប់កម្ពុជាទៅកាន់អន្តរជាតិ"
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
