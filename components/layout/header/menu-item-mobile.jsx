import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function SubMenuItem({ menu, index }) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return menu.subMenus ? (
    <Popover className="relative mobile">
      {() => (
        <>
          <div className="flex">
            <Link href={menu.href}>
              <a
                className={`group py-2 text-xs lg:text-base inline-flex items-center focus:outline-0 border-b-2 border-transparent hover:border-b-2 hover:border-sky-400 dark:hover:border-zinc-800 dark:text-neutral-50 ${
                  popoverOpen ? 'border-sky-400' : ''
                }`}
              >
                <span className="font-bold">{menu.name}</span>
                <ChevronDownIcon
                  className="ml-1 h-5 w-5 text-black dark:text-neutral-50"
                  aria-hidden="true"
                />
              </a>
            </Link>
          </div>

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
              <Popover.Panel className="absolute z-10 -ml-4 transform w-56 md:ml-0 md:left-1/2 md:-translate-x-1/2 before:content-[''] before:-mt-2 before:absolute before:z-50 before:w-4 before:h-4 before:bg-white before:ml-auto before:mr-auto before:left-0 before:right-0 before:rotate-45">
                <div className="relative rounded-lg z-10 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-4 bg-white px-3 py-4 sm:gap-4">
                    {menu.subMenus.map((subMenu, subMenuIndex) => (
                      <Link
                        key={`menu-${index}-sub-menu-${subMenuIndex}`}
                        href={subMenu.href}
                      >
                        <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:border-zinc-800 dark:text-neutral-50">
                          <span className="font-bold">{subMenu.name}</span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          )}
        </>
      )}
    </Popover>
  ) : (
    <Link href={menu.href}>
      <a className="group py-4 text-xs lg:text-base text-black font-bold inline-flex items-center focus:outline-0 border-b-2 border-transparent hover:border-b-2 hover:border-sky-400 dark:hover:border-zinc-800 dark:text-neutral-50">
        {menu.name}
      </a>
    </Link>
  );
}
