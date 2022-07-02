import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';
import { useForm } from 'react-hook-form';
import { getPostsSearch, postPathById } from '~/lib/posts';
import Link from 'next/link';
import CustomInputText from '~/components/common/custom-input-text'

export default function Search () {

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState('')

  const { control, handleSubmit } = useForm({
    defaultValues: {
      q: ''
    }
  })
  
  const router = useRouter();

  const onSubmitSearch = ( {q: search} ) => {
    setResults([]);
    setLoading(false);
    router.push(`/search?q=${search}`);
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const fetchData = async () => {
        const {posts} = await getPostsSearch({search: inputValue});
        setResults(posts);
        setLoading(false);
      }
      if(inputValue) {
        fetchData();
      } else {
        setResults([]);
        setLoading(false);
      }
    }, 1000);
    return () => clearTimeout(timer)
  },[inputValue])

  return (
    <div className="relative hidden md:flex items-center justify-end">
      <Popover>
        <Popover.Button className="-ml-2 py-3 lg:py-5 px-2 lg:px-4 -skew-x-12 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none">
          <span className="sr-only">Open search</span>
          <SearchIcon className="h-6 w-6 skew-x-12" aria-hidden="true" />
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
            <div className="rounded-lg shadow-lg ring-1 h-full ring-black ring-opacity-5 bg-white dark:bg-zinc-700 flex flex-col">
              <div className="p-3 flex-1">
                <form action='/search' onChange={e => setInputValue(e.target.value)} onSubmit={handleSubmit(onSubmitSearch)}>
                  <CustomInputText
                    id='search'
                    className="h-12 mt-1 px-3 block w-full rounded-md bg-gray-100 dark:bg-zinc-800 border-transparent focus:outline-none"
                    placeholder="ស្វែងរក"
                    type="search"
                    name="q"
                    autoComplete="off"
                    rules={{required: ''}}
                    control={control}
                  />
                </form>
                {
                  loading &&
                  <div>Loading...</div>
                }
                <ul>
                  {
                    results?.map((post => 
                      <li key={post.id}>
                        <Link href={postPathById(post.databaseId)}>
                          <a>
                            {post.title}
                          </a>
                        </Link>
                      </li>  
                    ))
                  }
                </ul>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}