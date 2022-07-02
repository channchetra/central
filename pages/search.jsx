
// import TemplateArchiveCategory from '~/templates/archive-category';

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomInputText from "~/components/common/custom-input-text";
import { getPostsSearch, postPathById } from "~/lib/posts";
import { useForm } from 'react-hook-form';
import Link from "next/link";

export default function Search () {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(router.query.q || '');
  
  const { control, handleSubmit } = useForm({
    defaultValues: {
      q: query
    }
  })

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const {posts} = await getPostsSearch({search: query});
      setResults(posts);
      setLoading(false);
    }
    if(query) {
      fetchData();
    } else {
      setResults([]);
      setLoading(false);
    }
      
  },[query, router.query.q])

  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleSubmit(({q}) => setQuery(q))}>
        <CustomInputText
          id='search'
          className="h-12 mt-1 px-3 block w-full rounded-md bg-gray-100 dark:bg-zinc-800 border-transparent focus:outline-none"
          placeholder="ស្វែងរក"
          type="search"
          name="q"
          autoComplete="off"
          rules={{required: 'This field is required'}}
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
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
