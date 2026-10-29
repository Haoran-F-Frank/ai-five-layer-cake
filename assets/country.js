// 国家页渲染器：读取同目录 data.js（中文，window.COUNTRY）与 data.en.js（英文，window.COUNTRY_EN），按当前语言输出页面。
// 英文数据缺失时回退到中文数据。
(function () {
  var C = (LANG === "en" && window.COUNTRY_EN) || window.COUNTRY;
  var root = document.getElementById("app");
  var esc = function (s) { return s == null ? "" : String(s); };

  document.title = C.name + T(" · AI 五层蛋糕", " · AI Five-Layer Cake");
  document.getElementById("updated").textContent = T("数据更新：", "Data updated: ") + (C.updated || "—");

  // ---------- 通用组件 ----------
  function kv(list) {
    if (!list || !list.length) return "";
    return '<div class="kv">' + list.map(function (x) {
      return '<div><div class="k">' + x.k + '</div><div class="v">' + esc(x.v) + cite(x.refs) + "</div></div>";
    }).join("") + "</div>";
  }
  // cols: [[key, 表头], ...]；每行自动加“来源”列
  function table(rows, cols) {
    if (!rows || !rows.length) return '<p class="group-label">' + T("暂无数据，待补充。", "No data yet — to be added.") + "</p>";
    var head = cols.map(function (c) { return "<th>" + c[1] + "</th>"; }).join("") + "<th>" + T("来源", "Source") + "</th>";
    var body = rows.map(function (r) {
      return "<tr>" + cols.map(function (c) {
        var v = esc(r[c[0]]);
        return "<td>" + (v === "" ? "—" : v) + "</td>";
      }).join("") + "<td>" + cite(r.refs) + "</td></tr>";
    }).join("");
    return '<div class="table-scroll"><table><thead><tr>' + head + "</tr></thead><tbody>" + body + "</tbody></table></div>";
  }
  function para(text, refs) { return text ? "<p>" + text + cite(refs) + "</p>" : ""; }
  function layer(id, color, title, inner) {
    return '<section id="' + id + '"><h2 class="layer-head" style="--c: var(' + color + ')"><span class="dot"></span>' + title + "</h2>" + inner + "</section>";
  }

  // ---------- 地图（Leaflet，懒加载） ----------
  var maps = [];
  function mapBox(plants) {
    var pts = (plants || []).filter(function (p) { return p.lat != null && p.lng != null; });
    if (!pts.length) return "";
    var id = "map-" + maps.length;
    maps.push({ id: id, pts: pts, done: false });
    return '<div class="map" id="' + id + '"></div><div class="legend"><span style="background:var(--public)"></span>' + T("国有 / 公共", "State-owned / public") +
      '<span style="background:var(--private)"></span>' + T("私有（民营）· 坐标为近似位置", "Private · approximate locations") + "</div>";
  }
  function initMap(m) {
    if (m.done || !window.L) return;
    var el = document.getElementById(m.id);
    if (!el || el.offsetParent === null || el.clientHeight === 0) return;
    m.done = true;
    var css = getComputedStyle(document.documentElement);
    var map = L.map(el, { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18, attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
    var bounds = [];
    m.pts.forEach(function (p) {
      var color = css.getPropertyValue(p.own === "private" ? "--private" : "--public").trim();
      L.circleMarker([p.lat, p.lng], { radius: 8, color: color, fillColor: color, fillOpacity: 0.75, weight: 2 })
        .bindPopup("<b>" + p.name + "</b><br>" + esc(p.company) + "<br>" + T("装机：", "Capacity: ") + esc(p.cap || "—") +
          (p.type ? "<br>" + T("类型：", "Type: ") + p.type : ""))
        .addTo(map);
      bounds.push([p.lat, p.lng]);
    });
    if (bounds.length === 1) map.setView(bounds[0], 7); else map.fitBounds(bounds, { padding: [30, 30], maxZoom: 7 });
  }
  function initVisibleMaps() { maps.forEach(initMap); }

  // ---------- ① 能源 ----------
  var plantCols = [
    ["name", T("电厂", "Plant")], ["loc", T("位置", "Location")], ["cap", T("装机容量", "Capacity")], ["out", T("年发电量", "Annual output")],
    ["fuel", T("材料 / 燃料消耗", "Materials / fuel")], ["staff", T("运维人员", "O&M staff")],
    ["company", T("运营企业 / 所有者", "Operator / owner")], ["note", T("备注", "Notes")]
  ];
  function energy(E) {
    var allPlants = [];
    var html = para(E.intro, E.introRefs) + kv(E.overview);
    html += "<h3>" + T("全国电厂分布总览", "National overview map") + "</h3>";
    var groupsHtml = (E.groups || []).map(function (g) {
      var s = '<h3 id="e-' + g.no + '">' + g.no + " " + g.title + ' <span class="tag">' + g.kind + "</span></h3>";
      if (g.principle) s += '<div class="principle"><b>' + T("发电原理：", "How it works: ") + "</b>" + g.principle + cite(g.principleRefs) + "</div>";
      s += (g.sources || []).map(function (src) {
        var plants = src.plants || [];
        plants.forEach(function (p) { p.type = src.title; allPlants.push(p); });
        var pub = plants.filter(function (p) { return p.own !== "private"; });
        var pri = plants.filter(function (p) { return p.own === "private"; });
        var body = "";
        if (src.principle) body += '<div class="principle"><b>' + T("原理：", "Principle: ") + "</b>" + src.principle + cite(src.principleRefs) + "</div>";
        body += "<h4>" + T("全国概况", "National statistics") + "</h4>" + kv(src.stats);
        body += "<h4>" + T("位置地图（代表性电厂）", "Map (representative plants)") + "</h4>" +
          (mapBox(plants) || '<p class="group-label">' + T("暂无可标注的电厂坐标。", "No plant coordinates to show yet.") + "</p>");
        body += '<h4><span class="tag public">' + T("国有 / 公共 Public", "Public / state-owned") + "</span></h4>" + table(pub, plantCols);
        body += '<h4><span class="tag private">' + T("私有 Private", "Private") + "</span>" + T("（标明企业）", " (company named)") + "</h4>" + table(pri, plantCols);
        if (src.note) body += '<p class="group-label">' + src.note + cite(src.noteRefs) + "</p>";
        return '<details class="src"><summary>' + src.no + " " + src.title + "</summary><div class=\"body\">" + body + "</div></details>";
      }).join("");
      return s;
    }).join("");
    html += mapBox(allPlants) + groupsHtml;
    return html;
  }

  // ---------- ② 芯片 ----------
  function chips(X) {
    var d = X.design || {}, p = X.produce || {}, t = X.trade || {};
    var html = "<h3>" + T("Design 设计：主流 GPU / AI 加速器", "Design: leading GPUs / AI accelerators") + "</h3>" + para(d.intro, d.introRefs) +
      table(d.gpus, [["vendor", T("厂商", "Vendor")], ["model", T("型号", "Model")], ["year", T("发布", "Year")], ["process", T("工艺", "Process")],
        ["memory", T("显存", "Memory")], ["bandwidth", T("显存带宽", "Bandwidth")], ["compute", T("峰值算力（稠密）", "Peak compute (dense)")],
        ["power", T("功耗", "Power")], ["note", T("备注", "Notes")]]);
    html += "<h3>" + T("Design 设计：主流服务器 CPU", "Design: leading server CPUs") + "</h3>" +
      table(d.cpus, [["vendor", T("厂商", "Vendor")], ["model", T("型号", "Model")], ["arch", T("架构 / 指令集", "Architecture / ISA")],
        ["cores", T("最大核数", "Max cores")], ["process", T("工艺", "Process")], ["note", T("备注", "Notes")]]);
    html += "<h3>" + T("Produce 生产：原料与产能", "Produce: raw materials & capacity") + "</h3>" + kv(p.overview) +
      table(p.materials, [["name", T("原料", "Material")], ["use", T("用途", "Use")], ["where", T("主要产地 / 产量", "Main sources / output")]]) +
      "<h4>" + T("主要晶圆厂", "Major fabs") + "</h4>" +
      table(p.fabs, [["name", T("企业", "Company")], ["own", T("性质", "Ownership")], ["location", T("主要厂区", "Main sites")], ["node", T("最先进量产工艺", "Most advanced node in volume")]]);
    html += "<h3>" + T("Purchase 进出口", "Purchase: imports & exports") + "</h3>" + kv(t.overview) +
      table(t.types, [["type", T("类型", "Category")], ["desc", T("说明", "Description")]]);
    return html;
  }

  // ---------- ③ 基础设施 ----------
  function infra(I) {
    var dc = I.datacenters || {}, g = I.grid || {};
    return "<h3>" + T("数据中心", "Data centers") + "</h3>" + para(dc.intro, dc.introRefs) + kv(dc.overview) +
      table(dc.companies, [["company", T("公司", "Company")], ["valuation", T("市值 / 估值级别", "Market cap / valuation tier")],
        ["count", T("数据中心 / 区域数量", "Data centers / regions")], ["highlight", T("代表性 AI 数据中心", "Flagship AI sites")]]) +
      "<h3>" + T("Energy-transmit 能源传输（电网）", "Energy transmission (power grid)") + "</h3>" + para(g.intro, g.introRefs) + kv(g.overview) +
      table(g.operators, [["name", T("电网企业 / 机构", "Grid operator / body")], ["founded", T("成立 / 建设时间", "Founded")],
        ["staff", T("员工（运营维护）", "Employees")], ["scope", T("覆盖范围", "Coverage")]]);
  }

  // ---------- ④ 模型 ----------
  function models(M) {
    return para(M.intro, M.introRefs) +
      table(M.list, [["name", T("模型", "Model")], ["org", T("机构", "Developer")], ["date", T("发布", "Released")], ["arch", T("架构", "Architecture")],
        ["params", T("参数（总 / 激活）", "Params (total / active)")], ["open", T("开放权重", "Open weights")], ["ctx", T("上下文", "Context")],
        ["bench", T("代表性成绩（官方自报）", "Reported benchmark (self-reported)")]]) +
      kv(M.leaderboards);
  }

  // ---------- ⑤ 应用 ----------
  function apps(A) {
    return table(A, [["topic", T("方向", "Topic")], ["desc", T("说明", "Description")], ["examples", T("代表案例", "Examples")]]);
  }

  // ---------- 组装 ----------
  var html = "<h1>" + C.flag + " " + C.name + '</h1><p class="lead">' + (C.summary || "") + "</p>";
  html += '<div class="notice">' + T(
    "⚠️ 初版数据：由公开资料整理，“≈”表示约数或估算。每条数据后的 [n] 指向页面底部 Reference，请以原始来源为准，发现错误欢迎修正。",
    "⚠️ First-draft data compiled from public sources; “≈” marks approximations or estimates. Each [n] links to the References at the bottom — the original source prevails. Corrections welcome.") + "</div>";
  if (C.status !== "active") {
    html += '<p class="lead">' + T("该国家页面正在建设中。数据结构与中国、美国页面相同，填写本目录下的 <code>data.js</code>（中文）和 <code>data.en.js</code>（英文）即可。",
      "This country page is under construction. It uses the same structure as the China and US pages — fill in <code>data.js</code> (Chinese) and <code>data.en.js</code> (English) in this folder.") + "</p>";
  } else {
    html += '<nav class="toc"><a href="#energy">' + T("① 能源", "① Energy") + '</a><a href="#chips">' + T("② 芯片", "② Chips") +
      '</a><a href="#infrastructure">' + T("③ 基础设施", "③ Infrastructure") + '</a><a href="#models">' + T("④ 模型", "④ Models") +
      '</a><a href="#applications">' + T("⑤ 应用", "⑤ Applications") + '</a><a href="#references">Reference</a></nav>';
    html += layer("energy", "--l-energy", T("① 能源 Energy — Power Supply（能源供给）", "① Energy — Power Supply"), energy(C.energy || {}));
    html += layer("chips", "--l-chips", T("② 芯片 Chips", "② Chips"), chips(C.chips || {}));
    html += layer("infrastructure", "--l-infra", T("③ 基础设施 Infrastructure", "③ Infrastructure"), infra(C.infrastructure || {}));
    html += layer("models", "--l-models", T("④ 模型 Models", "④ Models"), models(C.models || {}));
    html += layer("applications", "--l-apps", T("⑤ 应用 Applications", "⑤ Applications"), apps(C.applications || []));
  }
  html += '<section id="method"><h2>' + T("数据说明", "Methodology") + "</h2><p>" + T(
    "数值优先采用政府统计与企业官方披露；无统一官方统计的项目（如单个电厂运维人数、燃料消耗）按行业典型值估算，标注“估算”，仅作量级参考。" +
    "公共 / 私有按控股股东性质划分：中国以国资委、地方国资控股为“国有”；美国以联邦、州、市政或合作社所有为“公共”，投资者所有的电力公司为“私有”。",
    "Figures come first from government statistics and official company disclosures. Where no official statistic exists (e.g. staffing or fuel use of a single plant), " +
    "values are estimated from typical industry figures, marked “estimate”, and are indicative only. Public vs. private follows the controlling shareholder: in China, " +
    "central or local SASAC-controlled firms are “state-owned”; in the US, federal, state, municipal or cooperative ownership is “public” and investor-owned utilities are “private”.") +
    "</p></section>";
  html += '<section id="references"><h2>Reference</h2><ol class="refs" id="ref-list"></ol></section>';
  root.innerHTML = html;
  renderRefs(document.getElementById("ref-list"));

  document.addEventListener("toggle", function () { setTimeout(initVisibleMaps, 50); }, true);
  initVisibleMaps();
})();
