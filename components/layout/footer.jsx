import Image from 'next/image';
import Link from 'next/link';
import Menu from '~/data/menu';
import Container from './container';
import CommonSectionHeader from '../common/section-header';

const amsLogoWide = '/central/images/APSARA_MEDIA_SERVICES_LOGO-01.png';

export default function Footer() {
  return (
    <section className="bg-ams-light dark:bg-zinc-700">
      <Container>
        <section className="pt-2 md:py-6 border-b-2 border-zinc-300 text-center sm:text-left">
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
        <section className="mt-4 md:mt-6 px-3 sm:px-0 grid md:grid-cols-7 xl:grid-cols-3 gap-5 md:gap-3 lg:gap-5">
          <div className="md:col-span-2 xl:col-auto">
            <CommonSectionHeader
              type="secondary"
              title="AMS CENTRAL"
              lineColor="before:bg-zinc-50"
              className="text-lg lg:text-xl font-bold mb-5"
            />
            <ul className="sm:ml-3 grid grid-cols-2 md:grid-cols-none lg:grid-cols-2 gap-3">
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
          <div className="md:col-span-3 xl:col-auto">
            <CommonSectionHeader
              type="secondary"
              title="បណ្ដាញព័ត៌មានផ្សេងទៀតពី AMS GROUP"
              lineColor="before:bg-zinc-50"
              className="text-lg lg:text-xl  font-bold mb-5"
            />
            <ul className="sm:ml-3 grid grid-cols-2 md:grid-cols-none lg:grid-cols-2 gap-3">
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
          <div className="md:col-span-2 xl:col-auto lg:pl-3 lg:border-l lg:border-zinc-400 dark:border-neutral-50">
            <CommonSectionHeader
              type="secondary"
              title="ស្វែងយល់បន្ថែម"
              lineColor="before:bg-zinc-50"
              className="text-lg lg:text-xl font-bold mb-5"
            />
            <ul className="sm:ml-3 grid grid-cols-2 md:grid-cols-none gap-y-3 md:gap-3">
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

        <section className="copy-right mt-5 md:mt-8 py-2 lg:px-0 flex items-center justify-between flex-col md:flex-row">
          <div className="text-[10px] md:text-xs text-center md:text-left">
            ឆ្នាំ{new Date().getFullYear()} © រក្សាសិទ្ធគ្រប់យ៉ាងដោយ
            អប្សរាមេឌាសឺវីស / Apsara Media Services (AMS)
          </div>
          <div className="md:text-right">
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
