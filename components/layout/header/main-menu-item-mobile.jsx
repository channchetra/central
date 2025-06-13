import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function SubMenuItem({ menu, index, close }) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return menu.subMenus ? (
    <Popover className="relative mobile">
      {({ open }) => (
        <>
          <div className="flex justify-between">
            <Link href={menu.href}>
              <a
                onClick={() => close()}
                aria-hidden="true"
                className="group py-2 text-base lg:text-base inline-flex items-center focus:outline-0 border-b-2 border-transparent dark:text-neutral-50"
              >
                <span className="font-normal">{menu.name}</span>
              </a>
            </Link>
            <Popover.Button className="bg-white dark:bg-gray-700 rounded-md px-3 py-1 inline-flex items-center justify-center text-gray-400 dark:text-neutral-50 dark:focus:outline-none">
              <ChevronDownIcon
                className="h-4 w-4 dark:text-neutral-50"
                aria-hidden="true"
                onClick={() => setPopoverOpen(!open)}
              />
            </Popover.Button>
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
              <Popover.Panel className="absolute z-10 top-full transform w-full md:ml-0 md:left-1/2 md:-translate-x-1/2 before:content-[''] before:-mt-1 before:absolute before:w-4 before:h-4 before:bg-white before:drop-shadow before:z-10 before:ml-2 before:mr-auto before:left-0 before:right-0 before:rotate-45 dark:before:bg-gray-700">
                <div className="relative rounded-lg z-10 shadow-lg drop-shadow overflow-hidden">
                  <div className="relative grid gap-10 bg-white dark:bg-gray-700 px-5 py-7">
                    {menu.subMenus.map((subMenu, subMenuIndex) => (
                      <Link
                        key={`menu-${index}-sub-menu-${subMenuIndex}`}
                        href={subMenu.href}
                      >
                        <a
                          onClick={() => {
                            setPopoverOpen(false);
                            close();
                          }}
                          aria-hidden="true"
                          className="flex items-start rounded-lg dark:text-neutral-50"
                        >
                          <span className="font-normal">{subMenu.name}</span>
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
      <a
        onClick={() => close()}
        aria-hidden="true"
        className="group py-4 text-base lg:text-base dark:text-neutral-50 inline-flex items-center focus:outline-0 border-b-2 border-transparent"
      >
        {menu.name}
      </a>
    </Link>
  );
}
