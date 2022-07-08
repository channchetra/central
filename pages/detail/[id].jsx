import { useEffect, useState } from 'react';
import { getPostById, postPathById } from '~/lib/posts';
import TemplateSingle from '~/templates/single';
import Container from '~/components/layout/container';
import SkeletonPostDetail from '~/components/skeleton/skeleton-post-detail';
import { useRouter } from 'next/router';
import { find } from 'lodash';
import { getAllPostsWithSlug } from '../../lib/api';

export default function Detail({post}) {

  const router = useRouter();

  if (router.isFallback) {
    return (
      <Container>
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-6">
          <div className="col-span-2">
            <SkeletonPostDetail className="my-3" />
          </div>
        </div>
      </Container>
    )
  }
  
  const [posts, setPosts] = useState([post]);
  const [title, setTitle] = useState(post.title);
  const [id, setId] = useState(post.databaseId);
  const [hasMore, setHasMore] = useState(true);

  const { postFormats = [] } = post || {};
  const isVideo = !!find(postFormats, ['slug', 'post-format-video']);

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
        window.history.pushState(
          null,
          item.title,
          postPathById(item.databaseId)
        );
        setTitle(item.title);
        setId(item.databaseId);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => spy(), 200);
    return () => clearInterval(timer);
  });

  if (isVideo) {
    return (
      <TemplateSingle
        previous={previous}
        title={title}
        hasMore={hasMore}
        posts={posts}
      />
    );
  }
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

export async function getStaticProps({ params = {} }) {
  const { id } = params;
  const { post } = await getPostById(id);
  return {
    props: {
      post
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => postPathById(node.databaseId) || []),
    fallback: true,
  };
}
