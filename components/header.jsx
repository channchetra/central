import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, SearchIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Menu from '~/constants/menu';
import Container from './container';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Header() {
  return (
    <>
      <Container>
        <div className="hidden sm:flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <a href="/">
              <span className="sr-only">AMS Central</span>
              <img
                className="h-6 w-auto sm:h-8"
                src="https://asset.ams.com.kh/central/media/APSARA_MEDIA_SERVICES_SECONDARY_LOGO.png"
                alt=""
              />
            </a>
            <a
              href="/"
              className="text-3xl leading-none before:content-['|'] before:mr-3"
              style={{ fontFamily: 'Battambang' }}
            >
              CENTRAL
            </a>
            <Popover className="relative bg-white">
              <div className="max-w-screen-xl container mx-auto">
                <div className="flex items-center md:justify-start md:space-x-10 z">
                  <Popover.Group
                    as="nav"
                    className="ml-auto hidden md:flex space-x-10"
                  >
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                            )}
                          >
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'h-5 w-5 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 shadow-md">
                              <div className="rounded-lg overflow-hidden">
                                <div className="relative grid gap-6 bg-white p-5 sm:gap-5 sm:p-3">
                                  {Menu.amsWebsites.map((item, index) => (
                                    <a
                                      key={`ams-website-${index}`}
                                      href={item.href}
                                      className="-m-3 p-3 flex items-start rounded-lg whitespace-nowrap hover:bg-gray-50 text-sm"
                                    >
                                      <div className="ml-4 text-sm font-medium text-gray-900">
                                        {item.name}
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </Popover.Group>
                </div>
              </div>
            </Popover>
          </div>
          <div className="flex gap-2">
            <div className="flagship items-center hidden sm:flex">
              {Menu.flagshipMenus.map((item, flagShipIndex) => (
                <a
                  key={`flag-ship-${flagShipIndex}`}
                  href={item.href}
                  className="p-4 lg:p-5 -skew-x-12 text-xs lg:text-base font-bold text-white hover:opacity-75"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="relative hidden md:flex items-center justify-end">
              <Popover>
                <Popover.Button className="-ml-2 py-3 lg:py-5 px-2 lg:px-4 -skew-x-12 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open search</span>
                  <SearchIcon
                    className="h-6 w-6 skew-x-12"
                    aria-hidden="true"
                  />
                </Popover.Button>

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
                    className="search-form absolute z-40 -ml-4 transform w-72 lg:ml-0 lg:left-1/2 md:-translate-x-[80%] opacity-100 translate-y-0"
                  >
                    <div className="rounded-lg shadow-lg ring-1 h-full ring-black ring-opacity-5 bg-white flex flex-col">
                      <div className="p-3 flex-1">
                        <input
                          type="text"
                          className="h-12 mt-1 px-3 block w-full rounded-md bg-gray-100 border-transparent focus:outline-none"
                          placeholder="ស្វែងរក"
                        />
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-slate-100 sticky top-0 z-10">
        <Container>
          <div className="relative flex items-center justify-between bg-gradient-to-r from-ams-red to-ams-blue md:from-inherit">
            <Popover>
              <div className="md:hidden">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-9 w-9 text-white" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex gap-5">
                {Menu.mainMenus.map((menu, mainMenuIndex) =>
                  menu.subMenus ? (
                    <Popover
                      className="relative"
                      key={`main-menu-${mainMenuIndex}`}
                    >
                      {({ open }) => (
                        <>
                          <Popover.Button className="group py-4 text-xs lg:text-base inline-flex items-center focus:outline-0 border-b-2 border-transparent hover:border-b-2 hover:border-sky-400">
                            <span className="font-bold">{menu.name}</span>
                            <ChevronDownIcon
                              className="ml-1 h-5 w-5 text-black"
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 -ml-4 transform w-56 md:ml-0 md:left-1/2 md:-translate-x-1/2 before:content-[''] before:-mt-2 before:absolute before:z-50 before:w-4 before:h-4 before:bg-white before:ml-auto before:mr-auto before:left-0 before:right-0 before:rotate-45">
                              <div className="relative rounded-lg z-10 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-4 bg-white px-3 py-4 sm:gap-4">
                                  {menu.subMenus.map(
                                    (subMenu, subMenuIndex) => (
                                      <a
                                        key={`menu-${mainMenuIndex}-sub-menu-${subMenuIndex}`}
                                        href={subMenu.href}
                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                      >
                                        <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">
                                            {subMenu.name}
                                          </p>
                                        </div>
                                      </a>
                                    )
                                  )}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ) : (
                    <a
                      key={`main-menu-${mainMenuIndex}`}
                      href="#"
                      className="group py-4 text-xs lg:text-base text-black font-bold inline-flex items-center focus:outline-0 border-b-2 border-transparent hover:border-b-2 hover:border-sky-400"
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
                <Popover.Panel
                  focus
                  className="absolute top-0 inset-x-0 z-10 transition transform origin-top-right md:hidden"
                >
                  <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-3 pb-6 px-5">
                      <div className="flex items-center justify-start">
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid grid-cols-1 gap-7">
                          {Menu.mainMenus.map((menu, mainMenuIndex) => (
                            <a
                              key={`main-menu-${mainMenuIndex}`}
                              href={menu.href}
                              className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                            >
                              {menu.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <div className="mobile-logo">
              <img
                srcSet="https://asset.ams.com.kh/central/media/AMS-Central-Page-Profile%404x.png"
                className="w-14 sm:hidden"
                alt=""
              />
            </div>

            <Popover className="sm:hidden">
              <div className="flex justify-between items-center sm:px-6 md:justify-start">
                <div className="md:hidden">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Open menu</span>
                    <SearchIcon
                      className="h-7 w-7 text-white"
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
        </Container>
      </div>
    </>
  );
}
