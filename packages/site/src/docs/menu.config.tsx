export default [
  {
    title: "开发指南",
    menus: [
      {
        title: "介绍",
        key: 'introduce',
        content: require("../markdown/introduce.md"),
      },
      {
        title: "快速上手",
        key: 'quickstart',
        content: require("../markdown/quickstart.md"),
      },
      {
        title: "更新日志",
        key: 'changelog',
        content: require("../markdown/changelog.md"),
      },
      {
        title: "贡献指南",
        key: 'contribution',
        content: require("../markdown/contribution.md"),
      },
      {
        title: "风格指南",
        key: 'style-guide',
        content: require("../markdown/style-guide.md"),
      }
    ],
  },
  {
    title: '基础组件',
    menus: [
      {
        title: "Button 按钮",
        key: 'Button',
        content: require("../.build/docs/button.md"),
      },
      {
        title: "Cell 单元格",
        key: 'Cell',
        content: require("../.build/docs/cell.md"),
      },
      {
        title: "Spinner 转圈圈",
        key: 'Spinner',
        content: require("../.build/docs/spinner.md"),
      },
      {
        title: "Loading 加载",
        key: 'Loading',
        content: require("../.build/docs/loading.md"),
      },
    ]
  },
  {
    title: '操作反馈',
    menus: [
      {
        title: "Overlay 遮罩层",
        key: 'Overlay',
        content: require("../.build/docs/overlay.md"),
      },
      {
        title: "Popover 气泡",
        key: 'Popover',
        content: require("../.build/docs/popover.md"),
      },
      {
        title: "Popup 弹出层",
        key: 'Popup',
        content: require("../.build/docs/popup.md"),
      },
      {
        title: "Toast 轻提示",
        key: 'Toast',
        content: require("../.build/docs/toast.md"),
      },
      {
        title: "Dialog 对话框",
        key: 'Dialog',
        content: require("../.build/docs/dialog.md"),
      },
    ]
  },
  {
    title: '表单组件',
    menus: [
      {
        title: "Field 输入框",
        key: 'Field',
        content: require("../.build/docs/field.md"),
      },
      {
        title: "Checkbox 单选框",
        key: 'Checkbox',
        content: require("../.build/docs/checkbox.md"),
      },
      {
        title: "PasswordInput 密码输入",
        key: 'PasswordInput',
        content: require("../.build/docs/password-input.md"),
      },
      {
        title: "NumberKeyboard 数字键盘",
        key: 'NumberKeyboard',
        content: require("../.build/docs/number-keyboard.md"),
      },
      {
        title: "Cascader 联动选择器",
        key: 'Cascader',
        content: require("../.build/docs/cascader.md"),
      },
      {
        title: "Picker 选择器",
        key: 'Picker',
        content: require("../.build/docs/picker.md"),
      },
      {
        title: "Radio 单选框",
        key: 'Radio',
        content: require("../.build/docs/radio.md"),
      },
      {
        title: "Switch 标签页",
        key: 'Switch',
        content: require("../.build/docs/switch.md"),
      }
    ]
  },
  {
    title: '布局组件',
    menus: [
      {
        title: "Affix 固钉",
        key: 'Affix',
        content: require("../.build/docs/affix.md"),
      },
      {
        title: "Grid 宫格",
        key: 'Grid',
        content: require("../.build/docs/grid.md"),
      },
      {
        title: "Space 间距",
        key: 'Space',
        content: require("../.build/docs/space.md"),
      },
    ]
  },
  {
    title: '展示组件',
    menus: [
      {
        title: "Message 提示消息",
        key: 'Message',
        content: require("../.build/docs/message.md"),
      },
      {
        title: "InfiniteScroll 滚动组件",
        key: 'InfiniteScroll',
        content: require("../.build/docs/infinite-scroll.md"),
      },
      {
        title: "PullRefresh 下拉刷新",
        key: 'PullRefresh',
        content: require("../.build/docs/pull-refresh.md"),
      },
    ]
  },
  {
    title: '导航组件',
    menus: [
      {
        title: "Tab 标签页",
        key: 'Tab',
        content: require("../.build/docs/tab.md"),
      }
    ]
  }
];
