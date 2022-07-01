import Link from 'next/link';
import Container from '../components/layout/container';

export default function FourOhFour() {
  return (
    <Container>
      <div className="h-[45vh] flex items-center justify-center flex-col">
        <h1 className="text-4xl sm:text-[10rem] py-5 sm:leading-[1] bg-gradient-to-r from-ams-red bg-ams-blue bg-clip-text text-transparent">
          404
        </h1>
        <h1 className="text-xl sm:text-4xl mb-5 dark:text-neutral-50">
          Page Not Found
        </h1>
        <Link href="/">
          <a className="sm:text-xl underline underline-offset-2 dark:text-neutral-50">
            ត្រឡប់ទៅទំព័រដើម
          </a>
        </Link>
      </div>
    </Container>
  );
}
