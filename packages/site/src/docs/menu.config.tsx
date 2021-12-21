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
        title: "Spinner 旋转",
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
        title: "ActionSheet 动作面板",
        key: 'ActionSheet',
        content: require("../.build/docs/action-sheet.md"),
      },
      {
        title: "BackTop 回到顶部",
        key: 'BackTop',
        content: require("../.build/docs/back-top.md"),
      },
      {
        title: "Dialog 对话框",
        key: 'Dialog',
        content: require("../.build/docs/dialog.md"),
      },
      {
        title: "DropdownMenu 下拉菜单",
        key: 'DropdownMenu',
        content: require("../.build/docs/dropdown-menu.md"),
      },
      {
        title: "InfiniteScroll 滚动组件",
        key: 'InfiniteScroll',
        content: require("../.build/docs/infinite-scroll.md"),
      },
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
        title: "PullRefresh 下拉刷新",
        key: 'PullRefresh',
        content: require("../.build/docs/pull-refresh.md"),
      },
      {
        title: "Toast 轻提示",
        key: 'Toast',
        content: require("../.build/docs/toast.md"),
      },
      {
        title: "SwipeCell 滑动操作",
        key: 'SwipeCell',
        content: require("../.build/docs/swipe-cell.md"),
      }
    ]
  },
  {
    title: '表单组件',
    menus: [
      {
        title: "Cascader 联动选择",
        key: 'Cascader',
        content: require("../.build/docs/cascader.md"),
      },
      {
        title: "Checkbox 复选框",
        key: 'Checkbox',
        content: require("../.build/docs/checkbox.md"),
      },
      {
        title: "CheckList 选择清单",
        key: 'CheckList',
        content: require("../.build/docs/check-list.md"),
      },
      {
        title: "Input 输入框",
        key: 'Input',
        content: require("../.build/docs/input.md"),
      },
      {
        title: "NumberKeyboard 数字键盘",
        key: 'NumberKeyboard',
        content: require("../.build/docs/number-keyboard.md"),
      },
      {
        title: "PasswordInput 密码输入",
        key: 'PasswordInput',
        content: require("../.build/docs/password-input.md"),
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
      },
      {
        title: "Slider 输入条",
        key: 'Slider',
        content: require("../.build/docs/slider.md"),
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
        title: "Collapse 折叠面板",
        key: 'Collapse',
        content: require("../.build/docs/collapse.md"),
      },
      {
        title: "Flow 步骤条",
        key: 'Flow',
        content: require("../.build/docs/flow.md"),
      },
      {
        title: "Marquee 滚动",
        key: 'Marquee',
        content: require("../.build/docs/marquee.md"),
      },
      {
        title: "Message 提示消息",
        key: 'Message',
        content: require("../.build/docs/message.md"),
      },
      {
        title: "NoticeBar 通知栏",
        key: 'NoticeBar',
        content: require("../.build/docs/notice-bar.md"),
      },
      {
        title: "Swipe",
        key: 'Swipe',
        content: require("../.build/docs/swipe.md"),
      },
      {
        title: "Badge 标签页",
        key: 'Badge',
        content: require("../.build/docs/badge.md"),
      }
    ]
  },
  {
    title: '导航组件',
    menus: [
      {
        title: "Tab 标签页",
        key: 'Tab',
        content: require("../.build/docs/tab.md"),
      },
      {
        title: "TabBar 标签页",
        key: 'TabBar',
        content: require("../.build/docs/tab-bar.md"),
      }
    ]
  }
];
