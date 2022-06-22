// next.config.js
const withLinaria = require("next-linaria");
const withAntdLess = require("next-plugin-antd-less");
module.exports = withLinaria(
  withAntdLess({
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.([jt]sx?|mjs)$/,
        use: [
          {
            loader: "linaria/loader",
            options: {
              extension: ".linaria.module.css",
              evaluate: true,
            },
          },
        ],
      });
      return config;
    },
    /* config options here */
  })
);
