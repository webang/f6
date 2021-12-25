module.exports = function (api) {
  const { BABEL_MODULE, NODE_ENV } = process.env;
  const useESModules = BABEL_MODULE !== "commonjs" && NODE_ENV !== "test";
  api && api.cache(false);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          loose: true,
          modules: false,
        },
      ],
      "@babel/preset-typescript",
      ["@babel/preset-react", { runtime: "classic"}],
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: false,
        },
      ],
      "./scripts/babel-transform-less-to-css",
    ],
  };
};
