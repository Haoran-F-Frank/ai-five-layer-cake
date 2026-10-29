# 🇨🇳 China (Mainland)

[中文版](README.md) · [🌐 Interactive version (maps, expandable sections, language switch)](https://haoran-f-frank.github.io/ai-five-layer-cake/countries/china/?lang=en) · Data updated: 2026-10-29

The world's largest electricity producer and largest installer of renewables. Its chip industry is strongest in design and mature-node manufacturing, with high-end AI chips under US export controls; open-weight large models are thriving.

> ⚠️ First-draft data compiled from public sources; “≈” marks approximations or estimates. Each [n] links to the References at the end — the original source prevails.

## ① Energy — Power Supply

Coal is the backbone of China's power supply, but wind and solar capacity is growing extremely fast. Generators are mostly central and local state-owned enterprises; private capital is concentrated in distributed solar, captive industrial plants and some new-energy projects. <sup>[[1]](#ref-1)[[2]](#ref-2)</sup>

- **Installed capacity (end-2024)**: ≈ 3,350 GW <sup>[[1]](#ref-1)</sup>
- **Generation (2024)**: ≈ 10,100 TWh <sup>[[3]](#ref-3)[[2]](#ref-2)</sup>
- **Wind + solar capacity (end-2024)**: ≈ 1,410 GW, now above thermal <sup>[[1]](#ref-1)</sup>
- **Data-center electricity (2024, IEA)**: About a quarter of global data-center use <sup>[[4]](#ref-4)</sup>

### Map of power plants

```geojson
{"type": "FeatureCollection", "features": [{"type": "Feature", "geometry": {"type": "Point", "coordinates": [111.33, 40.2]}, "properties": {"名称 Name": "大唐托克托发电厂 / Datang Tuoketuo Power Plant", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "6,720 MW", "企业 Company": "China Datang (central SOE)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [121.3, 28.13]}, "properties": {"名称 Name": "华能玉环电厂 / Huaneng Yuhuan Power Plant", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "4,000 MW（4×1000 MW 超超临界）", "企业 Company": "China Huaneng (central SOE)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [112.88, 21.86]}, "properties": {"名称 Name": "国能台山电厂 / CHN Energy Taishan Power Plant", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "≈ 5,000 MW", "企业 Company": "China Energy Investment Corp. (central SOE)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [116.25, 36.58]}, "properties": {"名称 Name": "信发集团自备电厂群 / Xinfa Group captive plants", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "数千 MW（口径不一，待核实）", "企业 Company": "Xinfa Group (private)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [117.74, 36.86]}, "properties": {"名称 Name": "魏桥 / 中国宏桥自备电厂群 / Weiqiao / China Hongqiao captive plants", "类型 Type": "煤炭发电厂 / Coal power plants", "装机 Capacity": "数千 MW（口径不一，待核实）", "企业 Company": "Weiqiao Pioneering Group / China Hongqiao (private, HKEX 1378)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [116.53, 39.89]}, "properties": {"名称 Name": "华能北京热电厂（燃气热电） / Huaneng Beijing Thermal Power Plant (gas CHP)", "类型 Type": "天然气发电厂 / Natural gas power plants", "装机 Capacity": "待核实", "企业 Company": "China Huaneng / Beijing Energy Group", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [111.003, 30.823]}, "properties": {"名称 Name": "三峡水电站 / Three Gorges Dam", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "22,500 MW", "企业 Company": "China Three Gorges Corp. (central SOE)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [102.905, 27.215]}, "properties": {"名称 Name": "白鹤滩水电站 / Baihetan", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "16,000 MW", "企业 Company": "China Three Gorges Corp.", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [103.65, 28.26]}, "properties": {"名称 Name": "溪洛渡水电站 / Xiluodu", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 13,860 MW", "企业 Company": "China Three Gorges Corp.", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [102.63, 26.33]}, "properties": {"名称 Name": "乌东德水电站 / Wudongde", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "10,200 MW", "企业 Company": "China Three Gorges Corp.", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [104.4, 28.64]}, "properties": {"名称 Name": "向家坝水电站 / Xiangjiaba", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 6,400 MW", "企业 Company": "China Three Gorges Corp.", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [100.43, 26.8]}, "properties": {"名称 Name": "金安桥水电站 / Jin'anqiao", "类型 Type": "堤坝及内部发电厂 / Dams and their power plants", "装机 Capacity": "≈ 2,400 MW", "企业 Company": "Hanergy Group (private; historical controlling owner — current ownership to be verified)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [112.26, 21.71]}, "properties": {"名称 Name": "阳江核电站 / Yangjiang", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "6 台 × ≈1,086 MW ≈ 6,500 MW", "企业 Company": "China General Nuclear (CGN)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [112.98, 21.92]}, "properties": {"名称 Name": "台山核电站 / Taishan", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "2 × 1,750 MW（EPR）", "企业 Company": "CGN (France's EDF holds 30%)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [114.54, 22.6]}, "properties": {"名称 Name": "大亚湾核电站 / Daya Bay", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "2 × ≈984 MW", "企业 Company": "CGN (Hong Kong's CLP holds 25%)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [119.46, 34.69]}, "properties": {"名称 Name": "田湾核电站 / Tianwan", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "6 台在运 ≈ 6,600 MW，另有机组在建", "企业 Company": "China National Nuclear Corp. (CNNC)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [119.45, 25.44]}, "properties": {"名称 Name": "福清核电站 / Fuqing", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "6 台 ≈ 6,700 MW（含“华龙一号”示范机组）", "企业 Company": "CNNC", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [121.48, 39.8]}, "properties": {"名称 Name": "红沿河核电站 / Hongyanhe", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "6 台 ≈ 6,700 MW", "企业 Company": "CGN / SPIC", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [122.53, 36.97]}, "properties": {"名称 Name": "石岛湾高温气冷堆 / Shidaowan HTR-PM", "类型 Type": "核裂变发电厂 / Nuclear fission plants", "装机 Capacity": "≈ 200 MW", "企业 Company": "China Huaneng", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [97.0, 40.3]}, "properties": {"名称 Name": "酒泉风电基地 / Jiuquan Wind Power Base", "类型 Type": "风力发电厂 / Wind farms", "装机 Capacity": "规划千万千瓦级（≈ 20 GW）", "企业 Company": "Several generators (Datang, Huaneng, CHN Energy, SPIC, …)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [121.4, 32.5]}, "properties": {"名称 Name": "江苏如东海上风电群 / Rudong offshore wind cluster", "类型 Type": "风力发电厂 / Wind farms", "装机 Capacity": "数 GW（多项目合计）", "企业 Company": "China Three Gorges, CHN Energy (Longyuan Power) and others", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [100.6, 36.15]}, "properties": {"名称 Name": "青海共和光伏园（塔拉滩） / Gonghe PV Park (Talatan)", "类型 Type": "太阳能发电厂 / Solar power plants", "装机 Capacity": "多 GW 级（多项目合计）", "企业 Company": "SPIC (Huanghe Hydropower) and others", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [90.48, 30.08]}, "properties": {"名称 Name": "羊八井地热电站 / Yangbajain Geothermal Power Station", "类型 Type": "地热发电厂 / Geothermal power plants", "装机 Capacity": "≈ 25 MW", "企业 Company": "Tibet local SOE", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [121.2, 28.35]}, "properties": {"名称 Name": "江厦潮汐试验电站 / Jiangxia Tidal Power Station", "类型 Type": "潮汐能发电厂 / Tidal power plants", "装机 Capacity": "≈ 4 MW", "企业 Company": "CHN Energy (Longyuan Power)", "所有制 Ownership": "国有/公共 Public", "marker-color": "#2563eb", "marker-size": "small"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [94.42, 40.08]}, "properties": {"名称 Name": "敦煌熔盐塔式光热电站 / Dunhuang molten-salt tower CSP plant", "类型 Type": "其他发电厂（光热等） / Other plants (CSP etc.)", "装机 Capacity": "100 MW", "企业 Company": "Shouhang High-Tech (private, SZSE 002665)", "所有制 Ownership": "私有 Private", "marker-color": "#d97706", "marker-size": "small"}}]}
```

Blue = public / state-owned, orange = private. Locations are approximate. Full map file: [plants.geojson](plants.geojson)

### 1.1 Thermal power (Non-sustainable)

> **How it works:** Burning fossil fuel heats a boiler to make high-pressure steam (or gas drives a gas turbine directly), which spins a turbine and generator: chemical → heat → mechanical → electrical energy. <sup>[[2]](#ref-2)</sup>

#### 1.1.1 Coal power plants

**National statistics**

- **Number of plants**: ≈ 1,000+ operating coal plants (counted by plant) <sup>[[5]](#ref-5)</sup>
- **Capacity**: ≈ 1,190 GW (end-2024) <sup>[[1]](#ref-1)[[2]](#ref-2)</sup>
- **Generation**: ≈ 5,500–5,800 TWh (55%+ of total) <sup>[[2]](#ref-2)[[6]](#ref-6)</sup>
- **Fuel use**: ≈ 300 g standard coal per kWh supplied; ≈ 2.5 billion t raw coal/yr for power (estimate) <sup>[[2]](#ref-2)[[7]](#ref-7)</sup>
- **O&M staff**: ≈ 300–600 per modern 1 GW plant (estimate) <sup>[[7]](#ref-7)</sup>

**Public / state-owned**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Datang Tuoketuo Power Plant | Togtoh County, Hohhot, Inner Mongolia | 6,720 MW | — | ≈ 17 million t raw coal/yr (estimate) | — | China Datang (central SOE) | One of the world's largest coal plants | <sup>[[5]](#ref-5)[[8]](#ref-8)[[7]](#ref-7)</sup> |
| Huaneng Yuhuan Power Plant | Yuhuan, Taizhou, Zhejiang | 4,000 MW (4×1,000 MW ultra-supercritical) | — | — | — | China Huaneng (central SOE) | China's first 1,000 MW ultra-supercritical plant | <sup>[[5]](#ref-5)[[9]](#ref-9)</sup> |
| CHN Energy Taishan Power Plant | Taishan, Jiangmen, Guangdong | ≈ 5,000 MW | — | — | — | China Energy Investment Corp. (central SOE) | — | <sup>[[5]](#ref-5)[[10]](#ref-10)</sup> |

**Private (company named)**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Xinfa Group captive plants | Chiping, Liaocheng, Shandong | Several GW (figures vary, to be verified) | — | — | — | Xinfa Group (private) | Captive plants powering aluminium smelters | <sup>[[5]](#ref-5)</sup> |
| Weiqiao / China Hongqiao captive plants | Zouping, Binzhou, Shandong | Several GW (figures vary, to be verified) | — | — | — | Weiqiao Pioneering Group / China Hongqiao (private, HKEX 1378) | Captive plants powering aluminium smelters | <sup>[[5]](#ref-5)</sup> |

#### 1.1.2 Oil power plants

**National statistics**

- **Share**: < 1% of generation; mainly islands, backup and emergency supply <sup>[[6]](#ref-6)[[2]](#ref-2)</sup>
- **Fuel use**: Diesel / heavy oil, ≈ 0.2–0.25 kg per kWh (estimate) <sup>[[7]](#ref-7)</sup>

**Public / state-owned**

—

**Private (company named)**

—

_Mainland China has almost no large oil-fired plants, so none are listed._ 

#### 1.1.3 Natural gas power plants

**National statistics**

- **Capacity**: ≈ 140 GW (end-2024, estimate) <sup>[[2]](#ref-2)</sup>
- **Generation**: ≈ 300 TWh (≈ 3%) <sup>[[6]](#ref-6)[[2]](#ref-2)</sup>
- **Fuel use**: Combined cycle ≈ 0.18–0.2 m³ gas per kWh (estimate) <sup>[[7]](#ref-7)</sup>
- **Where**: Beijing-Tianjin-Hebei, Yangtze River Delta, Pearl River Delta; peaking and combined heat & power <sup>[[11]](#ref-11)</sup>

**Public / state-owned**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Huaneng Beijing Thermal Power Plant (gas CHP) | Chaoyang District, Beijing | To be verified | — | Natural gas | — | China Huaneng / Beijing Energy Group | A main heat-and-power hub after Beijing's coal-to-gas switch | <sup>[[11]](#ref-11)[[9]](#ref-9)</sup> |

**Private (company named)**

—

_Gas plants are mostly run by state-owned generators and local energy SOEs; no representative private gas plant listed yet._ 

### 1.2 Hydropower (Non-sustainable (this site's grouping; usually classed as renewable))

> **How it works:** The height difference between reservoir and river drives water through a turbine and generator: potential → kinetic → electrical energy. <sup>[[12]](#ref-12)</sup>

#### 1.2.1 Dams and their power plants

**National statistics**

- **Capacity**: ≈ 440 GW (end-2024, incl. pumped storage) <sup>[[1]](#ref-1)</sup>
- **Generation**: ≈ 1,400 TWh (2024) <sup>[[2]](#ref-2)</sup>
- **Number of stations**: 40,000+ rural small hydro stations <sup>[[13]](#ref-13)</sup>
- **Materials**: No fuel; large amounts of concrete and steel during construction <sup>[[12]](#ref-12)</sup>

**Public / state-owned**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Three Gorges Dam | Yichang, Hubei | 22,500 MW | Record ≈ 111.8 TWh in 2020 | — | — | China Three Gorges Corp. (central SOE) | World's largest power station by capacity | <sup>[[12]](#ref-12)[[14]](#ref-14)</sup> |
| Baihetan | Ningnan, Sichuan / Qiaojia, Yunnan | 16,000 MW | — | — | — | China Three Gorges Corp. | 1,000 MW units | <sup>[[12]](#ref-12)[[14]](#ref-14)</sup> |
| Xiluodu | Leibo, Sichuan / Yongshan, Yunnan | ≈ 13,860 MW | — | — | — | China Three Gorges Corp. | — | <sup>[[12]](#ref-12)[[14]](#ref-14)</sup> |
| Wudongde | Huidong, Sichuan / Luquan, Yunnan | 10,200 MW | — | — | — | China Three Gorges Corp. | — | <sup>[[12]](#ref-12)[[14]](#ref-14)</sup> |
| Xiangjiaba | Yibin, Sichuan / Shuifu, Yunnan | ≈ 6,400 MW | — | — | — | China Three Gorges Corp. | — | <sup>[[12]](#ref-12)[[14]](#ref-14)</sup> |

**Private (company named)**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Jin'anqiao | Lijiang, Yunnan | ≈ 2,400 MW | — | — | — | Hanergy Group (private; historical controlling owner — current ownership to be verified) | A rare privately owned large hydro plant | <sup>[[14]](#ref-14)</sup> |

### 1.3 Nuclear power (Non-sustainable (low-carbon))

> **How it works:** Heavy nuclei such as uranium-235 undergo a controlled fission chain reaction in the reactor; the heat warms the coolant, raising steam for the turbine-generator. <sup>[[15]](#ref-15)</sup>

#### 1.3.1 Nuclear fission plants

**National statistics**

- **Operating reactors**: ≈ 58 (2025), with ≈ 30 more under construction — the most in the world <sup>[[16]](#ref-16)[[17]](#ref-17)</sup>
- **Capacity**: ≈ 60 GW <sup>[[16]](#ref-16)[[1]](#ref-1)</sup>
- **Generation**: ≈ 450 TWh (2024, ≈ 4.5%) <sup>[[16]](#ref-16)[[2]](#ref-2)</sup>
- **Fuel use**: ≈ 20–25 t low-enriched uranium fuel per GW per year (estimate) <sup>[[15]](#ref-15)[[7]](#ref-7)</sup>
- **O&M staff**: ≈ 800–1,200 per two-unit plant (estimate) <sup>[[7]](#ref-7)</sup>
- **Ownership**: Plants must be controlled by licensed state-owned nuclear operators (CNNC, CGN, SPIC, Huaneng) <sup>[[16]](#ref-16)</sup>

**Public / state-owned**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Yangjiang | Yangjiang, Guangdong | 6 × ≈1,086 MW ≈ 6,500 MW | — | — | — | China General Nuclear (CGN) | — | <sup>[[18]](#ref-18)[[17]](#ref-17)</sup> |
| Taishan | Taishan, Guangdong | 2 × 1,750 MW (EPR) | — | — | — | CGN (France's EDF holds 30%) | World's first EPR to enter service | <sup>[[18]](#ref-18)[[17]](#ref-17)</sup> |
| Daya Bay | Shenzhen, Guangdong | 2 × ≈984 MW | — | — | — | CGN (Hong Kong's CLP holds 25%) | Mainland China's first large commercial nuclear plant | <sup>[[18]](#ref-18)[[17]](#ref-17)</sup> |
| Tianwan | Lianyungang, Jiangsu | 6 units ≈ 6,600 MW operating, more under construction | — | — | — | China National Nuclear Corp. (CNNC) | — | <sup>[[19]](#ref-19)[[17]](#ref-17)</sup> |
| Fuqing | Fuqing, Fujian | 6 units ≈ 6,700 MW (incl. Hualong One demo units) | — | — | — | CNNC | — | <sup>[[19]](#ref-19)[[17]](#ref-17)</sup> |
| Hongyanhe | Wafangdian, Dalian, Liaoning | 6 units ≈ 6,700 MW | — | — | — | CGN / SPIC | Largest nuclear plant in Northeast China | <sup>[[18]](#ref-18)[[20]](#ref-20)[[17]](#ref-17)</sup> |
| Shidaowan HTR-PM | Rongcheng, Weihai, Shandong | ≈ 200 MW | — | Pebble fuel elements | — | China Huaneng | World's first commercial Gen-IV high-temperature gas-cooled reactor | <sup>[[9]](#ref-9)[[17]](#ref-17)</sup> |

**Private (company named)**

—

_Under current policy no nuclear plant is privately controlled; private and Hong Kong firms hold only minority stakes._ 

### 1.4 Wind farms (Sustainable)

> **How it works:** Wind turns the blades, which drive a generator through a gearbox (or directly); offshore wind is steadier and runs more hours. <sup>[[21]](#ref-21)</sup>

**National statistics**

- **Capacity**: ≈ 520 GW (end-2024) <sup>[[1]](#ref-1)</sup>
- **Generation**: ≈ 1,000 TWh (2024, ≈ 10%) <sup>[[2]](#ref-2)[[6]](#ref-6)</sup>
- **Materials**: ≈ 100–180 t steel per MW; direct-drive turbines use rare-earth magnets (estimate) <sup>[[7]](#ref-7)</sup>
- **Where**: Large bases in the north (Gansu, Inner Mongolia, Xinjiang) plus offshore wind on the southeast coast <sup>[[21]](#ref-21)</sup>

**Public / state-owned**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Jiuquan Wind Power Base | Jiuquan, Gansu | Planned ≈ 20 GW | — | — | — | Several generators (Datang, Huaneng, CHN Energy, SPIC, …) | China's first 10-GW-class wind base | <sup>[[21]](#ref-21)</sup> |
| Rudong offshore wind cluster | Rudong, Nantong, Jiangsu | Several GW (multiple projects) | — | — | — | China Three Gorges, CHN Energy (Longyuan Power) and others | — | <sup>[[21]](#ref-21)[[12]](#ref-12)</sup> |

**Private (company named)**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Envision-owned wind farms (various) | Across China | To be verified | — | — | — | Envision Group (private) | Turbine maker that also owns and operates wind farms | <sup>[[21]](#ref-21)</sup> |

### 1.5 Solar power plants (Sustainable)

> **How it works:** PV: a semiconductor (crystalline silicon) absorbs photons and creates electron-hole pairs that flow as current (photovoltaic effect). CSP: concentrated sunlight heats a fluid to make steam. <sup>[[22]](#ref-22)</sup>

**National statistics**

- **Capacity**: ≈ 890 GW (end-2024) <sup>[[1]](#ref-1)</sup>
- **Distributed share**: ≈ 40% is distributed PV (much of it owned by private firms and households) <sup>[[1]](#ref-1)</sup>
- **Generation**: ≈ 800+ TWh (2024) <sup>[[2]](#ref-2)[[6]](#ref-6)</sup>
- **Materials**: Polysilicon, silver paste, PV glass, aluminium frames; China holds 80%+ of every PV manufacturing stage <sup>[[22]](#ref-22)</sup>

**Public / state-owned**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Gonghe PV Park (Talatan) | Gonghe County, Hainan Prefecture, Qinghai | Multi-GW (multiple projects) | — | — | — | SPIC (Huanghe Hydropower) and others | Showcase for “PV + desert control + sheep grazing” | <sup>[[23]](#ref-23)[[20]](#ref-20)</sup> |

**Private (company named)**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Chint distributed PV (various) | Zhejiang and across China | To be verified | — | — | — | Chint Group (private) | Residential and commercial rooftop PV | <sup>[[23]](#ref-23)</sup> |

### 1.6 Biomass power plants (Sustainable)

> **How it works:** Burning crop and forestry residues, municipal waste or biogas to raise steam for a turbine — like thermal power, but with renewable fuel. <sup>[[1]](#ref-1)</sup>

**National statistics**

- **Capacity**: ≈ 45 GW (incl. waste-to-energy, estimate) <sup>[[1]](#ref-1)</sup>
- **Generation**: ≈ 200 TWh (estimate) <sup>[[6]](#ref-6)</sup>
- **Feedstock**: Straw, forestry residues, municipal solid waste <sup>[[1]](#ref-1)</sup>

**Public / state-owned**

—

**Private (company named)**

—

_Key companies: Everbright Environment (SOE, waste-to-energy), National Bio Energy and others; individual plants to be added._ 

### 1.7 Geothermal power plants (Sustainable)

> **How it works:** Hot water or steam from underground drives a turbine directly or through a heat exchanger (binary cycle). <sup>[[1]](#ref-1)</sup>

**National statistics**

- **Capacity**: Very small (tens of MW); geothermal is used mostly for heating <sup>[[1]](#ref-1)</sup>

**Public / state-owned**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Yangbajain Geothermal Power Station | Damxung County, Lhasa, Tibet | ≈ 25 MW | — | — | — | Tibet local SOE | China's first large geothermal plant (from 1977) | <sup>[[1]](#ref-1)</sup> |

**Private (company named)**

—

### 1.8 Tidal power plants (Sustainable)

> **How it works:** A barrage across a bay forms a basin; the difference between high and low tide drives turbines. <sup>[[1]](#ref-1)</sup>

**National statistics**

- **Capacity**: Demonstration scale (MW level) <sup>[[1]](#ref-1)</sup>

**Public / state-owned**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Jiangxia Tidal Power Station | Wenling, Taizhou, Zhejiang | ≈ 4 MW | — | — | — | CHN Energy (Longyuan Power) | China's largest tidal plant | <sup>[[10]](#ref-10)</sup> |

**Private (company named)**

—

### 1.9 Other power plants (Sustainable)

> **How it works:** E.g. concentrating solar (molten-salt towers) and hydrogen fuel cells. Pumped hydro and batteries are storage and do not generate net power. <sup>[[1]](#ref-1)</sup>

#### 1.9 Other plants (CSP etc.)

**National statistics**

- **CSP capacity**: Hundreds of MW, mainly in Gansu and Qinghai <sup>[[1]](#ref-1)</sup>

**Public / state-owned**

—

**Private (company named)**

| Plant | Location | Capacity | Annual output | Materials / fuel | O&M staff | Operator / owner | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| Dunhuang molten-salt tower CSP plant | Dunhuang, Gansu | 100 MW | — | — | — | Shouhang High-Tech (private, SZSE 002665) | — | <sup>[[23]](#ref-23)</sup> |

## ② Chips

### Design: leading GPUs / AI accelerators

Huawei Ascend leads domestic AI accelerators. Because of US export controls, NVIDIA can only sell cut-down products to China. Peak compute is dense BF16/FP16; figures not from official sources are marked “reported”. <sup>[[24]](#ref-24)</sup>

| Vendor | Model | Year | Process | Memory | Bandwidth | Peak compute (dense) | Power | Notes | Source |
|---|---|---|---|---|---|---|---|---|---|
| Huawei | Ascend 910B | 2023 | 7nm-class (reported) | 64 GB HBM2e | — | ≈ 320 TFLOPS FP16 (reported) | ≈ 400 W | Domestic training workhorse | <sup>[[25]](#ref-25)[[26]](#ref-26)</sup> |
| Huawei | Ascend 910C | 2025 | 7nm-class (reported) | 128 GB HBM | ≈ 3.2 TB/s (reported) | ≈ 780 TFLOPS BF16 (reported) | — | Dual-die package; CloudMatrix 384 supernode | <sup>[[26]](#ref-26)</sup> |
| Cambricon | MLU370-X8 | 2022 | 7nm | 48 GB LPDDR5 | 614 GB/s | 256 TOPS INT8 | 250 W | — | <sup>[[27]](#ref-27)</sup> |
| Hygon | DCU series | — | — | — | — | Specs not fully public | — | CUDA-like ecosystem (ROCm lineage) | <sup>[[28]](#ref-28)</sup> |

### Design: leading server CPUs

| Vendor | Model | Architecture / ISA | Max cores | Process | Notes | Source |
|---|---|---|---|---|---|---|
| Huawei | Kunpeng 920 | ARMv8.2 | 64 | 7nm | — | <sup>[[29]](#ref-29)</sup> |
| Hygon | Hygon 7000 series | x86 (derived from licensed AMD Zen) | See vendor site | — | — | <sup>[[28]](#ref-28)</sup> |
| Loongson | 3D5000 | LoongArch (home-grown ISA) | 32 | — | Two 3C5000 dies in one package | <sup>[[30]](#ref-30)</sup> |
| Phytium | Tengyun S2500 | ARMv8 | 64 | 16nm | — | <sup>[[31]](#ref-31)</sup> |

### Produce: raw materials & capacity

- **Integrated circuit output (2024)**: ≈ 451.4 billion units <sup>[[3]](#ref-3)</sup>
- **Most advanced node in volume**: SMIC 7nm-class (N+2), without EUV lithography <sup>[[32]](#ref-32)</sup>

| Material | Use | Main sources / output | Source |
|---|---|---|---|
| Silicon (polysilicon → wafers) | Wafer substrate | China makes ≈ 90% of the world's polysilicon (mostly solar grade); semiconductor-grade wafers still rely on imports from Shin-Etsu, SUMCO and others | <sup>[[22]](#ref-22)[[33]](#ref-33)</sup> |
| Gallium | GaN power / RF chips | China produces ≈ 98% of primary gallium; export controls since Aug 2023 | <sup>[[33]](#ref-33)[[34]](#ref-34)</sup> |
| Germanium | Infrared, fiber optics, SiGe chips | China is the largest producer; export controls since Aug 2023 | <sup>[[33]](#ref-33)[[34]](#ref-34)</sup> |
| Rare earths | Polishing materials, sputtering targets, magnets | China accounts for ≈ 70% of global mining | <sup>[[33]](#ref-33)</sup> |

#### Major fabs

| Company | Ownership | Main sites | Most advanced node in volume | Source |
|---|---|---|---|---|
| SMIC | State capital-led, listed | Shanghai, Beijing, Shenzhen, Tianjin | 7nm-class | <sup>[[32]](#ref-32)</sup> |
| Hua Hong Group | State-owned | Shanghai, Wuxi | Mature nodes (28nm+) | <sup>[[32]](#ref-32)</sup> |
| YMTC | State capital-led | Wuhan | 3D NAND | <sup>[[32]](#ref-32)</sup> |
| CXMT | State capital-led | Hefei | DRAM | <sup>[[32]](#ref-32)</sup> |

### Purchase: imports & exports

- **IC imports (2024)**: ≈ 549.2 billion units, ≈ $385.6 billion <sup>[[35]](#ref-35)</sup>
- **IC exports (2024)**: ≈ 298.1 billion units, ≈ $159.5 billion <sup>[[35]](#ref-35)</sup>
- **Trade deficit**: ≈ $226 billion; ICs are long one of China's largest import items <sup>[[35]](#ref-35)</sup>

| Category | Description | Source |
|---|---|---|
| High-end AI GPUs | US export controls in 2022, 2023 and 2024 bar A100/H100/B200 and similar; only cut-down models (e.g. H20, under repeatedly changing licensing) can be imported | <sup>[[24]](#ref-24)</sup> |
| Memory (DRAM / NAND / HBM) | A large share of import value; HBM is now controlled | <sup>[[35]](#ref-35)[[24]](#ref-24)</sup> |
| Processors & controllers | CPUs, MCUs, SoCs, mainly from Taiwan, South Korea and Southeast Asia | <sup>[[35]](#ref-35)</sup> |
| Exports: mature-node chips | Discretes, analog and power chips | <sup>[[35]](#ref-35)</sup> |

## ③ Infrastructure

### Data centers

China plans capacity under “East Data, West Computing”: compute hubs in energy-rich western regions serve demand from the east. <sup>[[36]](#ref-36)</sup>

- **National compute hubs**: 8 national hub nodes, 10 national data-center clusters <sup>[[36]](#ref-36)</sup>
- **Total compute (end-2024)**: ≈ 280 EFLOPS <sup>[[37]](#ref-37)</sup>
- **Standard racks in use**: ≈ 8 million+ <sup>[[37]](#ref-37)</sup>

| Company | Market cap / valuation tier | Data centers / regions | Flagship AI sites | Source |
|---|---|---|---|---|
| Alibaba Cloud (Alibaba) | ≥ $100 billion | ≈ 29 regions, ≈ 90 zones worldwide | Zhangbei, Ulanqab, Heyuan | <sup>[[38]](#ref-38)</sup> |
| Huawei Cloud (Huawei) | Unlisted (≥ $100 billion tier) | 30+ regions worldwide | Gui'an, Ulanqab, Wuhu | <sup>[[39]](#ref-39)</sup> |
| Tencent Cloud (Tencent) | ≥ $100 billion | 20+ regions worldwide | Qingyuan, Huailai, Yizheng | <sup>[[40]](#ref-40)</sup> |
| Volcano Engine (ByteDance) | Unlisted (≥ $100 billion tier) | To be verified | Ulanqab, Datong and others | <sup>[[41]](#ref-41)</sup> |
| China Telecom Cloud (China Telecom) | ≥ $10 billion | One of the largest IDC operators in China | Beijing-Tianjin-Hebei, Yangtze Delta, Greater Bay Area | <sup>[[42]](#ref-42)</sup> |
| GDS Holdings | ≥ $1 billion | 100+ data centers (incl. under construction) | Around Shanghai and Beijing | <sup>[[43]](#ref-43)</sup> |

### Energy transmission (power grid)

China's grid is run by two central SOEs — State Grid and China Southern Power Grid — plus Inner Mongolia Power. It has built the world's largest ultra-high-voltage (UHV) AC/DC network, sending western hydro, wind and solar power east. <sup>[[44]](#ref-44)[[45]](#ref-45)</sup>

- **First power**: 1882, Shanghai (China's first public power plant) <sup>[[44]](#ref-44)</sup>
- **First UHV line**: 2009, Jindongnan–Nanyang–Jingmen 1,000 kV AC demonstration line <sup>[[44]](#ref-44)</sup>
- **Peak national load**: ≈ 1,500 GW (record, summer 2025) <sup>[[1]](#ref-1)</sup>
- **UHV projects**: State Grid has built 30+ UHV projects <sup>[[44]](#ref-44)</sup>

| Grid operator / body | Founded | Employees | Coverage | Source |
|---|---|---|---|---|
| State Grid Corporation of China | 2002 (power-sector reform separating generation from grid) | ≈ 1.3 million+ | 26 provinces, ≈ 88% of China's land area | <sup>[[44]](#ref-44)[[46]](#ref-46)</sup> |
| China Southern Power Grid | 2002 | ≈ 280,000 | Guangdong, Guangxi, Yunnan, Guizhou, Hainan | <sup>[[45]](#ref-45)[[46]](#ref-46)</sup> |
| Inner Mongolia Power (Group) | — | — | Western Inner Mongolia | <sup>[[1]](#ref-1)</sup> |

## ④ Models

Chinese models are characterized by open weights and mixture-of-experts (MoE) architectures, with fierce competition on inference efficiency and price. Generative AI services must be filed with the Cyberspace Administration before launch. <sup>[[47]](#ref-47)</sup>

| Model | Developer | Released | Architecture | Params (total / active) | Open weights | Context | Reported benchmark | Source |
|---|---|---|---|---|---|---|---|---|
| DeepSeek-V3 | DeepSeek | 2024-12 | MoE + MLA | 671B / 37B | Yes (MIT) | 128K | — | <sup>[[48]](#ref-48)</sup> |
| DeepSeek-R1 | DeepSeek | 2025-01 | MoE reasoning model (RL) | 671B / 37B | Yes (MIT) | 128K | AIME 2024 pass@1 79.8% | <sup>[[49]](#ref-49)</sup> |
| DeepSeek-V3.1 / V3.2 | DeepSeek | From 2025-08 / 2025-09 | Hybrid thinking; V3.2 adds sparse attention | 671B class | Yes | 128K | — | <sup>[[50]](#ref-50)</sup> |
| Qwen3-235B-A22B | Alibaba (Qwen) | 2025-04 | MoE, hybrid thinking | 235B / 22B | Yes (Apache 2.0) | 32K (extendable to 128K) | AIME'24 85.7% | <sup>[[51]](#ref-51)</sup> |
| Doubao (Seed series) | ByteDance | Ongoing | Undisclosed | Undisclosed | No | — | — | <sup>[[52]](#ref-52)</sup> |
| Kimi K2 | Moonshot AI | 2025-07 | MoE | 1T / 32B | Yes (modified MIT) | 128K | SWE-bench Verified 65.8% | <sup>[[53]](#ref-53)</sup> |
| GLM-4.5 | Zhipu AI | 2025-07 | MoE | 355B / 32B | Yes (MIT) | 128K | — | <sup>[[54]](#ref-54)</sup> |
| MiniMax-M1 | MiniMax | 2025-06 | MoE + lightning attention | 456B / 45.9B | Yes | 1M | — | <sup>[[55]](#ref-55)</sup> |
| ERNIE 4.5 | Baidu | 2025-06 (open-sourced) | MoE | 300B / 47B | Yes (Apache 2.0) | 128K | — | <sup>[[56]](#ref-56)</sup> |
| Hunyuan-Large | Tencent | 2024-11 | MoE | 389B / 52B | Yes | 256K | — | <sup>[[57]](#ref-57)</sup> |

- **Overall ranking (human preference)**: LMArena <sup>[[58]](#ref-58)</sup>
- **Intelligence index / speed / price**: Artificial Analysis <sup>[[59]](#ref-59)</sup>

## ⑤ Applications

| Topic | Description | Examples | Source |
|---|---|---|---|
| AI for Science | Weather forecasting, proteins and drugs, materials discovery | Huawei Pangu-Weather (Nature, 2023) | <sup>[[60]](#ref-60)</sup> |
| Autonomous driving / robotaxis | City-scale driverless ride services | Baidu Apollo Go | <sup>[[61]](#ref-61)</sup> |
| Embodied AI / robotics | Humanoid and quadruped robots, industrial robots | Unitree Robotics | <sup>[[62]](#ref-62)</sup> |
| Policy: “AI+” | Deep integration of AI into research, industry, consumption, public services and governance | State Council opinions on the “AI+” initiative (2025) | <sup>[[63]](#ref-63)</sup> |
| Healthcare | Medical imaging, diagnostic support, drug R&D | To be added | <sup>[[64]](#ref-64)</sup> |
| Manufacturing & industry | Quality inspection, predictive maintenance, industrial models | To be added | <sup>[[64]](#ref-64)</sup> |
| Coding & agents | Code generation, agentic office automation | To be added | <sup>[[64]](#ref-64)</sup> |
| Finance / education / government / content | Customer service, risk control, personalized learning, AI video and images | To be added | <sup>[[64]](#ref-64)</sup> |

## Methodology

Figures come first from government statistics and official company disclosures. Where no official statistic exists, values are estimated from typical industry figures, marked “estimate”, and are indicative only. Public vs. private follows the controlling shareholder.

## Reference

1. <a id="ref-1"></a>National Energy Administration of China. Press conferences and national power-industry statistics. <https://www.nea.gov.cn/>
2. <a id="ref-2"></a>China Electricity Council (CEC). Annual development report of China's power industry / power statistics bulletins. <https://www.cec.org.cn/>
3. <a id="ref-3"></a>National Bureau of Statistics of China. Statistical communiqué / industrial output data. <https://www.stats.gov.cn/>
4. <a id="ref-4"></a>IEA. Energy and AI (2025). <https://www.iea.org/reports/energy-and-ai>
5. <a id="ref-5"></a>Global Energy Monitor. Global Coal Plant Tracker. <https://globalenergymonitor.org/projects/global-coal-plant-tracker/>
6. <a id="ref-6"></a>Ember. Electricity Data Explorer. <https://ember-energy.org/data/>
7. <a id="ref-7"></a>This site (see “Methodology” at the bottom of the page). Estimation note: where no official statistic exists, typical industry values are used — indicative only. [#methodology](#methodology)
8. <a id="ref-8"></a>China Datang Corporation. Subsidiaries. <https://www.china-cdt.com/>
9. <a id="ref-9"></a>China Huaneng Group. Power plants and projects. <https://www.chng.com.cn/>
10. <a id="ref-10"></a>China Energy Investment Corporation. Subsidiaries. <https://www.ceic.com/>
11. <a id="ref-11"></a>Global Energy Monitor. Global Oil and Gas Plant Tracker. <https://globalenergymonitor.org/projects/global-oil-gas-plant-tracker/>
12. <a id="ref-12"></a>China Three Gorges Corporation. Power stations. <https://www.ctg.com.cn/>
13. <a id="ref-13"></a>Ministry of Water Resources of China. Statistical bulletin on water-resources development (small hydropower). <http://www.mwr.gov.cn/>
14. <a id="ref-14"></a>Global Energy Monitor. Global Hydropower Tracker. <https://globalenergymonitor.org/projects/global-hydropower-tracker/>
15. <a id="ref-15"></a>World Nuclear Association. Nuclear Fuel Cycle / Country Profiles. <https://world-nuclear.org/>
16. <a id="ref-16"></a>China Nuclear Energy Association. Operation of China's nuclear power plants. <https://www.china-nea.cn/>
17. <a id="ref-17"></a>IAEA. Power Reactor Information System (PRIS). <https://pris.iaea.org/PRIS/home.aspx>
18. <a id="ref-18"></a>China General Nuclear Power Group. Operating nuclear plants. <https://www.cgnpc.com.cn/>
19. <a id="ref-19"></a>China National Nuclear Corporation. Nuclear power bases. <https://www.cnnc.com.cn/>
20. <a id="ref-20"></a>State Power Investment Corporation. Clean-energy projects. <https://www.spic.com.cn/>
21. <a id="ref-21"></a>Global Energy Monitor. Global Wind Power Tracker. <https://globalenergymonitor.org/projects/global-wind-power-tracker/>
22. <a id="ref-22"></a>IEA. Solar PV Global Supply Chains. <https://www.iea.org/reports/solar-pv-global-supply-chains>
23. <a id="ref-23"></a>Global Energy Monitor. Global Solar Power Tracker. <https://globalenergymonitor.org/projects/global-solar-power-tracker/>
24. <a id="ref-24"></a>U.S. Bureau of Industry and Security. Advanced computing and semiconductor export controls. <https://www.bis.gov/>
25. <a id="ref-25"></a>Huawei Ascend Community. Ascend AI processors. <https://www.hiascend.com/>
26. <a id="ref-26"></a>SemiAnalysis. Huawei AI CloudMatrix 384 – China's Answer to Nvidia GB200 NVL72. <https://semianalysis.com/2025/04/16/huawei-ai-cloudmatrix-384-chinas-answer-to-nvidia-gb200-nvl72/>
27. <a id="ref-27"></a>Cambricon. MLU product series. <https://www.cambricon.com/>
28. <a id="ref-28"></a>Hygon Information Technology. Hygon CPU / DCU products. <https://www.hygon.cn/>
29. <a id="ref-29"></a>Huawei Kunpeng Community. Kunpeng processors. <https://www.hikunpeng.com/>
30. <a id="ref-30"></a>Loongson Technology. Loongson processors. <https://www.loongson.cn/>
31. <a id="ref-31"></a>Phytium. Phytium server CPUs. <https://www.phytium.com.cn/>
32. <a id="ref-32"></a>TechInsights. SMIC 7nm (N+2) process analysis. <https://www.techinsights.com/>
33. <a id="ref-33"></a>USGS. Mineral Commodity Summaries (gallium, germanium, high-purity quartz, silicon). <https://www.usgs.gov/centers/national-minerals-information-center/mineral-commodity-summaries>
34. <a id="ref-34"></a>Ministry of Commerce of China. Announcement on export controls for gallium- and germanium-related items. <http://www.mofcom.gov.cn/>
35. <a id="ref-35"></a>General Administration of Customs of China. Customs statistics (integrated circuit imports and exports). <http://www.customs.gov.cn/>
36. <a id="ref-36"></a>National Development and Reform Commission of China. “East Data, West Computing” (national computing-network hub nodes). <https://www.ndrc.gov.cn/>
37. <a id="ref-37"></a>Ministry of Industry and Information Technology of China. Computing-infrastructure development releases. <https://www.miit.gov.cn/>
38. <a id="ref-38"></a>Alibaba Cloud. Alibaba Cloud global infrastructure. <https://www.alibabacloud.com/global-locations>
39. <a id="ref-39"></a>Huawei Cloud. Huawei Cloud global infrastructure. <https://www.huaweicloud.com/intl/en-us/global/>
40. <a id="ref-40"></a>Tencent Cloud. Regions and availability zones. <https://www.tencentcloud.com/document/product/213/6091>
41. <a id="ref-41"></a>ByteDance. Volcano Engine. <https://www.volcengine.com/>
42. <a id="ref-42"></a>China Telecom. China Telecom Cloud (CTyun). <https://www.ctyun.cn/>
43. <a id="ref-43"></a>GDS Holdings. GDS data centers. <https://www.gds-services.com/>
44. <a id="ref-44"></a>State Grid Corporation of China. Company profile. <http://www.sgcc.com.cn/>
45. <a id="ref-45"></a>China Southern Power Grid. Company profile. <https://www.csg.cn/>
46. <a id="ref-46"></a>Fortune. Fortune Global 500 (employee counts). <https://fortune.com/ranking/global500/>
47. <a id="ref-47"></a>Cyberspace Administration of China. Interim Measures for Generative AI Services / filing information. <https://www.cac.gov.cn/>
48. <a id="ref-48"></a>DeepSeek / Hugging Face. DeepSeek-V3 model card. <https://huggingface.co/deepseek-ai/DeepSeek-V3>
49. <a id="ref-49"></a>DeepSeek / Hugging Face. DeepSeek-R1 model card. <https://huggingface.co/deepseek-ai/DeepSeek-R1>
50. <a id="ref-50"></a>DeepSeek. DeepSeek API docs (news and model updates). <https://api-docs.deepseek.com/>
51. <a id="ref-51"></a>Alibaba Qwen. Qwen3: Think Deeper, Act Faster. <https://qwenlm.github.io/blog/qwen3/>
52. <a id="ref-52"></a>Volcano Engine. Doubao large models. <https://www.volcengine.com/product/doubao>
53. <a id="ref-53"></a>Moonshot AI / Hugging Face. Kimi-K2-Instruct model card. <https://huggingface.co/moonshotai/Kimi-K2-Instruct>
54. <a id="ref-54"></a>Zhipu AI / Hugging Face. GLM-4.5 model card. <https://huggingface.co/zai-org/GLM-4.5>
55. <a id="ref-55"></a>MiniMax / Hugging Face. MiniMax-M1 model card. <https://huggingface.co/MiniMaxAI/MiniMax-M1-80k>
56. <a id="ref-56"></a>Baidu / Hugging Face. ERNIE-4.5-300B-A47B model card. <https://huggingface.co/baidu/ERNIE-4.5-300B-A47B-PT>
57. <a id="ref-57"></a>Tencent / Hugging Face. Hunyuan-Large model card. <https://huggingface.co/tencent/Tencent-Hunyuan-Large>
58. <a id="ref-58"></a>LMArena. LMArena Leaderboard. <https://lmarena.ai/leaderboard>
59. <a id="ref-59"></a>Artificial Analysis. Model comparison. <https://artificialanalysis.ai/>
60. <a id="ref-60"></a>Nature (2023). Accurate medium-range global weather forecasting with 3D neural networks. <https://www.nature.com/articles/s41586-023-06185-3>
61. <a id="ref-61"></a>Baidu. Apollo Go. <https://www.apollogo.com/>
62. <a id="ref-62"></a>Unitree Robotics. Unitree Robotics. <https://www.unitree.com/>
63. <a id="ref-63"></a>Chinese Government Portal (gov.cn). State Council opinions on deepening the “AI+” initiative (2025). <https://www.gov.cn/>
64. <a id="ref-64"></a>Stanford HAI. AI Index Report. <https://hai.stanford.edu/ai-index>

<!-- This file is generated from data.en.js by scripts/build_github_views.py — do not edit by hand. -->
