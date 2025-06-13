if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const wordpressURL = process.env.WORDPRESS_API_URL;

// Use try-catch to avoid breaking build if env is undefined or malformed
let wordpressDomain = 'admin.amskh.co'; // Fallback default
try {
  const match = wordpressURL.match(/(http(?:s)?:\/\/)(.*)/);
  if (match && match[2]) wordpressDomain = match[2];
} catch (e) {
  console.warn('⚠️ Failed to parse WORDPRESS_API_URL. Using fallback domain.');
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  basePath: '/central',
  output: 'standalone',
  images: {
    domains: [
      wordpressDomain,
      '2.gravatar.com',
      'secure.gravatar.com',
      'asset.ams.com.kh',
      'localhost:3000',
      'ams.com.kh',
      'admin.amskh.co',
      's3.ams.com.kh',
    ],
    // formats: ['image/avif', 'image/webp'],
  },
});
