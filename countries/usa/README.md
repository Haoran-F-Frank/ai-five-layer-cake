# 🇺🇸 美国

[English version](README.en.md) · [🌐 交互版（地图、可展开分类、中英切换）](https://haoran-f-frank.github.io/ai-five-layer-cake/countries/usa/?lang=zh) · 数据更新: 2026-10-29

全球 AI 芯片设计与前沿模型的领先国家，数据中心用电量全球第一；电力以天然气为主体，电力企业以投资者所有的私营公用事业公司为主。

> ⚠️ 初版数据：由公开资料整理，“≈”表示约数或估算。每条数据后的 [n] 指向文末 Reference，请以原始来源为准。

## ① 能源 Energy — Power Supply（能源供给）

美国电力以天然气为第一大来源，核电约占两成，风光占比快速上升。电力企业分为投资者所有（私营）、联邦（如 TVA、垦务局）、州 / 市政公用事业与合作社。 <sup>[[1]](#ref-1)</sup>

- **公用事业级发电量（2024）**：≈ 4.3 万亿千瓦时（4,300 TWh） <sup>[[1]](#ref-1)[[2]](#ref-2)</sup>
- **公用事业级电厂数量**：≈ 11,000+ 座（≥ 1 MW） <sup>[[3]](#ref-3)</sup>
- **发电行业就业**：≈ 90 万人（电力生产） <sup>[[4]](#ref-4)</sup>
- **数据中心用电（2023）**：≈ 176 TWh，占全国 4.4%；2028 年或达 6.7–12% <sup>[[5]](#ref-5)</sup>

### 全国电厂分布图

```geojson
{"type": "FeatureCollection", "features": [{"type": "Feature", "geometry": {"type": "Point", "coordinates": [-83.81, 33.06]}, "properties": {"名称 Name": "Plant Scherer / Plant Scherer", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "≈ 3,500 MW", "企业 Company": "Georgia Power (Southern Company) and co-owners", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-84.92, 34.13]}, "properties": {"名称 Name": "Plant Bowen / Plant Bowen", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "≈ 3,200 MW", "企业 Company": "Georgia Power (Southern Company)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-87.77, 38.37]}, "properties": {"名称 Name": "Gibson Generating Station / Gibson Generating Station", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "≈ 3,300 MW", "企业 Company": "Duke Energy and co-owners", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-83.35, 41.89]}, "properties": {"名称 Name": "Monroe Power Plant / Monroe Power Plant", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "≈ 3,100 MW", "企业 Company": "DTE Energy", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-87.65, 36.39]}, "properties": {"名称 Name": "Cumberland Fossil Plant / Cumberland Fossil Plant", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "≈ 2,500 MW", "企业 Company": "Tennessee Valley Authority (federal)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-80.37, 26.7]}, "properties": {"名称 Name": "West County Energy Center / West County Energy Center", "类型 Type": "天然气发电厂 / Natural gas power plants", "装机 Capacity": "≈ 3,700 MW", "企业 Company": "Florida Power & Light (NextEra Energy)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-118.1, 33.76]}, "properties": {"名称 Name": "Haynes Generating Station / Haynes Generating Station", "类型 Type": "天然气发电厂 / Natural gas power plants", "装机 Capacity": "≈ 1,600 MW", "企业 Company": "Los Angeles Dept. of Water & Power (municipal)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-118.98, 47.957]}, "properties": {"名称 Name": "Grand Coulee Dam / Grand Coulee Dam", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 6,800 MW", "企业 Company": "US Bureau of Reclamation (federal)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-119.633, 47.995]}, "properties": {"名称 Name": "Chief Joseph Dam / Chief Joseph Dam", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 2,600 MW", "企业 Company": "US Army Corps of Engineers (federal)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-79.04, 43.14]}, "properties": {"名称 Name": "Robert Moses Niagara / Robert Moses Niagara", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 2,500 MW", "企业 Company": "New York Power Authority (state)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-114.737, 36.016]}, "properties": {"名称 Name": "Hoover Dam / Hoover Dam", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 2,080 MW", "企业 Company": "US Bureau of Reclamation (federal)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-79.8, 38.21]}, "properties": {"名称 Name": "Bath County Pumped Storage / Bath County Pumped Storage", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 3,000 MW（抽蓄）", "企业 Company": "Dominion Energy and co-owners", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-76.17, 39.66]}, "properties": {"名称 Name": "Conowingo Dam / Conowingo Dam", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 570 MW", "企业 Company": "Constellation Energy", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-112.86, 33.39]}, "properties": {"名称 Name": "Palo Verde / Palo Verde", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "≈ 3,900 MW（3 台）", "企业 Company": "Operator: Arizona Public Service (Pinnacle West); co-owners include SRP (public)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-81.76, 33.14]}, "properties": {"名称 Name": "Vogtle / Vogtle", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "≈ 4,500 MW（4 台，含 2 台 AP1000）", "企业 Company": "Georgia Power (Southern Company) majority; co-owners include MEAG and Oglethorpe (public / co-op)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-87.12, 34.7]}, "properties": {"名称 Name": "Browns Ferry / Browns Ferry", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "≈ 3,800 MW（3 台）", "企业 Company": "Tennessee Valley Authority (federal)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-120.85, 35.21]}, "properties": {"名称 Name": "Diablo Canyon / Diablo Canyon", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "≈ 2,250 MW（2 台）", "企业 Company": "PG&E", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-118.32, 35.02]}, "properties": {"名称 Name": "Alta Wind Energy Center / Alta Wind Energy Center", "类型 Type": "风力发电厂 / Wind farms", "装机 Capacity": "≈ 1,550 MW", "企业 Company": "Multiple investors (Terra-Gen and others)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-100.54, 32.45]}, "properties": {"名称 Name": "Roscoe Wind Farm / Roscoe Wind Farm", "类型 Type": "风力发电厂 / Wind farms", "装机 Capacity": "≈ 780 MW", "企业 Company": "RWE", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-100.0, 32.2]}, "properties": {"名称 Name": "Horse Hollow Wind Energy Center / Horse Hollow Wind Energy Center", "类型 Type": "风力发电厂 / Wind farms", "装机 Capacity": "≈ 735 MW", "企业 Company": "NextEra Energy Resources", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-117.95, 35.0]}, "properties": {"名称 Name": "Edwards & Sanborn / Edwards & Sanborn", "类型 Type": "太阳能发电厂 / Solar power plants", "装机 Capacity": "≈ 875 MW 光伏 + ≈ 3.3 GWh 储能", "企业 Company": "Terra-Gen and others", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-114.88, 36.37]}, "properties": {"名称 Name": "Gemini Solar / Gemini Solar", "类型 Type": "太阳能发电厂 / Solar power plants", "装机 Capacity": "≈ 690 MW + 储能", "企业 Company": "Primergy Solar", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-118.4, 34.83]}, "properties": {"名称 Name": "Solar Star / Solar Star", "类型 Type": "太阳能发电厂 / Solar power plants", "装机 Capacity": "≈ 580 MW", "企业 Company": "BHE Renewables (Berkshire Hathaway Energy)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-80.7, 26.6]}, "properties": {"名称 Name": "Okeelanta Cogeneration / Okeelanta Cogeneration", "类型 Type": "生物质发电厂 / Biomass power plants", "装机 Capacity": "≈ 140 MW", "企业 Company": "Florida Crystals", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-122.75, 38.79]}, "properties": {"名称 Name": "The Geysers / The Geysers", "类型 Type": "地热发电厂 / Geothermal power plants", "装机 Capacity": "≈ 700+ MW（净）", "企业 Company": "Calpine (most units)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-115.62, 33.17]}, "properties": {"名称 Name": "Salton Sea 地热电站群 / Salton Sea geothermal plants", "类型 Type": "地热发电厂 / Geothermal power plants", "装机 Capacity": "≈ 340 MW", "企业 Company": "BHE Renewables (CalEnergy)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-115.47, 35.56]}, "properties": {"名称 Name": "Ivanpah Solar / Ivanpah Solar", "类型 Type": "其他发电厂（光热等） / Other plants (CSP etc.)", "装机 Capacity": "≈ 390 MW（塔式光热）", "企业 Company": "NRG Energy / BrightSource and others", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}]}
```

蓝色 = 国有 / 公共，橙色 = 私有。坐标为近似位置。完整地图文件：[plants.geojson](plants.geojson)

### 1.1 火力发电（非可持续）

> **发电原理**：燃烧化石燃料产生高温高压蒸汽驱动汽轮机；燃气联合循环则先由燃气轮机发电，再用余热产生蒸汽二次发电。 <sup>[[2]](#ref-2)</sup>

#### 1.1.1 煤炭发电厂

**全国概况**

- **电厂数量**：≈ 200 座左右，持续退役中 <sup>[[3]](#ref-3)</sup>
- **装机容量**：≈ 170–180 GW <sup>[[6]](#ref-6)</sup>
- **年发电量 / 占比**：≈ 15%（2024） <sup>[[1]](#ref-1)</sup>
- **材料消耗**：电力部门用煤 ≈ 4 亿短吨/年（2024） <sup>[[7]](#ref-7)</sup>
- **运维人员**：1 GW 电厂 ≈ 200–400 人（估算） <sup>[[8]](#ref-8)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| Cumberland Fossil Plant | 田纳西州 Cumberland City | ≈ 2,500 MW | — | — | — | 田纳西河谷管理局 TVA（联邦） | 计划以燃气机组替代 | <sup>[[9]](#ref-9)[[6]](#ref-6)</sup> |

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| Plant Scherer | 佐治亚州 Juliette | ≈ 3,500 MW | — | 粉河盆地低硫煤 | — | Georgia Power（Southern Company 子公司）等 | 美国最大煤电厂之一 | <sup>[[6]](#ref-6)</sup> |
| Plant Bowen | 佐治亚州 Euharlee | ≈ 3,200 MW | — | — | — | Georgia Power（Southern Company） | — | <sup>[[6]](#ref-6)</sup> |
| Gibson Generating Station | 印第安纳州 Owensville | ≈ 3,300 MW | — | — | — | Duke Energy 等 | — | <sup>[[6]](#ref-6)</sup> |
| Monroe Power Plant | 密歇根州 Monroe | ≈ 3,100 MW | — | — | — | DTE Energy | 计划逐步退役 | <sup>[[6]](#ref-6)</sup> |

#### 1.1.2 石油发电厂

**全国概况**

- **占比**：< 1%（2024），多为调峰与备用机组 <sup>[[1]](#ref-1)</sup>
- **分布**：夏威夷、阿拉斯加偏远地区与东北部调峰 <sup>[[6]](#ref-6)</sup>

**国有 / 公共 Public**

—

**私有 Private（标明企业）**

—

_燃油发电以小型调峰机组为主，代表性电厂待补充（可从 EIA-860 按燃料类型筛选）。_ <sup>[[6]](#ref-6)</sup>

#### 1.1.3 天然气发电厂

**全国概况**

- **电厂数量**：≈ 2,000 座左右 <sup>[[3]](#ref-3)</sup>
- **装机容量**：≈ 500 GW（最大装机来源） <sup>[[6]](#ref-6)</sup>
- **年发电量 / 占比**：≈ 43%（2024） <sup>[[1]](#ref-1)</sup>
- **材料消耗**：联合循环热耗率 ≈ 6,500–7,500 Btu/kWh（估算） <sup>[[2]](#ref-2)[[8]](#ref-8)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| Haynes Generating Station | 加州 Long Beach | ≈ 1,600 MW | — | 天然气 | — | 洛杉矶水电局 LADWP（市政） | — | <sup>[[6]](#ref-6)</sup> |

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| West County Energy Center | 佛罗里达州 Loxahatchee | ≈ 3,700 MW | — | 天然气 | — | Florida Power & Light（NextEra Energy） | — | <sup>[[6]](#ref-6)</sup> |

### 1.2 水力发电（非可持续（按本站分类；国际上通常归为可再生能源））

> **发电原理**：利用水位落差驱动水轮机发电；抽水蓄能在低谷抽水、高峰放水发电。 <sup>[[10]](#ref-10)</sup>

#### 1.2.1 堤坝及内部发电厂

**全国概况**

- **电厂数量**：≈ 1,400+ 座常规水电站 <sup>[[3]](#ref-3)</sup>
- **装机容量**：≈ 80 GW 常规水电（另有 ≈ 23 GW 抽水蓄能） <sup>[[6]](#ref-6)</sup>
- **年发电量 / 占比**：≈ 6%（2024） <sup>[[1]](#ref-1)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| Grand Coulee Dam | 华盛顿州 哥伦比亚河 | ≈ 6,800 MW | — | — | — | 美国垦务局 USBR（联邦） | 美国最大发电设施 | <sup>[[10]](#ref-10)</sup> |
| Chief Joseph Dam | 华盛顿州 Bridgeport | ≈ 2,600 MW | — | — | — | 美国陆军工程兵团 USACE（联邦） | — | <sup>[[6]](#ref-6)</sup> |
| Robert Moses Niagara | 纽约州 尼亚加拉瀑布 | ≈ 2,500 MW | — | — | — | 纽约电力局 NYPA（州属） | — | <sup>[[6]](#ref-6)</sup> |
| Hoover Dam | 内华达 / 亚利桑那州 | ≈ 2,080 MW | — | — | — | 美国垦务局 USBR（联邦） | — | <sup>[[11]](#ref-11)</sup> |

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| Bath County Pumped Storage | 弗吉尼亚州 | ≈ 3,000 MW（抽蓄） | 净耗电 | — | — | Dominion Energy 等 | 全球最大抽水蓄能电站之一 | <sup>[[6]](#ref-6)</sup> |
| Conowingo Dam | 马里兰州 | ≈ 570 MW | — | — | — | Constellation Energy | — | <sup>[[6]](#ref-6)</sup> |

### 1.3 核能发电（非可持续（低碳））

> **发电原理**：铀-235 可控链式裂变产生热量，加热冷却剂产生蒸汽驱动汽轮机。美国在运机组均为轻水堆（压水堆 / 沸水堆）。 <sup>[[12]](#ref-12)</sup>

#### 1.3.1 核裂变发电厂

**全国概况**

- **电厂 / 机组**：54 座核电站、94 台机组（Vogtle 4 号机 2024 年投运后） <sup>[[13]](#ref-13)</sup>
- **装机容量**：≈ 97 GW（全球最大核电装机） <sup>[[13]](#ref-13)</sup>
- **年发电量 / 占比**：≈ 18%（2024），为最大低碳电源 <sup>[[1]](#ref-1)</sup>
- **材料消耗**：反应堆业主年采购铀 ≈ 5,000 万磅 U₃O₈ 当量，大部分进口 <sup>[[14]](#ref-14)</sup>
- **运维人员**：每座电站 ≈ 500–1,000 人（估算） <sup>[[8]](#ref-8)</sup>

**国有 / 公共 Public**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| Browns Ferry | 阿拉巴马州 Athens | ≈ 3,800 MW（3 台） | — | — | — | 田纳西河谷管理局 TVA（联邦） | — | <sup>[[9]](#ref-9)[[6]](#ref-6)</sup> |

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| Palo Verde | 亚利桑那州 Tonopah | ≈ 3,900 MW（3 台） | ≈ 30+ TWh/年 | — | ≈ 2,000 人（估算） | 运营：Arizona Public Service（Pinnacle West）；共有方含 SRP（公共）等 | 美国发电量最大的电站 | <sup>[[6]](#ref-6)[[8]](#ref-8)</sup> |
| Vogtle | 佐治亚州 Waynesboro | ≈ 4,500 MW（4 台，含 2 台 AP1000） | — | — | — | Georgia Power（Southern Company）控股；共有方含 MEAG、Oglethorpe（公共 / 合作社） | 美国最大核电站 | <sup>[[6]](#ref-6)[[13]](#ref-13)</sup> |
| Diablo Canyon | 加州 Avila Beach | ≈ 2,250 MW（2 台） | — | — | — | PG&E | 加州唯一在运核电站，已延寿 | <sup>[[6]](#ref-6)</sup> |

### 1.4 风力发电厂（可持续）

> **发电原理**：风推动叶片旋转，带动发电机发电。 <sup>[[15]](#ref-15)</sup>

**全国概况**

- **风机数量**：≈ 75,000 台 <sup>[[15]](#ref-15)</sup>
- **装机容量**：≈ 150 GW <sup>[[6]](#ref-6)</sup>
- **年发电量 / 占比**：≈ 10%（2024） <sup>[[1]](#ref-1)</sup>
- **分布**：德州、爱荷华、俄克拉何马、堪萨斯等中部风带 <sup>[[15]](#ref-15)</sup>

**国有 / 公共 Public**

—

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| Alta Wind Energy Center | 加州 Tehachapi | ≈ 1,550 MW | — | — | — | 多家投资方（Terra-Gen 等） | — | <sup>[[6]](#ref-6)</sup> |
| Roscoe Wind Farm | 德州 Roscoe | ≈ 780 MW | — | — | — | RWE | — | <sup>[[6]](#ref-6)</sup> |
| Horse Hollow Wind Energy Center | 德州 Taylor / Nolan 县 | ≈ 735 MW | — | — | — | NextEra Energy Resources | — | <sup>[[6]](#ref-6)</sup> |

_美国大型风电场几乎全部为私营开发商所有；公共电力机构多通过长期购电协议（PPA）采购。_ 

### 1.5 太阳能发电厂（可持续）

> **发电原理**：光伏效应将光能直接转为电能；光热电站聚光产生蒸汽发电。 <sup>[[16]](#ref-16)</sup>

**全国概况**

- **电厂数量**：≈ 5,000+ 座公用事业级光伏电站 <sup>[[3]](#ref-3)</sup>
- **年发电量 / 占比**：≈ 7%（2024，含小型分布式） <sup>[[1]](#ref-1)</sup>
- **材料**：组件大量进口；本土制造在《通胀削减法案》激励下扩张 <sup>[[16]](#ref-16)</sup>

**国有 / 公共 Public**

—

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| Edwards & Sanborn | 加州 Kern 县 | ≈ 875 MW 光伏 + ≈ 3.3 GWh 储能 | — | — | — | Terra-Gen 等 | — | <sup>[[6]](#ref-6)</sup> |
| Gemini Solar | 内华达州 Clark 县 | ≈ 690 MW + 储能 | — | — | — | Primergy Solar | — | <sup>[[6]](#ref-6)</sup> |
| Solar Star | 加州 Rosamond | ≈ 580 MW | — | — | — | BHE Renewables（伯克希尔哈撒韦能源） | — | <sup>[[6]](#ref-6)</sup> |

### 1.6 生物质发电厂（可持续）

> **发电原理**：燃烧木材废料、农业残余、垃圾填埋气等发电。 <sup>[[1]](#ref-1)</sup>

**全国概况**

- **占比**：≈ 1%（2024） <sup>[[1]](#ref-1)</sup>

**国有 / 公共 Public**

—

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| Okeelanta Cogeneration | 佛罗里达州 South Bay | ≈ 140 MW | — | 甘蔗渣、木材废料 | — | Florida Crystals | 北美最大生物质电厂之一 | <sup>[[6]](#ref-6)</sup> |

### 1.7 地热发电厂（可持续）

> **发电原理**：利用地下蒸汽（干蒸汽 / 闪蒸）或热水（双工质循环）驱动汽轮机。 <sup>[[1]](#ref-1)</sup>

**全国概况**

- **装机容量**：≈ 4 GW（全球最大地热装机国） <sup>[[6]](#ref-6)</sup>
- **占比**：≈ 0.4%（2024） <sup>[[1]](#ref-1)</sup>

**国有 / 公共 Public**

—

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| The Geysers | 加州 Sonoma / Lake 县 | ≈ 700+ MW（净） | — | — | — | Calpine（多数机组） | 全球最大地热电站群 | <sup>[[6]](#ref-6)</sup> |
| Salton Sea 地热电站群 | 加州 Imperial 县 | ≈ 340 MW | — | — | — | BHE Renewables（CalEnergy） | 卤水中可提锂 | <sup>[[6]](#ref-6)</sup> |

### 1.8 潮汐能发电厂（可持续）

> **发电原理**：利用潮流动能（潮流涡轮）或潮差（拦坝）发电。 <sup>[[1]](#ref-1)</sup>

**全国概况**

- **现状**：无商业规模潮汐电站，仅有试验项目（如纽约东河潮流能试点） <sup>[[6]](#ref-6)</sup>

**国有 / 公共 Public**

—

**私有 Private（标明企业）**

—

### 1.9 其他发电厂（可持续）

> **发电原理**：如塔式光热（CSP）、燃料电池等。 <sup>[[6]](#ref-6)</sup>

#### 1.9 其他发电厂（光热等）

**全国概况**

- **光热装机**：≈ 1.5–1.8 GW，集中在加州、亚利桑那、内华达 <sup>[[6]](#ref-6)</sup>

**国有 / 公共 Public**

—

**私有 Private（标明企业）**

| 电厂 | 位置 | 装机容量 | 年发电量 | 材料 / 燃料消耗 | 运维人员 | 运营企业 / 所有者 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|
| Ivanpah Solar | 加州 Mojave 沙漠 | ≈ 390 MW（塔式光热） | — | — | — | NRG Energy / BrightSource 等 | — | <sup>[[6]](#ref-6)</sup> |

## ② 芯片 Chips

### Design 设计：主流 GPU / AI 加速器

美国主导 AI 芯片设计：NVIDIA、AMD、Intel 提供通用 GPU / 加速器，Google、AWS 等云厂商自研 ASIC。下表峰值算力取 BF16 稠密值（未计稀疏），除非注明。 <sup>[[17]](#ref-17)[[18]](#ref-18)</sup>

| 厂商 | 型号 | 发布 | 工艺 | 显存 | 显存带宽 | 峰值算力（稠密） | 功耗 | 备注 | 来源 |
|---|---|---|---|---|---|---|---|---|---|
| NVIDIA | H100 SXM | 2022 | TSMC 4N | 80 GB HBM3 | 3.35 TB/s | ≈ 989 TFLOPS | 700 W | Hopper 架构 | <sup>[[17]](#ref-17)</sup> |
| NVIDIA | B200（DGX B200 单卡） | 2024 | TSMC 4NP | ≈ 180 GB HBM3e | ≈ 8 TB/s | ≈ 2.25 PFLOPS | ≈ 1,000 W | Blackwell 架构；按 DGX 整机规格折算 | <sup>[[19]](#ref-19)</sup> |
| AMD | Instinct MI300X | 2023 | TSMC 5/6nm chiplet | 192 GB HBM3 | 5.3 TB/s | ≈ 1,307 TFLOPS | 750 W | — | <sup>[[18]](#ref-18)</sup> |
| AMD | Instinct MI355X | 2025 | TSMC N3 | 288 GB HBM3E | 8 TB/s | ≈ 2.5 PFLOPS（FP16） | ≈ 1,400 W | — | <sup>[[20]](#ref-20)</sup> |
| Intel | Gaudi 3 | 2024 | TSMC 5nm | 128 GB HBM2e | 3.7 TB/s | ≈ 1,835 TFLOPS | ≈ 900 W | — | <sup>[[21]](#ref-21)</sup> |
| Google | TPU v7 Ironwood | 2025 | — | 192 GB HBM | ≈ 7.4 TB/s | ≈ 4,614 TFLOPS（FP8） | — | 仅在 Google Cloud 提供 | <sup>[[22]](#ref-22)</sup> |
| AWS | Trainium2 | 2024 | — | 96 GB HBM | ≈ 2.9 TB/s | ≈ 1.3 PFLOPS（FP8） | — | 仅在 AWS 提供 | <sup>[[23]](#ref-23)</sup> |

### Design 设计：主流服务器 CPU

| 厂商 | 型号 | 架构 / 指令集 | 最大核数 | 工艺 | 备注 | 来源 |
|---|---|---|---|---|---|---|
| Intel | Xeon 6900P（Granite Rapids） | x86-64 | 128 P 核 | Intel 3 | — | <sup>[[24]](#ref-24)</sup> |
| AMD | EPYC 9005（Turin） | x86-64（Zen 5 / Zen 5c） | 192 | TSMC 3/4nm | — | <sup>[[25]](#ref-25)</sup> |
| NVIDIA | Grace | Arm Neoverse V2 | 72 | TSMC 4N | 与 GPU 组成 GH200 / GB200 | <sup>[[26]](#ref-26)</sup> |
| AWS | Graviton4 | Arm Neoverse V2 | 96 | — | 仅在 AWS 提供 | <sup>[[27]](#ref-27)</sup> |

### Produce 生产：原料与产能

- **全球晶圆产能占比**：≈ 10%（2022），预计 2032 年升至 ≈ 14% <sup>[[28]](#ref-28)</sup>
- **产业政策**：《芯片与科学法案》（2022）：≈ 527 亿美元，其中 ≈ 390 亿美元制造补贴 <sup>[[29]](#ref-29)</sup>

| 原料 | 用途 | 主要产地 / 产量 | 来源 |
|---|---|---|---|
| 高纯石英 | 拉制单晶硅的坩埚 | 北卡罗来纳州 Spruce Pine 是全球最主要的高纯石英产地 | <sup>[[30]](#ref-30)</sup> |
| 半导体级多晶硅 | 晶圆原料 | Hemlock Semiconductor（密歇根）等 | <sup>[[30]](#ref-30)</sup> |
| 镓 / 锗 | 化合物半导体 | 高度依赖进口（中国为主要来源） | <sup>[[30]](#ref-30)</sup> |

#### 主要晶圆厂

| 企业 | 性质 | 主要厂区 | 最先进量产工艺 | 来源 |
|---|---|---|---|---|
| Intel | 私有（上市） | 俄勒冈、亚利桑那、新墨西哥；俄亥俄在建 | Intel 3 / 18A | <sup>[[24]](#ref-24)[[29]](#ref-29)</sup> |
| TSMC Arizona | 私有（台积电子公司） | 亚利桑那州凤凰城 | N4（已量产），更先进工艺规划中 | <sup>[[29]](#ref-29)</sup> |
| Samsung Austin / Taylor | 私有（三星子公司） | 德州 | — | <sup>[[29]](#ref-29)</sup> |
| Micron | 私有（上市） | 爱达荷；纽约在建 | DRAM / HBM | <sup>[[29]](#ref-29)</sup> |
| GlobalFoundries | 私有（上市） | 纽约 Malta 等 | 成熟制程（12nm+） | <sup>[[29]](#ref-29)</sup> |

### Purchase 进出口

- **进出口统计口径**：HS 8541（分立器件）/ 8542（集成电路），数值待补充 <sup>[[31]](#ref-31)</sup>
- **AI 芯片出口管制**：2022-10、2023-10、2024-12 多轮规则，限制先进 GPU、HBM 与制造设备对华出口 <sup>[[32]](#ref-32)</sup>

| 类型 | 说明 | 来源 |
|---|---|---|
| 进口：先进逻辑芯片 | NVIDIA、AMD、Apple 等设计的芯片主要由台积电在中国台湾制造后进口 | <sup>[[28]](#ref-28)</sup> |
| 进口：组装测试后的芯片 | 大量来自马来西亚、越南等东南亚封测基地 | <sup>[[28]](#ref-28)</sup> |
| 出口：设备与设计 | 半导体制造设备（应用材料、Lam、KLA）与 EDA 软件是重要出口品 | <sup>[[28]](#ref-28)[[32]](#ref-32)</sup> |

## ③ 基础设施 Infrastructure

### 数据中心

美国拥有全球最多的数据中心与最大的 AI 训练集群，北弗吉尼亚是全球最大的数据中心市场。 <sup>[[33]](#ref-33)[[34]](#ref-34)</sup>

- **数据中心总数**：≈ 5,000+ 座（全球最多） <sup>[[33]](#ref-33)</sup>
- **全球数据中心用电占比**：≈ 45%（2024，IEA） <sup>[[34]](#ref-34)</sup>
- **数据中心用电（2023）**：≈ 176 TWh <sup>[[5]](#ref-5)</sup>

| 公司 | 市值 / 估值级别 | 数据中心 / 区域数量 | 代表性 AI 数据中心 | 来源 |
|---|---|---|---|---|
| Amazon（AWS） | ≥ 1 万亿美元 | 全球 ≈ 38 个区域、120+ 可用区 | Project Rainier（Trainium2 集群） | <sup>[[35]](#ref-35)</sup> |
| Microsoft（Azure） | ≥ 1 万亿美元 | 全球 60+ 区域、300+ 数据中心 | Fairwater AI 数据中心（威斯康星） | <sup>[[36]](#ref-36)</sup> |
| Alphabet（Google Cloud） | ≥ 1 万亿美元 | 全球 40+ 区域 | TPU 集群 | <sup>[[37]](#ref-37)</sup> |
| Meta | ≥ 1 万亿美元 | 20+ 自建数据中心园区 | Prometheus（俄亥俄）、Hyperion（路易斯安那） | <sup>[[38]](#ref-38)</sup> |
| Oracle（OCI） | ≥ 1,000 亿美元 | 全球 50+ 公有云区域 | 参与 Stargate（德州 Abilene） | <sup>[[39]](#ref-39)[[40]](#ref-40)</sup> |
| OpenAI（Stargate 合资） | ≥ 1,000 亿美元（非上市） | 多个在建园区 | Stargate 一期：德州 Abilene | <sup>[[40]](#ref-40)</sup> |
| xAI | ≥ 1,000 亿美元级（非上市） | — | Colossus（田纳西州孟菲斯） | <sup>[[41]](#ref-41)</sup> |
| CoreWeave | ≥ 100 亿美元 | 30+ 数据中心 | GPU 云 | <sup>[[42]](#ref-42)</sup> |
| Equinix | ≥ 500 亿美元 | 全球 260+ IBX 数据中心 | 托管型数据中心 | <sup>[[43]](#ref-43)</sup> |

### Energy-transmit 能源传输（电网）

美国本土电网分为东部、西部、德州（ERCOT）三大互联电网，由约 3,000 家电力公司、多个区域输电组织（ISO/RTO）共同运营，没有单一全国电网公司。 <sup>[[44]](#ref-44)</sup>

- **最早电网**：1882 年爱迪生纽约 Pearl Street 电站 <sup>[[44]](#ref-44)</sup>
- **电网结构**：3 大互联电网；7 个 ISO/RTO <sup>[[44]](#ref-44)[[45]](#ref-45)</sup>
- **高压输电线路**：≈ 16 万英里（≈ 26 万公里）以上 <sup>[[44]](#ref-44)</sup>
- **本土 48 州最高负荷**：≈ 750+ GW（2024–2025 年夏季纪录） <sup>[[46]](#ref-46)</sup>
- **输配电与储能就业**：≈ 140 万人（含输配电、储能） <sup>[[4]](#ref-4)</sup>

| 电网企业 / 机构 | 成立 / 建设时间 | 员工（运营维护） | 覆盖范围 | 来源 |
|---|---|---|---|---|
| PJM Interconnection | 1927 年起源 | — | 东部 13 州 + 华盛顿特区（含北弗吉尼亚数据中心集群） | <sup>[[45]](#ref-45)</sup> |
| ERCOT | 1970 年 | — | 德州大部分地区，独立互联电网 | <sup>[[45]](#ref-45)</sup> |
| 田纳西河谷管理局 TVA | 1933 年（联邦） | — | 田纳西州及周边 6 州部分地区 | <sup>[[9]](#ref-9)</sup> |
| NERC（北美电力可靠性公司） | 1968 年 | — | 制定可靠性标准，覆盖美、加及墨西哥部分地区 | <sup>[[45]](#ref-45)</sup> |

## ④ 模型 Models

美国前沿模型多为闭源（参数未公开），同时 Meta、OpenAI 等也发布开放权重模型。模型迭代很快，以下列表需定期更新。 <sup>[[47]](#ref-47)</sup>

| 模型 | 机构 | 发布 | 架构 | 参数（总 / 激活） | 开放权重 | 上下文 | 代表性成绩（官方自报） | 来源 |
|---|---|---|---|---|---|---|---|---|
| GPT-5 | OpenAI | 2025-08 | 未公开（含推理模式） | 未公开 | 否 | — | SWE-bench Verified 74.9% | <sup>[[48]](#ref-48)</sup> |
| gpt-oss-120b | OpenAI | 2025-08 | MoE | 117B / 5.1B | 是（Apache 2.0） | 128K | — | <sup>[[49]](#ref-49)</sup> |
| Claude Sonnet 4.5 | Anthropic | 2025-09 | 未公开 | 未公开 | 否 | 200K | SWE-bench Verified 77.2% | <sup>[[50]](#ref-50)</sup> |
| Claude 5 系列（Opus / Sonnet / Haiku） | Anthropic | 见官方 | 未公开 | 未公开 | 否 | — | — | <sup>[[51]](#ref-51)</sup> |
| Gemini 2.5 Pro / Gemini 3 | Google DeepMind | 2025 | 未公开（原生多模态） | 未公开 | 否 | ≈ 1M | — | <sup>[[52]](#ref-52)</sup> |
| Llama 4 Maverick | Meta | 2025-04 | MoE，原生多模态 | 400B / 17B | 开放权重（Llama 许可） | 1M | — | <sup>[[53]](#ref-53)</sup> |
| Llama 4 Scout | Meta | 2025-04 | MoE | 109B / 17B | 开放权重（Llama 许可） | 10M | — | <sup>[[53]](#ref-53)</sup> |
| Grok 4 | xAI | 2025-07 | 未公开 | 未公开 | 否 | — | — | <sup>[[54]](#ref-54)</sup> |

- **综合排名（人类偏好对战）**：LMArena <sup>[[55]](#ref-55)</sup>
- **智能指数 / 速度 / 价格**：Artificial Analysis <sup>[[56]](#ref-56)</sup>

## ⑤ 应用 Applications

| 方向 | 说明 | 代表案例 | 来源 |
|---|---|---|---|
| AI for Science | 蛋白质结构预测、天气预报、材料与数学 | AlphaFold（2024 诺贝尔化学奖）；GraphCast 天气模型 | <sup>[[57]](#ref-57)[[58]](#ref-58)</sup> |
| 自动驾驶 / Robotaxi | 城市无人驾驶出租车 | Waymo（凤凰城、旧金山、洛杉矶等） | <sup>[[59]](#ref-59)</sup> |
| 政策导向 | 加速 AI 基础设施建设与出口 | America's AI Action Plan（2025） | <sup>[[60]](#ref-60)</sup> |
| 编程与智能体 | 代码助手、自主 Agent | 待补充 | <sup>[[47]](#ref-47)</sup> |
| 医疗健康 | 影像、临床文书、药物发现 | 待补充 | <sup>[[47]](#ref-47)</sup> |
| 具身智能 / 机器人 | 人形机器人、仓储机器人 | 待补充 | <sup>[[47]](#ref-47)</sup> |
| 金融 / 教育 / 法律 / 内容创作 | 投研、个性化辅导、合同审查、AIGC | 待补充 | <sup>[[47]](#ref-47)</sup> |

## 数据说明

数值优先采用政府统计与企业官方披露；无统一官方统计的项目按行业典型值估算，标注“估算”，仅作量级参考。公共 / 私有按控股股东性质划分。

## Reference

1. <a id="ref-1"></a>U.S. EIA. What is U.S. electricity generation by energy source?. <https://www.eia.gov/tools/faqs/faq.php?id=427&t=3>
2. <a id="ref-2"></a>U.S. EIA. Electric Power Monthly. <https://www.eia.gov/electricity/monthly/>
3. <a id="ref-3"></a>U.S. EIA. How many power plants are there in the United States?. <https://www.eia.gov/tools/faqs/faq.php?id=65&t=2>
4. <a id="ref-4"></a>U.S. DOE. U.S. Energy and Employment Report (USEER). <https://www.energy.gov/policy/us-energy-employment-jobs-report-useer>
5. <a id="ref-5"></a>Lawrence Berkeley National Laboratory. 2024 United States Data Center Energy Usage Report. <https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report>
6. <a id="ref-6"></a>U.S. EIA. Form EIA-860 发电机级别数据（容量、位置、所有者）. <https://www.eia.gov/electricity/data/eia860/>
7. <a id="ref-7"></a>U.S. EIA. Coal Data Browser / Quarterly Coal Report. <https://www.eia.gov/coal/>
8. <a id="ref-8"></a>本站（见页面底部“数据说明”）. 本站估算说明：无官方统一统计时，按行业典型值估算，仅作量级参考. [#数据说明](#数据说明)
9. <a id="ref-9"></a>Tennessee Valley Authority. TVA 电厂. <https://www.tva.com/energy/our-power-system>
10. <a id="ref-10"></a>U.S. Bureau of Reclamation. Grand Coulee Dam. <https://www.usbr.gov/pn/grandcoulee/>
11. <a id="ref-11"></a>U.S. Bureau of Reclamation. Hoover Dam. <https://www.usbr.gov/lc/hooverdam/>
12. <a id="ref-12"></a>World Nuclear Association. Nuclear Fuel Cycle / Country Profiles. <https://world-nuclear.org/>
13. <a id="ref-13"></a>U.S. EIA. How many nuclear power plants are in the U.S.?. <https://www.eia.gov/tools/faqs/faq.php?id=207&t=3>
14. <a id="ref-14"></a>U.S. EIA. Uranium Marketing Annual Report. <https://www.eia.gov/uranium/marketing/>
15. <a id="ref-15"></a>USGS / LBNL / ACP. U.S. Wind Turbine Database. <https://eerscmap.usgs.gov/uswtdb/>
16. <a id="ref-16"></a>IEA. Solar PV Global Supply Chains. <https://www.iea.org/reports/solar-pv-global-supply-chains>
17. <a id="ref-17"></a>NVIDIA. NVIDIA H100 Tensor Core GPU. <https://www.nvidia.com/en-us/data-center/h100/>
18. <a id="ref-18"></a>AMD. AMD Instinct MI300X. <https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html>
19. <a id="ref-19"></a>NVIDIA. NVIDIA DGX B200. <https://www.nvidia.com/en-us/data-center/dgx-b200/>
20. <a id="ref-20"></a>AMD. AMD Instinct MI355X. <https://www.amd.com/en/products/accelerators/instinct/mi350/mi355x.html>
21. <a id="ref-21"></a>Intel. Intel Gaudi AI Accelerators. <https://www.intel.com/content/www/us/en/products/details/processors/ai-accelerators/gaudi.html>
22. <a id="ref-22"></a>Google. Ironwood: The first Google TPU for the age of inference. <https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/>
23. <a id="ref-23"></a>Amazon Web Services. AWS Trainium. <https://aws.amazon.com/ai/machine-learning/trainium/>
24. <a id="ref-24"></a>Intel. Intel Xeon 6 Processors. <https://www.intel.com/content/www/us/en/products/details/processors/xeon.html>
25. <a id="ref-25"></a>AMD. AMD EPYC 9005 Series. <https://www.amd.com/en/products/processors/server/epyc/9005-series.html>
26. <a id="ref-26"></a>NVIDIA. NVIDIA Grace CPU. <https://www.nvidia.com/en-us/data-center/grace-cpu/>
27. <a id="ref-27"></a>Amazon Web Services. AWS Graviton Processor. <https://aws.amazon.com/ec2/graviton/>
28. <a id="ref-28"></a>SIA & BCG. Emerging Resilience in the Semiconductor Supply Chain (2024). <https://www.semiconductors.org/emerging-resilience-in-the-semiconductor-supply-chain/>
29. <a id="ref-29"></a>NIST / U.S. Dept. of Commerce. CHIPS for America. <https://www.nist.gov/chips>
30. <a id="ref-30"></a>USGS. Mineral Commodity Summaries（镓、锗、高纯石英、硅）. <https://www.usgs.gov/centers/national-minerals-information-center/mineral-commodity-summaries>
31. <a id="ref-31"></a>U.S. Census Bureau. USA Trade Online（HS 8541/8542）. <https://usatrade.census.gov/>
32. <a id="ref-32"></a>U.S. Bureau of Industry and Security. 先进计算与半导体出口管制规则. <https://www.bis.gov/>
33. <a id="ref-33"></a>datacentermap.com. Data Center Map（按国家统计）. <https://www.datacentermap.com/>
34. <a id="ref-34"></a>IEA. Energy and AI (2025). <https://www.iea.org/reports/energy-and-ai>
35. <a id="ref-35"></a>Amazon Web Services. AWS Global Infrastructure. <https://aws.amazon.com/about-aws/global-infrastructure/>
36. <a id="ref-36"></a>Microsoft. Azure global infrastructure. <https://datacenters.microsoft.com/>
37. <a id="ref-37"></a>Google. Google Cloud locations. <https://cloud.google.com/about/locations>
38. <a id="ref-38"></a>Meta. Meta Data Centers. <https://datacenters.atmeta.com/>
39. <a id="ref-39"></a>Oracle. Oracle Cloud Infrastructure regions. <https://www.oracle.com/cloud/public-cloud-regions/>
40. <a id="ref-40"></a>OpenAI. Announcing The Stargate Project. <https://openai.com/index/announcing-the-stargate-project/>
41. <a id="ref-41"></a>xAI. Colossus. <https://x.ai/colossus>
42. <a id="ref-42"></a>CoreWeave. CoreWeave 数据中心. <https://www.coreweave.com/>
43. <a id="ref-43"></a>Equinix. Equinix IBX Data Centers. <https://www.equinix.com/data-centers>
44. <a id="ref-44"></a>U.S. EIA. Electricity explained: delivery to consumers. <https://www.eia.gov/energyexplained/electricity/delivery-to-consumers.php>
45. <a id="ref-45"></a>NERC. Reliability Assessments. <https://www.nerc.com/>
46. <a id="ref-46"></a>U.S. EIA. Today in Energy（峰值负荷等）. <https://www.eia.gov/todayinenergy/>
47. <a id="ref-47"></a>Stanford HAI. AI Index Report. <https://hai.stanford.edu/ai-index>
48. <a id="ref-48"></a>OpenAI. Introducing GPT-5. <https://openai.com/index/introducing-gpt-5/>
49. <a id="ref-49"></a>OpenAI. Introducing gpt-oss. <https://openai.com/index/introducing-gpt-oss/>
50. <a id="ref-50"></a>Anthropic. Introducing Claude Sonnet 4.5. <https://www.anthropic.com/news/claude-sonnet-4-5>
51. <a id="ref-51"></a>Anthropic. Claude models overview. <https://docs.anthropic.com/en/docs/about-claude/models/overview>
52. <a id="ref-52"></a>Google DeepMind. Gemini models. <https://deepmind.google/models/gemini/>
53. <a id="ref-53"></a>Meta AI. The Llama 4 herd. <https://ai.meta.com/blog/llama-4-multimodal-intelligence/>
54. <a id="ref-54"></a>xAI. xAI News（Grok 发布）. <https://x.ai/news>
55. <a id="ref-55"></a>LMArena. LMArena Leaderboard. <https://lmarena.ai/leaderboard>
56. <a id="ref-56"></a>Artificial Analysis. Artificial Analysis 模型对比. <https://artificialanalysis.ai/>
57. <a id="ref-57"></a>NobelPrize.org. The Nobel Prize in Chemistry 2024（AlphaFold）. <https://www.nobelprize.org/prizes/chemistry/2024/summary/>
58. <a id="ref-58"></a>Science (2023). Learning skillful medium-range global weather forecasting. <https://www.science.org/doi/10.1126/science.adi2336>
59. <a id="ref-59"></a>Waymo. Waymo. <https://waymo.com/>
60. <a id="ref-60"></a>The White House / AI.gov. America's AI Action Plan (2025). <https://www.ai.gov/>

<!-- 本文件由 scripts/build_github_views.py 根据 data.js 自动生成，请勿手动修改。 -->
