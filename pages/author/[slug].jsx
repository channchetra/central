import TemplateArchiveAuthor from '~/templates/archive-author';
import { getPostsByAuthorSlug } from '~/lib/posts';
import { getAllUsersPath, getUserBySlug } from '~/lib/users';

export default function Posts({posts, user}) {
  const attr = {
    pageTitle: {
      title: user.name,
      image: user.avatar.url,
      ...user
    }
  }
  return <TemplateArchiveAuthor posts={posts} attributes={attr} />;
}

export async function getStaticProps({params: {slug}}) {
  const {user} = await getUserBySlug(slug);
  const options = {
    queryIncludes: 'all'
  } 
  const {posts} = await getPostsByAuthorSlug( {slug, ...options} );
  // console.warn(posts)
  return {
    props: { 
      posts,
      user
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const {users} = await getAllUsersPath();
  
  return {
    paths: users.map(({ slug }) => `/author/${slug}`) || [],
    fallback: false,
  };
}