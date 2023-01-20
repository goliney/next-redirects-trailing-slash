/** @type {import("next").NextConfig} */
module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/old-prefix/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};
