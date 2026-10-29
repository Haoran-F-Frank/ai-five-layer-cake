# 🇨🇳 中国（中国大陆）

[English version](README.en.md) · [🌐 交互版（地图、可展开分类、中英切换）](https://haoran-f-frank.github.io/ai-five-layer-cake/countries/china/?lang=zh) · 数据更新: 2026-10-29

全球最大的电力生产国与可再生能源装机国；芯片以设计与成熟制程制造为主、高端 AI 芯片受出口管制；开源大模型活跃。

> ⚠️ 初版数据：由公开资料整理，“≈”表示约数或估算。每条数据后的 [n] 指向文末 Reference，请以原始来源为准。

## ① 能源 Energy — Power Supply（能源供给）

中国发电以煤电为主体，但风电、光伏装机增长极快。电力企业以中央与地方国有企业为主，私营资本主要集中在分布式光伏、自备电厂和部分新能源项目。 <sup>[[1]](#ref-1)[[2]](#ref-2)</sup>

- **总发电装机（2024 年底）**：≈ 33.5 亿千瓦（3,350 GW） <sup>[[1]](#ref-1)</sup>
- **全年发电量（2024）**：≈ 10.1 万亿千瓦时 <sup>[[3]](#ref-3)[[2]](#ref-2)</sup>
- **风电 + 太阳能装机（2024 年底）**：≈ 14.1 亿千瓦，已超过火电 <sup>[[1]](#ref-1)</sup>
- **数据中心用电（2024，IEA 估算）**：约占全球数据中心用电的 1/4 <sup>[[4]](#ref-4)</sup>

### 全国电厂分布图

```geojson
{"type": "FeatureCollection", "features": [{"type": "Feature", "geometry": {"type": "Point", "coordinates": [111.33, 40.2]}, "properties": {"名称 Name": "大唐托克托发电厂 / Datang Tuoketuo Power Plant", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "6,720 MW", "企业 Company": "China Datang (central SOE)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [121.3, 28.13]}, "properties": {"名称 Name": "华能玉环电厂 / Huaneng Yuhuan Power Plant", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "4,000 MW（4×1000 MW 超超临界）", "企业 Company": "China Huaneng (central SOE)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [112.88, 21.86]}, "properties": {"名称 Name": "国能台山电厂 / CHN Energy Taishan Power Plant", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "≈ 5,000 MW", "企业 Company": "China Energy Investment Corp. (central SOE)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [116.25, 36.58]}, "properties": {"名称 Name": "信发集团自备电厂群 / Xinfa Group captive plants", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "数千 MW（口径不一，待核实）", "企业 Company": "Xinfa Group (private)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [117.74, 36.86]}, "properties": {"名称 Name": "魏桥 / 中国宏桥自备电厂群 / Weiqiao / China Hongqiao captive plants", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "数千 MW（口径不一，待核实）", "企业 Company": "Weiqiao Pioneering Group / China Hongqiao (private, HKEX 1378)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [116.53, 39.89]}, "properties": {"名称 Name": "华能北京热电厂（燃气热电） / Huaneng Beijing Thermal Power Plant (gas CHP)", "类型 Type": "天然气发电厂 / Natural gas power plants", "装机 Capacity": "待核实", "企业 Company": "China Huaneng / Beijing Energy Group", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [111.003, 30.823]}, "properties": {"名称 Name": "三峡水电站 / Three Gorges Dam", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "22,500 MW", "企业 Company": "China Three Gorges Corp. (central SOE)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [102.905, 27.215]}, "properties": {"名称 Name": "白鹤滩水电站 / Baihetan", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "16,000 MW", "企业 Company": "China Three Gorges Corp.", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [103.65, 28.26]}, "properties": {"名称 Name": "溪洛渡水电站 / Xiluodu", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 13,860 MW", "企业 Company": "China Three Gorges Corp.", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [102.63, 26.33]}, "properties": {"名称 Name": "乌东德水电站 / Wudongde", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "10,200 MW", "企业 Company": "China Three Gorges Corp.", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [104.4, 28.64]}, "properties": {"名称 Name": "向家坝水电站 / Xiangjiaba", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 6,400 MW", "企业 Company": "China Three Gorges Corp.", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [100.43, 26.8]}, "properties": {"名称 Name": "金安桥水电站 / Jin'anqiao", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 2,400 MW", "企业 Company": "Hanergy Group (private; historical controlling owner — current ownership to be verified)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [112.26, 21.71]}, "properties": {"名称 Name": "阳江核电站 / Yangjiang", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "6 台 × ≈1,086 MW ≈ 6,500 MW", "企业 Company": "China General Nuclear (CGN)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [112.98, 21.92]}, "properties": {"名称 Name": "台山核电站 / Taishan", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "2 × 1,750 MW（EPR）", "企业 Company": "CGN (France's EDF holds 30%)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [114.54, 22.6]}, "properties": {"名称 Name": "大亚湾核电站 / Daya Bay", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "2 × ≈984 MW", "企业 Company": "CGN (Hong Kong's CLP holds 25%)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [119.46, 34.69]}, "properties": {"名称 Name": "田湾核电站 / Tianwan", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "6 台在运 ≈ 6,600 MW，另有机组在建", "企业 Company": "China National Nuclear Corp. (CNNC)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [119.45, 25.44]}, "properties": {"名称 Name": "福清核电站 / Fuqing", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "6 台 ≈ 6,700 MW（含“华龙一号”示范机组）", "企业 Company": "CNNC", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [121.48, 39.8]}, "properties": {"名称 Name": "红沿河核电站 / Hongyanhe", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "6 台 ≈ 6,700 MW", "企业 Company": "CGN / SPIC", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [122.53, 36.97]}, "properties": {"名称 Name": "石岛湾高温气冷堆 / Shidaowan HTR-PM", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "≈ 200 MW", "企业 Company": "China Huaneng", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [97.0, 40.3]}, "properties": {"名称 Name": "酒泉风电基地 / Jiuquan Wind Power Base", "类型 Type": "风力发电厂 / Wind farms", "装机 Capacity": "规划千万千瓦级（≈ 20 GW）", "企业 Company": "Several generators (Datang, Huaneng, CHN Energy, SPIC, …)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [121.4, 32.5]}, "properties": {"名称 Name": "江苏如东海上风电群 / Rudong offshore wind cluster", "类型 Type": "风力发电厂 / Wind farms", "装机 Capacity": "数 GW（多项目合计）", "企业 Company": "China Three Gorges, CHN Energy (Longyuan Power) and others", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [100.6, 36.15]}, "properties": {"名称 Name": "青海共和光伏园（塔拉滩） / Gonghe PV Park (Talatan)", "类型 Type": "太阳能发电厂 / Solar power plants", "装机 Capacity": "多 GW 级（多项目合计）", "企业 Company": "SPIC (Huanghe Hydropower) and others", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [90.48, 30.08]}, "properties": {"名称 Name": "羊八井地热电站 / Yangbajain Geothermal Power Station", "类型 Type": "地热发电厂 / Geothermal power plants", "装机 Capacity": "≈ 25 MW", "企业 Company": "Tibet local SOE", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [121.2, 28.35]}, "properties": {"名称 Name": "江厦潮汐试验电站 / Jiangxia Tidal Power Station", "类型 Type": "潮汐能发电厂 / Tidal power plants", "装机 Capacity": "≈ 4 MW", "企业 Company": "CHN Energy (Longyuan Power)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [94.42, 40.08]}, "properties": {"名称 Name": "敦煌熔盐塔式光热电站 / Dunhuang molten-salt tower CSP plant", "类型 Type": "其他发电厂（光热等） / Other plants (CSP etc.)", "装机 Capacity": "100 MW", "企业 Company": "Shouhang High-Tech (private, SZSE 002665)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}]}
```

蓝色 = 国有 / 公共，橙色 = 私有。坐标为近似位置。完整地图文件：[plants.geojson](plants.geojson)

### 1.1 火力发电（非可持续）

> **发电原理**：燃烧化石燃料加热锅炉产生高温高压蒸汽（或燃气直接驱动燃气轮机），推动汽轮机带动发电机，把化学能 → 热能 → 机械能 → 电能。 <sup>[[2]](#ref-2)</sup>

#### 1.1.1 煤炭发电厂

**全国概况**

- **电厂数量**：≈ 1,000+ 座在运煤电厂（按电厂计） <sup>[[5]](#ref-5)</sup>
- **装机容量**：≈ 11.9 亿千瓦（2024 年底） <sup>[[1]](#ref-1)[[2]](#ref-2)</sup>
- **年发电量**：≈ 5.5–5.8 万亿千瓦时（约占全国 55%+） <sup>[[2]](#ref-2)[[6]](#ref-6)</sup>
- **材料消耗**：供电煤耗 ≈ 300 克标准煤/千瓦时；全年电煤 ≈ 25 亿吨原煤（估算） <sup>[[2]](#ref-2)[[7]](#ref-7)</sup>
- **运维人员**：1 GW 现代化电厂 ≈ 300–600 人（估算） <sup>[[7]](#ref-7)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 大唐托克托发电厂 | 内蒙古呼和浩特 托克托县 | 6,720 MW | — | ≈ 1,700 万吨原煤/年（估算） | — | 中国大唐集团（央企） | 全球最大煤电厂之一 | <sup>[[5]](#ref-5)[[8]](#ref-8)[[7]](#ref-7)</sup> |
| 华能玉环电厂 | 浙江台州 玉环 | 4,000 MW（4×1000 MW 超超临界） | — | — | — | 中国华能集团（央企） | 国内首座百万千瓦超超临界机组电厂 | <sup>[[5]](#ref-5)[[9]](#ref-9)</sup> |
| 国能台山电厂 | 广东江门 台山 | ≈ 5,000 MW | — | — | — | 国家能源投资集团（央企） | — | <sup>[[5]](#ref-5)[[10]](#ref-10)</sup> |

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 信发集团自备电厂群 | 山东聊城 茌平 | 数千 MW（口径不一，待核实） | — | — | — | 信发集团（民营） | 为电解铝供电的自备电厂 | <sup>[[5]](#ref-5)</sup> |
| 魏桥 / 中国宏桥自备电厂群 | 山东滨州 邹平 | 数千 MW（口径不一，待核实） | — | — | — | 魏桥创业集团 / 中国宏桥（民营，港股 1378） | 为电解铝供电的自备电厂 | <sup>[[5]](#ref-5)</sup> |

#### 1.1.2 石油发电厂

**全国概况**

- **占比**：燃油发电占全国发电量 < 1%，主要为海岛、备用和应急电源 <sup>[[6]](#ref-6)[[2]](#ref-2)</sup>
- **材料消耗**：柴油 / 重油，约 0.2–0.25 kg/千瓦时（估算） <sup>[[7]](#ref-7)</sup>

**国有 / 公共 Public**

—

**私有 Private（标明企业）**

—

_中国大陆基本无大型燃油电厂，故不列代表性电厂。_ 

#### 1.1.3 天然气发电厂

**全国概况**

- **装机容量**：≈ 1.4 亿千瓦（2024 年底，估） <sup>[[2]](#ref-2)</sup>
- **年发电量**：≈ 3,000 亿千瓦时（约 3%） <sup>[[6]](#ref-6)[[2]](#ref-2)</sup>
- **材料消耗**：联合循环 ≈ 0.18–0.2 立方米天然气/千瓦时（估算） <sup>[[7]](#ref-7)</sup>
- **分布**：集中在京津冀、长三角、珠三角，承担调峰与热电联产 <sup>[[11]](#ref-11)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 华能北京热电厂（燃气热电） | 北京 朝阳区 | 待核实 | — | 天然气 | — | 中国华能集团 / 北京能源集团 | 北京“煤改气”后的主力热电中心之一 | <sup>[[11]](#ref-11)[[9]](#ref-9)</sup> |

**私有 Private（标明企业）**

—

_燃气电厂以国有发电集团和地方能源国企为主，暂未收录代表性私营燃气电厂。_ 

### 1.2 水力发电（非可持续（按本站分类；国际上通常归为可再生能源））

> **发电原理**：利用水库与下游的水位落差，让水流冲击水轮机，带动发电机发电；势能 → 动能 → 电能。 <sup>[[12]](#ref-12)</sup>

#### 1.2.1 堤坝及内部发电厂

**全国概况**

- **装机容量**：≈ 4.4 亿千瓦（2024 年底，含抽水蓄能） <sup>[[1]](#ref-1)</sup>
- **年发电量**：≈ 1.4 万亿千瓦时（2024） <sup>[[2]](#ref-2)</sup>
- **电站数量**：农村小水电站 ≈ 4 万座以上 <sup>[[13]](#ref-13)</sup>
- **材料**：无燃料消耗；建设期大量混凝土与钢材 <sup>[[12]](#ref-12)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 三峡水电站 | 湖北宜昌 | 22,500 MW | 2020 年创纪录 ≈ 1,118 亿千瓦时 | — | — | 中国长江三峡集团（央企） | 世界装机最大水电站 | <sup>[[12]](#ref-12)[[14]](#ref-14)</sup> |
| 白鹤滩水电站 | 四川宁南 / 云南巧家 | 16,000 MW | — | — | — | 中国长江三峡集团 | 单机 1,000 MW | <sup>[[12]](#ref-12)[[14]](#ref-14)</sup> |
| 溪洛渡水电站 | 四川雷波 / 云南永善 | ≈ 13,860 MW | — | — | — | 中国长江三峡集团 | — | <sup>[[12]](#ref-12)[[14]](#ref-14)</sup> |
| 乌东德水电站 | 四川会东 / 云南禄劝 | 10,200 MW | — | — | — | 中国长江三峡集团 | — | <sup>[[12]](#ref-12)[[14]](#ref-14)</sup> |
| 向家坝水电站 | 四川宜宾 / 云南水富 | ≈ 6,400 MW | — | — | — | 中国长江三峡集团 | — | <sup>[[12]](#ref-12)[[14]](#ref-14)</sup> |

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 金安桥水电站 | 云南丽江 | ≈ 2,400 MW | — | — | — | 汉能集团（民营，历史上的控股方；现股权待核实） | 少见的民营大型水电站 | <sup>[[14]](#ref-14)</sup> |

### 1.3 核能发电（非可持续（低碳））

> **发电原理**：铀-235 等重核在反应堆中发生可控链式裂变，释放的热量加热冷却剂产生蒸汽，驱动汽轮发电机组。 <sup>[[15]](#ref-15)</sup>

#### 1.3.1 核裂变发电厂

**全国概况**

- **在运机组**：≈ 58 台（2025 年），另有约 30 台在建，在建规模全球第一 <sup>[[16]](#ref-16)[[17]](#ref-17)</sup>
- **装机容量**：≈ 6,000 万千瓦（60 GW） <sup>[[16]](#ref-16)[[1]](#ref-1)</sup>
- **年发电量**：≈ 4,500 亿千瓦时（2024，约 4.5%） <sup>[[16]](#ref-16)[[2]](#ref-2)</sup>
- **材料消耗**：每 GW 每年约 20–25 吨低浓铀燃料（估算） <sup>[[15]](#ref-15)[[7]](#ref-7)</sup>
- **运维人员**：双机组电站 ≈ 800–1,200 人（估算） <sup>[[7]](#ref-7)</sup>
- **所有制**：核电站须由具备资质的国有核电企业控股（中核、中广核、国家电投、华能） <sup>[[16]](#ref-16)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 阳江核电站 | 广东阳江 | 6 台 × ≈1,086 MW ≈ 6,500 MW | — | — | — | 中国广核集团 | — | <sup>[[18]](#ref-18)[[17]](#ref-17)</sup> |
| 台山核电站 | 广东台山 | 2 × 1,750 MW（EPR） | — | — | — | 中国广核集团（法国 EDF 参股 30%） | 全球首台投运的 EPR 机组 | <sup>[[18]](#ref-18)[[17]](#ref-17)</sup> |
| 大亚湾核电站 | 广东深圳 | 2 × ≈984 MW | — | — | — | 中国广核集团（香港中电集团参股 25%） | 中国大陆首座大型商用核电站 | <sup>[[18]](#ref-18)[[17]](#ref-17)</sup> |
| 田湾核电站 | 江苏连云港 | 6 台在运 ≈ 6,600 MW，另有机组在建 | — | — | — | 中国核工业集团 | — | <sup>[[19]](#ref-19)[[17]](#ref-17)</sup> |
| 福清核电站 | 福建福清 | 6 台 ≈ 6,700 MW（含“华龙一号”示范机组） | — | — | — | 中国核工业集团 | — | <sup>[[19]](#ref-19)[[17]](#ref-17)</sup> |
| 红沿河核电站 | 辽宁大连 瓦房店 | 6 台 ≈ 6,700 MW | — | — | — | 中广核 / 国家电投 | 东北最大核电站 | <sup>[[18]](#ref-18)[[20]](#ref-20)[[17]](#ref-17)</sup> |
| 石岛湾高温气冷堆 | 山东威海 荣成 | ≈ 200 MW | — | 球形燃料元件 | — | 中国华能集团 | 全球首座商用第四代高温气冷堆 | <sup>[[9]](#ref-9)[[17]](#ref-17)</sup> |

**私有 Private（标明企业）**

—

_按现行政策，核电站无私营控股案例；民营与港资企业仅以少数股权参与。_ 

### 1.4 风力发电厂（可持续）

> **发电原理**：风推动叶片旋转，经齿轮箱（或直驱）带动发电机，把空气动能转为电能；海上风电风速更稳、利用小时更高。 <sup>[[21]](#ref-21)</sup>

**全国概况**

- **装机容量**：≈ 5.2 亿千瓦（2024 年底） <sup>[[1]](#ref-1)</sup>
- **年发电量**：≈ 1 万亿千瓦时（2024，约 10%） <sup>[[2]](#ref-2)[[6]](#ref-6)</sup>
- **材料**：每 MW 约 100–180 吨钢材；直驱机型使用稀土永磁（估算） <sup>[[7]](#ref-7)</sup>
- **分布**：“三北”大型基地（甘肃、内蒙古、新疆）+ 东南沿海海上风电 <sup>[[21]](#ref-21)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 酒泉风电基地 | 甘肃酒泉 | 规划千万千瓦级（≈ 20 GW） | — | — | — | 多家发电集团（大唐、华能、国家能源、国家电投等） | 中国首个千万千瓦级风电基地 | <sup>[[21]](#ref-21)</sup> |
| 江苏如东海上风电群 | 江苏南通 如东 | 数 GW（多项目合计） | — | — | — | 三峡集团、国家能源集团（龙源电力）等 | — | <sup>[[21]](#ref-21)[[12]](#ref-12)</sup> |

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 远景能源旗下风电场（多地） | 全国多地 | 待核实 | — | — | — | 远景科技集团（民营） | 整机制造商兼风电场投资运营 | <sup>[[21]](#ref-21)</sup> |

### 1.5 太阳能发电厂（可持续）

> **发电原理**：光伏：半导体（晶硅）吸收光子产生电子-空穴对形成电流（光生伏特效应）；光热：聚光加热工质产生蒸汽发电。 <sup>[[22]](#ref-22)</sup>

**全国概况**

- **装机容量**：≈ 8.9 亿千瓦（2024 年底） <sup>[[1]](#ref-1)</sup>
- **其中分布式**：≈ 40% 为分布式光伏（大量为民营与家庭所有） <sup>[[1]](#ref-1)</sup>
- **年发电量**：≈ 8,000+ 亿千瓦时（2024） <sup>[[2]](#ref-2)[[6]](#ref-6)</sup>
- **材料**：多晶硅、银浆、光伏玻璃、铝边框；中国占全球光伏制造各环节 80% 以上 <sup>[[22]](#ref-22)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 青海共和光伏园（塔拉滩） | 青海海南州 共和县 | 多 GW 级（多项目合计） | — | — | — | 国家电投（黄河水电）等 | “光伏+治沙+牧羊”样板 | <sup>[[23]](#ref-23)[[20]](#ref-20)</sup> |

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 正泰分布式光伏（多地） | 浙江等全国多地 | 待核实 | — | — | — | 正泰集团（民营） | 户用与工商业屋顶光伏 | <sup>[[23]](#ref-23)</sup> |

### 1.6 生物质发电厂（可持续）

> **发电原理**：燃烧农林废弃物、生活垃圾或沼气，产生蒸汽驱动汽轮机发电，原理与火电类似但燃料可再生。 <sup>[[1]](#ref-1)</sup>

**全国概况**

- **装机容量**：≈ 4,500 万千瓦（含垃圾焚烧发电，估） <sup>[[1]](#ref-1)</sup>
- **年发电量**：≈ 2,000 亿千瓦时（估） <sup>[[6]](#ref-6)</sup>
- **材料**：秸秆、林业剩余物、城市生活垃圾 <sup>[[1]](#ref-1)</sup>

**国有 / 公共 Public**

—

**私有 Private（标明企业）**

—

_代表企业：光大环境（国企，垃圾焚烧发电）、国能生物发电等；具体电厂待补充。_ 

### 1.7 地热发电厂（可持续）

> **发电原理**：抽取地下高温热水或蒸汽，直接或经换热（双工质循环）驱动汽轮机发电。 <sup>[[1]](#ref-1)</sup>

**全国概况**

- **装机容量**：规模很小（数十 MW 级），以地热供暖为主 <sup>[[1]](#ref-1)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 羊八井地热电站 | 西藏拉萨 当雄县 | ≈ 25 MW | — | — | — | 西藏地方国有企业 | 中国最早的大型地热电站（1977 年起） | <sup>[[1]](#ref-1)</sup> |

**私有 Private（标明企业）**

—

### 1.8 潮汐能发电厂（可持续）

> **发电原理**：在海湾筑坝形成水库，利用涨落潮的水位差推动水轮机发电。 <sup>[[1]](#ref-1)</sup>

**全国概况**

- **装机容量**：示范规模（MW 级） <sup>[[1]](#ref-1)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 江厦潮汐试验电站 | 浙江台州 温岭 | ≈ 4 MW | — | — | — | 国家能源集团（龙源电力） | 中国最大的潮汐电站 | <sup>[[10]](#ref-10)</sup> |

**私有 Private（标明企业）**

—

### 1.9 其他发电厂（可持续）

> **发电原理**：如光热（熔盐塔式）、氢能燃料电池等；抽水蓄能、电化学储能属于“储能”，本身不净发电。 <sup>[[1]](#ref-1)</sup>

#### 1.9 其他发电厂（光热等）

**全国概况**

- **光热装机**：数百 MW 级，集中在甘肃、青海 <sup>[[1]](#ref-1)</sup>

**国有 / 公共 Public**

—

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| 敦煌熔盐塔式光热电站 | 甘肃敦煌 | 100 MW | — | — | — | 首航高科（民营，A 股 002665） | — | <sup>[[23]](#ref-23)</sup> |

## ② 芯片 Chips

### Design 设计：主流 GPU / AI 加速器

国产 AI 加速器以华为昇腾为代表；由于美国出口管制，NVIDIA 只能向中国供应降规格产品。下表峰值算力取 BF16/FP16 稠密值，非官方数据注明“报道”。 <sup>[[24]](#ref-24)</sup>

| 厂商 | 型号 | 发布 | 工艺 | 显存 | 显存带宽 | 峰值算力（稠密） | 功耗 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|---|
| 华为 | 昇腾 910B | 2023 | 7nm 级（报道） | 64 GB HBM2e | — | ≈ 320 TFLOPS FP16（报道） | ≈ 400 W | 国产训练主力 | <sup>[[25]](#ref-25)[[26]](#ref-26)</sup> |
| 华为 | 昇腾 910C | 2025 | 7nm 级（报道） | 128 GB HBM | ≈ 3.2 TB/s（报道） | ≈ 780 TFLOPS BF16（报道） | — | 双 die 封装；CloudMatrix 384 超节点 | <sup>[[26]](#ref-26)</sup> |
| 寒武纪 | 思元 370-X8 | 2022 | 7nm | 48 GB LPDDR5 | 614 GB/s | 256 TOPS INT8 | 250 W | — | <sup>[[27]](#ref-27)</sup> |
| 海光信息 | 深算系列 DCU | — | — | — | — | 参数未完全公开 | — | 类 CUDA 生态（ROCm 路线） | <sup>[[28]](#ref-28)</sup> |

### Design 设计：主流服务器 CPU

| 厂商 | 型号 | 架构 / 指令集 | 最大核数 | 工艺 | 备注 | 来源 |
|---|---|---|---|---|---|---|
| 华为 | 鲲鹏 920 | ARMv8.2 | 64 | 7nm | — | <sup>[[29]](#ref-29)</sup> |
| 海光信息 | 海光 7000 系列 | x86（AMD Zen 授权衍生） | 见官网 | — | — | <sup>[[28]](#ref-28)</sup> |
| 龙芯中科 | 3D5000 | LoongArch（自主指令集） | 32 | — | 两颗 3C5000 合封 | <sup>[[30]](#ref-30)</sup> |
| 飞腾 | 腾云 S2500 | ARMv8 | 64 | 16nm | — | <sup>[[31]](#ref-31)</sup> |

### Produce 生产：原料与产能

- **集成电路产量（2024）**：≈ 4,514 亿块 <sup>[[3]](#ref-3)</sup>
- **最先进量产工艺**：中芯国际 7nm 级（N+2），无 EUV 光刻机 <sup>[[32]](#ref-32)</sup>

| 原料 | 用途 | 主要产地 / 产量 | 来源 |
|---|---|---|---|
| 硅（多晶硅 → 硅片） | 晶圆基底 | 中国多晶硅产量占全球 90% 左右（多为光伏级）；半导体级硅片仍依赖信越、SUMCO 等进口 | <sup>[[22]](#ref-22)[[33]](#ref-33)</sup> |
| 镓 | GaN 功率 / 射频芯片 | 中国占全球原生镓产量约 98%；2023 年 8 月起实施出口管制 | <sup>[[33]](#ref-33)[[34]](#ref-34)</sup> |
| 锗 | 红外、光纤、SiGe 芯片 | 中国为最大生产国；同步实施出口管制 | <sup>[[33]](#ref-33)[[34]](#ref-34)</sup> |
| 稀土 | 抛光材料、靶材、磁体 | 中国稀土开采约占全球 70% | <sup>[[33]](#ref-33)</sup> |

#### 主要晶圆厂

| 企业 | 性质 | 主要厂区 | 最先进量产工艺 | 来源 |
|---|---|---|---|---|
| 中芯国际 SMIC | 国有资本主导，上市公司 | 上海、北京、深圳、天津 | 7nm 级 | <sup>[[32]](#ref-32)</sup> |
| 华虹集团 | 国有 | 上海、无锡 | 成熟制程（28nm+） | <sup>[[32]](#ref-32)</sup> |
| 长江存储 YMTC | 国有资本主导 | 武汉 | 3D NAND | <sup>[[32]](#ref-32)</sup> |
| 长鑫存储 CXMT | 国有资本主导 | 合肥 | DRAM | <sup>[[32]](#ref-32)</sup> |

### Purchase 进出口

- **集成电路进口（2024）**：≈ 5,492 亿个，≈ 3,856 亿美元 <sup>[[35]](#ref-35)</sup>
- **集成电路出口（2024）**：≈ 2,981 亿个，≈ 1,595 亿美元 <sup>[[35]](#ref-35)</sup>
- **贸易逆差**：≈ 2,260 亿美元，集成电路长期是最大单项进口商品之一 <sup>[[35]](#ref-35)</sup>

| 类型 | 说明 | 来源 |
|---|---|---|
| 高端 AI GPU | 受美国 2022、2023、2024 年多轮出口管制，A100/H100/B200 等禁止对华出口；仅可进口降规格型号（如 H20，后续许可政策多次变化） | <sup>[[24]](#ref-24)</sup> |
| 存储芯片（DRAM / NAND / HBM） | 进口金额占比大；HBM 已被纳入管制 | <sup>[[35]](#ref-35)[[24]](#ref-24)</sup> |
| 处理器与控制器 | CPU、MCU、SoC 等，进口来源以中国台湾、韩国、东南亚为主 | <sup>[[35]](#ref-35)</sup> |
| 出口：成熟制程芯片 | 分立器件、模拟、功率芯片等 | <sup>[[35]](#ref-35)</sup> |

## ③ 基础设施 Infrastructure

### 数据中心

中国以“东数西算”统筹布局：在西部能源富集地区建设算力枢纽，承接东部算力需求。 <sup>[[36]](#ref-36)</sup>

- **国家算力枢纽**：8 个国家枢纽节点、10 个国家数据中心集群 <sup>[[36]](#ref-36)</sup>
- **算力总规模（2024 年底）**：≈ 280 EFLOPS <sup>[[37]](#ref-37)</sup>
- **在用标准机架**：≈ 800 万架以上 <sup>[[37]](#ref-37)</sup>

| 公司 | 市值 / 估值级别 | 数据中心 / 区域数量 | 代表性 AI 数据中心 | 来源 |
|---|---|---|---|---|
| 阿里云（阿里巴巴） | ≥ 1,000 亿美元 | 全球 ≈ 29 个地域、≈ 90 个可用区 | 张北、乌兰察布、河源数据中心 | <sup>[[38]](#ref-38)</sup> |
| 华为云（华为） | 非上市（≥ 1,000 亿美元级） | 全球 30+ 地域 | 贵安、乌兰察布、芜湖 | <sup>[[39]](#ref-39)</sup> |
| 腾讯云（腾讯） | ≥ 1,000 亿美元 | 全球 20+ 地域 | 清远、怀来、仪征 | <sup>[[40]](#ref-40)</sup> |
| 火山引擎（字节跳动） | 非上市（≥ 1,000 亿美元级） | 待核实 | 乌兰察布、大同等 | <sup>[[41]](#ref-41)</sup> |
| 天翼云（中国电信） | ≥ 100 亿美元 | 全国 IDC 资源最多的运营商之一 | 京津冀、长三角、粤港澳 | <sup>[[42]](#ref-42)</sup> |
| 万国数据 GDS | ≥ 10 亿美元 | 100+ 数据中心（含在建） | 上海、北京周边 | <sup>[[43]](#ref-43)</sup> |

### Energy-transmit 能源传输（电网）

中国电网由国家电网、南方电网两大央企及内蒙古电力集团运营，建成全球规模最大的特高压交直流输电网，“西电东送”把西部水电、风光电送到东部负荷中心。 <sup>[[44]](#ref-44)[[45]](#ref-45)</sup>

- **最早发电**：1882 年上海（中国最早的公用电厂） <sup>[[44]](#ref-44)</sup>
- **首条特高压**：2009 年 晋东南—南阳—荆门 1000 kV 交流示范工程 <sup>[[44]](#ref-44)</sup>
- **全国最高用电负荷**：≈ 15 亿千瓦（2025 年夏季创纪录） <sup>[[1]](#ref-1)</sup>
- **特高压工程**：国家电网已建成 30+ 项特高压工程 <sup>[[44]](#ref-44)</sup>

| 电网企业 / 机构 | 成立 / 建设时间 | 员工（运营维护） | 覆盖范围 | 来源 |
|---|---|---|---|---|
| 国家电网有限公司 | 2002 年（电力体制改革“厂网分开”） | ≈ 130 万人以上 | 26 个省级行政区，覆盖国土面积 88% | <sup>[[44]](#ref-44)[[46]](#ref-46)</sup> |
| 中国南方电网 | 2002 年 | ≈ 28 万人 | 广东、广西、云南、贵州、海南 | <sup>[[45]](#ref-45)[[46]](#ref-46)</sup> |
| 内蒙古电力（集团） | — | — | 内蒙古西部 | <sup>[[1]](#ref-1)</sup> |

## ④ 模型 Models

中国大模型以开放权重 + 混合专家（MoE）架构为主要特点，在推理效率与成本上竞争激烈。生成式 AI 服务需在网信办备案后上线。 <sup>[[47]](#ref-47)</sup>

| 模型 | 机构 | 发布 | 架构 | 参数（总 / 激活） | 开放权重 | 上下文 | 代表性成绩（官方自报） | 来源 |
|---|---|---|---|---|---|---|---|---|
| DeepSeek-V3 | 深度求索 | 2024-12 | MoE + MLA | 671B / 37B | 是（MIT） | 128K | — | <sup>[[48]](#ref-48)</sup> |
| DeepSeek-R1 | 深度求索 | 2025-01 | MoE 推理模型（RL） | 671B / 37B | 是（MIT） | 128K | AIME 2024 pass@1 79.8% | <sup>[[49]](#ref-49)</sup> |
| DeepSeek-V3.1 / V3.2 | 深度求索 | 2025-08 / 2025-09 起 | 混合思考；V3.2 引入稀疏注意力 | 671B 级 | 是 | 128K | — | <sup>[[50]](#ref-50)</sup> |
| Qwen3-235B-A22B | 阿里巴巴（通义千问） | 2025-04 | MoE，混合思考 | 235B / 22B | 是（Apache 2.0） | 32K（可扩展至 128K） | AIME'24 85.7% | <sup>[[51]](#ref-51)</sup> |
| 豆包大模型（Seed 系列） | 字节跳动 | 持续迭代 | 未公开 | 未公开 | 否 | — | — | <sup>[[52]](#ref-52)</sup> |
| Kimi K2 | 月之暗面 | 2025-07 | MoE | 1T / 32B | 是（修改版 MIT） | 128K | SWE-bench Verified 65.8% | <sup>[[53]](#ref-53)</sup> |
| GLM-4.5 | 智谱 | 2025-07 | MoE | 355B / 32B | 是（MIT） | 128K | — | <sup>[[54]](#ref-54)</sup> |
| MiniMax-M1 | MiniMax | 2025-06 | MoE + 线性注意力 | 456B / 45.9B | 是 | 1M | — | <sup>[[55]](#ref-55)</sup> |
| ERNIE 4.5 | 百度 | 2025-06（开源） | MoE | 300B / 47B | 是（Apache 2.0） | 128K | — | <sup>[[56]](#ref-56)</sup> |
| Hunyuan-Large | 腾讯 | 2024-11 | MoE | 389B / 52B | 是 | 256K | — | <sup>[[57]](#ref-57)</sup> |

- **综合排名（人类偏好对战）**：LMArena <sup>[[58]](#ref-58)</sup>
- **智能指数 / 速度 / 价格**：Artificial Analysis <sup>[[59]](#ref-59)</sup>

## ⑤ 应用 Applications

| 方向 | 说明 | 代表案例 | 来源 |
|---|---|---|---|
| AI for Science | 气象预报、蛋白质与药物、材料发现 | 华为盘古气象大模型（Nature 2023） | <sup>[[60]](#ref-60)</sup> |
| 自动驾驶 / Robotaxi | 城市级无人驾驶出行服务 | 百度萝卜快跑 | <sup>[[61]](#ref-61)</sup> |
| 具身智能 / 机器人 | 人形与四足机器人、工业机器人 | 宇树科技 | <sup>[[62]](#ref-62)</sup> |
| 政策导向：“人工智能+” | 推动 AI 与科研、产业、消费、民生、治理深度融合 | 国务院“人工智能+”行动意见（2025） | <sup>[[63]](#ref-63)</sup> |
| 医疗健康 | 医学影像、辅助诊断、药物研发 | 待补充 | <sup>[[64]](#ref-64)</sup> |
| 制造与工业 | 质检、预测性维护、工业大模型 | 待补充 | <sup>[[64]](#ref-64)</sup> |
| 编程与智能体 | 代码生成、Agent 自动化办公 | 待补充 | <sup>[[64]](#ref-64)</sup> |
| 金融 / 教育 / 政务 / 内容创作 | 智能客服、风控、个性化学习、AIGC 视频与图像 | 待补充 | <sup>[[64]](#ref-64)</sup> |

## 数据说明

数值优先采用政府统计与企业官方披露；无统一官方统计的项目按行业典型值估算，标注“估算”，仅作量级参考。公共 / 私有按控股股东性质划分。

## Reference

1. <a id="ref-1"></a>国家能源局. 国家能源局 新闻发布会与全国电力工业统计数据. <https://www.nea.gov.cn/>
2. <a id="ref-2"></a>中国电力企业联合会（中电联）. 中国电力行业年度发展报告 / 电力统计快报. <https://www.cec.org.cn/>
3. <a id="ref-3"></a>国家统计局. 国民经济和社会发展统计公报 / 工业产品产量数据. <https://www.stats.gov.cn/>
4. <a id="ref-4"></a>IEA. Energy and AI (2025). <https://www.iea.org/reports/energy-and-ai>
5. <a id="ref-5"></a>Global Energy Monitor. Global Coal Plant Tracker. <https://globalenergymonitor.org/projects/global-coal-plant-tracker/>
6. <a id="ref-6"></a>Ember. Electricity Data Explorer. <https://ember-energy.org/data/>
7. <a id="ref-7"></a>本站（见页面底部“数据说明”）. 本站估算说明：无官方统一统计时，按行业典型值估算，仅作量级参考. [#数据说明](#数据说明)
8. <a id="ref-8"></a>中国大唐集团. 大唐集团 所属企业. <https://www.china-cdt.com/>
9. <a id="ref-9"></a>中国华能集团. 华能集团 电厂与项目. <https://www.chng.com.cn/>
10. <a id="ref-10"></a>国家能源投资集团. 国家能源集团 所属企业. <https://www.ceic.com/>
11. <a id="ref-11"></a>Global Energy Monitor. Global Oil and Gas Plant Tracker. <https://globalenergymonitor.org/projects/global-oil-gas-plant-tracker/>
12. <a id="ref-12"></a>中国长江三峡集团. 三峡集团 电站介绍. <https://www.ctg.com.cn/>
13. <a id="ref-13"></a>水利部. 全国水利发展统计公报（小水电）. <http://www.mwr.gov.cn/>
14. <a id="ref-14"></a>Global Energy Monitor. Global Hydropower Tracker. <https://globalenergymonitor.org/projects/global-hydropower-tracker/>
15. <a id="ref-15"></a>World Nuclear Association. Nuclear Fuel Cycle / Country Profiles. <https://world-nuclear.org/>
16. <a id="ref-16"></a>中国核能行业协会. 全国核电运行情况. <https://www.china-nea.cn/>
17. <a id="ref-17"></a>IAEA. Power Reactor Information System (PRIS). <https://pris.iaea.org/PRIS/home.aspx>
18. <a id="ref-18"></a>中国广核集团. 中广核 在运核电站. <https://www.cgnpc.com.cn/>
19. <a id="ref-19"></a>中国核工业集团. 中核集团 核电基地. <https://www.cnnc.com.cn/>
20. <a id="ref-20"></a>国家电力投资集团. 国家电投 清洁能源项目. <https://www.spic.com.cn/>
21. <a id="ref-21"></a>Global Energy Monitor. Global Wind Power Tracker. <https://globalenergymonitor.org/projects/global-wind-power-tracker/>
22. <a id="ref-22"></a>IEA. Solar PV Global Supply Chains. <https://www.iea.org/reports/solar-pv-global-supply-chains>
23. <a id="ref-23"></a>Global Energy Monitor. Global Solar Power Tracker. <https://globalenergymonitor.org/projects/global-solar-power-tracker/>
24. <a id="ref-24"></a>U.S. Bureau of Industry and Security. 先进计算与半导体出口管制规则. <https://www.bis.gov/>
25. <a id="ref-25"></a>华为昇腾社区. 昇腾 AI 处理器. <https://www.hiascend.com/>
26. <a id="ref-26"></a>SemiAnalysis. Huawei AI CloudMatrix 384 – China's Answer to Nvidia GB200 NVL72. <https://semianalysis.com/2025/04/16/huawei-ai-cloudmatrix-384-chinas-answer-to-nvidia-gb200-nvl72/>
27. <a id="ref-27"></a>寒武纪. 思元系列产品. <https://www.cambricon.com/>
28. <a id="ref-28"></a>海光信息. 海光 CPU / DCU 产品. <https://www.hygon.cn/>
29. <a id="ref-29"></a>华为鲲鹏社区. 鲲鹏处理器. <https://www.hikunpeng.com/>
30. <a id="ref-30"></a>龙芯中科. 龙芯处理器产品. <https://www.loongson.cn/>
31. <a id="ref-31"></a>飞腾信息. 飞腾服务器 CPU. <https://www.phytium.com.cn/>
32. <a id="ref-32"></a>TechInsights. SMIC 7nm (N+2) 工艺分析. <https://www.techinsights.com/>
33. <a id="ref-33"></a>USGS. Mineral Commodity Summaries（镓、锗、高纯石英、硅）. <https://www.usgs.gov/centers/national-minerals-information-center/mineral-commodity-summaries>
34. <a id="ref-34"></a>商务部. 关于对镓、锗相关物项实施出口管制的公告. <http://www.mofcom.gov.cn/>
35. <a id="ref-35"></a>中华人民共和国海关总署. 海关统计数据（集成电路进出口）. <http://www.customs.gov.cn/>
36. <a id="ref-36"></a>国家发展改革委. “东数西算”工程（全国一体化算力网络国家枢纽节点）. <https://www.ndrc.gov.cn/>
37. <a id="ref-37"></a>工业和信息化部. 算力基础设施发展情况发布. <https://www.miit.gov.cn/>
38. <a id="ref-38"></a>阿里云. 阿里云全球基础设施. <https://www.alibabacloud.com/global-locations>
39. <a id="ref-39"></a>华为云. 华为云 全球基础设施. <https://www.huaweicloud.com/intl/en-us/global/>
40. <a id="ref-40"></a>腾讯云. 腾讯云 地域和可用区. <https://www.tencentcloud.com/document/product/213/6091>
41. <a id="ref-41"></a>字节跳动. 火山引擎. <https://www.volcengine.com/>
42. <a id="ref-42"></a>中国电信. 天翼云. <https://www.ctyun.cn/>
43. <a id="ref-43"></a>GDS Holdings. 万国数据 数据中心. <https://www.gds-services.com/>
44. <a id="ref-44"></a>国家电网. 国家电网有限公司 公司简介. <http://www.sgcc.com.cn/>
45. <a id="ref-45"></a>南方电网. 中国南方电网 公司简介. <https://www.csg.cn/>
46. <a id="ref-46"></a>Fortune. Fortune Global 500（员工人数）. <https://fortune.com/ranking/global500/>
47. <a id="ref-47"></a>国家互联网信息办公室. 生成式人工智能服务管理暂行办法 / 备案信息. <https://www.cac.gov.cn/>
48. <a id="ref-48"></a>DeepSeek / Hugging Face. DeepSeek-V3 模型卡. <https://huggingface.co/deepseek-ai/DeepSeek-V3>
49. <a id="ref-49"></a>DeepSeek / Hugging Face. DeepSeek-R1 模型卡. <https://huggingface.co/deepseek-ai/DeepSeek-R1>
50. <a id="ref-50"></a>DeepSeek. DeepSeek API 文档（新闻与模型更新）. <https://api-docs.deepseek.com/>
51. <a id="ref-51"></a>阿里巴巴通义千问. Qwen3: Think Deeper, Act Faster. <https://qwenlm.github.io/blog/qwen3/>
52. <a id="ref-52"></a>火山引擎. 豆包大模型. <https://www.volcengine.com/product/doubao>
53. <a id="ref-53"></a>Moonshot AI / Hugging Face. Kimi-K2-Instruct 模型卡. <https://huggingface.co/moonshotai/Kimi-K2-Instruct>
54. <a id="ref-54"></a>智谱 / Hugging Face. GLM-4.5 模型卡. <https://huggingface.co/zai-org/GLM-4.5>
55. <a id="ref-55"></a>MiniMax / Hugging Face. MiniMax-M1 模型卡. <https://huggingface.co/MiniMaxAI/MiniMax-M1-80k>
56. <a id="ref-56"></a>百度 / Hugging Face. ERNIE-4.5-300B-A47B 模型卡. <https://huggingface.co/baidu/ERNIE-4.5-300B-A47B-PT>
57. <a id="ref-57"></a>腾讯 / Hugging Face. Hunyuan-Large 模型卡. <https://huggingface.co/tencent/Tencent-Hunyuan-Large>
58. <a id="ref-58"></a>LMArena. LMArena Leaderboard. <https://lmarena.ai/leaderboard>
59. <a id="ref-59"></a>Artificial Analysis. Artificial Analysis 模型对比. <https://artificialanalysis.ai/>
60. <a id="ref-60"></a>Nature (2023). Accurate medium-range global weather forecasting with 3D neural networks. <https://www.nature.com/articles/s41586-023-06185-3>
61. <a id="ref-61"></a>百度. 萝卜快跑 Apollo Go. <https://www.apollogo.com/>
62. <a id="ref-62"></a>Unitree Robotics. 宇树科技. <https://www.unitree.com/>
63. <a id="ref-63"></a>中国政府网. 国务院关于深入实施“人工智能+”行动的意见（2025）. <https://www.gov.cn/>
64. <a id="ref-64"></a>Stanford HAI. AI Index Report. <https://hai.stanford.edu/ai-index>

<!-- 本文件由 scripts/build_github_views.py 根据 data.js 自动生成，请勿手动修改。 -->
