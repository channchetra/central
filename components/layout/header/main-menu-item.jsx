import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function MainMenuItem({ menu, index }) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return menu.subMenus ? (
    <Popover className="relative desktop">
      {() => (
        <>
          <a
            onMouseEnter={() => setPopoverOpen(true)}
            onMouseLeave={() => setPopoverOpen(false)}
            href={menu.href}
            className={`group py-4 text-xs lg:text-base inline-flex items-center focus:outline-0 border-b-2 border-transparent hover:border-b-2 hover:border-sky-400 dark:hover:border-zinc-800 dark:text-neutral-50 ${
              popoverOpen ? 'border-sky-400 dark:border-zinc-800' : ''
            }`}
          >
            <span className="font-bold">{menu.name}</span>
            <ChevronDownIcon
              className="ml-1 h-5 w-5 text-zinc-700 dark:text-neutral-50"
              aria-hidden="true"
            />
          </a>

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
              <Popover.Panel className="absolute z-10 -ml-4 transform w-56 md:ml-0 md:left-1/2 md:-translate-x-1/2 before:content-[''] before:-mt-2 before:absolute before:w-4 before:h-4 before:bg-white before:ml-auto before:mr-auto before:left-0 before:right-0 before:rotate-45 dark:before:bg-zinc-400">
                <div className="relative rounded-lg z-10 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-4 bg-white dark:bg-zinc-800 px-3 py-4 sm:gap-4">
                    {menu.subMenus.map((subMenu, subMenuIndex) => (
                      <a
                        key={`menu-${index}-sub-menu-${subMenuIndex}`}
                        href={subMenu.href}
                        className="-m-3 px-4 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-neutral-50 dark:hover:text-gray-900 dark:hover:bg-gray-300"
                      >
                        {subMenu.name}
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
  ) : (
    <a
      href={menu.href}
      className="group py-4 text-xs lg:text-base text-black font-bold inline-flex items-center focus:outline-0 border-b-2 border-transparent hover:border-b-2 hover:border-sky-400 dark:hover:border-zinc-800 dark:text-neutral-50"
    >
      {menu.name}
    </a>
  );
}
