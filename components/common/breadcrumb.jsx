/* eslint-disable no-unused-vars */
import { ChevronRightIcon } from '@heroicons/react/solid';
import sanitizeHtml from 'sanitize-html';


export default function CommonBreadcrumb({ className, items = [] }) {
  if (!items.length) {
    return null;
  }
  return (
    <nav className={className} aria-label="Breadcrumb">
      <span className="text-gray-500 text-sm md:text-base">
        <a href="#" className="hover:text-gray-900 mr-1 md:mr-2">
          ទំព័រដើម
        </a>
      </span>
      {items.map((item) => (
        <span className="text-gray-500 text-sm md:text-base">
          <ChevronRightIcon className="inline-block h-4 w-4 md:h-5 md:w-5 -mt-0.5 md:-mt-1 mr-1 md:mr-2" />
          {item.link ? (
            <a href="#" className="hover:text-gray-900 mr-1 md:mr-2">
              { sanitizeHtml(item.label, { allowedTags: [] }) }
            </a>
          ) : (
            <span>{ sanitizeHtml(item.label, { allowedTags: [] }) }</span>
          )}
        </span>
      ))}
    </nav>
  );
}
