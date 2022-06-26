import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import MainMenuItem from './main-menu-item';
import SubMenuItem from './menu-item-mobile';

export default function MainMenu({ mainMenus }) {
  return (
    <div className="relative -mx-5 md:-mx-0 flex items-center justify-between bg-gradient-to-r from-ams-red to-ams-blue md:from-inherit">
      <Popover>
        <div className="md:hidden">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-9 w-9 text-white" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex gap-5">
          {mainMenus.map((menu, mainMenuIndex) =>
            menu.subMenus ? (
              <MainMenuItem
                menu={menu}
                index={mainMenuIndex}
                key={`main-menu-${mainMenuIndex}`}
              />
            ) : (
              <a
                key={`main-menu-${mainMenuIndex}`}
                href={menu.href}
                className="group py-4 text-xs lg:text-base font-bold inline-flex items-center focus:outline-0 border-b-2 border-transparent hover:border-b-2 hover:border-sky-400 dark:hover:border-zinc-400"
              >
                {menu.name}
              </a>
            )
          )}
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
          <Popover
            focus
            className="absolute top-0 inset-x-0 z-10 transition transform origin-top-right md:hidden"
          >
            <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-3 pb-6 px-5">
                <div className="flex items-center justify-start">
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <Popover.Group as="nav" className="grid grid-cols-1 gap-7">
                    {mainMenus.map((menu, subMenuIndex) => (
                      <SubMenuItem
                        menu={menu}
                        index={subMenuIndex}
                        key={`main-menu-${subMenuIndex}`}
                      />
                    ))}
                  </Popover.Group>
                </div>
              </div>
            </div>
          </Popover>
        </Transition>
      </Popover>
      <div className="mobile-logo">
        <div className="w-14 h-14 sm:hidden relative">
          <Image
            layout="fill"
            alt=""
            src="https://asset.ams.com.kh/central/media/AMS-Central-Page-Profile%404x.png"
            objectFit="contain"
          />
        </div>
      </div>

      <Popover className="sm:hidden">
        <div className="flex justify-between items-center sm:px-6 md:justify-start">
          <div className="md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <SearchIcon className="h-7 w-7 text-white" aria-hidden="true" />
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
            <div className="shadow-lg ring-1 h-full ring-black ring-opacity-5 bg-white flex flex-col">
              <div className="pt-5 px-5 flex-1 mb-auto">
                <div className="flex items-center justify-between">
                  <div />
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
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
                        border-transparent
                        focus:border-gray-500 focus:bg-white focus:ring-0
                      "
                    placeholder="ស្វែងរក"
                  />
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
