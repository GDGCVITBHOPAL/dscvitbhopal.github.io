module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/team": { page: "/team" },
      "/articles": { page: "/articles" },
      "/badges": { page: "/badges" },
      "/events": { page: "/events" },
      "/badges/1": {
        page: "/badges/[id]",
        query: { id: 1 },
      },
    };
  },
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    return config;
  },
};
