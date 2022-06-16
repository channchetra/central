// import Alert from '../components/alert'
import Footer from "../footer";
import Meta from "../meta";

// eslint-disable-next-line no-unused-vars
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
