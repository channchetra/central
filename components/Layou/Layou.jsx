import Footer from '~/components/layout/footer';
import Header from '~/components/layout/header';
import Meta from '~/components/layout/meta';

export default function Layou({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
