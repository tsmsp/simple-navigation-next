module.exports = {
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/error",
        destination: "/404",
        permanent: true,
      },
    ];
  },
};
