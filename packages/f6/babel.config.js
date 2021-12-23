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
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
    plugins: [
      // [
      //   "@babel/plugin-transform-runtime",
      //   {
      //     corejs: false,
      //     helpers: true,
      //     regenerator: false,
      //     useESModules: true
      //   },
      // ],
      "@babel/plugin-transform-modules-commonjs",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-transform-object-assign",
      "./scripts/babel-transform-less-to-css",
    ],
  };
};