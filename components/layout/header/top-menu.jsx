import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import Search from './search';

export default function TopMenu({ flagshipMenus, amsWebsites }) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className="hidden sm:flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Link href="/">
          <a aria-label="AMS Central">
            <span className="sr-only">AMS Central</span>
            <div className="h-6 w-20 sm:h-8 relative">
              <Image
                layout="fill"
                alt="AMS Central"
                src="https://asset.ams.com.kh/central/media/APSARA_MEDIA_SERVICES_SECONDARY_LOGO.png"
                objectFit="contain"
                className="dark:brightness-0 dark:invert-[1]"
              />
            </div>
          </a>
        </Link>
        <Link href="/">
          <a
            aria-label="CENTRAL"
            className="text-3xl leading-none dark:text-neutral-50 before:content-['|'] before:mr-3"
            style={{ fontFamily: 'Battambang' }}
          >
            CENTRAL
          </a>
        </Link>
        <Popover className="relative bg-white dark:bg-transparent">
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
                        onMouseEnter={() => setPopoverOpen(true)}
                        onMouseLeave={() => setPopoverOpen(false)}
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white dark:bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none py-5'
                        )}
                      >
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'h-5 w-5 hover:text-gray-500 dark:hover:text-neutral-50 dark:text-neutral-50'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      {popoverOpen && (
                        <Transition
                          show={popoverOpen}
                          onMouseEnter={() => setPopoverOpen(true)}
                          onMouseLeave={() => setPopoverOpen(false)}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-20 -ml-4 transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 shadow-md">
                            <div className="rounded-lg overflow-hidden">
                              <div className="relative grid gap-6 bg-white dark:bg-zinc-800 p-5 sm:gap-5 sm:p-3">
                                {amsWebsites.map((item, index) => (
                                  <a
                                    key={`ams-website-${index}`}
                                    href={item.href}
                                    className="-m-3 px-4 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-neutral-50 dark:hover:text-gray-900 dark:hover:bg-gray-300 flex items-start whitespace-nowrap"
                                  >
                                    {item.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      )}
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
          {flagshipMenus.map((item, flagShipIndex) => (
            <a
              key={`flag-ship-${flagShipIndex}`}
              href={item.href}
              className="p-4 lg:p-5 -skew-x-12 text-xs lg:text-base font-bold text-white hover:opacity-75 flex items-center h-full dark:text-neutral-50"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <Search />

      </div>
    </div>
  );
}
