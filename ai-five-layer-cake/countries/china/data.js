// 中国（中国大陆）五层蛋糕数据。每条数据的 refs 对应 assets/refs.js 中的 id。
// 更新方法：修改数值 → 修改/补充 refs → 更新 updated 日期。
window.COUNTRY = {
  name: "中国（中国大陆）",
  en: "China (Mainland)",
  flag: "🇨🇳",
  status: "active",
  updated: "2026-10-29",
  summary: "全球最大的电力生产国与可再生能源装机国；芯片以设计与成熟制程制造为主、高端 AI 芯片受出口管制；开源大模型活跃。",

  // =============== ① 能源 ===============
  energy: {
    intro: "中国发电以煤电为主体，但风电、光伏装机增长极快。电力企业以中央与地方国有企业为主，私营资本主要集中在分布式光伏、自备电厂和部分新能源项目。",
    introRefs: ["nea", "cec"],
    overview: [
      { k: "总发电装机（2024 年底）", v: "≈ 33.5 亿千瓦（3,350 GW）", refs: ["nea"] },
      { k: "全年发电量（2024）", v: "≈ 10.1 万亿千瓦时", refs: ["nbs", "cec"] },
      { k: "风电 + 太阳能装机（2024 年底）", v: "≈ 14.1 亿千瓦，已超过火电", refs: ["nea"] },
      { k: "数据中心用电（2024，IEA 估算）", v: "约占全球数据中心用电的 1/4", refs: ["iea-ai"] }
    ],
    groups: [
      {
        no: "1.1", title: "火力发电", kind: "非可持续",
        principle: "燃烧化石燃料加热锅炉产生高温高压蒸汽（或燃气直接驱动燃气轮机），推动汽轮机带动发电机，把化学能 → 热能 → 机械能 → 电能。",
        principleRefs: ["cec"],
        sources: [
          {
            no: "1.1.1", title: "煤炭发电厂",
            stats: [
              { k: "电厂数量", v: "≈ 1,000+ 座在运煤电厂（按电厂计）", refs: ["gem-coal"] },
              { k: "装机容量", v: "≈ 11.9 亿千瓦（2024 年底）", refs: ["nea", "cec"] },
              { k: "年发电量", v: "≈ 5.5–5.8 万亿千瓦时（约占全国 55%+）", refs: ["cec", "ember"] },
              { k: "材料消耗", v: "供电煤耗 ≈ 300 克标准煤/千瓦时；全年电煤 ≈ 25 亿吨原煤（估算）", refs: ["cec", "est-note"] },
              { k: "运维人员", v: "1 GW 现代化电厂 ≈ 300–600 人（估算）", refs: ["est-note"] }
            ],
            plants: [
              { name: "大唐托克托发电厂", loc: "内蒙古呼和浩特 托克托县", lat: 40.20, lng: 111.33, cap: "6,720 MW", out: "—", fuel: "≈ 1,700 万吨原煤/年（估算）", staff: "—", own: "public", company: "中国大唐集团（央企）", note: "全球最大煤电厂之一", refs: ["gem-coal", "datang", "est-note"] },
              { name: "华能玉环电厂", loc: "浙江台州 玉环", lat: 28.13, lng: 121.30, cap: "4,000 MW（4×1000 MW 超超临界）", out: "—", fuel: "—", staff: "—", own: "public", company: "中国华能集团（央企）", note: "国内首座百万千瓦超超临界机组电厂", refs: ["gem-coal", "chng"] },
              { name: "国能台山电厂", loc: "广东江门 台山", lat: 21.86, lng: 112.88, cap: "≈ 5,000 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "国家能源投资集团（央企）", note: "", refs: ["gem-coal", "chnenergy"] },
              { name: "信发集团自备电厂群", loc: "山东聊城 茌平", lat: 36.58, lng: 116.25, cap: "数千 MW（口径不一，待核实）", out: "—", fuel: "—", staff: "—", own: "private", company: "信发集团（民营）", note: "为电解铝供电的自备电厂", refs: ["gem-coal"] },
              { name: "魏桥 / 中国宏桥自备电厂群", loc: "山东滨州 邹平", lat: 36.86, lng: 117.74, cap: "数千 MW（口径不一，待核实）", out: "—", fuel: "—", staff: "—", own: "private", company: "魏桥创业集团 / 中国宏桥（民营，港股 1378）", note: "为电解铝供电的自备电厂", refs: ["gem-coal"] }
            ]
          },
          {
            no: "1.1.2", title: "石油发电厂",
            stats: [
              { k: "占比", v: "燃油发电占全国发电量 < 1%，主要为海岛、备用和应急电源", refs: ["ember", "cec"] },
              { k: "材料消耗", v: "柴油 / 重油，约 0.2–0.25 kg/千瓦时（估算）", refs: ["est-note"] }
            ],
            plants: [],
            note: "中国大陆基本无大型燃油电厂，故不列代表性电厂。"
          },
          {
            no: "1.1.3", title: "天然气发电厂",
            stats: [
              { k: "装机容量", v: "≈ 1.4 亿千瓦（2024 年底，估）", refs: ["cec"] },
              { k: "年发电量", v: "≈ 3,000 亿千瓦时（约 3%）", refs: ["ember", "cec"] },
              { k: "材料消耗", v: "联合循环 ≈ 0.18–0.2 立方米天然气/千瓦时（估算）", refs: ["est-note"] },
              { k: "分布", v: "集中在京津冀、长三角、珠三角，承担调峰与热电联产", refs: ["gem-gas"] }
            ],
            plants: [
              { name: "华能北京热电厂（燃气热电）", loc: "北京 朝阳区", lat: 39.89, lng: 116.53, cap: "待核实", out: "—", fuel: "天然气", staff: "—", own: "public", company: "中国华能集团 / 北京能源集团", note: "北京“煤改气”后的主力热电中心之一", refs: ["gem-gas", "chng"] }
            ],
            note: "燃气电厂以国有发电集团和地方能源国企为主，暂未收录代表性私营燃气电厂。"
          }
        ]
      },
      {
        no: "1.2", title: "水力发电", kind: "非可持续（按本站分类；国际上通常归为可再生能源）",
        principle: "利用水库与下游的水位落差，让水流冲击水轮机，带动发电机发电；势能 → 动能 → 电能。",
        principleRefs: ["ctg"],
        sources: [
          {
            no: "1.2.1", title: "堤坝及内部发电厂",
            stats: [
              { k: "装机容量", v: "≈ 4.4 亿千瓦（2024 年底，含抽水蓄能）", refs: ["nea"] },
              { k: "年发电量", v: "≈ 1.4 万亿千瓦时（2024）", refs: ["cec"] },
              { k: "电站数量", v: "农村小水电站 ≈ 4 万座以上", refs: ["mwr"] },
              { k: "材料", v: "无燃料消耗；建设期大量混凝土与钢材", refs: ["ctg"] }
            ],
            plants: [
              { name: "三峡水电站", loc: "湖北宜昌", lat: 30.823, lng: 111.003, cap: "22,500 MW", out: "2020 年创纪录 ≈ 1,118 亿千瓦时", fuel: "—", staff: "—", own: "public", company: "中国长江三峡集团（央企）", note: "世界装机最大水电站", refs: ["ctg", "gem-hydro"] },
              { name: "白鹤滩水电站", loc: "四川宁南 / 云南巧家", lat: 27.215, lng: 102.905, cap: "16,000 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "中国长江三峡集团", note: "单机 1,000 MW", refs: ["ctg", "gem-hydro"] },
              { name: "溪洛渡水电站", loc: "四川雷波 / 云南永善", lat: 28.26, lng: 103.65, cap: "≈ 13,860 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "中国长江三峡集团", note: "", refs: ["ctg", "gem-hydro"] },
              { name: "乌东德水电站", loc: "四川会东 / 云南禄劝", lat: 26.33, lng: 102.63, cap: "10,200 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "中国长江三峡集团", note: "", refs: ["ctg", "gem-hydro"] },
              { name: "向家坝水电站", loc: "四川宜宾 / 云南水富", lat: 28.64, lng: 104.40, cap: "≈ 6,400 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "中国长江三峡集团", note: "", refs: ["ctg", "gem-hydro"] },
              { name: "金安桥水电站", loc: "云南丽江", lat: 26.80, lng: 100.43, cap: "≈ 2,400 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "汉能集团（民营，历史上的控股方；现股权待核实）", note: "少见的民营大型水电站", refs: ["gem-hydro"] }
            ]
          }
        ]
      },
      {
        no: "1.3", title: "核能发电", kind: "非可持续（低碳）",
        principle: "铀-235 等重核在反应堆中发生可控链式裂变，释放的热量加热冷却剂产生蒸汽，驱动汽轮发电机组。",
        principleRefs: ["wna"],
        sources: [
          {
            no: "1.3.1", title: "核裂变发电厂",
            stats: [
              { k: "在运机组", v: "≈ 58 台（2025 年），另有约 30 台在建，在建规模全球第一", refs: ["cnea", "pris"] },
              { k: "装机容量", v: "≈ 6,000 万千瓦（60 GW）", refs: ["cnea", "nea"] },
              { k: "年发电量", v: "≈ 4,500 亿千瓦时（2024，约 4.5%）", refs: ["cnea", "cec"] },
              { k: "材料消耗", v: "每 GW 每年约 20–25 吨低浓铀燃料（估算）", refs: ["wna", "est-note"] },
              { k: "运维人员", v: "双机组电站 ≈ 800–1,200 人（估算）", refs: ["est-note"] },
              { k: "所有制", v: "核电站须由具备资质的国有核电企业控股（中核、中广核、国家电投、华能）", refs: ["cnea"] }
            ],
            plants: [
              { name: "阳江核电站", loc: "广东阳江", lat: 21.71, lng: 112.26, cap: "6 台 × ≈1,086 MW ≈ 6,500 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "中国广核集团", note: "", refs: ["cgn", "pris"] },
              { name: "台山核电站", loc: "广东台山", lat: 21.92, lng: 112.98, cap: "2 × 1,750 MW（EPR）", out: "—", fuel: "—", staff: "—", own: "public", company: "中国广核集团（法国 EDF 参股 30%）", note: "全球首台投运的 EPR 机组", refs: ["cgn", "pris"] },
              { name: "大亚湾核电站", loc: "广东深圳", lat: 22.60, lng: 114.54, cap: "2 × ≈984 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "中国广核集团（香港中电集团参股 25%）", note: "中国大陆首座大型商用核电站", refs: ["cgn", "pris"] },
              { name: "田湾核电站", loc: "江苏连云港", lat: 34.69, lng: 119.46, cap: "6 台在运 ≈ 6,600 MW，另有机组在建", out: "—", fuel: "—", staff: "—", own: "public", company: "中国核工业集团", note: "", refs: ["cnnc", "pris"] },
              { name: "福清核电站", loc: "福建福清", lat: 25.44, lng: 119.45, cap: "6 台 ≈ 6,700 MW（含“华龙一号”示范机组）", out: "—", fuel: "—", staff: "—", own: "public", company: "中国核工业集团", note: "", refs: ["cnnc", "pris"] },
              { name: "红沿河核电站", loc: "辽宁大连 瓦房店", lat: 39.80, lng: 121.48, cap: "6 台 ≈ 6,700 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "中广核 / 国家电投", note: "东北最大核电站", refs: ["cgn", "spic", "pris"] },
              { name: "石岛湾高温气冷堆", loc: "山东威海 荣成", lat: 36.97, lng: 122.53, cap: "≈ 200 MW", out: "—", fuel: "球形燃料元件", staff: "—", own: "public", company: "中国华能集团", note: "全球首座商用第四代高温气冷堆", refs: ["chng", "pris"] }
            ],
            note: "按现行政策，核电站无私营控股案例；民营与港资企业仅以少数股权参与。"
          }
        ]
      },
      {
        no: "1.4", title: "风力发电厂", kind: "可持续",
        principle: "风推动叶片旋转，经齿轮箱（或直驱）带动发电机，把空气动能转为电能；海上风电风速更稳、利用小时更高。",
        principleRefs: ["gem-wind"],
        sources: [{
          no: "1.4", title: "风力发电厂",
          stats: [
            { k: "装机容量", v: "≈ 5.2 亿千瓦（2024 年底）", refs: ["nea"] },
            { k: "年发电量", v: "≈ 1 万亿千瓦时（2024，约 10%）", refs: ["cec", "ember"] },
            { k: "材料", v: "每 MW 约 100–180 吨钢材；直驱机型使用稀土永磁（估算）", refs: ["est-note"] },
            { k: "分布", v: "“三北”大型基地（甘肃、内蒙古、新疆）+ 东南沿海海上风电", refs: ["gem-wind"] }
          ],
          plants: [
            { name: "酒泉风电基地", loc: "甘肃酒泉", lat: 40.30, lng: 97.00, cap: "规划千万千瓦级（≈ 20 GW）", out: "—", fuel: "—", staff: "—", own: "public", company: "多家发电集团（大唐、华能、国家能源、国家电投等）", note: "中国首个千万千瓦级风电基地", refs: ["gem-wind"] },
            { name: "江苏如东海上风电群", loc: "江苏南通 如东", lat: 32.50, lng: 121.40, cap: "数 GW（多项目合计）", out: "—", fuel: "—", staff: "—", own: "public", company: "三峡集团、国家能源集团（龙源电力）等", note: "", refs: ["gem-wind", "ctg"] },
            { name: "远景能源旗下风电场（多地）", loc: "全国多地", cap: "待核实", out: "—", fuel: "—", staff: "—", own: "private", company: "远景科技集团（民营）", note: "整机制造商兼风电场投资运营", refs: ["gem-wind"] }
          ]
        }]
      },
      {
        no: "1.5", title: "太阳能发电厂", kind: "可持续",
        principle: "光伏：半导体（晶硅）吸收光子产生电子-空穴对形成电流（光生伏特效应）；光热：聚光加热工质产生蒸汽发电。",
        principleRefs: ["iea-pv"],
        sources: [{
          no: "1.5", title: "太阳能发电厂",
          stats: [
            { k: "装机容量", v: "≈ 8.9 亿千瓦（2024 年底）", refs: ["nea"] },
            { k: "其中分布式", v: "≈ 40% 为分布式光伏（大量为民营与家庭所有）", refs: ["nea"] },
            { k: "年发电量", v: "≈ 8,000+ 亿千瓦时（2024）", refs: ["cec", "ember"] },
            { k: "材料", v: "多晶硅、银浆、光伏玻璃、铝边框；中国占全球光伏制造各环节 80% 以上", refs: ["iea-pv"] }
          ],
          plants: [
            { name: "青海共和光伏园（塔拉滩）", loc: "青海海南州 共和县", lat: 36.15, lng: 100.60, cap: "多 GW 级（多项目合计）", out: "—", fuel: "—", staff: "—", own: "public", company: "国家电投（黄河水电）等", note: "“光伏+治沙+牧羊”样板", refs: ["gem-solar", "spic"] },
            { name: "正泰分布式光伏（多地）", loc: "浙江等全国多地", cap: "待核实", out: "—", fuel: "—", staff: "—", own: "private", company: "正泰集团（民营）", note: "户用与工商业屋顶光伏", refs: ["gem-solar"] }
          ]
        }]
      },
      {
        no: "1.6", title: "生物质发电厂", kind: "可持续",
        principle: "燃烧农林废弃物、生活垃圾或沼气，产生蒸汽驱动汽轮机发电，原理与火电类似但燃料可再生。",
        principleRefs: ["nea"],
        sources: [{
          no: "1.6", title: "生物质发电厂",
          stats: [
            { k: "装机容量", v: "≈ 4,500 万千瓦（含垃圾焚烧发电，估）", refs: ["nea"] },
            { k: "年发电量", v: "≈ 2,000 亿千瓦时（估）", refs: ["ember"] },
            { k: "材料", v: "秸秆、林业剩余物、城市生活垃圾", refs: ["nea"] }
          ],
          plants: [],
          note: "代表企业：光大环境（国企，垃圾焚烧发电）、国能生物发电等；具体电厂待补充。"
        }]
      },
      {
        no: "1.7", title: "地热发电厂", kind: "可持续",
        principle: "抽取地下高温热水或蒸汽，直接或经换热（双工质循环）驱动汽轮机发电。",
        principleRefs: ["nea"],
        sources: [{
          no: "1.7", title: "地热发电厂",
          stats: [{ k: "装机容量", v: "规模很小（数十 MW 级），以地热供暖为主", refs: ["nea"] }],
          plants: [
            { name: "羊八井地热电站", loc: "西藏拉萨 当雄县", lat: 30.08, lng: 90.48, cap: "≈ 25 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "西藏地方国有企业", note: "中国最早的大型地热电站（1977 年起）", refs: ["nea"] }
          ]
        }]
      },
      {
        no: "1.8", title: "潮汐能发电厂", kind: "可持续",
        principle: "在海湾筑坝形成水库，利用涨落潮的水位差推动水轮机发电。",
        principleRefs: ["nea"],
        sources: [{
          no: "1.8", title: "潮汐能发电厂",
          stats: [{ k: "装机容量", v: "示范规模（MW 级）", refs: ["nea"] }],
          plants: [
            { name: "江厦潮汐试验电站", loc: "浙江台州 温岭", lat: 28.35, lng: 121.20, cap: "≈ 4 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "国家能源集团（龙源电力）", note: "中国最大的潮汐电站", refs: ["chnenergy"] }
          ]
        }]
      },
      {
        no: "1.9", title: "其他发电厂", kind: "可持续",
        principle: "如光热（熔盐塔式）、氢能燃料电池等；抽水蓄能、电化学储能属于“储能”，本身不净发电。",
        principleRefs: ["nea"],
        sources: [{
          no: "1.9", title: "其他发电厂（光热等）",
          stats: [{ k: "光热装机", v: "数百 MW 级，集中在甘肃、青海", refs: ["nea"] }],
          plants: [
            { name: "敦煌熔盐塔式光热电站", loc: "甘肃敦煌", lat: 40.08, lng: 94.42, cap: "100 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "首航高科（民营，A 股 002665）", note: "", refs: ["gem-solar"] }
          ]
        }]
      }
    ]
  },

  // =============== ② 芯片 ===============
  chips: {
    design: {
      intro: "国产 AI 加速器以华为昇腾为代表；由于美国出口管制，NVIDIA 只能向中国供应降规格产品。下表峰值算力取 BF16/FP16 稠密值，非官方数据注明“报道”。",
      introRefs: ["bis"],
      gpus: [
        { vendor: "华为", model: "昇腾 910B", year: "2023", process: "7nm 级（报道）", memory: "64 GB HBM2e", bandwidth: "—", compute: "≈ 320 TFLOPS FP16（报道）", power: "≈ 400 W", note: "国产训练主力", refs: ["huawei-ascend", "semianalysis-910c"] },
        { vendor: "华为", model: "昇腾 910C", year: "2025", process: "7nm 级（报道）", memory: "128 GB HBM", bandwidth: "≈ 3.2 TB/s（报道）", compute: "≈ 780 TFLOPS BF16（报道）", power: "—", note: "双 die 封装；CloudMatrix 384 超节点", refs: ["semianalysis-910c"] },
        { vendor: "寒武纪", model: "思元 370-X8", year: "2022", process: "7nm", memory: "48 GB LPDDR5", bandwidth: "614 GB/s", compute: "256 TOPS INT8", power: "250 W", note: "", refs: ["cambricon"] },
        { vendor: "海光信息", model: "深算系列 DCU", year: "—", process: "—", memory: "—", bandwidth: "—", compute: "参数未完全公开", power: "—", note: "类 CUDA 生态（ROCm 路线）", refs: ["hygon"] }
      ],
      cpus: [
        { vendor: "华为", model: "鲲鹏 920", arch: "ARMv8.2", cores: "64", process: "7nm", note: "", refs: ["huawei-kunpeng"] },
        { vendor: "海光信息", model: "海光 7000 系列", arch: "x86（AMD Zen 授权衍生）", cores: "见官网", process: "—", note: "", refs: ["hygon"] },
        { vendor: "龙芯中科", model: "3D5000", arch: "LoongArch（自主指令集）", cores: "32", process: "—", note: "两颗 3C5000 合封", refs: ["loongson"] },
        { vendor: "飞腾", model: "腾云 S2500", arch: "ARMv8", cores: "64", process: "16nm", note: "", refs: ["phytium"] }
      ]
    },
    produce: {
      overview: [
        { k: "集成电路产量（2024）", v: "≈ 4,514 亿块", refs: ["nbs"] },
        { k: "最先进量产工艺", v: "中芯国际 7nm 级（N+2），无 EUV 光刻机", refs: ["techinsights"] }
      ],
      materials: [
        { name: "硅（多晶硅 → 硅片）", use: "晶圆基底", where: "中国多晶硅产量占全球 90% 左右（多为光伏级）；半导体级硅片仍依赖信越、SUMCO 等进口", refs: ["iea-pv", "usgs-mcs"] },
        { name: "镓", use: "GaN 功率 / 射频芯片", where: "中国占全球原生镓产量约 98%；2023 年 8 月起实施出口管制", refs: ["usgs-mcs", "mofcom"] },
        { name: "锗", use: "红外、光纤、SiGe 芯片", where: "中国为最大生产国；同步实施出口管制", refs: ["usgs-mcs", "mofcom"] },
        { name: "稀土", use: "抛光材料、靶材、磁体", where: "中国稀土开采约占全球 70%", refs: ["usgs-mcs"] }
      ],
      fabs: [
        { name: "中芯国际 SMIC", own: "国有资本主导，上市公司", location: "上海、北京、深圳、天津", node: "7nm 级", refs: ["techinsights"] },
        { name: "华虹集团", own: "国有", location: "上海、无锡", node: "成熟制程（28nm+）", refs: ["techinsights"] },
        { name: "长江存储 YMTC", own: "国有资本主导", location: "武汉", node: "3D NAND", refs: ["techinsights"] },
        { name: "长鑫存储 CXMT", own: "国有资本主导", location: "合肥", node: "DRAM", refs: ["techinsights"] }
      ]
    },
    trade: {
      overview: [
        { k: "集成电路进口（2024）", v: "≈ 5,492 亿个，≈ 3,856 亿美元", refs: ["customs"] },
        { k: "集成电路出口（2024）", v: "≈ 2,981 亿个，≈ 1,595 亿美元", refs: ["customs"] },
        { k: "贸易逆差", v: "≈ 2,260 亿美元，集成电路长期是最大单项进口商品之一", refs: ["customs"] }
      ],
      types: [
        { type: "高端 AI GPU", desc: "受美国 2022、2023、2024 年多轮出口管制，A100/H100/B200 等禁止对华出口；仅可进口降规格型号（如 H20，后续许可政策多次变化）", refs: ["bis"] },
        { type: "存储芯片（DRAM / NAND / HBM）", desc: "进口金额占比大；HBM 已被纳入管制", refs: ["customs", "bis"] },
        { type: "处理器与控制器", desc: "CPU、MCU、SoC 等，进口来源以中国台湾、韩国、东南亚为主", refs: ["customs"] },
        { type: "出口：成熟制程芯片", desc: "分立器件、模拟、功率芯片等", refs: ["customs"] }
      ]
    }
  },

  // =============== ③ 基础设施 ===============
  infrastructure: {
    datacenters: {
      intro: "中国以“东数西算”统筹布局：在西部能源富集地区建设算力枢纽，承接东部算力需求。",
      introRefs: ["ndrc"],
      overview: [
        { k: "国家算力枢纽", v: "8 个国家枢纽节点、10 个国家数据中心集群", refs: ["ndrc"] },
        { k: "算力总规模（2024 年底）", v: "≈ 280 EFLOPS", refs: ["miit"] },
        { k: "在用标准机架", v: "≈ 800 万架以上", refs: ["miit"] }
      ],
      companies: [
        { company: "阿里云（阿里巴巴）", valuation: "≥ 1,000 亿美元", count: "全球 ≈ 29 个地域、≈ 90 个可用区", highlight: "张北、乌兰察布、河源数据中心", refs: ["aliyun-infra"] },
        { company: "华为云（华为）", valuation: "非上市（≥ 1,000 亿美元级）", count: "全球 30+ 地域", highlight: "贵安、乌兰察布、芜湖", refs: ["huawei-cloud"] },
        { company: "腾讯云（腾讯）", valuation: "≥ 1,000 亿美元", count: "全球 20+ 地域", highlight: "清远、怀来、仪征", refs: ["tencent-infra"] },
        { company: "火山引擎（字节跳动）", valuation: "非上市（≥ 1,000 亿美元级）", count: "待核实", highlight: "乌兰察布、大同等", refs: ["volcengine"] },
        { company: "天翼云（中国电信）", valuation: "≥ 100 亿美元", count: "全国 IDC 资源最多的运营商之一", highlight: "京津冀、长三角、粤港澳", refs: ["ctyun"] },
        { company: "万国数据 GDS", valuation: "≥ 10 亿美元", count: "100+ 数据中心（含在建）", highlight: "上海、北京周边", refs: ["gds"] }
      ]
    },
    grid: {
      intro: "中国电网由国家电网、南方电网两大央企及内蒙古电力集团运营，建成全球规模最大的特高压交直流输电网，“西电东送”把西部水电、风光电送到东部负荷中心。",
      introRefs: ["sgcc", "csg"],
      overview: [
        { k: "最早发电", v: "1882 年上海（中国最早的公用电厂）", refs: ["sgcc"] },
        { k: "首条特高压", v: "2009 年 晋东南—南阳—荆门 1000 kV 交流示范工程", refs: ["sgcc"] },
        { k: "全国最高用电负荷", v: "≈ 15 亿千瓦（2025 年夏季创纪录）", refs: ["nea"] },
        { k: "特高压工程", v: "国家电网已建成 30+ 项特高压工程", refs: ["sgcc"] }
      ],
      operators: [
        { name: "国家电网有限公司", founded: "2002 年（电力体制改革“厂网分开”）", staff: "≈ 130 万人以上", scope: "26 个省级行政区，覆盖国土面积 88%", refs: ["sgcc", "fortune500"] },
        { name: "中国南方电网", founded: "2002 年", staff: "≈ 28 万人", scope: "广东、广西、云南、贵州、海南", refs: ["csg", "fortune500"] },
        { name: "内蒙古电力（集团）", founded: "—", staff: "—", scope: "内蒙古西部", refs: ["nea"] }
      ]
    }
  },

  // =============== ④ 模型 ===============
  models: {
    intro: "中国大模型以开放权重 + 混合专家（MoE）架构为主要特点，在推理效率与成本上竞争激烈。生成式 AI 服务需在网信办备案后上线。",
    introRefs: ["cac-genai"],
    list: [
      { name: "DeepSeek-V3", org: "深度求索", date: "2024-12", arch: "MoE + MLA", params: "671B / 37B", open: "是（MIT）", ctx: "128K", bench: "—", refs: ["ds-v3"] },
      { name: "DeepSeek-R1", org: "深度求索", date: "2025-01", arch: "MoE 推理模型（RL）", params: "671B / 37B", open: "是（MIT）", ctx: "128K", bench: "AIME 2024 pass@1 79.8%", refs: ["ds-r1"] },
      { name: "DeepSeek-V3.1 / V3.2", org: "深度求索", date: "2025-08 / 2025-09 起", arch: "混合思考；V3.2 引入稀疏注意力", params: "671B 级", open: "是", ctx: "128K", bench: "—", refs: ["ds-api"] },
      { name: "Qwen3-235B-A22B", org: "阿里巴巴（通义千问）", date: "2025-04", arch: "MoE，混合思考", params: "235B / 22B", open: "是（Apache 2.0）", ctx: "32K（可扩展至 128K）", bench: "AIME'24 85.7%", refs: ["qwen3"] },
      { name: "豆包大模型（Seed 系列）", org: "字节跳动", date: "持续迭代", arch: "未公开", params: "未公开", open: "否", ctx: "—", bench: "—", refs: ["doubao"] },
      { name: "Kimi K2", org: "月之暗面", date: "2025-07", arch: "MoE", params: "1T / 32B", open: "是（修改版 MIT）", ctx: "128K", bench: "SWE-bench Verified 65.8%", refs: ["kimi-k2"] },
      { name: "GLM-4.5", org: "智谱", date: "2025-07", arch: "MoE", params: "355B / 32B", open: "是（MIT）", ctx: "128K", bench: "—", refs: ["glm45"] },
      { name: "MiniMax-M1", org: "MiniMax", date: "2025-06", arch: "MoE + 线性注意力", params: "456B / 45.9B", open: "是", ctx: "1M", bench: "—", refs: ["minimax-m1"] },
      { name: "ERNIE 4.5", org: "百度", date: "2025-06（开源）", arch: "MoE", params: "300B / 47B", open: "是（Apache 2.0）", ctx: "128K", bench: "—", refs: ["ernie45"] },
      { name: "Hunyuan-Large", org: "腾讯", date: "2024-11", arch: "MoE", params: "389B / 52B", open: "是", ctx: "256K", bench: "—", refs: ["hunyuan-large"] }
    ],
    leaderboards: [
      { k: "综合排名（人类偏好对战）", v: "LMArena", refs: ["lmarena"] },
      { k: "智能指数 / 速度 / 价格", v: "Artificial Analysis", refs: ["aa"] }
    ]
  },

  // =============== ⑤ 应用 ===============
  applications: [
    { topic: "AI for Science", desc: "气象预报、蛋白质与药物、材料发现", examples: "华为盘古气象大模型（Nature 2023）", refs: ["pangu-weather"] },
    { topic: "自动驾驶 / Robotaxi", desc: "城市级无人驾驶出行服务", examples: "百度萝卜快跑", refs: ["apollo-go"] },
    { topic: "具身智能 / 机器人", desc: "人形与四足机器人、工业机器人", examples: "宇树科技", refs: ["unitree"] },
    { topic: "政策导向：“人工智能+”", desc: "推动 AI 与科研、产业、消费、民生、治理深度融合", examples: "国务院“人工智能+”行动意见（2025）", refs: ["gov-cn"] },
    { topic: "医疗健康", desc: "医学影像、辅助诊断、药物研发", examples: "待补充", refs: ["ai-index"] },
    { topic: "制造与工业", desc: "质检、预测性维护、工业大模型", examples: "待补充", refs: ["ai-index"] },
    { topic: "编程与智能体", desc: "代码生成、Agent 自动化办公", examples: "待补充", refs: ["ai-index"] },
    { topic: "金融 / 教育 / 政务 / 内容创作", desc: "智能客服、风控、个性化学习、AIGC 视频与图像", examples: "待补充", refs: ["ai-index"] }
  ]
};
