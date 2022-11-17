import { Feed } from 'feed';
import fs from 'fs';
import sanitizeHtml from 'sanitize-html';
import {
  QUERY_ALL_PODCASTS_SLUG,
  QUERY_PODCAST_BY_SLUG,
} from 'graphql/queries/podcast';
import { initializeApollo } from './apollo-client';
import { BASE_URL } from './constants';
import { mapPostData } from './posts';

/**
 * getAllTagsSlug
 */

export async function getAllPodcastsSlug() {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: QUERY_ALL_PODCASTS_SLUG,
  });

  const podcasts = data?.data.podcasts.edges.map(({ node = {} }) => node);
  return {
    podcasts,
  };
}

/**
 * getPodcastBySlug
 */

export async function getPodcastBySlug(slug) {
  const apolloClient = initializeApollo();
  let podcastData = {};

  try {
    podcastData = await apolloClient.query({
      query: QUERY_PODCAST_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.warn(
      `[users][getPodcastBySlug] Failed to query podcast data: ${e.message}`
    );
    throw e;
  }

  return podcastData?.data?.podcast || {};
}

export function generateRSSFeed(podcast = {}) {
  const { name, slug, description = '' } = podcast;
  const posts =
    podcast?.posts?.edges.map(({ node = {} }) => node).map(mapPostData) || [];

  const feed = new Feed({
    title: name,
    description,
    id: BASE_URL,
    link: BASE_URL,
    language: 'en',
    image: `${BASE_URL}images/APSARA_MEDIA_SERVICES_LOGO-01.png`,
    favicon: `${BASE_URL}favicon/favicon.ico`,
    copyright: 'អប្សរាមេឌាសឺវីស / APSARA MEDIA SERVICES (AMS)',
    generator: 'ams',
    feedLinks: {
      rss2: `${BASE_URL}${slug}/rss.xml`,
      json: `${BASE_URL}${slug}/rss.json`,
      atom: `${BASE_URL}${slug}/rss.atom`,
    },
    author: {
      name: 'AMS Media Service',
      email: 'sousdey@ams.com.kh',
      link: BASE_URL,
    },
  });

  posts.forEach((post) => {
    const { title, excerpt, databaseId, date, author = {} } = post || {};
    const url = `${BASE_URL}detail/${databaseId}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description: sanitizeHtml(excerpt, { allowedTags: [] }),
      content: sanitizeHtml(excerpt, { allowedTags: [] }),
      author: [
        {
          name: author.name,
          link: `${BASE_URL}author/${author?.slug}`,
        },
      ],
      date: new Date(date),
    });
  });

  if (!fs.existsSync(`public/podcasts/${slug}`)) {
    fs.mkdirSync(`public/podcasts/${slug}`, { recursive: true });
  }

  fs.writeFileSync(`public/podcasts/${slug}/rss.xml`, feed.rss2());
  fs.writeFileSync(`public/podcasts/${slug}/rss.json`, feed.json1());
  fs.writeFileSync(`public/podcasts/${slug}/rss.atom`, feed.atom1());
}
