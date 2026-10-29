// 语言切换：?lang=en / ?lang=zh 优先，其次记住上次选择，最后按浏览器语言。
// 页面里用 <span lang="zh">…</span><span lang="en">…</span> 写静态双语文字（CSS 只显示当前语言）；脚本里用 T("中文", "English")。
(function () {
  var q = new URLSearchParams(location.search).get("lang");
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = q || saved || ((navigator.language || "zh").toLowerCase().indexOf("zh") === 0 ? "zh" : "en");
  if (lang !== "en") lang = "zh";
  try { localStorage.setItem("lang", lang); } catch (e) {}

  window.LANG = lang;
  window.T = function (zh, en) { return lang === "en" ? en : zh; };
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  document.documentElement.setAttribute("data-lang", lang);

  window.toggleLang = function () {
    var next = lang === "en" ? "zh" : "en";
    try { localStorage.setItem("lang", next); } catch (e) {}
    var url = new URL(location.href);
    url.searchParams.set("lang", next);
    location.href = url.toString();
  };
})();
