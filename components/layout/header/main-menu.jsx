import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import MainMenuItem from './main-menu-item';
import MainMenuItemMobile from './main-menu-item-mobile';

const amsLogoWide = '/images/APSARA_MEDIA_SERVICES_LOGO-01.png';

export default function MainMenu({ mainMenus }) {
  return (
    <div className="relative sm:-mx-5 md:-mx-0 flex items-center justify-between bg-gradient-to-r from-ams-red to-ams-blue sm:from-transparent dark:from-gray-800">
      <Popover>
        <div className="md:hidden">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-neutral-50 focus:outline-none">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-9 w-9 text-neutral-50" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex gap-5">
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
            className="absolute top-0 inset-x-0 z-10 transition transform origin-top-right h-screen"
          >
            <div className="shadow-lg bg-white dark:bg-gray-800 h-full">
              <div className="pt-3 pb-6 px-5">
                <div className="flex items-center justify-start">
                  <div className="-mr-2">
                    <Popover.Button className="bg-white dark:bg-gray-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-4">
                  <Popover.Group as="nav" className="grid grid-cols-1 gap-3">
                    {mainMenus.map((menu, subMenuIndex) => (
                      <MainMenuItemMobile
                        menu={menu}
                        index={subMenuIndex}
                        key={`mobile-main-menu-${subMenuIndex}`}
                      />
                    ))}
                  </Popover.Group>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className="mobile-logo">
        <div className="w-36 h-20 sm:hidden relative">
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
        <a className="pr-4 inline-block sm:hidden">
          <SearchIcon className="h-7 w-7 text-neutral-50" aria-hidden="true" />
        </a>
      </Link>

      {/* <Popover className="sm:hidden">
        <div className="flex justify-between items-center sm:px-6 md:justify-start">
          <div className="md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <SearchIcon
                className="h-7 w-7 text-neutral-50"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
        </div>

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
            className="search-form absolute top-0 inset-x-0 z-10 h-screen transition transform origin-top-right md:hidden"
          >
            <div className="shadow-lg ring-1 h-full bg-white dark:bg-gray-800 flex flex-col">
              <div className="pt-5 px-5 flex-1 mb-auto">
                <div className="flex items-center justify-between">
                  <div />
                  <div className="-mr-2">
                    <Popover.Button className="bg-white dark:bg-gray-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-neutral-50 hover:text-gray-500 hover:bg-gray-100">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="pb-6 px-5 flex-1">
                <div className="mt-3 h-full">
                  <input
                    type="text"
                    className="
                        h-14
                        px-5
                        mt-1
                        block
                        w-full
                        rounded-md
                        bg-gray-100
                        dark:bg-gray-500
                        focus:outline-none
                        border-transparent
                      "
                    placeholder="ស្វែងរក"
                  />
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover> */}
    </div>
  );
}
