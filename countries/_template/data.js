// 新国家模板：复制整个 _template 文件夹并改名，再填写下面的字段（结构可参考 countries/china/data.js）。
// 填好数据后把 status 改为 "active"，并在 assets/countries.js 里把该国 status 也改为 "active"。
window.COUNTRY = {
  name: "国家名",
  en: "Country",
  flag: "🏳️",
  status: "planned",
  updated: "",
  summary: "",
  energy: { intro: "", overview: [], groups: [] },
  chips: { design: { gpus: [], cpus: [] }, produce: { overview: [], materials: [], fabs: [] }, trade: { overview: [], types: [] } },
  infrastructure: { datacenters: { overview: [], companies: [] }, grid: { overview: [], operators: [] } },
  models: { list: [], leaderboards: [] },
  applications: []
};
