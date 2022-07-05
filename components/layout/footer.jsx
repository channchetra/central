import Image from 'next/image';
import Link from 'next/link';
import Menu from '~/data/menu';
import Container from './container';
import CommonSectionHeader from '../common/section-header';

const amsLogoWide = '/images/APSARA_MEDIA_SERVICES_LOGO-01.png';

export default function Footer() {
  return (
    <section className="bg-ams-light dark:bg-zinc-700">
      <Container>
        <section className="py-6 border-b-2 border-gray-300 text-center sm:text-left">
          <Link href="/" className="inline-block">
            <a aria-label="" className="inline-block">
              <div className="w-44 h-20 relative">
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="AMS Logo"
                  src={amsLogoWide}
                  className="dark:brightness-0 dark:invert-[1]"
                />
              </div>
            </a>
          </Link>
        </section>
        <section className="mt-6 hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <CommonSectionHeader
              type="secondary"
              title="AMS CENTRAL"
              lineColor="before:bg-zinc-50"
              className="text-xl font-bold mb-5"
            />
            <ul className="sm:ml-3 grid sm:grid-cols-2 gap-3">
              {Menu.footerCentral.map((item, index) => (
                <li key={`footer-ams-${index}`}>
                  <Link
                    href={item.href}
                    className="hover:text-ams-purple dark:text-neutral-50"
                  >
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <CommonSectionHeader
              type="secondary"
              title="បណ្ដាញព័ត៌មានផ្សេងទៀតពី AMS GROUP"
              lineColor="before:bg-zinc-50"
              className="text-xl font-bold mb-5"
            />
            <ul className="sm:ml-3 grid sm:grid-cols-2 gap-3">
              {Menu.amsGroup.map((item, index) => (
                <li key={`ams-group-${index}`}>
                  <a
                    href={item.href}
                    className="hover:text-ams-purple dark:text-neutral-50"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pl-3 lg:border-l lg:border-slate-500 dark:border-neutral-50">
            <CommonSectionHeader
              type="secondary"
              title="ស្វែងយល់បន្ថែម"
              lineColor="before:bg-zinc-50"
              className="text-xl font-bold mb-5"
            />
            <ul className="sm:ml-3 grid gap-3">
              {Menu.footerLearnMore.map((item, index) => (
                <li key={`footer-${index}`}>
                  <Link
                    href={item.href}
                    className="hover:text-ams-purple dark:text-neutral-50"
                  >
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="copy-right px-3 py-2 sm:px-0 grid sm:grid-cols-2">
          <div className="text-xs text-gray-400">
            ឆ្នាំ{new Date().getFullYear()} © រក្សាសិទ្ធគ្រប់យ៉ាងដោយ
            អប្សរាមេឌាសឺវីស / <br className="sm:hidden" /> Apsara Media Services
            (AMS)
          </div>
          <div className="sm:text-right">
            <Link href="#">
              <a className="text-xs">
                គោលការណ៍ភាពឯងជន លក្ខ័ណក្នុងការប្រើប្រាស់ COOKIE (ខូខី)
              </a>
            </Link>
          </div>
        </section>
      </Container>
    </section>
  );
}
