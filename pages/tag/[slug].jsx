import TemplateArchiveAuthor from '~/templates/archive-author';
import { getPostsByTagSlug } from '~/lib/posts';
import getAllTagsSlug from '~/lib/tag';

export default function Posts({posts}) {
  const attr = {
    pageTitle: {}
  }
  return <TemplateArchiveAuthor posts={posts} attributes={attr} />;
}

export async function getStaticProps({ params = {} }) {
  const { slug } = params;
  const { posts } = await getPostsByTagSlug({slug});
  return {
    props: { 
      posts
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const {tags} = await getAllTagsSlug()
  
  return {
    paths: tags.map(({ slug }) => `/tag/${slug}`) || [],
    fallback: false,
  };
}