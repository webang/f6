export default [
  {
    title: "开发指南",
    menus: [
      {
        title: "介绍",
        key: 'introduce',
        content: require("../../markdown/introduce.md"),
      },
      {
        title: "快速上手",
        key: 'quickstart',
        content: require("../../markdown/quickstart.md"),
      },
      {
        title: "更新日志",
        key: 'changelog',
        content: require("../../markdown/changelog.md"),
      },
      {
        title: "贡献指南",
        key: 'contribution',
        content: require("../../markdown/contribution.md"),
      },
      {
        title: "风格指南",
        key: 'style-guide',
        content: require("../../markdown/style-guide.md"),
      }
    ],
  }
];
