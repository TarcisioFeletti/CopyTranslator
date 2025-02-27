import { LocaleKey } from "./types";

export const zh_cn = new Map<LocaleKey, string>([
  ["localeName", "简体中文"],
  ["stayTop", "总是置顶"],
  ["listenClipboard", "监听剪贴板"],
  ["autoCopy", "自动复制"],
  ["autoPaste", "自动粘贴"],
  ["autoPurify", "自动净化"],
  ["incrementalCopy", "增量复制"],
  ["smartDict", "智能词典"],
  ["translate", "翻译"],
  ["copySource", "复制原文"],
  ["copyResult", "复制译文"], //复制结]果
  ["source", "原文"], // 原文
  ["result", "译文"], //译文
  ["sourceLanguage", "源语言"],
  ["targetLanguage", "目标语言"],
  ["clear", "清空"],
  ["helpAndUpdate", "帮助与更新"],
  ["exit", "退出"],
  ["contrast", "对照模式"],
  ["focus", "专注模式"],
  ["autoHide", "自动隐藏"],
  ["autoFormat", "自动格式化"],
  ["autoShow", "自动显示"],
  ["settings", "设置"],
  ["viewSource", "查看原文"],
  ["localeSetting", "界面语言"],
  ["return", "返回"],
  ["retryTranslate", "重试翻译"],
  ["dragCopy", "拖拽复制"],
  ["hideDirect", "隐藏方向"],
  ["translatorType", "翻译引擎"],
  ["dictionaryType", "查词引擎"],
  ["neverShow", "不再显示"],
  ["smartDict", "智能词典"],
  ["contrastDict", "对照词典"],
  ["evaluate", "评估"],
  ["homepage", "官网"],
  ["userManual", "用户手册"],
  ["checkUpdate", "检查更新"],
  ["toDownload", "前往下载"],
  ["changelog", "更新日志"],
  ["cancel", "取消"],
  ["ok", "确定"],
  ["restoreDefault", "恢复默认设置"],
  ["restoreMultiDefault", "重置这些设置"],
  ["hideWindow", "隐藏窗口"],
  ["closeWindow", "关闭窗口"],
  ["showWindow", "显示窗口"],
  ["translateClipboard", "翻译剪贴板"],
  ["incrementCounter", "单次增量复制"],
  ["enumerateLayouts", "切换布局"],
  ["enableNotify", "启用通知"],
  ["smartTranslate", "智能互译"],
  ["capture", "截图翻译"],
  ["apiConfig", "API"],
  ["undo", "撤销"],
  ["redo", "重做"],
  ["cut", "剪切"],
  ["copy", "复制"],
  ["paste", "粘贴"],
  ["pasteAndMatchStyle", "粘贴并匹配样式"],
  ["selectAll", "全选"],
  ["delete", "删除"],
  ["minimize", "最小化"],
  ["close", "关闭"],
  ["quit", "退出"],
  ["reload", "重载"],
  ["forceReload", "强制重载"],
  ["editMenu", "编辑菜单"],
  ["windowMenu", "窗口菜单"],
  ["switches", "开关"],
  ["options", "选项"],
  ["skipTaskbar", "隐藏任务栏"],
  ["toggleDevTools", "开启开发者工具"],
  ["togglefullscreen", "开启全屏"],
  ["resetZoom", "重置缩放"],
  ["zoomIn", "放大"],
  ["zoomOut", "缩小"],
  ["closeAsQuit", "关闭即退出"],
  ["pasteResult", "粘贴译文"],
  ["layoutType", "布局"],
  ["autoCheckUpdate", "自动检查更新"],
  ["showConfigFolder", "打开配置文件夹"],
  ["editConfigFile", "编辑配置文件"],
  ["colorMode", "配色模式"],
  ["drawer", "侧边抽屉"],
  ["translatorConfig", "翻译器"],
  ["openAtLogin", "开机启动"],
  ["doubleClickCopy", "双击复制"],
  ["toastTip", "操作提示"],
  ["multiSource", "多源对比"],
  ["enableDoubleCopyTranslate", "双Ctrl+C翻译"],
  ["pasteDelay", "自动粘贴延迟(秒)"],
  ["horizontal", "水平布局"],
  ["vertical", "垂直布局"],
  ["basic", "基础"],
  ["advance", "进阶"],
  ["translateInput", "翻译"],
  ["openReference", "打开参考链接"],
  ["googleMirror", "谷歌镜像"],
  ["googleSource", "Google翻译源"],
  ["fallbackTranslator", "备用翻译引擎"],
  ["dragCopyConfig", "拖拽复制"],
  ["dragCopyMode", "拖拽复制模式"],
  ["dragCopyGlobal", "全局拖拽复制"],
  ["dragCopyWhiteList", "拖拽复制白名单"],
  ["dragCopyBlackList", "拖拽复制黑名单"],
  [
    "dragCopyPrompt",
    "如果这里没有列出你要的程序，请在该程序上尝试拖拽操作之后再试一次",
  ],
  ["fallbackPrompt1", "引擎不支持此语言，此结果由备用引擎"],
  ["fallbackPrompt2", "提供（可在设置更改）"],
  ["about", "关于"],
  ["appearance", "外观"],
  ["other", "其他"],
  [
    "textAdjustPrompt",
    "任意文本框均可通过Ctrl配合滚轮（或者加号或减号）进行字体大小的缩放调节。",
  ],
  [
    "googlePrompt",
    "v10.2.4版本后谷歌翻译默认使用谷歌翻译镜像，理论上不需要额外设置，如果依然存在问题，可以尝试切换google翻译源",
  ],
  ["primaryColor", "选择主题颜色"],
  ["fontColor", "选择字体颜色"],
  ["backgroundColor", "选择背景颜色"],
  [
    "<tooltip>primaryColor",
    "您可以随意选择任意颜色，软件会实时更新，你可以直接看到效果",
  ],
  ["copyButton", "点击复制译文，右键复制原文"],
  ["closeButton", "点击最小化，右键退出程序"],
  ["engineButton", "点击选择其他引擎，右键切换监听剪贴板"],
  ["layoutButton", "点击切换不同界面布局，右键单次增量复制"],
  ["<tooltip>autoCopy", "翻译后自动复制翻译结果到剪贴板"],
  ["<tooltip>listenClipboard", "监听并翻译剪贴板内容"],
  ["<tooltip>dragCopy", "拖拽后模拟复制选中内容"],
  ["<tooltip>doubleClickCopy", "双击复制选中内容"],
  ["<tooltip>incrementalCopy", "将新复制的内容附加到之前的原文后"],
  ["<tooltip>stayTop", "界面始终保持在最上层"],
  ["<tooltip>contrastDict", "在非专注模式显示词典"],
  ["<tooltip>smartTranslate", "智能互译"],
  ["<tooltip>autoPaste", "翻译后模拟Ctrl+V粘贴"],
  ["<tooltip>autoHide", "贴近屏幕边缘时自动隐藏"],
  ["<tooltip>autoShow", "翻译后自动显示"],
  ["<tooltip>autoFormat", "去除剪贴板的文本的格式问题（会覆盖剪贴板内容）"],
  ["<tooltip>autoPurify", "翻译时处理剪贴板的格式问题"],
  ["<tooltip>skipTaskbar", "隐藏状态栏"],
  ["<tooltip>neverShow", "不再显示警告"],
  ["<tooltip>dragCopyMode", "推荐使用白名单模式，只在特定应用响应拖拽复制"],
  ["<tooltip>closeAsQuit", "关闭窗口即完全退出，而非最小化到托盘"],
  ["<tooltip>autoCheckUpdate", "启动时自动检查更新"],
  ["<tooltip>multiSource", "同时显示并对比多个引擎的翻译结果"],
  [
    "<tooltip>enableDoubleCopyTranslate",
    "双击Ctrl+C触发翻译，可以在关闭监听剪贴板时使用",
  ],
  ["<tooltip>fallbackTranslator", "后备翻译引擎，当前引擎不支持此语言时启用"],
  ["<tooltip>colorMode", "明亮或者是暗黑模式，自动则跟随系统"],
  ["<tooltip>localeSetting", "界面显示的语言，默认是自动检测系统语言"],
  [
    "<tooltip>translator-enabled",
    "所有启用的的引擎，可以关闭某些不常用引擎以节省资源",
  ],
  ["<tooltip>translator-cache", "所有会自动查询并缓存结果以加速切换的翻译引擎"],
  ["<tooltip>translator-compare", "多源对比时用的引擎"],
  ["<tooltip>translator-double", "需要手动调用的引擎，目前应该是没啥用"],
  ["<tooltip>googleMirror", "谷歌翻译API镜像URL，置空则恢复到谷歌官方API的URL"],
  [
    "<tooltip>googleSource",
    "google应该是最快的，其他的可能稍慢，但是如果google用不了可以试试别的",
  ],
  ["contentFontFamily", "内容字体设置"],
  ["interfaceFontFamily", "界面字体设置"],
  [
    "<tooltip>contentFontFamily",
    "可以设置多个字体，搜索font-family就知道怎么设置",
  ],
  [
    "<tooltip>interfaceFontFamily",
    "可以设置多个字体，搜索font-family就知道怎么设置",
  ],
  ["multiSourceButton", "多源对比，可设置要对比哪些"],
  [
    "<tooltip>welcome",
    "本软件功能较为丰富，有一定上手难度，建议您先阅读用户手册，能够极大地帮助您提升使用软件的效率，解决您的疑问。\n如果您感觉本软件对您有所帮助，请在项目Github上给个star或是介绍给您的朋友，谢谢。\n本软件免费开源，如果您是以付费的方式获得本软件，那么你应该是被骗了。[○･｀Д´･ ○]",
  ],
  [
    "dragCopyWarning",
    "强烈建议您启用拖拽复制的白名单模式（设置->拖拽复制），这样在特定程序才会触发拖拽复制。拖拽复制触发时会模拟Ctrl+C，大部分情况下，这都意味着安全的文本复制，但在某些场景中可能会引起一些意料之外的问题，如剪贴板数据被覆盖、在shell中触发Ctrl+C会使正在运行的程序中断等等。启用时请务必注意，当您启用拖拽复制选项后，任何可能由此导致的损失均由您自行负责。",
  ],
  [
    "dragCopyTip",
    "在打开拖拽复制选项后，只需按住鼠标并拖拽选中文字，即可复制文字。\n强烈建议您启用拖拽复制的白名单模式（设置->拖拽复制），这样在特定程序才会触发拖拽复制",
  ],
  ["actionButtons", "动作按钮"],
  ["addNewActionButton", "添加新的动作按钮"],
  ["chooseIconPrompt", "点这里获取可选图标字段"],
  ["penerate", "鼠标穿透"],
  ["transparency", "界面透明度"],
  ["titlebarHeight", "标题栏高度"],
  ["<tooltip>penerate", "使得你可以透过窗口操作其他程序"],
  ["<tooltip>transparency", "窗口透明度"],
  ["configSnapshot", "切换配置快照"],
  ["newConfigSnapshot", "拍摄配置快照"],
  ["delConfigSnapshot", "删除配置快照"],
  ["<tooltip>translateInput", "在原文框Ctrl+Enter即可翻译，不需要点这个"],
  ["translator-compare", "多源对比引擎"],
  ["translator-cache", "快速缓存引擎"],
  ["focusSource", "专注模式原文"],
  ["<tooltip>focusSource", "在专注模式显示原文"],
  ["left_click", "点击"],
  ["right_click", "右键"],
  ["snapshotPrompt", "请输入快照名"],
  ["snapshotValidate", "快照名不能为空且不能包含'|'"],
  ["gotoSetting", "前往设置"],
  ["snapshotManage", "快照管理"],
  [
    "<tip>snapshot",
    "利用快照机制，你可以快速地在不同应用场景间切换。你只需要设置好之后，拍摄一个快照，下次切换到该快照即可。你可以在设置窗口的几乎任何地方通过右键菜单来进行快照管理，此外主窗口的大部分位置的右键菜单都有相关选项",
  ],
  [
    "<tip>focusSource",
    "你可以选择在专注模式中也显示原文，但不是固定比例的，在设置->开关中打开`专注模式原文`即可",
  ],
  ["<tip>splitRatio", "你可以通过拖动分隔线来调节对比模式中原文与译文的比例。"],
  ["<tip>engineRight", "右键引擎按钮可以标记下次复制为增量复制"],
  ["<tip>multiSourceEngines", "多源对比引擎可以通过结果框的右键菜单来快速设置"],
  ["<tip>font", "（设置->外观）界面的字体，以及正文的字体都可以设置"],
  [
    "<tip>themeColor",
    "（设置->外观）你在明亮模式设置的颜色，只会作用在明亮模式，夜间模式同理。",
  ],
  ["<tip>transparency", "（设置->外观）你可以调节界面的透明度"],
  [
    "<tip>penerate",
    "（设置->外观）鼠标穿透: 选中后，会多出一个用于拖动的按钮，除特定动作按钮外，copytranslator将不再响应鼠标事件，也就是你可以透过copytranslator的界面操作到后面的程序。一般配合透明度调节使用。",
  ],
  [
    "<tip>titlebarHeight",
    "（设置->外观）在需要时，你可以调节标题栏的高度，把标题栏变小",
  ],
  [
    "<tip>engineCache",
    "化合物翻译引擎目前默认是没有加速缓存的，但是你可以自行设置。",
  ],
  ["actionSortPrompt", "你可以通过拖拽来对这些按钮进行排序"],
]);

export const en = new Map<LocaleKey, string>([
  ["localeName", "English"],
  ["stayTop", "Stay on top"],
  ["listenClipboard", "Listen Clipboard"],
  ["autoCopy", "Auto Copy"],
  ["autoPaste", "Auto Paste"],
  ["autoPurify", "Auto Purify"],
  ["incrementalCopy", "Incremental Copy"],
  ["smartDict", "Smart Dict"],
  ["contrastDict", "Contrast Dict"],
  ["translate", "Translate"],
  ["copySource", "Copy Source"],
  ["copyResult", "Copy Result"], //复制结果
  ["pasteResult", "Paste Result"], //粘贴结果
  ["source", "Source"], // 原文
  ["result", "Result"], //译文
  ["sourceLanguage", "Source Language"],
  ["targetLanguage", "Target Language"],
  ["clear", "Clear"],
  ["helpAndUpdate", "Help And Update"],
  ["exit", "Exit"],
  ["contrast", "Contrast Mode"],
  ["focus", "Focus Mode"],
  ["autoHide", "Auto Hide"],
  ["autoFormat", "Auto Format"],
  ["autoShow", "Auto Show"],
  ["settings", "Settings"],
  ["viewSource", "View Source"],
  ["localeSetting", "Locale"],
  ["return", "Return"],
  ["retryTranslate", "Retry Translate"],
  ["dragCopy", "Drag Copy"],
  ["hideDirect", "Hide Direction"],
  ["translatorType", "Translator Type"],
  ["dictionaryType", "Dictionary Type"],
  ["evaluate", "Evaluate"],
  ["homepage", "Homepage"],
  ["neverShow", "Never Show"],
  ["smartDict", "Smart Dictionary"],
  ["userManual", "User Manual"],
  ["checkUpdate", "Check Update"],
  ["toDownload", "To Download"],
  ["changelog", "Changelog"],
  ["cancel", "Cancel"],
  ["ok", "OK"],
  ["restoreDefault", "Restore default settings"],
  ["restoreMultiDefault", "Restore these settings to default"],
  ["enumerateLayouts", "Enumerate Layouts"],
  ["enableNotify", "Enable Notify"],
  ["smartTranslate", "Smart Translate"],
  ["capture", "Screenshot Translate"],
  ["apiConfig", "API"],
  ["undo", "undo"],
  ["redo", "redo"],
  ["cut", "cut"],
  ["copy", "copy"],
  ["paste", "paste"],
  ["pasteAndMatchStyle", "pasteAndMatchStyle"],
  ["selectAll", "selectAll"],
  ["delete", "delete"],
  ["minimize", "minimize"],
  ["close", "close"],
  ["quit", "quit"],
  ["reload", "reload"],
  ["forceReload", "forcereload"],
  ["toggleDevTools", "toggledevtools"],
  ["togglefullscreen", "toggleFullScreen"],
  ["resetZoom", "resetzoom"],
  ["zoomIn", "zoomin"],
  ["zoomOut", "zoomout"],
  ["editMenu", "editMenu"],
  ["windowMenu", "windowMenu"],
  ["switches", "Switches"],
  ["options", "Options"],
  ["skipTaskbar", "Skip Taskbar"],
  ["closeAsQuit", "Close As Quit"],
  ["layoutType", "Layout"],
  ["autoCheckUpdate", "Auto Check Update"],
  ["showConfigFolder", "Show Config Folder"],
  ["editConfigFile", "Edit Config File"],
  ["colorMode", "Color Mode"],
  ["drawer", "Drawer"],
  ["translatorConfig", "Translator"],
  ["openAtLogin", "Open at login"],
  ["doubleClickCopy", "Double Click Copy"],
  ["toastTip", "Toast tip"],
  ["multiSource", "Multi-source"],
  ["enableDoubleCopyTranslate", "Double Ctrl+C Translate"],
  ["pasteDelay", "Auto paste dalay"],
  ["horizontal", "Horizontal"],
  ["vertical", "Vertical"],
  ["basic", "Basic"],
  ["advance", "Advance"],
  ["translateInput", "Translate"],
  ["openReference", "open reference link"],
  ["googleMirror", "google Mirror URL"],
  ["googleSource", "google translation provider"],
  ["fallbackTranslator", "Fallback Translator"],
  ["dragCopyConfig", "DragCopy"],
  ["dragCopyMode", "DragCopy Mode"],
  ["dragCopyGlobal", "Global DragCopy"],
  ["dragCopyWhiteList", "DragCopy WhiteList"],
  ["dragCopyBlackList", "DragCopy BlackList"],
  [
    "dragCopyPrompt",
    "If the program you want is not listed here, please try dragging and dropping on that program and try again",
  ],
  [
    "fallbackPrompt1",
    "engine does not support this language, this result is provided by the fallback engine",
  ],
  ["fallbackPrompt2", "(can be changed in settings)"],
  ["about", "About"],
  ["appearance", "Appearance"],
  ["other", "Other"],
  [
    "textAdjustPrompt",
    "In any mode, the font size can be adjusted by pressing Ctrl with the scroll wheel (or plus or minus sign). ",
  ],
  [
    "copyButton",
    "Click to copy translation and right-click to copy the original text",
  ],
  ["closeButton", "Click to minimize and right-click to exit the program"],
  [
    "engineButton",
    "Click to select another engine, right-click to switch to the listening clipboard",
  ],
  [
    "layoutButton",
    "Click to switch to different interface layouts, right-click to copy incrementally",
  ],
  [
    "<tooltip>autoCopy",
    "Automatically copy the translation results to the clipboard after translation",
  ],
  ["<tooltip>listenClipboard", "Listen and translate clipboard content"],
  ["<tooltip>dragCopy", "Drag and drop to copy the selected content"],
  ["<tooltip>doubleClickCopy", "Double-click to copy the selected content"],
  [
    "<tooltip>incrementalCopy",
    "append the newly copied content to the previous original text",
  ],
  ["<tooltip>stayTop", "The interface is always kept at the top"],
  ["<tooltip>contrastDict", "Display dictionary in non-focused mode"],
  ["<tooltip>smartTranslate", "Smart Translate"],
  ["<tooltip>autoPaste", "Simulate Ctrl+V paste after translation"],
  [
    "<tooltip>autoHide",
    "Automatically hide when close to the edge of the screen",
  ],
  ["<tooltip>autoShow", "Automatic display after translation"],
  [
    "<tooltip>autoFormat",
    "Remove the formatting problem of the clipboard text (will overwrite the clipboard content)",
  ],
  [
    "<tooltip>autoPurify",
    "Process the format of the clipboard when translating",
  ],
  ["<tooltip>skipTaskbar", "Hide status bar"],
  ["<tooltip>neverShow", "Never show warning"],
  [
    "<tooltip>dragCopyMode",
    "It is recommended to use the whitelist mode, and only respond to drag and drop copying in specific applications",
  ],
  [
    "<tooltip>closeAsQuit",
    "Close the window to exit completely instead of minimizing to the tray",
  ],
  ["<tooltip>autoCheckUpdate", "Automatically check for updates at startup"],
  [
    "<tooltip>multiSource",
    "Display and compare the translation results of multiple engines at the same time",
  ],
  [
    "<tooltip>enableDoubleCopyTranslate",
    "Double-click Ctrl+C to trigger translation, which can be used when the clipboard is closed",
  ],
  [
    "<tooltip>fallbackTranslator",
    "fallback translation engine, enabled when the current engine does not support this language",
  ],
  [
    "<tooltip>colorMode",
    "Bright or dark mode, automatically follow the system",
  ],
  [
    "<tooltip>localeSetting",
    "The language displayed on the interface, the default is the automatic detection system language",
  ],
  [
    "<tooltip>translator-enabled",
    "All enabled engines, you can turn off some infrequently used engines to save resources",
  ],
  [
    "<tooltip>translator-cache",
    "All translation engines that will automatically query and cache results to speed up switching",
  ],
  ["<tooltip>translator-compare", "Engine used for multi-source comparison"],
  [
    "<tooltip>translator-double",
    "The engine that needs to be called manually should be useless at present",
  ],
  [
    "<tooltip>googleMirror",
    "Google Translate API mirror URL, if left blank, it will restore to Google official API URL",
  ],
  [
    "<tooltip>googleSource",
    "Google should be the fastest, others may be slower, but if you can't use google, you can try other",
  ],
  ["primaryColor", "Choose Primary Color"],
  ["fontColor", "Choose Font Color"],
  ["backgroundColor", "Choose Background Color"],
  [
    "<tooltip>primaryColor",
    "You can choose any color at will. The software will update in real time, and you can see the effect directly",
  ],
  [
    "googlePrompt",
    "After v10.2.4, Google Translate uses the Google Translate API mirror by default. In theory, no additional settings are required. If there are still problems, you can try to switch to the Google translation source",
  ],
  ["contentFontFamily", "Content Font-Family"],
  ["interfaceFontFamily", "Interface Font-Family"],
  [
    "<tooltip>contentFontFamily",
    "You can set multiple fonts. Search font family to know how to set",
  ],
  [
    "<tooltip>interfaceFontFamily",
    "You can set multiple fonts. Search font family to know how to set",
  ],
  [
    "multiSourceButton",
    "Multi source comparison, you can set which to compare",
  ],
  [
    "<tooltip>welcome",
    "If you found it useful, please give me a star on GitHub or introduce to your friend.",
  ],
  [
    "dragCopyWarning",
    "It is strongly recommended that you enable the white list mode of drag replication (Settings ->DragCopy), so that drag replication will be triggered in specific programs. Ctrl + C is simulated when the drag copy is triggered. In most scenes, this means safe text copying, but in some scenes it may cause some unexpected problems, such as clipboard data being overwritten.  Triggering Ctrl + C in the shell will interrupt the running program and so on.  When you enable it, please be aware that after you enable the drag and drop option, you will be responsible for any possible losses.",
  ],
  [
    "dragCopyTip",
    "After the drag copy option is turned on, just press and hold the mouse and drag the selected text to copy the text.\nIt is strongly recommended that you enable the white list mode of drag replication (Settings ->DragCopy), so that drag replication will be triggered in specific programs.",
  ],
  ["actionButtons", "Action Button"],
  ["addNewActionButton", "Add New ActionButton"],
  ["chooseIconPrompt", "Click here to get the optional icon field"],
  ["hideWindow", "Hide Window"],
  ["closeWindow", "Close Window"],
  ["showWindow", "Show Window"],
  ["translateClipboard", "Translate Clipboard"],
  ["incrementCounter", "Incremental Copy Once"],
  ["penerate", "mouse penerate"],
  ["transparency", "UI transparency"],
  ["titlebarHeight", "Titlebar Height"],
  ["<tooltip>penerate", "Allows you to operate other programs through windows"],
  ["<tooltip>transparency", "transparency of the window"],
  ["configSnapshot", "Switch Config Snapshot"],
  ["newConfigSnapshot", "New ConfigSnapshot"],
  ["delConfigSnapshot", "Delete ConfigSnapshot"],
  [
    "<tooltip>translateInput",
    "You can translate by pressing Ctrl+Enter in the original text box. You don't need to click this",
  ],
  ["translator-compare", "Multi source comparison engines"],
  ["translator-cache", "Cached engines"],
  ["focusSource", "Focus Source"],
  ["<tooltip>focusSource", "Show Source in Focus Mode"],
  ["left_click", "Click to"],
  ["right_click", "Right Click to"],
  ["snapshotPrompt", "Please Input Snapshot Name"],
  ["snapshotValidate", "Must not be empty or contain character '|'"],
  ["gotoSetting", "Goto Setting"],
  ["snapshotManage", "Snapshot Manage"],
  [
    "<tip>snapshot",
    "Using the snapshot mechanism, you can quickly switch between different application scenarios. You only need to take a snapshot after setting it up, and switch to that snapshot next time. You can use the right-click menu to manage snapshots almost anywhere in the settings window, and the right-click menu in most places in the main window has related options",
  ],
  [
    "<tip>focusSource",
    "You can also choose to display the original text in the focus mode, but it is not a fixed ratio. You can turn on `focus mode original text` in Settings->Switch",
  ],
  [
    "<tip>splitRatio",
    "You can adjust the ratio of the original text to the target text in the comparison mode by dragging the dividing line.",
  ],
  [
    "<tip>engineRight",
    "Right click the engine button to mark the next copy as incremental copy",
  ],
  [
    "<tip>multiSourceEngines",
    "Multi-source comparison engines can be quickly set through the right-click menu of the result box",
  ],
  [
    "<tip>font",
    "(Settings->Appearance) interface font, and text font can be set",
  ],
  [
    "<tip>themeColor",
    "(Settings->Appearance) The color you set in the bright mode will only be applied in the bright mode, and the same is true for the night mode.",
  ],
  [
    "<tip>transparency",
    "(Settings->Appearance) you can adjust the transparency of the interface",
  ],
  [
    "<tip>penerate",
    "(Settings -> Appearance) mouse penetration: After selecting, there will be an additional button for dragging. Except for specific action buttons, copytranslator will no longer respond to mouse events, that is, you can operate through the interface of copytranslator to The following program. It is generally used in conjunction with transparency adjustment.",
  ],
  [
    "<tip>titlebarHeight",
    "(Settings -> Appearance) You can adjust the height of the title bar and make the title bar smaller when needed",
  ],
  [
    "<tip>engineCache",
    "The compound translation engine currently does not have accelerated caching by default, but you can set it yourself.",
  ],
  ["actionSortPrompt", "You can sort these buttons by dragging and dropping"],
]);
export type Locale = typeof en;
