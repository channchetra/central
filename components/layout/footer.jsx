import Image from 'next/image';
import Link from 'next/link';
import Menu from '~/constants/menu';
import Container from './container';

const amsLogoWide = '/images/APSARA_MEDIA_SERVICES_LOGO-01.png';

export default function Footer() {
  return (
    <section className="bg-ams-light">
      <Container>
        <section className="py-6 border-b-2 border-gray-300">
          <Link href="/" className="inline-block">
            <a aria-label="">
              <div className="w-44 h-20 relative">
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="AMS Logo"
                  src={amsLogoWide}
                />
              </div>
            </a>
          </Link>
        </section>
        <section className="mt-6 hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <h4 className="block-title relative mb-5 pb-1 font-btb text-lg border-b-2 border-zinc-50 before:absolute before:top-full before:w-14 before:h-[2px] before:bg-ams-purple">
              AMS CENTRAL
            </h4>
            <ul className="sm:ml-3 grid sm:grid-cols-2 gap-3">
              {Menu.footerCentral.map((item, index) => (
                <li key={`footer-ams-${index}`}>
                  <Link href={item.href} className="hover:text-ams-purple">
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="block-title relative mb-5 pb-1 font-btb text-lg border-b-2 border-zinc-50 before:absolute before:top-full before:w-14 before:h-[2px] before:bg-ams-purple">
              បណ្ដាញព័ត៌មានផ្សេងទៀតពី AMS GROUP
            </h4>
            <ul className="sm:ml-3 grid sm:grid-cols-2 gap-3">
              {Menu.amsGroup.map((item, index) => (
                <li key={`ams-group-${index}`}>
                  <a href={item.href} className="hover:text-ams-purple">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pl-3 lg:border-l lg:border-slate-500">
            <h4 className="block-title relative mb-5 pb-1 font-btb text-lg border-b-2 border-zinc-50 before:absolute before:top-full before:w-14 before:h-[2px] before:bg-ams-purple">
              ស្វែងយល់បន្ថែម
            </h4>
            <ul className="sm:ml-3 grid gap-3">
              {Menu.footerLearnMore.map((item, index) => (
                <li key={`footer-${index}`}>
                  <Link href={item.href} className="hover:text-ams-purple">
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="copy-right py-2 grid sm:grid-cols-2">
          <div className="text-xs text-gray-400">
            ឆ្នាំ{new Date().getFullYear()} © រក្សាសិទ្ធគ្រប់យ៉ាងដោយ
            អប្សរាមេឌាសឺវីស / Apsara Media Services (AMS)
          </div>
          <div className="text-right">
            <a href="#" className="text-xs">
              គោលការណ៍ភាពឯងជន លក្ខ័ណក្នុងការប្រើប្រាស់ COOKIE (ខូខី)
            </a>
          </div>
        </section>
      </Container>
    </section>
  );
}
