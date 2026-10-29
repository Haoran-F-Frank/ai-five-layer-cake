// China (Mainland) — English version. Keep numbers and refs in sync with data.js (Chinese).
window.COUNTRY_EN = {
  name: "China (Mainland)",
  en: "China (Mainland)",
  flag: "🇨🇳",
  status: "active",
  updated: "2026-10-29",
  summary: "The world's largest electricity producer and largest installer of renewables. Its chip industry is strongest in design and mature-node manufacturing, with high-end AI chips under US export controls; open-weight large models are thriving.",

  // =============== ① Energy ===============
  energy: {
    intro: "Coal is the backbone of China's power supply, but wind and solar capacity is growing extremely fast. Generators are mostly central and local state-owned enterprises; private capital is concentrated in distributed solar, captive industrial plants and some new-energy projects.",
    introRefs: ["nea", "cec"],
    overview: [
      { k: "Installed capacity (end-2024)", v: "≈ 3,350 GW", refs: ["nea"] },
      { k: "Generation (2024)", v: "≈ 10,100 TWh", refs: ["nbs", "cec"] },
      { k: "Wind + solar capacity (end-2024)", v: "≈ 1,410 GW, now above thermal", refs: ["nea"] },
      { k: "Data-center electricity (2024, IEA)", v: "About a quarter of global data-center use", refs: ["iea-ai"] }
    ],
    groups: [
      {
        no: "1.1", title: "Thermal power", kind: "Non-sustainable",
        principle: "Burning fossil fuel heats a boiler to make high-pressure steam (or gas drives a gas turbine directly), which spins a turbine and generator: chemical → heat → mechanical → electrical energy.",
        principleRefs: ["cec"],
        sources: [
          {
            no: "1.1.1", title: "Coal power plants",
            stats: [
              { k: "Number of plants", v: "≈ 1,000+ operating coal plants (counted by plant)", refs: ["gem-coal"] },
              { k: "Capacity", v: "≈ 1,190 GW (end-2024)", refs: ["nea", "cec"] },
              { k: "Generation", v: "≈ 5,500–5,800 TWh (55%+ of total)", refs: ["cec", "ember"] },
              { k: "Fuel use", v: "≈ 300 g standard coal per kWh supplied; ≈ 2.5 billion t raw coal/yr for power (estimate)", refs: ["cec", "est-note"] },
              { k: "O&M staff", v: "≈ 300–600 per modern 1 GW plant (estimate)", refs: ["est-note"] }
            ],
            plants: [
              { name: "Datang Tuoketuo Power Plant", loc: "Togtoh County, Hohhot, Inner Mongolia", lat: 40.20, lng: 111.33, cap: "6,720 MW", out: "—", fuel: "≈ 17 million t raw coal/yr (estimate)", staff: "—", own: "public", company: "China Datang (central SOE)", note: "One of the world's largest coal plants", refs: ["gem-coal", "datang", "est-note"] },
              { name: "Huaneng Yuhuan Power Plant", loc: "Yuhuan, Taizhou, Zhejiang", lat: 28.13, lng: 121.30, cap: "4,000 MW (4×1,000 MW ultra-supercritical)", out: "—", fuel: "—", staff: "—", own: "public", company: "China Huaneng (central SOE)", note: "China's first 1,000 MW ultra-supercritical plant", refs: ["gem-coal", "chng"] },
              { name: "CHN Energy Taishan Power Plant", loc: "Taishan, Jiangmen, Guangdong", lat: 21.86, lng: 112.88, cap: "≈ 5,000 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "China Energy Investment Corp. (central SOE)", note: "", refs: ["gem-coal", "chnenergy"] },
              { name: "Xinfa Group captive plants", loc: "Chiping, Liaocheng, Shandong", lat: 36.58, lng: 116.25, cap: "Several GW (figures vary, to be verified)", out: "—", fuel: "—", staff: "—", own: "private", company: "Xinfa Group (private)", note: "Captive plants powering aluminium smelters", refs: ["gem-coal"] },
              { name: "Weiqiao / China Hongqiao captive plants", loc: "Zouping, Binzhou, Shandong", lat: 36.86, lng: 117.74, cap: "Several GW (figures vary, to be verified)", out: "—", fuel: "—", staff: "—", own: "private", company: "Weiqiao Pioneering Group / China Hongqiao (private, HKEX 1378)", note: "Captive plants powering aluminium smelters", refs: ["gem-coal"] }
            ]
          },
          {
            no: "1.1.2", title: "Oil power plants",
            stats: [
              { k: "Share", v: "< 1% of generation; mainly islands, backup and emergency supply", refs: ["ember", "cec"] },
              { k: "Fuel use", v: "Diesel / heavy oil, ≈ 0.2–0.25 kg per kWh (estimate)", refs: ["est-note"] }
            ],
            plants: [],
            note: "Mainland China has almost no large oil-fired plants, so none are listed."
          },
          {
            no: "1.1.3", title: "Natural gas power plants",
            stats: [
              { k: "Capacity", v: "≈ 140 GW (end-2024, estimate)", refs: ["cec"] },
              { k: "Generation", v: "≈ 300 TWh (≈ 3%)", refs: ["ember", "cec"] },
              { k: "Fuel use", v: "Combined cycle ≈ 0.18–0.2 m³ gas per kWh (estimate)", refs: ["est-note"] },
              { k: "Where", v: "Beijing-Tianjin-Hebei, Yangtze River Delta, Pearl River Delta; peaking and combined heat & power", refs: ["gem-gas"] }
            ],
            plants: [
              { name: "Huaneng Beijing Thermal Power Plant (gas CHP)", loc: "Chaoyang District, Beijing", lat: 39.89, lng: 116.53, cap: "To be verified", out: "—", fuel: "Natural gas", staff: "—", own: "public", company: "China Huaneng / Beijing Energy Group", note: "A main heat-and-power hub after Beijing's coal-to-gas switch", refs: ["gem-gas", "chng"] }
            ],
            note: "Gas plants are mostly run by state-owned generators and local energy SOEs; no representative private gas plant listed yet."
          }
        ]
      },
      {
        no: "1.2", title: "Hydropower", kind: "Non-sustainable (this site's grouping; usually classed as renewable)",
        principle: "The height difference between reservoir and river drives water through a turbine and generator: potential → kinetic → electrical energy.",
        principleRefs: ["ctg"],
        sources: [
          {
            no: "1.2.1", title: "Dams and their power plants",
            stats: [
              { k: "Capacity", v: "≈ 440 GW (end-2024, incl. pumped storage)", refs: ["nea"] },
              { k: "Generation", v: "≈ 1,400 TWh (2024)", refs: ["cec"] },
              { k: "Number of stations", v: "40,000+ rural small hydro stations", refs: ["mwr"] },
              { k: "Materials", v: "No fuel; large amounts of concrete and steel during construction", refs: ["ctg"] }
            ],
            plants: [
              { name: "Three Gorges Dam", loc: "Yichang, Hubei", lat: 30.823, lng: 111.003, cap: "22,500 MW", out: "Record ≈ 111.8 TWh in 2020", fuel: "—", staff: "—", own: "public", company: "China Three Gorges Corp. (central SOE)", note: "World's largest power station by capacity", refs: ["ctg", "gem-hydro"] },
              { name: "Baihetan", loc: "Ningnan, Sichuan / Qiaojia, Yunnan", lat: 27.215, lng: 102.905, cap: "16,000 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "China Three Gorges Corp.", note: "1,000 MW units", refs: ["ctg", "gem-hydro"] },
              { name: "Xiluodu", loc: "Leibo, Sichuan / Yongshan, Yunnan", lat: 28.26, lng: 103.65, cap: "≈ 13,860 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "China Three Gorges Corp.", note: "", refs: ["ctg", "gem-hydro"] },
              { name: "Wudongde", loc: "Huidong, Sichuan / Luquan, Yunnan", lat: 26.33, lng: 102.63, cap: "10,200 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "China Three Gorges Corp.", note: "", refs: ["ctg", "gem-hydro"] },
              { name: "Xiangjiaba", loc: "Yibin, Sichuan / Shuifu, Yunnan", lat: 28.64, lng: 104.40, cap: "≈ 6,400 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "China Three Gorges Corp.", note: "", refs: ["ctg", "gem-hydro"] },
              { name: "Jin'anqiao", loc: "Lijiang, Yunnan", lat: 26.80, lng: 100.43, cap: "≈ 2,400 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "Hanergy Group (private; historical controlling owner — current ownership to be verified)", note: "A rare privately owned large hydro plant", refs: ["gem-hydro"] }
            ]
          }
        ]
      },
      {
        no: "1.3", title: "Nuclear power", kind: "Non-sustainable (low-carbon)",
        principle: "Heavy nuclei such as uranium-235 undergo a controlled fission chain reaction in the reactor; the heat warms the coolant, raising steam for the turbine-generator.",
        principleRefs: ["wna"],
        sources: [
          {
            no: "1.3.1", title: "Nuclear fission plants",
            stats: [
              { k: "Operating reactors", v: "≈ 58 (2025), with ≈ 30 more under construction — the most in the world", refs: ["cnea", "pris"] },
              { k: "Capacity", v: "≈ 60 GW", refs: ["cnea", "nea"] },
              { k: "Generation", v: "≈ 450 TWh (2024, ≈ 4.5%)", refs: ["cnea", "cec"] },
              { k: "Fuel use", v: "≈ 20–25 t low-enriched uranium fuel per GW per year (estimate)", refs: ["wna", "est-note"] },
              { k: "O&M staff", v: "≈ 800–1,200 per two-unit plant (estimate)", refs: ["est-note"] },
              { k: "Ownership", v: "Plants must be controlled by licensed state-owned nuclear operators (CNNC, CGN, SPIC, Huaneng)", refs: ["cnea"] }
            ],
            plants: [
              { name: "Yangjiang", loc: "Yangjiang, Guangdong", lat: 21.71, lng: 112.26, cap: "6 × ≈1,086 MW ≈ 6,500 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "China General Nuclear (CGN)", note: "", refs: ["cgn", "pris"] },
              { name: "Taishan", loc: "Taishan, Guangdong", lat: 21.92, lng: 112.98, cap: "2 × 1,750 MW (EPR)", out: "—", fuel: "—", staff: "—", own: "public", company: "CGN (France's EDF holds 30%)", note: "World's first EPR to enter service", refs: ["cgn", "pris"] },
              { name: "Daya Bay", loc: "Shenzhen, Guangdong", lat: 22.60, lng: 114.54, cap: "2 × ≈984 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "CGN (Hong Kong's CLP holds 25%)", note: "Mainland China's first large commercial nuclear plant", refs: ["cgn", "pris"] },
              { name: "Tianwan", loc: "Lianyungang, Jiangsu", lat: 34.69, lng: 119.46, cap: "6 units ≈ 6,600 MW operating, more under construction", out: "—", fuel: "—", staff: "—", own: "public", company: "China National Nuclear Corp. (CNNC)", note: "", refs: ["cnnc", "pris"] },
              { name: "Fuqing", loc: "Fuqing, Fujian", lat: 25.44, lng: 119.45, cap: "6 units ≈ 6,700 MW (incl. Hualong One demo units)", out: "—", fuel: "—", staff: "—", own: "public", company: "CNNC", note: "", refs: ["cnnc", "pris"] },
              { name: "Hongyanhe", loc: "Wafangdian, Dalian, Liaoning", lat: 39.80, lng: 121.48, cap: "6 units ≈ 6,700 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "CGN / SPIC", note: "Largest nuclear plant in Northeast China", refs: ["cgn", "spic", "pris"] },
              { name: "Shidaowan HTR-PM", loc: "Rongcheng, Weihai, Shandong", lat: 36.97, lng: 122.53, cap: "≈ 200 MW", out: "—", fuel: "Pebble fuel elements", staff: "—", own: "public", company: "China Huaneng", note: "World's first commercial Gen-IV high-temperature gas-cooled reactor", refs: ["chng", "pris"] }
            ],
            note: "Under current policy no nuclear plant is privately controlled; private and Hong Kong firms hold only minority stakes."
          }
        ]
      },
      {
        no: "1.4", title: "Wind farms", kind: "Sustainable",
        principle: "Wind turns the blades, which drive a generator through a gearbox (or directly); offshore wind is steadier and runs more hours.",
        principleRefs: ["gem-wind"],
        sources: [{
          no: "1.4", title: "Wind farms",
          stats: [
            { k: "Capacity", v: "≈ 520 GW (end-2024)", refs: ["nea"] },
            { k: "Generation", v: "≈ 1,000 TWh (2024, ≈ 10%)", refs: ["cec", "ember"] },
            { k: "Materials", v: "≈ 100–180 t steel per MW; direct-drive turbines use rare-earth magnets (estimate)", refs: ["est-note"] },
            { k: "Where", v: "Large bases in the north (Gansu, Inner Mongolia, Xinjiang) plus offshore wind on the southeast coast", refs: ["gem-wind"] }
          ],
          plants: [
            { name: "Jiuquan Wind Power Base", loc: "Jiuquan, Gansu", lat: 40.30, lng: 97.00, cap: "Planned ≈ 20 GW", out: "—", fuel: "—", staff: "—", own: "public", company: "Several generators (Datang, Huaneng, CHN Energy, SPIC, …)", note: "China's first 10-GW-class wind base", refs: ["gem-wind"] },
            { name: "Rudong offshore wind cluster", loc: "Rudong, Nantong, Jiangsu", lat: 32.50, lng: 121.40, cap: "Several GW (multiple projects)", out: "—", fuel: "—", staff: "—", own: "public", company: "China Three Gorges, CHN Energy (Longyuan Power) and others", note: "", refs: ["gem-wind", "ctg"] },
            { name: "Envision-owned wind farms (various)", loc: "Across China", cap: "To be verified", out: "—", fuel: "—", staff: "—", own: "private", company: "Envision Group (private)", note: "Turbine maker that also owns and operates wind farms", refs: ["gem-wind"] }
          ]
        }]
      },
      {
        no: "1.5", title: "Solar power plants", kind: "Sustainable",
        principle: "PV: a semiconductor (crystalline silicon) absorbs photons and creates electron-hole pairs that flow as current (photovoltaic effect). CSP: concentrated sunlight heats a fluid to make steam.",
        principleRefs: ["iea-pv"],
        sources: [{
          no: "1.5", title: "Solar power plants",
          stats: [
            { k: "Capacity", v: "≈ 890 GW (end-2024)", refs: ["nea"] },
            { k: "Distributed share", v: "≈ 40% is distributed PV (much of it owned by private firms and households)", refs: ["nea"] },
            { k: "Generation", v: "≈ 800+ TWh (2024)", refs: ["cec", "ember"] },
            { k: "Materials", v: "Polysilicon, silver paste, PV glass, aluminium frames; China holds 80%+ of every PV manufacturing stage", refs: ["iea-pv"] }
          ],
          plants: [
            { name: "Gonghe PV Park (Talatan)", loc: "Gonghe County, Hainan Prefecture, Qinghai", lat: 36.15, lng: 100.60, cap: "Multi-GW (multiple projects)", out: "—", fuel: "—", staff: "—", own: "public", company: "SPIC (Huanghe Hydropower) and others", note: "Showcase for “PV + desert control + sheep grazing”", refs: ["gem-solar", "spic"] },
            { name: "Chint distributed PV (various)", loc: "Zhejiang and across China", cap: "To be verified", out: "—", fuel: "—", staff: "—", own: "private", company: "Chint Group (private)", note: "Residential and commercial rooftop PV", refs: ["gem-solar"] }
          ]
        }]
      },
      {
        no: "1.6", title: "Biomass power plants", kind: "Sustainable",
        principle: "Burning crop and forestry residues, municipal waste or biogas to raise steam for a turbine — like thermal power, but with renewable fuel.",
        principleRefs: ["nea"],
        sources: [{
          no: "1.6", title: "Biomass power plants",
          stats: [
            { k: "Capacity", v: "≈ 45 GW (incl. waste-to-energy, estimate)", refs: ["nea"] },
            { k: "Generation", v: "≈ 200 TWh (estimate)", refs: ["ember"] },
            { k: "Feedstock", v: "Straw, forestry residues, municipal solid waste", refs: ["nea"] }
          ],
          plants: [],
          note: "Key companies: Everbright Environment (SOE, waste-to-energy), National Bio Energy and others; individual plants to be added."
        }]
      },
      {
        no: "1.7", title: "Geothermal power plants", kind: "Sustainable",
        principle: "Hot water or steam from underground drives a turbine directly or through a heat exchanger (binary cycle).",
        principleRefs: ["nea"],
        sources: [{
          no: "1.7", title: "Geothermal power plants",
          stats: [{ k: "Capacity", v: "Very small (tens of MW); geothermal is used mostly for heating", refs: ["nea"] }],
          plants: [
            { name: "Yangbajain Geothermal Power Station", loc: "Damxung County, Lhasa, Tibet", lat: 30.08, lng: 90.48, cap: "≈ 25 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "Tibet local SOE", note: "China's first large geothermal plant (from 1977)", refs: ["nea"] }
          ]
        }]
      },
      {
        no: "1.8", title: "Tidal power plants", kind: "Sustainable",
        principle: "A barrage across a bay forms a basin; the difference between high and low tide drives turbines.",
        principleRefs: ["nea"],
        sources: [{
          no: "1.8", title: "Tidal power plants",
          stats: [{ k: "Capacity", v: "Demonstration scale (MW level)", refs: ["nea"] }],
          plants: [
            { name: "Jiangxia Tidal Power Station", loc: "Wenling, Taizhou, Zhejiang", lat: 28.35, lng: 121.20, cap: "≈ 4 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "CHN Energy (Longyuan Power)", note: "China's largest tidal plant", refs: ["chnenergy"] }
          ]
        }]
      },
      {
        no: "1.9", title: "Other power plants", kind: "Sustainable",
        principle: "E.g. concentrating solar (molten-salt towers) and hydrogen fuel cells. Pumped hydro and batteries are storage and do not generate net power.",
        principleRefs: ["nea"],
        sources: [{
          no: "1.9", title: "Other plants (CSP etc.)",
          stats: [{ k: "CSP capacity", v: "Hundreds of MW, mainly in Gansu and Qinghai", refs: ["nea"] }],
          plants: [
            { name: "Dunhuang molten-salt tower CSP plant", loc: "Dunhuang, Gansu", lat: 40.08, lng: 94.42, cap: "100 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "Shouhang High-Tech (private, SZSE 002665)", note: "", refs: ["gem-solar"] }
          ]
        }]
      }
    ]
  },

  // =============== ② Chips ===============
  chips: {
    design: {
      intro: "Huawei Ascend leads domestic AI accelerators. Because of US export controls, NVIDIA can only sell cut-down products to China. Peak compute is dense BF16/FP16; figures not from official sources are marked “reported”.",
      introRefs: ["bis"],
      gpus: [
        { vendor: "Huawei", model: "Ascend 910B", year: "2023", process: "7nm-class (reported)", memory: "64 GB HBM2e", bandwidth: "—", compute: "≈ 320 TFLOPS FP16 (reported)", power: "≈ 400 W", note: "Domestic training workhorse", refs: ["huawei-ascend", "semianalysis-910c"] },
        { vendor: "Huawei", model: "Ascend 910C", year: "2025", process: "7nm-class (reported)", memory: "128 GB HBM", bandwidth: "≈ 3.2 TB/s (reported)", compute: "≈ 780 TFLOPS BF16 (reported)", power: "—", note: "Dual-die package; CloudMatrix 384 supernode", refs: ["semianalysis-910c"] },
        { vendor: "Cambricon", model: "MLU370-X8", year: "2022", process: "7nm", memory: "48 GB LPDDR5", bandwidth: "614 GB/s", compute: "256 TOPS INT8", power: "250 W", note: "", refs: ["cambricon"] },
        { vendor: "Hygon", model: "DCU series", year: "—", process: "—", memory: "—", bandwidth: "—", compute: "Specs not fully public", power: "—", note: "CUDA-like ecosystem (ROCm lineage)", refs: ["hygon"] }
      ],
      cpus: [
        { vendor: "Huawei", model: "Kunpeng 920", arch: "ARMv8.2", cores: "64", process: "7nm", note: "", refs: ["huawei-kunpeng"] },
        { vendor: "Hygon", model: "Hygon 7000 series", arch: "x86 (derived from licensed AMD Zen)", cores: "See vendor site", process: "—", note: "", refs: ["hygon"] },
        { vendor: "Loongson", model: "3D5000", arch: "LoongArch (home-grown ISA)", cores: "32", process: "—", note: "Two 3C5000 dies in one package", refs: ["loongson"] },
        { vendor: "Phytium", model: "Tengyun S2500", arch: "ARMv8", cores: "64", process: "16nm", note: "", refs: ["phytium"] }
      ]
    },
    produce: {
      overview: [
        { k: "Integrated circuit output (2024)", v: "≈ 451.4 billion units", refs: ["nbs"] },
        { k: "Most advanced node in volume", v: "SMIC 7nm-class (N+2), without EUV lithography", refs: ["techinsights"] }
      ],
      materials: [
        { name: "Silicon (polysilicon → wafers)", use: "Wafer substrate", where: "China makes ≈ 90% of the world's polysilicon (mostly solar grade); semiconductor-grade wafers still rely on imports from Shin-Etsu, SUMCO and others", refs: ["iea-pv", "usgs-mcs"] },
        { name: "Gallium", use: "GaN power / RF chips", where: "China produces ≈ 98% of primary gallium; export controls since Aug 2023", refs: ["usgs-mcs", "mofcom"] },
        { name: "Germanium", use: "Infrared, fiber optics, SiGe chips", where: "China is the largest producer; export controls since Aug 2023", refs: ["usgs-mcs", "mofcom"] },
        { name: "Rare earths", use: "Polishing materials, sputtering targets, magnets", where: "China accounts for ≈ 70% of global mining", refs: ["usgs-mcs"] }
      ],
      fabs: [
        { name: "SMIC", own: "State capital-led, listed", location: "Shanghai, Beijing, Shenzhen, Tianjin", node: "7nm-class", refs: ["techinsights"] },
        { name: "Hua Hong Group", own: "State-owned", location: "Shanghai, Wuxi", node: "Mature nodes (28nm+)", refs: ["techinsights"] },
        { name: "YMTC", own: "State capital-led", location: "Wuhan", node: "3D NAND", refs: ["techinsights"] },
        { name: "CXMT", own: "State capital-led", location: "Hefei", node: "DRAM", refs: ["techinsights"] }
      ]
    },
    trade: {
      overview: [
        { k: "IC imports (2024)", v: "≈ 549.2 billion units, ≈ $385.6 billion", refs: ["customs"] },
        { k: "IC exports (2024)", v: "≈ 298.1 billion units, ≈ $159.5 billion", refs: ["customs"] },
        { k: "Trade deficit", v: "≈ $226 billion; ICs are long one of China's largest import items", refs: ["customs"] }
      ],
      types: [
        { type: "High-end AI GPUs", desc: "US export controls in 2022, 2023 and 2024 bar A100/H100/B200 and similar; only cut-down models (e.g. H20, under repeatedly changing licensing) can be imported", refs: ["bis"] },
        { type: "Memory (DRAM / NAND / HBM)", desc: "A large share of import value; HBM is now controlled", refs: ["customs", "bis"] },
        { type: "Processors & controllers", desc: "CPUs, MCUs, SoCs, mainly from Taiwan, South Korea and Southeast Asia", refs: ["customs"] },
        { type: "Exports: mature-node chips", desc: "Discretes, analog and power chips", refs: ["customs"] }
      ]
    }
  },

  // =============== ③ Infrastructure ===============
  infrastructure: {
    datacenters: {
      intro: "China plans capacity under “East Data, West Computing”: compute hubs in energy-rich western regions serve demand from the east.",
      introRefs: ["ndrc"],
      overview: [
        { k: "National compute hubs", v: "8 national hub nodes, 10 national data-center clusters", refs: ["ndrc"] },
        { k: "Total compute (end-2024)", v: "≈ 280 EFLOPS", refs: ["miit"] },
        { k: "Standard racks in use", v: "≈ 8 million+", refs: ["miit"] }
      ],
      companies: [
        { company: "Alibaba Cloud (Alibaba)", valuation: "≥ $100 billion", count: "≈ 29 regions, ≈ 90 zones worldwide", highlight: "Zhangbei, Ulanqab, Heyuan", refs: ["aliyun-infra"] },
        { company: "Huawei Cloud (Huawei)", valuation: "Unlisted (≥ $100 billion tier)", count: "30+ regions worldwide", highlight: "Gui'an, Ulanqab, Wuhu", refs: ["huawei-cloud"] },
        { company: "Tencent Cloud (Tencent)", valuation: "≥ $100 billion", count: "20+ regions worldwide", highlight: "Qingyuan, Huailai, Yizheng", refs: ["tencent-infra"] },
        { company: "Volcano Engine (ByteDance)", valuation: "Unlisted (≥ $100 billion tier)", count: "To be verified", highlight: "Ulanqab, Datong and others", refs: ["volcengine"] },
        { company: "China Telecom Cloud (China Telecom)", valuation: "≥ $10 billion", count: "One of the largest IDC operators in China", highlight: "Beijing-Tianjin-Hebei, Yangtze Delta, Greater Bay Area", refs: ["ctyun"] },
        { company: "GDS Holdings", valuation: "≥ $1 billion", count: "100+ data centers (incl. under construction)", highlight: "Around Shanghai and Beijing", refs: ["gds"] }
      ]
    },
    grid: {
      intro: "China's grid is run by two central SOEs — State Grid and China Southern Power Grid — plus Inner Mongolia Power. It has built the world's largest ultra-high-voltage (UHV) AC/DC network, sending western hydro, wind and solar power east.",
      introRefs: ["sgcc", "csg"],
      overview: [
        { k: "First power", v: "1882, Shanghai (China's first public power plant)", refs: ["sgcc"] },
        { k: "First UHV line", v: "2009, Jindongnan–Nanyang–Jingmen 1,000 kV AC demonstration line", refs: ["sgcc"] },
        { k: "Peak national load", v: "≈ 1,500 GW (record, summer 2025)", refs: ["nea"] },
        { k: "UHV projects", v: "State Grid has built 30+ UHV projects", refs: ["sgcc"] }
      ],
      operators: [
        { name: "State Grid Corporation of China", founded: "2002 (power-sector reform separating generation from grid)", staff: "≈ 1.3 million+", scope: "26 provinces, ≈ 88% of China's land area", refs: ["sgcc", "fortune500"] },
        { name: "China Southern Power Grid", founded: "2002", staff: "≈ 280,000", scope: "Guangdong, Guangxi, Yunnan, Guizhou, Hainan", refs: ["csg", "fortune500"] },
        { name: "Inner Mongolia Power (Group)", founded: "—", staff: "—", scope: "Western Inner Mongolia", refs: ["nea"] }
      ]
    }
  },

  // =============== ④ Models ===============
  models: {
    intro: "Chinese models are characterized by open weights and mixture-of-experts (MoE) architectures, with fierce competition on inference efficiency and price. Generative AI services must be filed with the Cyberspace Administration before launch.",
    introRefs: ["cac-genai"],
    list: [
      { name: "DeepSeek-V3", org: "DeepSeek", date: "2024-12", arch: "MoE + MLA", params: "671B / 37B", open: "Yes (MIT)", ctx: "128K", bench: "—", refs: ["ds-v3"] },
      { name: "DeepSeek-R1", org: "DeepSeek", date: "2025-01", arch: "MoE reasoning model (RL)", params: "671B / 37B", open: "Yes (MIT)", ctx: "128K", bench: "AIME 2024 pass@1 79.8%", refs: ["ds-r1"] },
      { name: "DeepSeek-V3.1 / V3.2", org: "DeepSeek", date: "From 2025-08 / 2025-09", arch: "Hybrid thinking; V3.2 adds sparse attention", params: "671B class", open: "Yes", ctx: "128K", bench: "—", refs: ["ds-api"] },
      { name: "Qwen3-235B-A22B", org: "Alibaba (Qwen)", date: "2025-04", arch: "MoE, hybrid thinking", params: "235B / 22B", open: "Yes (Apache 2.0)", ctx: "32K (extendable to 128K)", bench: "AIME'24 85.7%", refs: ["qwen3"] },
      { name: "Doubao (Seed series)", org: "ByteDance", date: "Ongoing", arch: "Undisclosed", params: "Undisclosed", open: "No", ctx: "—", bench: "—", refs: ["doubao"] },
      { name: "Kimi K2", org: "Moonshot AI", date: "2025-07", arch: "MoE", params: "1T / 32B", open: "Yes (modified MIT)", ctx: "128K", bench: "SWE-bench Verified 65.8%", refs: ["kimi-k2"] },
      { name: "GLM-4.5", org: "Zhipu AI", date: "2025-07", arch: "MoE", params: "355B / 32B", open: "Yes (MIT)", ctx: "128K", bench: "—", refs: ["glm45"] },
      { name: "MiniMax-M1", org: "MiniMax", date: "2025-06", arch: "MoE + lightning attention", params: "456B / 45.9B", open: "Yes", ctx: "1M", bench: "—", refs: ["minimax-m1"] },
      { name: "ERNIE 4.5", org: "Baidu", date: "2025-06 (open-sourced)", arch: "MoE", params: "300B / 47B", open: "Yes (Apache 2.0)", ctx: "128K", bench: "—", refs: ["ernie45"] },
      { name: "Hunyuan-Large", org: "Tencent", date: "2024-11", arch: "MoE", params: "389B / 52B", open: "Yes", ctx: "256K", bench: "—", refs: ["hunyuan-large"] }
    ],
    leaderboards: [
      { k: "Overall ranking (human preference)", v: "LMArena", refs: ["lmarena"] },
      { k: "Intelligence index / speed / price", v: "Artificial Analysis", refs: ["aa"] }
    ]
  },

  // =============== ⑤ Applications ===============
  applications: [
    { topic: "AI for Science", desc: "Weather forecasting, proteins and drugs, materials discovery", examples: "Huawei Pangu-Weather (Nature, 2023)", refs: ["pangu-weather"] },
    { topic: "Autonomous driving / robotaxis", desc: "City-scale driverless ride services", examples: "Baidu Apollo Go", refs: ["apollo-go"] },
    { topic: "Embodied AI / robotics", desc: "Humanoid and quadruped robots, industrial robots", examples: "Unitree Robotics", refs: ["unitree"] },
    { topic: "Policy: “AI+”", desc: "Deep integration of AI into research, industry, consumption, public services and governance", examples: "State Council opinions on the “AI+” initiative (2025)", refs: ["gov-cn"] },
    { topic: "Healthcare", desc: "Medical imaging, diagnostic support, drug R&D", examples: "To be added", refs: ["ai-index"] },
    { topic: "Manufacturing & industry", desc: "Quality inspection, predictive maintenance, industrial models", examples: "To be added", refs: ["ai-index"] },
    { topic: "Coding & agents", desc: "Code generation, agentic office automation", examples: "To be added", refs: ["ai-index"] },
    { topic: "Finance / education / government / content", desc: "Customer service, risk control, personalized learning, AI video and images", examples: "To be added", refs: ["ai-index"] }
  ]
};
