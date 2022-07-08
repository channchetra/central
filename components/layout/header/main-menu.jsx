import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import ThemeSwitcher from '~/components/common/theme-switcher';
import MainMenuItem from './main-menu-item';
import MainMenuItemMobile from './main-menu-item-mobile';

const amsLogoWide = '/images/APSARA_MEDIA_SERVICES_LOGO-01.png';

export default function MainMenu({ mainMenus }) {
  return (
    <div className="relative sm:-mx-5 md:-mx-0 flex items-center justify-between bg-gradient-to-r from-ams-red to-ams-blue md:from-transparent dark:from-gray-800 dark:to-gray-800 dark:sm:from-transparent">
      <Popover>
        <div className="md:hidden">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-neutral-50 focus:outline-none">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-9 w-9 text-neutral-50" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex gap-3 lg:gap-5">
          {mainMenus.map((menu, mainMenuIndex) => (
            <MainMenuItem
              menu={menu}
              index={mainMenuIndex}
              key={`main-menu-${mainMenuIndex}`}
            />
          ))}
        </Popover.Group>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 transition transform origin-top-right h-screen md:hidden"
          >
            {({ close }) => (
              <div className="shadow-lg bg-white dark:bg-gray-800 h-full">
                <div className="pt-3 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div className="-mr-2">
                      <Popover.Button className="bg-white dark:bg-gray-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                    <ThemeSwitcher />
                  </div>
                  <div className="mt-4">
                    <Popover.Group as="nav" className="grid grid-cols-1 gap-3">
                      {mainMenus.map((menu, subMenuIndex) => (
                        <MainMenuItemMobile
                          menu={menu}
                          index={subMenuIndex}
                          key={`mobile-main-menu-${subMenuIndex}`}
                          close={close}
                        />
                      ))}
                    </Popover.Group>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className="mobile-logo">
        <div className="w-36 h-20 md:hidden relative">
          <Link href="/">
            <a aria-label="AMS Central">
              <Image
                layout="fill"
                alt=""
                src={amsLogoWide}
                objectFit="contain"
                className="brightness-0 invert-[1]"
              />
            </a>
          </Link>
        </div>
      </div>

      <Link href="/search">
        <a className="pr-4 inline-block md:hidden">
          <SearchIcon className="h-7 w-7 text-neutral-50" aria-hidden="true" />
        </a>
      </Link>
    </div>
  );
}
