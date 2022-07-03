// import TemplateArchiveCategory from '~/templates/archive-category';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CustomInputText from '~/components/common/custom-input-text';
import { getPostsSearch, postPathById } from '~/lib/posts';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
// import PostItem from '~/components/post/post-item';
import Container from '~/components/layout/container';

export default function Search() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(router.query.q || '');

  const { control, handleSubmit } = useForm({
    defaultValues: {
      q: query,
    },
  });

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { posts } = await getPostsSearch({ search: query });
      setResults(posts);
      setLoading(false);
    };
    if (query) {
      fetchData();
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query, router.query.q]);

  return (
    <div className="my-4 sm:my-8">
      <Container>
        <h1 className="mb-4 text-lg sm:text-2xl leading-relaxed text-center">
          ស្វែងរកលទ្ធលសម្រាប់: <span className="font-bold">Search</span>
        </h1>
        <div className="max-w-32 max-w-xl mx-auto">
          <form
            onSubmit={handleSubmit(({ q }) => setQuery(q))}
            className="flex"
          >
            <CustomInputText
              id="search"
              className="h-12 px-3 block w-full rounded-l-md bg-gray-100 dark:bg-zinc-800 border-transparent focus:outline-none"
              placeholder="ស្វែងរក"
              type="search"
              name="q"
              autoComplete="off"
              rules={{ required: 'This field is required' }}
              control={control}
            />
            <button
              type="submit"
              className="rounded-r-md bg-slate-300 px-4 h-12"
            >
              ស្វែងរក
            </button>
          </form>
        </div>
        {loading && <div>Loading...</div>}
        <div className="mt-4 grid sm:grid-cols-3 gap-4 sm:gap-6">
          {results?.map((post) => (
            <div key={post.id} className="border-b">
              <Link href={postPathById(post.databaseId)}>
                <a>
                  <div className="relative pb-[56%] mb-3 shadow">
                    <Image
                      src="https://asset.ams.com.kh/central/media/photo_2022-06-30_10-36-29.jpg"
                      layout="fill"
                    />
                  </div>
                  <h1 className="post-title">{post.title}</h1>
                  {/* <PostItem
                    config={{
                      showExcerpt: true,
                    }}
                    styles={{
                      image: {
                        imageWrapper:
                          'relative lg:aspect-[4/3.07] sm:aspect-[7/6] aspect-video',
                      },
                    }}
                  /> */}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
