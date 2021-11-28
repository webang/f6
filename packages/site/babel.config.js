module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "prismjs",
      {
        languages: [
          "javascript",
          "typescript",
          "jsx",
          "tsx",
          "css",
          "scss",
          "markup",
          "bash",
        ],
        theme: "default",
        css: true,
      },
    ],
    require.resolve('@babel/plugin-transform-runtime'),
    [require.resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
  ],
};
