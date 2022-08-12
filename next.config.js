if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

module.exports = {
  // basePath: '/central',
  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(http(?:s)?:\/\/)(.*)/)[2], // Valid WP Image domain.
      '2.gravatar.com',
      'secure.gravatar.com',
      'asset.ams.com.kh',
      'localhost:3000',
      'ams.com.kh',
    ],
    // formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  // Rest of the config
};
