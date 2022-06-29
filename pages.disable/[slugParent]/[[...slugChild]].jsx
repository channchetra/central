import {
  getPostsByAuthorSlug,
  getPostsByCategorySlug,
  getPostsByTagSlug,
} from '~/lib/posts';
import { getAllCategoriesPath, getCategoryBySlug } from '~/lib/categories';
import categoryData from '~/data/categories';
import { find, isEmpty } from 'lodash';
import TemplateArchiveCategory from '~/templates/archive-category';
import { getAllUsersSlug, getUserBySlug } from '~/lib/users';
import TemplateArchiveAuthor from '~/templates/static/archive-author';
import { getAllTagsSlug, getTagBySlug } from '~/lib/tag';
import TemplateArchiveTag from '~/templates/archive-tag';

export default function Category({ model, posts }) {
  if (model.type === 'category') {
    return <TemplateArchiveCategory category={model} posts={posts} />;
  }

  if (model.type === 'author') {
    return <TemplateArchiveAuthor author={model} posts={posts} />;
  }

  if (model.type === 'tag') {
    return <TemplateArchiveTag tag={model} posts={posts} />;
  }
}

export async function getStaticProps({ params = {} } = {}) {
  const { slugParent, slugChild = [] } = params;
  const slug = slugChild.length ? slugChild[slugChild.length - 1] : slugParent;
  let model = {};
  let postsData = {};
  let type = slugParent;

  if (slugParent === 'author') {
    model = await getUserBySlug(slug);
    postsData = await getPostsByAuthorSlug({ slug });
  } else if (slugParent === 'tag') {
    model = await getTagBySlug(slug);
    postsData = await getPostsByTagSlug({ slug });
  } else {
    type = 'category';
    model = find(categoryData, ['slug', slug]) || {};
    if (isEmpty(model)) {
      const category = await getCategoryBySlug(slug);
      model = {
        ...model,
        ...category,
        title: category.name,
      };
    }

    postsData = await getPostsByCategorySlug({
      slug,
    });
  }

  return {
    props: {
      model: { ...model, type },
      posts: postsData.posts || [],
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { categories } = await getAllCategoriesPath();
  const categoriesPath = categories.map(({ uri }) => {
    const segments = uri.split('/').filter((seg) => seg !== '');
    segments.shift();
    return {
      params: {
        slugParent: segments.shift(),
        slugChild: segments,
      },
    };
  });

  const { users } = await getAllUsersSlug();
  const usersPath = users.map(({ slug }) => ({
    params: {
      slugParent: 'author',
      slugChild: [slug],
    },
  }));

  const { tags } = await getAllTagsSlug();
  const tagsPath = tags.map(({ slug }) => ({
    params: {
      slugParent: 'tag',
      slugChild: [slug],
    },
  }));

  return {
    paths: [...categoriesPath, ...usersPath, ...tagsPath],
    fallback: false,
  };
}
