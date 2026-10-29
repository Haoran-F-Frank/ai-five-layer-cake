// 引用编号：cite(["id1","id2"]) 返回 <sup>[1][2]</sup>，按首次出现顺序编号；renderRefs(el) 输出 Reference 列表。
(function () {
  var order = [];
  window.cite = function (ids) {
    if (!ids || !ids.length) return "";
    return '<sup class="cite">' + ids.map(function (id) {
      if (!window.REFS[id]) { console.warn("未定义的引用 id:", id); return "[?]"; }
      var n = order.indexOf(id);
      if (n < 0) { order.push(id); n = order.length - 1; }
      var en = window.LANG === "en" && window.REFS_EN && window.REFS_EN[id];
      var title = en ? en[1] : window.REFS[id].title;
      return '<a href="#ref-' + id + '" title="' + title.replace(/"/g, "&quot;") + '">[' + (n + 1) + "]</a>";
    }).join("") + "</sup>";
  };
  window.renderRefs = function (el) {
    el.innerHTML = order.map(function (id) {
      var r = window.REFS[id];
      var en = window.LANG === "en" && window.REFS_EN && window.REFS_EN[id];
      if (en) r = { publisher: en[0], title: en[1], url: r.url };
      var link = r.url.charAt(0) === "#" ? '<a href="' + r.url + '">' + r.url + "</a>"
        : '<a href="' + r.url + '" target="_blank" rel="noopener">' + r.url + "</a>";
      return '<li id="ref-' + id + '">' + r.publisher + ". " + r.title + ". " + link + "</li>";
    }).join("");
  };
})();
