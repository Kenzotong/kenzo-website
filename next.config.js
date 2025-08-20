// next.config.js
module.exports = {
  // 1. Tell Next.js to output a fully static site
  output: 'export',

  // 2. Ensure every page URL ends with a slash (so /about → /about/index.html)
  //    This makes GitHub Pages routing work out-of-the-box.
  trailingSlash: true,

  // 3. (Optional) If your repo isn’t published at the root domain
  //    (e.g. https://username.github.io/repo-name), set a base path:
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',

  // 4. (Optional) Inject any build-time env vars directly here
  //    (though secrets are better kept in Actions / process.env)
  // env: {
  //   NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  // },
};
