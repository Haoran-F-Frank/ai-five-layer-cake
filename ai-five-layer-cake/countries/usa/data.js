// 美国五层蛋糕数据。每条数据的 refs 对应 assets/refs.js 中的 id。
// 电厂级明细（容量、坐标、所有者）最权威来源为 EIA-860，可下载后按需补充。
window.COUNTRY = {
  name: "美国",
  en: "United States",
  flag: "🇺🇸",
  status: "active",
  updated: "2026-10-29",
  summary: "全球 AI 芯片设计与前沿模型的领先国家，数据中心用电量全球第一；电力以天然气为主体，电力企业以投资者所有的私营公用事业公司为主。",

  // =============== ① 能源 ===============
  energy: {
    intro: "美国电力以天然气为第一大来源，核电约占两成，风光占比快速上升。电力企业分为投资者所有（私营）、联邦（如 TVA、垦务局）、州 / 市政公用事业与合作社。",
    introRefs: ["eia-faq-gen"],
    overview: [
      { k: "公用事业级发电量（2024）", v: "≈ 4.3 万亿千瓦时（4,300 TWh）", refs: ["eia-faq-gen", "eia-epm"] },
      { k: "公用事业级电厂数量", v: "≈ 11,000+ 座（≥ 1 MW）", refs: ["eia-faq-plants"] },
      { k: "发电行业就业", v: "≈ 90 万人（电力生产）", refs: ["useer"] },
      { k: "数据中心用电（2023）", v: "≈ 176 TWh，占全国 4.4%；2028 年或达 6.7–12%", refs: ["lbnl-dc"] }
    ],
    groups: [
      {
        no: "1.1", title: "火力发电", kind: "非可持续",
        principle: "燃烧化石燃料产生高温高压蒸汽驱动汽轮机；燃气联合循环则先由燃气轮机发电，再用余热产生蒸汽二次发电。",
        principleRefs: ["eia-epm"],
        sources: [
          {
            no: "1.1.1", title: "煤炭发电厂",
            stats: [
              { k: "电厂数量", v: "≈ 200 座左右，持续退役中", refs: ["eia-faq-plants"] },
              { k: "装机容量", v: "≈ 170–180 GW", refs: ["eia-860"] },
              { k: "年发电量 / 占比", v: "≈ 15%（2024）", refs: ["eia-faq-gen"] },
              { k: "材料消耗", v: "电力部门用煤 ≈ 4 亿短吨/年（2024）", refs: ["eia-coal"] },
              { k: "运维人员", v: "1 GW 电厂 ≈ 200–400 人（估算）", refs: ["est-note"] }
            ],
            plants: [
              { name: "Plant Scherer", loc: "佐治亚州 Juliette", lat: 33.06, lng: -83.81, cap: "≈ 3,500 MW", out: "—", fuel: "粉河盆地低硫煤", staff: "—", own: "private", company: "Georgia Power（Southern Company 子公司）等", note: "美国最大煤电厂之一", refs: ["eia-860"] },
              { name: "Plant Bowen", loc: "佐治亚州 Euharlee", lat: 34.13, lng: -84.92, cap: "≈ 3,200 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "Georgia Power（Southern Company）", note: "", refs: ["eia-860"] },
              { name: "Gibson Generating Station", loc: "印第安纳州 Owensville", lat: 38.37, lng: -87.77, cap: "≈ 3,300 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "Duke Energy 等", note: "", refs: ["eia-860"] },
              { name: "Monroe Power Plant", loc: "密歇根州 Monroe", lat: 41.89, lng: -83.35, cap: "≈ 3,100 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "DTE Energy", note: "计划逐步退役", refs: ["eia-860"] },
              { name: "Cumberland Fossil Plant", loc: "田纳西州 Cumberland City", lat: 36.39, lng: -87.65, cap: "≈ 2,500 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "田纳西河谷管理局 TVA（联邦）", note: "计划以燃气机组替代", refs: ["tva", "eia-860"] }
            ]
          },
          {
            no: "1.1.2", title: "石油发电厂",
            stats: [
              { k: "占比", v: "< 1%（2024），多为调峰与备用机组", refs: ["eia-faq-gen"] },
              { k: "分布", v: "夏威夷、阿拉斯加偏远地区与东北部调峰", refs: ["eia-860"] }
            ],
            plants: [],
            note: "燃油发电以小型调峰机组为主，代表性电厂待补充（可从 EIA-860 按燃料类型筛选）。",
            noteRefs: ["eia-860"]
          },
          {
            no: "1.1.3", title: "天然气发电厂",
            stats: [
              { k: "电厂数量", v: "≈ 2,000 座左右", refs: ["eia-faq-plants"] },
              { k: "装机容量", v: "≈ 500 GW（最大装机来源）", refs: ["eia-860"] },
              { k: "年发电量 / 占比", v: "≈ 43%（2024）", refs: ["eia-faq-gen"] },
              { k: "材料消耗", v: "联合循环热耗率 ≈ 6,500–7,500 Btu/kWh（估算）", refs: ["eia-epm", "est-note"] }
            ],
            plants: [
              { name: "West County Energy Center", loc: "佛罗里达州 Loxahatchee", lat: 26.70, lng: -80.37, cap: "≈ 3,700 MW", out: "—", fuel: "天然气", staff: "—", own: "private", company: "Florida Power & Light（NextEra Energy）", note: "", refs: ["eia-860"] },
              { name: "Haynes Generating Station", loc: "加州 Long Beach", lat: 33.76, lng: -118.10, cap: "≈ 1,600 MW", out: "—", fuel: "天然气", staff: "—", own: "public", company: "洛杉矶水电局 LADWP（市政）", note: "", refs: ["eia-860"] }
            ]
          }
        ]
      },
      {
        no: "1.2", title: "水力发电", kind: "非可持续（按本站分类；国际上通常归为可再生能源）",
        principle: "利用水位落差驱动水轮机发电；抽水蓄能在低谷抽水、高峰放水发电。",
        principleRefs: ["usbr-gc"],
        sources: [{
          no: "1.2.1", title: "堤坝及内部发电厂",
          stats: [
            { k: "电厂数量", v: "≈ 1,400+ 座常规水电站", refs: ["eia-faq-plants"] },
            { k: "装机容量", v: "≈ 80 GW 常规水电（另有 ≈ 23 GW 抽水蓄能）", refs: ["eia-860"] },
            { k: "年发电量 / 占比", v: "≈ 6%（2024）", refs: ["eia-faq-gen"] }
          ],
          plants: [
            { name: "Grand Coulee Dam", loc: "华盛顿州 哥伦比亚河", lat: 47.957, lng: -118.98, cap: "≈ 6,800 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "美国垦务局 USBR（联邦）", note: "美国最大发电设施", refs: ["usbr-gc"] },
            { name: "Chief Joseph Dam", loc: "华盛顿州 Bridgeport", lat: 47.995, lng: -119.633, cap: "≈ 2,600 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "美国陆军工程兵团 USACE（联邦）", note: "", refs: ["eia-860"] },
            { name: "Robert Moses Niagara", loc: "纽约州 尼亚加拉瀑布", lat: 43.14, lng: -79.04, cap: "≈ 2,500 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "纽约电力局 NYPA（州属）", note: "", refs: ["eia-860"] },
            { name: "Hoover Dam", loc: "内华达 / 亚利桑那州", lat: 36.016, lng: -114.737, cap: "≈ 2,080 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "美国垦务局 USBR（联邦）", note: "", refs: ["usbr-hoover"] },
            { name: "Bath County Pumped Storage", loc: "弗吉尼亚州", lat: 38.21, lng: -79.80, cap: "≈ 3,000 MW（抽蓄）", out: "净耗电", fuel: "—", staff: "—", own: "private", company: "Dominion Energy 等", note: "全球最大抽水蓄能电站之一", refs: ["eia-860"] },
            { name: "Conowingo Dam", loc: "马里兰州", lat: 39.66, lng: -76.17, cap: "≈ 570 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "Constellation Energy", note: "", refs: ["eia-860"] }
          ]
        }]
      },
      {
        no: "1.3", title: "核能发电", kind: "非可持续（低碳）",
        principle: "铀-235 可控链式裂变产生热量，加热冷却剂产生蒸汽驱动汽轮机。美国在运机组均为轻水堆（压水堆 / 沸水堆）。",
        principleRefs: ["wna"],
        sources: [{
          no: "1.3.1", title: "核裂变发电厂",
          stats: [
            { k: "电厂 / 机组", v: "54 座核电站、94 台机组（Vogtle 4 号机 2024 年投运后）", refs: ["eia-faq-nuclear"] },
            { k: "装机容量", v: "≈ 97 GW（全球最大核电装机）", refs: ["eia-faq-nuclear"] },
            { k: "年发电量 / 占比", v: "≈ 18%（2024），为最大低碳电源", refs: ["eia-faq-gen"] },
            { k: "材料消耗", v: "反应堆业主年采购铀 ≈ 5,000 万磅 U₃O₈ 当量，大部分进口", refs: ["eia-uranium"] },
            { k: "运维人员", v: "每座电站 ≈ 500–1,000 人（估算）", refs: ["est-note"] }
          ],
          plants: [
            { name: "Palo Verde", loc: "亚利桑那州 Tonopah", lat: 33.39, lng: -112.86, cap: "≈ 3,900 MW（3 台）", out: "≈ 30+ TWh/年", fuel: "—", staff: "≈ 2,000 人（估算）", own: "private", company: "运营：Arizona Public Service（Pinnacle West）；共有方含 SRP（公共）等", note: "美国发电量最大的电站", refs: ["eia-860", "est-note"] },
            { name: "Vogtle", loc: "佐治亚州 Waynesboro", lat: 33.14, lng: -81.76, cap: "≈ 4,500 MW（4 台，含 2 台 AP1000）", out: "—", fuel: "—", staff: "—", own: "private", company: "Georgia Power（Southern Company）控股；共有方含 MEAG、Oglethorpe（公共 / 合作社）", note: "美国最大核电站", refs: ["eia-860", "eia-faq-nuclear"] },
            { name: "Browns Ferry", loc: "阿拉巴马州 Athens", lat: 34.70, lng: -87.12, cap: "≈ 3,800 MW（3 台）", out: "—", fuel: "—", staff: "—", own: "public", company: "田纳西河谷管理局 TVA（联邦）", note: "", refs: ["tva", "eia-860"] },
            { name: "Diablo Canyon", loc: "加州 Avila Beach", lat: 35.21, lng: -120.85, cap: "≈ 2,250 MW（2 台）", out: "—", fuel: "—", staff: "—", own: "private", company: "PG&E", note: "加州唯一在运核电站，已延寿", refs: ["eia-860"] }
          ]
        }]
      },
      {
        no: "1.4", title: "风力发电厂", kind: "可持续",
        principle: "风推动叶片旋转，带动发电机发电。",
        principleRefs: ["uswtdb"],
        sources: [{
          no: "1.4", title: "风力发电厂",
          stats: [
            { k: "风机数量", v: "≈ 75,000 台", refs: ["uswtdb"] },
            { k: "装机容量", v: "≈ 150 GW", refs: ["eia-860"] },
            { k: "年发电量 / 占比", v: "≈ 10%（2024）", refs: ["eia-faq-gen"] },
            { k: "分布", v: "德州、爱荷华、俄克拉何马、堪萨斯等中部风带", refs: ["uswtdb"] }
          ],
          plants: [
            { name: "Alta Wind Energy Center", loc: "加州 Tehachapi", lat: 35.02, lng: -118.32, cap: "≈ 1,550 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "多家投资方（Terra-Gen 等）", note: "", refs: ["eia-860"] },
            { name: "Roscoe Wind Farm", loc: "德州 Roscoe", lat: 32.45, lng: -100.54, cap: "≈ 780 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "RWE", note: "", refs: ["eia-860"] },
            { name: "Horse Hollow Wind Energy Center", loc: "德州 Taylor / Nolan 县", lat: 32.20, lng: -100.00, cap: "≈ 735 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "NextEra Energy Resources", note: "", refs: ["eia-860"] }
          ],
          note: "美国大型风电场几乎全部为私营开发商所有；公共电力机构多通过长期购电协议（PPA）采购。"
        }]
      },
      {
        no: "1.5", title: "太阳能发电厂", kind: "可持续",
        principle: "光伏效应将光能直接转为电能；光热电站聚光产生蒸汽发电。",
        principleRefs: ["iea-pv"],
        sources: [{
          no: "1.5", title: "太阳能发电厂",
          stats: [
            { k: "电厂数量", v: "≈ 5,000+ 座公用事业级光伏电站", refs: ["eia-faq-plants"] },
            { k: "年发电量 / 占比", v: "≈ 7%（2024，含小型分布式）", refs: ["eia-faq-gen"] },
            { k: "材料", v: "组件大量进口；本土制造在《通胀削减法案》激励下扩张", refs: ["iea-pv"] }
          ],
          plants: [
            { name: "Edwards & Sanborn", loc: "加州 Kern 县", lat: 35.00, lng: -117.95, cap: "≈ 875 MW 光伏 + ≈ 3.3 GWh 储能", out: "—", fuel: "—", staff: "—", own: "private", company: "Terra-Gen 等", note: "", refs: ["eia-860"] },
            { name: "Gemini Solar", loc: "内华达州 Clark 县", lat: 36.37, lng: -114.88, cap: "≈ 690 MW + 储能", out: "—", fuel: "—", staff: "—", own: "private", company: "Primergy Solar", note: "", refs: ["eia-860"] },
            { name: "Solar Star", loc: "加州 Rosamond", lat: 34.83, lng: -118.40, cap: "≈ 580 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "BHE Renewables（伯克希尔哈撒韦能源）", note: "", refs: ["eia-860"] }
          ]
        }]
      },
      {
        no: "1.6", title: "生物质发电厂", kind: "可持续",
        principle: "燃烧木材废料、农业残余、垃圾填埋气等发电。",
        principleRefs: ["eia-faq-gen"],
        sources: [{
          no: "1.6", title: "生物质发电厂",
          stats: [{ k: "占比", v: "≈ 1%（2024）", refs: ["eia-faq-gen"] }],
          plants: [
            { name: "Okeelanta Cogeneration", loc: "佛罗里达州 South Bay", lat: 26.60, lng: -80.70, cap: "≈ 140 MW", out: "—", fuel: "甘蔗渣、木材废料", staff: "—", own: "private", company: "Florida Crystals", note: "北美最大生物质电厂之一", refs: ["eia-860"] }
          ]
        }]
      },
      {
        no: "1.7", title: "地热发电厂", kind: "可持续",
        principle: "利用地下蒸汽（干蒸汽 / 闪蒸）或热水（双工质循环）驱动汽轮机。",
        principleRefs: ["eia-faq-gen"],
        sources: [{
          no: "1.7", title: "地热发电厂",
          stats: [
            { k: "装机容量", v: "≈ 4 GW（全球最大地热装机国）", refs: ["eia-860"] },
            { k: "占比", v: "≈ 0.4%（2024）", refs: ["eia-faq-gen"] }
          ],
          plants: [
            { name: "The Geysers", loc: "加州 Sonoma / Lake 县", lat: 38.79, lng: -122.75, cap: "≈ 700+ MW（净）", out: "—", fuel: "—", staff: "—", own: "private", company: "Calpine（多数机组）", note: "全球最大地热电站群", refs: ["eia-860"] },
            { name: "Salton Sea 地热电站群", loc: "加州 Imperial 县", lat: 33.17, lng: -115.62, cap: "≈ 340 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "BHE Renewables（CalEnergy）", note: "卤水中可提锂", refs: ["eia-860"] }
          ]
        }]
      },
      {
        no: "1.8", title: "潮汐能发电厂", kind: "可持续",
        principle: "利用潮流动能（潮流涡轮）或潮差（拦坝）发电。",
        principleRefs: ["eia-faq-gen"],
        sources: [{
          no: "1.8", title: "潮汐能发电厂",
          stats: [{ k: "现状", v: "无商业规模潮汐电站，仅有试验项目（如纽约东河潮流能试点）", refs: ["eia-860"] }],
          plants: []
        }]
      },
      {
        no: "1.9", title: "其他发电厂", kind: "可持续",
        principle: "如塔式光热（CSP）、燃料电池等。",
        principleRefs: ["eia-860"],
        sources: [{
          no: "1.9", title: "其他发电厂（光热等）",
          stats: [{ k: "光热装机", v: "≈ 1.5–1.8 GW，集中在加州、亚利桑那、内华达", refs: ["eia-860"] }],
          plants: [
            { name: "Ivanpah Solar", loc: "加州 Mojave 沙漠", lat: 35.56, lng: -115.47, cap: "≈ 390 MW（塔式光热）", out: "—", fuel: "—", staff: "—", own: "private", company: "NRG Energy / BrightSource 等", note: "", refs: ["eia-860"] }
          ]
        }]
      }
    ]
  },

  // =============== ② 芯片 ===============
  chips: {
    design: {
      intro: "美国主导 AI 芯片设计：NVIDIA、AMD、Intel 提供通用 GPU / 加速器，Google、AWS 等云厂商自研 ASIC。下表峰值算力取 BF16 稠密值（未计稀疏），除非注明。",
      introRefs: ["nv-h100", "amd-mi300x"],
      gpus: [
        { vendor: "NVIDIA", model: "H100 SXM", year: "2022", process: "TSMC 4N", memory: "80 GB HBM3", bandwidth: "3.35 TB/s", compute: "≈ 989 TFLOPS", power: "700 W", note: "Hopper 架构", refs: ["nv-h100"] },
        { vendor: "NVIDIA", model: "B200（DGX B200 单卡）", year: "2024", process: "TSMC 4NP", memory: "≈ 180 GB HBM3e", bandwidth: "≈ 8 TB/s", compute: "≈ 2.25 PFLOPS", power: "≈ 1,000 W", note: "Blackwell 架构；按 DGX 整机规格折算", refs: ["nv-b200"] },
        { vendor: "AMD", model: "Instinct MI300X", year: "2023", process: "TSMC 5/6nm chiplet", memory: "192 GB HBM3", bandwidth: "5.3 TB/s", compute: "≈ 1,307 TFLOPS", power: "750 W", note: "", refs: ["amd-mi300x"] },
        { vendor: "AMD", model: "Instinct MI355X", year: "2025", process: "TSMC N3", memory: "288 GB HBM3E", bandwidth: "8 TB/s", compute: "≈ 2.5 PFLOPS（FP16）", power: "≈ 1,400 W", note: "", refs: ["amd-mi355x"] },
        { vendor: "Intel", model: "Gaudi 3", year: "2024", process: "TSMC 5nm", memory: "128 GB HBM2e", bandwidth: "3.7 TB/s", compute: "≈ 1,835 TFLOPS", power: "≈ 900 W", note: "", refs: ["intel-gaudi"] },
        { vendor: "Google", model: "TPU v7 Ironwood", year: "2025", process: "—", memory: "192 GB HBM", bandwidth: "≈ 7.4 TB/s", compute: "≈ 4,614 TFLOPS（FP8）", power: "—", note: "仅在 Google Cloud 提供", refs: ["google-ironwood"] },
        { vendor: "AWS", model: "Trainium2", year: "2024", process: "—", memory: "96 GB HBM", bandwidth: "≈ 2.9 TB/s", compute: "≈ 1.3 PFLOPS（FP8）", power: "—", note: "仅在 AWS 提供", refs: ["aws-trainium"] }
      ],
      cpus: [
        { vendor: "Intel", model: "Xeon 6900P（Granite Rapids）", arch: "x86-64", cores: "128 P 核", process: "Intel 3", note: "", refs: ["intel-xeon"] },
        { vendor: "AMD", model: "EPYC 9005（Turin）", arch: "x86-64（Zen 5 / Zen 5c）", cores: "192", process: "TSMC 3/4nm", note: "", refs: ["amd-epyc"] },
        { vendor: "NVIDIA", model: "Grace", arch: "Arm Neoverse V2", cores: "72", process: "TSMC 4N", note: "与 GPU 组成 GH200 / GB200", refs: ["nv-grace"] },
        { vendor: "AWS", model: "Graviton4", arch: "Arm Neoverse V2", cores: "96", process: "—", note: "仅在 AWS 提供", refs: ["aws-graviton"] }
      ]
    },
    produce: {
      overview: [
        { k: "全球晶圆产能占比", v: "≈ 10%（2022），预计 2032 年升至 ≈ 14%", refs: ["sia-bcg"] },
        { k: "产业政策", v: "《芯片与科学法案》（2022）：≈ 527 亿美元，其中 ≈ 390 亿美元制造补贴", refs: ["chips-act"] }
      ],
      materials: [
        { name: "高纯石英", use: "拉制单晶硅的坩埚", where: "北卡罗来纳州 Spruce Pine 是全球最主要的高纯石英产地", refs: ["usgs-mcs"] },
        { name: "半导体级多晶硅", use: "晶圆原料", where: "Hemlock Semiconductor（密歇根）等", refs: ["usgs-mcs"] },
        { name: "镓 / 锗", use: "化合物半导体", where: "高度依赖进口（中国为主要来源）", refs: ["usgs-mcs"] }
      ],
      fabs: [
        { name: "Intel", own: "私有（上市）", location: "俄勒冈、亚利桑那、新墨西哥；俄亥俄在建", node: "Intel 3 / 18A", refs: ["intel-xeon", "chips-act"] },
        { name: "TSMC Arizona", own: "私有（台积电子公司）", location: "亚利桑那州凤凰城", node: "N4（已量产），更先进工艺规划中", refs: ["chips-act"] },
        { name: "Samsung Austin / Taylor", own: "私有（三星子公司）", location: "德州", node: "—", refs: ["chips-act"] },
        { name: "Micron", own: "私有（上市）", location: "爱达荷；纽约在建", node: "DRAM / HBM", refs: ["chips-act"] },
        { name: "GlobalFoundries", own: "私有（上市）", location: "纽约 Malta 等", node: "成熟制程（12nm+）", refs: ["chips-act"] }
      ]
    },
    trade: {
      overview: [
        { k: "进出口统计口径", v: "HS 8541（分立器件）/ 8542（集成电路），数值待补充", refs: ["census"] },
        { k: "AI 芯片出口管制", v: "2022-10、2023-10、2024-12 多轮规则，限制先进 GPU、HBM 与制造设备对华出口", refs: ["bis"] }
      ],
      types: [
        { type: "进口：先进逻辑芯片", desc: "NVIDIA、AMD、Apple 等设计的芯片主要由台积电在中国台湾制造后进口", refs: ["sia-bcg"] },
        { type: "进口：组装测试后的芯片", desc: "大量来自马来西亚、越南等东南亚封测基地", refs: ["sia-bcg"] },
        { type: "出口：设备与设计", desc: "半导体制造设备（应用材料、Lam、KLA）与 EDA 软件是重要出口品", refs: ["sia-bcg", "bis"] }
      ]
    }
  },

  // =============== ③ 基础设施 ===============
  infrastructure: {
    datacenters: {
      intro: "美国拥有全球最多的数据中心与最大的 AI 训练集群，北弗吉尼亚是全球最大的数据中心市场。",
      introRefs: ["dcmap", "iea-ai"],
      overview: [
        { k: "数据中心总数", v: "≈ 5,000+ 座（全球最多）", refs: ["dcmap"] },
        { k: "全球数据中心用电占比", v: "≈ 45%（2024，IEA）", refs: ["iea-ai"] },
        { k: "数据中心用电（2023）", v: "≈ 176 TWh", refs: ["lbnl-dc"] }
      ],
      companies: [
        { company: "Amazon（AWS）", valuation: "≥ 1 万亿美元", count: "全球 ≈ 38 个区域、120+ 可用区", highlight: "Project Rainier（Trainium2 集群）", refs: ["aws-infra"] },
        { company: "Microsoft（Azure）", valuation: "≥ 1 万亿美元", count: "全球 60+ 区域、300+ 数据中心", highlight: "Fairwater AI 数据中心（威斯康星）", refs: ["azure-infra"] },
        { company: "Alphabet（Google Cloud）", valuation: "≥ 1 万亿美元", count: "全球 40+ 区域", highlight: "TPU 集群", refs: ["gcp-infra"] },
        { company: "Meta", valuation: "≥ 1 万亿美元", count: "20+ 自建数据中心园区", highlight: "Prometheus（俄亥俄）、Hyperion（路易斯安那）", refs: ["meta-dc"] },
        { company: "Oracle（OCI）", valuation: "≥ 1,000 亿美元", count: "全球 50+ 公有云区域", highlight: "参与 Stargate（德州 Abilene）", refs: ["oracle-infra", "stargate"] },
        { company: "OpenAI（Stargate 合资）", valuation: "≥ 1,000 亿美元（非上市）", count: "多个在建园区", highlight: "Stargate 一期：德州 Abilene", refs: ["stargate"] },
        { company: "xAI", valuation: "≥ 1,000 亿美元级（非上市）", count: "—", highlight: "Colossus（田纳西州孟菲斯）", refs: ["xai-colossus"] },
        { company: "CoreWeave", valuation: "≥ 100 亿美元", count: "30+ 数据中心", highlight: "GPU 云", refs: ["coreweave"] },
        { company: "Equinix", valuation: "≥ 500 亿美元", count: "全球 260+ IBX 数据中心", highlight: "托管型数据中心", refs: ["equinix"] }
      ]
    },
    grid: {
      intro: "美国本土电网分为东部、西部、德州（ERCOT）三大互联电网，由约 3,000 家电力公司、多个区域输电组织（ISO/RTO）共同运营，没有单一全国电网公司。",
      introRefs: ["eia-grid"],
      overview: [
        { k: "最早电网", v: "1882 年爱迪生纽约 Pearl Street 电站", refs: ["eia-grid"] },
        { k: "电网结构", v: "3 大互联电网；7 个 ISO/RTO", refs: ["eia-grid", "nerc"] },
        { k: "高压输电线路", v: "≈ 16 万英里（≈ 26 万公里）以上", refs: ["eia-grid"] },
        { k: "本土 48 州最高负荷", v: "≈ 750+ GW（2024–2025 年夏季纪录）", refs: ["eia-tie"] },
        { k: "输配电与储能就业", v: "≈ 140 万人（含输配电、储能）", refs: ["useer"] }
      ],
      operators: [
        { name: "PJM Interconnection", founded: "1927 年起源", staff: "—", scope: "东部 13 州 + 华盛顿特区（含北弗吉尼亚数据中心集群）", refs: ["nerc"] },
        { name: "ERCOT", founded: "1970 年", staff: "—", scope: "德州大部分地区，独立互联电网", refs: ["nerc"] },
        { name: "田纳西河谷管理局 TVA", founded: "1933 年（联邦）", staff: "—", scope: "田纳西州及周边 6 州部分地区", refs: ["tva"] },
        { name: "NERC（北美电力可靠性公司）", founded: "1968 年", staff: "—", scope: "制定可靠性标准，覆盖美、加及墨西哥部分地区", refs: ["nerc"] }
      ]
    }
  },

  // =============== ④ 模型 ===============
  models: {
    intro: "美国前沿模型多为闭源（参数未公开），同时 Meta、OpenAI 等也发布开放权重模型。模型迭代很快，以下列表需定期更新。",
    introRefs: ["ai-index"],
    list: [
      { name: "GPT-5", org: "OpenAI", date: "2025-08", arch: "未公开（含推理模式）", params: "未公开", open: "否", ctx: "—", bench: "SWE-bench Verified 74.9%", refs: ["gpt5"] },
      { name: "gpt-oss-120b", org: "OpenAI", date: "2025-08", arch: "MoE", params: "117B / 5.1B", open: "是（Apache 2.0）", ctx: "128K", bench: "—", refs: ["gpt-oss"] },
      { name: "Claude Sonnet 4.5", org: "Anthropic", date: "2025-09", arch: "未公开", params: "未公开", open: "否", ctx: "200K", bench: "SWE-bench Verified 77.2%", refs: ["claude-s45"] },
      { name: "Claude 5 系列（Opus / Sonnet / Haiku）", org: "Anthropic", date: "见官方", arch: "未公开", params: "未公开", open: "否", ctx: "—", bench: "—", refs: ["claude-models"] },
      { name: "Gemini 2.5 Pro / Gemini 3", org: "Google DeepMind", date: "2025", arch: "未公开（原生多模态）", params: "未公开", open: "否", ctx: "≈ 1M", bench: "—", refs: ["gemini"] },
      { name: "Llama 4 Maverick", org: "Meta", date: "2025-04", arch: "MoE，原生多模态", params: "400B / 17B", open: "开放权重（Llama 许可）", ctx: "1M", bench: "—", refs: ["llama4"] },
      { name: "Llama 4 Scout", org: "Meta", date: "2025-04", arch: "MoE", params: "109B / 17B", open: "开放权重（Llama 许可）", ctx: "10M", bench: "—", refs: ["llama4"] },
      { name: "Grok 4", org: "xAI", date: "2025-07", arch: "未公开", params: "未公开", open: "否", ctx: "—", bench: "—", refs: ["xai-news"] }
    ],
    leaderboards: [
      { k: "综合排名（人类偏好对战）", v: "LMArena", refs: ["lmarena"] },
      { k: "智能指数 / 速度 / 价格", v: "Artificial Analysis", refs: ["aa"] }
    ]
  },

  // =============== ⑤ 应用 ===============
  applications: [
    { topic: "AI for Science", desc: "蛋白质结构预测、天气预报、材料与数学", examples: "AlphaFold（2024 诺贝尔化学奖）；GraphCast 天气模型", refs: ["nobel-2024", "graphcast"] },
    { topic: "自动驾驶 / Robotaxi", desc: "城市无人驾驶出租车", examples: "Waymo（凤凰城、旧金山、洛杉矶等）", refs: ["waymo"] },
    { topic: "政策导向", desc: "加速 AI 基础设施建设与出口", examples: "America's AI Action Plan（2025）", refs: ["ai-gov"] },
    { topic: "编程与智能体", desc: "代码助手、自主 Agent", examples: "待补充", refs: ["ai-index"] },
    { topic: "医疗健康", desc: "影像、临床文书、药物发现", examples: "待补充", refs: ["ai-index"] },
    { topic: "具身智能 / 机器人", desc: "人形机器人、仓储机器人", examples: "待补充", refs: ["ai-index"] },
    { topic: "金融 / 教育 / 法律 / 内容创作", desc: "投研、个性化辅导、合同审查、AIGC", examples: "待补充", refs: ["ai-index"] }
  ]
};
