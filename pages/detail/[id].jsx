import { useEffect, useState } from 'react';
import { getPostById } from '~/lib/posts';
import TemplateSingle from '~/templates/single';
import Container from '~/components/layout/container';
import SkeletonPostDetail from '~/components/skeleton/skeleton-post-detail';
import { getAllPostsWithSlug } from '../../lib/api';

export default function Post({ post = {} }) {

  if (!post || !post?.databaseId) {
    return (
      <Container>
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-6">
          <div className="col-span-2">
            <SkeletonPostDetail className="my-3" />
          </div>
        </div>
      </Container>
    );
  }

  const [title, setTitle] = useState(post.title);
  const [id, setId] = useState(post.databaseId);
  const [hasMore, setHasMore] = useState(true);
  const [posts, setPosts] = useState([post]);

  const previous = async () => {
    const preId = posts[posts.length - 1].previous?.databaseId || false;
    if (preId) {
      const p = await getPostById(preId);
      setPosts((pre) => [...pre, p.post]);
    } else {
      setHasMore(false);
    }
  };

  const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const spy = () => {
    const current = posts.filter((p) =>
      isInView(document.getElementById(p.databaseId))
    );
    if (current[0]) {
      const item = current[0];
      if (item.databaseId !== id) {
        window.history.pushState(null, item.title, `/detail/${item.databaseId}`);
        setTitle(item.title);
        setId(item.databaseId);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => spy(), 200);
    return () => clearInterval(timer);
  });

  return (
    <TemplateSingle
      previous={previous}
      title={title}
      hasMore={hasMore}
      posts={posts}
      post={post}
    />
  );
}

export async function getStaticProps({ params }) {
  const { post } = await getPostById(params.id, true);
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/detail/${node.databaseId}`) || [],
    fallback: true,
  };
}
