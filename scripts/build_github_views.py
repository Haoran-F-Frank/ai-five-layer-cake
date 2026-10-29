"""Generate GitHub-viewable versions of each country page.

For every countries/<country>/ folder this writes:
  README.md       Chinese data tables + Reference list (GitHub shows it when the folder is opened)
  README.en.md    English version
  plants.geojson  Power plants as map points (GitHub renders .geojson files as an interactive map)

Run from the project root after editing data.js / data.en.js / refs.js:
    python scripts/build_github_views.py
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://haoran-f-frank.github.io/ai-five-layer-cake"


# ---------- reading the site's .js data files ----------

def js_to_json(src):
    """Convert this project's JS object literals to JSON: drop // comments,
    quote bare keys, remove trailing commas. Strings are always double-quoted."""
    out, i, n = [], 0, len(src)
    while i < n:
        c = src[i]
        if c == '"':  # copy string verbatim
            j = i + 1
            while src[j] != '"':
                j += 2 if src[j] == "\\" else 1
            out.append(src[i:j + 1])
            i = j + 1
        elif src.startswith("//", i):
            while i < n and src[i] != "\n":
                i += 1
        elif c.isalpha() or c == "_":
            m = re.match(r"[A-Za-z_]\w*", src[i:])
            word = m.group(0)
            rest = src[i + len(word):].lstrip()
            out.append(f'"{word}"' if rest.startswith(":") else word)
            i += len(word)
        else:
            out.append(c)
            i += 1
    text = "".join(out)
    return re.sub(r",(\s*[}\]])", r"\1", text)


def read_globals(path):
    """Return {NAME: value} for every `window.NAME = <literal>;` in a .js file."""
    if not path.exists():
        return {}
    text = js_to_json(path.read_text(encoding="utf-8"))
    result = {}
    for m in re.finditer(r'window\.(\w+)\s*=\s*', text):
        start = m.end()
        value, end = json.JSONDecoder().raw_decode(text[start:])
        result[m.group(1)] = value
    return result


# ---------- markdown helpers ----------

L = {
    "zh": dict(notice="> ⚠️ 初版数据：由公开资料整理，“≈”表示约数或估算。每条数据后的 [n] 指向文末 Reference，请以原始来源为准。",
               site="🌐 交互版（地图、可展开分类、中英切换）", other="English version", other_file="README.en.md",
               planned="该国家页面正在建设中。", source="来源",
               energy="① 能源 Energy — Power Supply（能源供给）", chips="② 芯片 Chips", infra="③ 基础设施 Infrastructure",
               models="④ 模型 Models", apps="⑤ 应用 Applications", map="全国电厂分布图",
               map_note="蓝色 = 国有 / 公共，橙色 = 私有。坐标为近似位置。完整地图文件：",
               how="发电原理", stats="全国概况", public="国有 / 公共 Public", private="私有 Private（标明企业）",
               plant_cols=["电厂", "位置", "装机容量", "年发电量", "材料 / 燃料消耗", "运维人员", "运营企业 / 所有者", "备注"],
               gpu="Design 设计：主流 GPU / AI 加速器", cpu="Design 设计：主流服务器 CPU", produce="Produce 生产：原料与产能",
               fabs="主要晶圆厂", trade="Purchase 进出口",
               gpu_cols=["厂商", "型号", "发布", "工艺", "显存", "显存带宽", "峰值算力（稠密）", "功耗", "备注"],
               cpu_cols=["厂商", "型号", "架构 / 指令集", "最大核数", "工艺", "备注"],
               mat_cols=["原料", "用途", "主要产地 / 产量"], fab_cols=["企业", "性质", "主要厂区", "最先进量产工艺"],
               trade_cols=["类型", "说明"], dc="数据中心", grid="Energy-transmit 能源传输（电网）",
               dc_cols=["公司", "市值 / 估值级别", "数据中心 / 区域数量", "代表性 AI 数据中心"],
               grid_cols=["电网企业 / 机构", "成立 / 建设时间", "员工（运营维护）", "覆盖范围"],
               model_cols=["模型", "机构", "发布", "架构", "参数（总 / 激活）", "开放权重", "上下文", "代表性成绩（官方自报）"],
               app_cols=["方向", "说明", "代表案例"], method="数据说明",
               method_text="数值优先采用政府统计与企业官方披露；无统一官方统计的项目按行业典型值估算，标注“估算”，仅作量级参考。"
                           "公共 / 私有按控股股东性质划分。", generated="本文件由 scripts/build_github_views.py 根据 data.js 自动生成，请勿手动修改。",
               updated="数据更新"),
    "en": dict(notice="> ⚠️ First-draft data compiled from public sources; “≈” marks approximations or estimates. Each [n] links to the References at the end — the original source prevails.",
               site="🌐 Interactive version (maps, expandable sections, language switch)", other="中文版", other_file="README.md",
               planned="This country page is under construction.", source="Source",
               energy="① Energy — Power Supply", chips="② Chips", infra="③ Infrastructure",
               models="④ Models", apps="⑤ Applications", map="Map of power plants",
               map_note="Blue = public / state-owned, orange = private. Locations are approximate. Full map file: ",
               how="How it works", stats="National statistics", public="Public / state-owned", private="Private (company named)",
               plant_cols=["Plant", "Location", "Capacity", "Annual output", "Materials / fuel", "O&M staff", "Operator / owner", "Notes"],
               gpu="Design: leading GPUs / AI accelerators", cpu="Design: leading server CPUs", produce="Produce: raw materials & capacity",
               fabs="Major fabs", trade="Purchase: imports & exports",
               gpu_cols=["Vendor", "Model", "Year", "Process", "Memory", "Bandwidth", "Peak compute (dense)", "Power", "Notes"],
               cpu_cols=["Vendor", "Model", "Architecture / ISA", "Max cores", "Process", "Notes"],
               mat_cols=["Material", "Use", "Main sources / output"], fab_cols=["Company", "Ownership", "Main sites", "Most advanced node in volume"],
               trade_cols=["Category", "Description"], dc="Data centers", grid="Energy transmission (power grid)",
               dc_cols=["Company", "Market cap / valuation tier", "Data centers / regions", "Flagship AI sites"],
               grid_cols=["Grid operator / body", "Founded", "Employees", "Coverage"],
               model_cols=["Model", "Developer", "Released", "Architecture", "Params (total / active)", "Open weights", "Context", "Reported benchmark"],
               app_cols=["Topic", "Description", "Examples"], method="Methodology",
               method_text="Figures come first from government statistics and official company disclosures. Where no official statistic exists, "
                           "values are estimated from typical industry figures, marked “estimate”, and are indicative only. "
                           "Public vs. private follows the controlling shareholder.",
               generated="This file is generated from data.en.js by scripts/build_github_views.py — do not edit by hand.",
               updated="Data updated"),
}


class Doc:
    def __init__(self, lang, refs, refs_en):
        self.lang, self.refs, self.refs_en = lang, refs, refs_en
        self.order, self.lines = [], []

    def cite(self, ids):
        marks = []
        for rid in ids or []:
            if rid not in self.refs:
                marks.append("[?]")
                print(f"  warning: unknown ref id {rid!r}")
                continue
            if rid not in self.order:
                self.order.append(rid)
            n = self.order.index(rid) + 1
            marks.append(f"[[{n}]](#ref-{n})")
        return "<sup>" + "".join(marks) + "</sup>" if marks else ""

    def add(self, *parts):
        self.lines.extend(parts)

    def kv(self, items):
        for x in items or []:
            self.add(f"- **{x['k']}**：{x['v']} {self.cite(x.get('refs'))}" if self.lang == "zh"
                     else f"- **{x['k']}**: {x['v']} {self.cite(x.get('refs'))}")
        if items:
            self.add("")

    def table(self, rows, keys, headers):
        if not rows:
            self.add("—", "")
            return
        cell = lambda v: str(v if v not in (None, "") else "—").replace("|", "\\|").replace("\n", " ")
        self.add("| " + " | ".join(headers + [L[self.lang]["source"]]) + " |",
                 "|" + "---|" * (len(headers) + 1))
        for r in rows:
            self.add("| " + " | ".join(cell(r.get(k)) for k in keys) + f" | {self.cite(r.get('refs'))} |")
        self.add("")

    def references(self):
        anchor = "#数据说明" if self.lang == "zh" else "#methodology"
        self.add("## Reference", "")
        for n, rid in enumerate(self.order, 1):
            r = self.refs[rid]
            pub, title = (self.refs_en[rid] if self.lang == "en" and rid in self.refs_en else (r["publisher"], r["title"]))
            url = anchor if r["url"].startswith("#") else r["url"]
            self.add(f'{n}. <a id="ref-{n}"></a>{pub}. {title}. <{url}>' if not url.startswith("#")
                     else f'{n}. <a id="ref-{n}"></a>{pub}. {title}. [{url}]({url})')
        self.add("")


# ---------- building one country ----------

def plant_features(zh, en):
    """GeoJSON points for every plant with coordinates; English names come from the matching position in data.en.js."""
    feats = []
    groups_zh = zh.get("energy", {}).get("groups", [])
    groups_en = (en or {}).get("energy", {}).get("groups", [])
    for gi, g in enumerate(groups_zh):
        for si, s in enumerate(g.get("sources", [])):
            try:
                s_en = groups_en[gi]["sources"][si]
            except (IndexError, KeyError):
                s_en = {}
            for pi, p in enumerate(s.get("plants", [])):
                if p.get("lat") is None:
                    continue
                p_en = (s_en.get("plants") or [{}] * (pi + 1))[pi] if pi < len(s_en.get("plants") or []) else {}
                private = p.get("own") == "private"
                feats.append({
                    "type": "Feature",
                    "geometry": {"type": "Point", "coordinates": [p["lng"], p["lat"]]},
                    "properties": {
                        "名称 Name": p["name"] + (f" / {p_en['name']}" if p_en.get("name") else ""),
                        "类型 Type": s["title"] + (f" / {s_en['title']}" if s_en.get("title") else ""),
                        "装机 Capacity": p.get("cap") or "—",
                        "企业 Company": p_en.get("company") or p.get("company") or "—",
                        "所有制 Ownership": "私有 Private" if private else "国有/公共 Public",
                        "marker-color": "#d97706" if private else "#2563eb",
                        "marker-size": "small",
                    },
                })
    return feats


def build_readme(folder, data, lang, refs, refs_en, geo):
    t = L[lang]
    d = Doc(lang, refs, refs_en)
    other_lang = "en" if lang == "zh" else "zh"
    d.add(f"# {data.get('flag', '')} {data.get('name', folder)}", "",
          f"[{t['other']}]({t['other_file']}) · [{t['site']}]({SITE}/countries/{folder}/?lang={lang}) · "
          f"{t['updated']}: {data.get('updated') or '—'}", "")
    if data.get("summary"):
        d.add(data["summary"], "")
    d.add(t["notice"], "")

    if data.get("status") != "active":
        d.add(t["planned"], "", f"<!-- {t['generated']} -->")
        return "\n".join(d.lines)

    # ① Energy
    E = data.get("energy", {})
    d.add(f"## {t['energy']}", "")
    if E.get("intro"):
        d.add(E["intro"] + " " + d.cite(E.get("introRefs")), "")
    d.kv(E.get("overview"))
    if geo["features"]:
        d.add(f"### {t['map']}", "", "```geojson", json.dumps(geo, ensure_ascii=False), "```", "",
              f"{t['map_note']}[plants.geojson](plants.geojson)", "")
    for g in E.get("groups", []):
        d.add(f"### {g['no']} {g['title']}（{g['kind']}）" if lang == "zh" else f"### {g['no']} {g['title']} ({g['kind']})", "")
        if g.get("principle"):
            d.add(f"> **{t['how']}**：{g['principle']} {d.cite(g.get('principleRefs'))}" if lang == "zh"
                  else f"> **{t['how']}:** {g['principle']} {d.cite(g.get('principleRefs'))}", "")
        for s in g.get("sources", []):
            if s["title"] != g["title"] or s["no"] != g["no"]:
                d.add(f"#### {s['no']} {s['title']}", "")
            d.add(f"**{t['stats']}**", "")
            d.kv(s.get("stats"))
            keys = ["name", "loc", "cap", "out", "fuel", "staff", "company", "note"]
            plants = s.get("plants", [])
            d.add(f"**{t['public']}**", "")
            d.table([p for p in plants if p.get("own") != "private"], keys, t["plant_cols"])
            d.add(f"**{t['private']}**", "")
            d.table([p for p in plants if p.get("own") == "private"], keys, t["plant_cols"])
            if s.get("note"):
                d.add(f"_{s['note']}_ {d.cite(s.get('noteRefs'))}", "")

    # ② Chips
    X = data.get("chips", {})
    des, pro, tra = X.get("design", {}), X.get("produce", {}), X.get("trade", {})
    d.add(f"## {t['chips']}", "", f"### {t['gpu']}", "")
    if des.get("intro"):
        d.add(des["intro"] + " " + d.cite(des.get("introRefs")), "")
    d.table(des.get("gpus"), ["vendor", "model", "year", "process", "memory", "bandwidth", "compute", "power", "note"], t["gpu_cols"])
    d.add(f"### {t['cpu']}", "")
    d.table(des.get("cpus"), ["vendor", "model", "arch", "cores", "process", "note"], t["cpu_cols"])
    d.add(f"### {t['produce']}", "")
    d.kv(pro.get("overview"))
    d.table(pro.get("materials"), ["name", "use", "where"], t["mat_cols"])
    d.add(f"#### {t['fabs']}", "")
    d.table(pro.get("fabs"), ["name", "own", "location", "node"], t["fab_cols"])
    d.add(f"### {t['trade']}", "")
    d.kv(tra.get("overview"))
    d.table(tra.get("types"), ["type", "desc"], t["trade_cols"])

    # ③ Infrastructure
    I = data.get("infrastructure", {})
    dc, gr = I.get("datacenters", {}), I.get("grid", {})
    d.add(f"## {t['infra']}", "", f"### {t['dc']}", "")
    if dc.get("intro"):
        d.add(dc["intro"] + " " + d.cite(dc.get("introRefs")), "")
    d.kv(dc.get("overview"))
    d.table(dc.get("companies"), ["company", "valuation", "count", "highlight"], t["dc_cols"])
    d.add(f"### {t['grid']}", "")
    if gr.get("intro"):
        d.add(gr["intro"] + " " + d.cite(gr.get("introRefs")), "")
    d.kv(gr.get("overview"))
    d.table(gr.get("operators"), ["name", "founded", "staff", "scope"], t["grid_cols"])

    # ④ Models
    M = data.get("models", {})
    d.add(f"## {t['models']}", "")
    if M.get("intro"):
        d.add(M["intro"] + " " + d.cite(M.get("introRefs")), "")
    d.table(M.get("list"), ["name", "org", "date", "arch", "params", "open", "ctx", "bench"], t["model_cols"])
    d.kv(M.get("leaderboards"))

    # ⑤ Applications
    d.add(f"## {t['apps']}", "")
    d.table(data.get("applications"), ["topic", "desc", "examples"], t["app_cols"])

    d.add(f"## {t['method']}", "", t["method_text"], "")
    d.references()
    d.add(f"<!-- {t['generated']} -->", "")
    return "\n".join(d.lines)


def main():
    g = read_globals(ROOT / "assets" / "refs.js")
    refs = g["REFS"]
    refs_en = {k: tuple(v) for k, v in g.get("REFS_EN", {}).items()}
    for folder in sorted(p for p in (ROOT / "countries").iterdir() if p.is_dir() and not p.name.startswith("_")):
        zh = read_globals(folder / "data.js").get("COUNTRY")
        en = read_globals(folder / "data.en.js").get("COUNTRY_EN")
        if not zh:
            continue
        print(f"{folder.name}:")
        geo = {"type": "FeatureCollection", "features": plant_features(zh, en)}
        (folder / "README.md").write_text(build_readme(folder.name, zh, "zh", refs, refs_en, geo), encoding="utf-8")
        (folder / "README.en.md").write_text(build_readme(folder.name, en or zh, "en", refs, refs_en, geo), encoding="utf-8")
        if geo["features"]:
            (folder / "plants.geojson").write_text(json.dumps(geo, ensure_ascii=False, indent=1), encoding="utf-8")
        print(f"  README.md, README.en.md" + (f", plants.geojson ({len(geo['features'])} plants)" if geo["features"] else ""))


if __name__ == "__main__":
    main()
