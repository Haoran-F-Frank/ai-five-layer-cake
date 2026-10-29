// United States — English version. Keep numbers and refs in sync with data.js (Chinese).
window.COUNTRY_EN = {
  name: "United States",
  en: "United States",
  flag: "🇺🇸",
  status: "active",
  updated: "2026-10-29",
  summary: "World leader in AI chip design and frontier models, and the largest consumer of data-center electricity. Natural gas is the backbone of the power system, and most utilities are investor-owned (private).",

  // =============== ① Energy ===============
  energy: {
    intro: "Natural gas is the largest source of US electricity, nuclear supplies about a fifth, and wind and solar are growing fast. Utilities are investor-owned (private), federal (e.g. TVA, Bureau of Reclamation), state or municipal, or cooperatives.",
    introRefs: ["eia-faq-gen"],
    overview: [
      { k: "Utility-scale generation (2024)", v: "≈ 4,300 TWh", refs: ["eia-faq-gen", "eia-epm"] },
      { k: "Utility-scale power plants", v: "≈ 11,000+ (≥ 1 MW)", refs: ["eia-faq-plants"] },
      { k: "Power-generation employment", v: "≈ 0.9 million", refs: ["useer"] },
      { k: "Data-center electricity (2023)", v: "≈ 176 TWh, 4.4% of US total; possibly 6.7–12% by 2028", refs: ["lbnl-dc"] }
    ],
    groups: [
      {
        no: "1.1", title: "Thermal power", kind: "Non-sustainable",
        principle: "Burning fossil fuel makes high-pressure steam that drives a turbine; in a gas combined cycle, a gas turbine generates first and its exhaust heat raises steam for a second turbine.",
        principleRefs: ["eia-epm"],
        sources: [
          {
            no: "1.1.1", title: "Coal power plants",
            stats: [
              { k: "Number of plants", v: "≈ 200, retiring steadily", refs: ["eia-faq-plants"] },
              { k: "Capacity", v: "≈ 170–180 GW", refs: ["eia-860"] },
              { k: "Share of generation", v: "≈ 15% (2024)", refs: ["eia-faq-gen"] },
              { k: "Fuel use", v: "Power-sector coal ≈ 400 million short tons/yr (2024)", refs: ["eia-coal"] },
              { k: "O&M staff", v: "≈ 200–400 per GW plant (estimate)", refs: ["est-note"] }
            ],
            plants: [
              { name: "Plant Scherer", loc: "Juliette, Georgia", lat: 33.06, lng: -83.81, cap: "≈ 3,500 MW", out: "—", fuel: "Low-sulfur Powder River Basin coal", staff: "—", own: "private", company: "Georgia Power (Southern Company) and co-owners", note: "One of the largest US coal plants", refs: ["eia-860"] },
              { name: "Plant Bowen", loc: "Euharlee, Georgia", lat: 34.13, lng: -84.92, cap: "≈ 3,200 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "Georgia Power (Southern Company)", note: "", refs: ["eia-860"] },
              { name: "Gibson Generating Station", loc: "Owensville, Indiana", lat: 38.37, lng: -87.77, cap: "≈ 3,300 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "Duke Energy and co-owners", note: "", refs: ["eia-860"] },
              { name: "Monroe Power Plant", loc: "Monroe, Michigan", lat: 41.89, lng: -83.35, cap: "≈ 3,100 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "DTE Energy", note: "Scheduled for phased retirement", refs: ["eia-860"] },
              { name: "Cumberland Fossil Plant", loc: "Cumberland City, Tennessee", lat: 36.39, lng: -87.65, cap: "≈ 2,500 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "Tennessee Valley Authority (federal)", note: "To be replaced by gas units", refs: ["tva", "eia-860"] }
            ]
          },
          {
            no: "1.1.2", title: "Oil power plants",
            stats: [
              { k: "Share", v: "< 1% (2024), mostly peaking and backup units", refs: ["eia-faq-gen"] },
              { k: "Where", v: "Hawaii, remote Alaska and Northeast peakers", refs: ["eia-860"] }
            ],
            plants: [],
            note: "Oil-fired generation is mostly small peaking units; representative plants to be added (filter EIA-860 by fuel type).",
            noteRefs: ["eia-860"]
          },
          {
            no: "1.1.3", title: "Natural gas power plants",
            stats: [
              { k: "Number of plants", v: "≈ 2,000", refs: ["eia-faq-plants"] },
              { k: "Capacity", v: "≈ 500 GW (largest source)", refs: ["eia-860"] },
              { k: "Share of generation", v: "≈ 43% (2024)", refs: ["eia-faq-gen"] },
              { k: "Fuel use", v: "Combined-cycle heat rate ≈ 6,500–7,500 Btu/kWh (estimate)", refs: ["eia-epm", "est-note"] }
            ],
            plants: [
              { name: "West County Energy Center", loc: "Loxahatchee, Florida", lat: 26.70, lng: -80.37, cap: "≈ 3,700 MW", out: "—", fuel: "Natural gas", staff: "—", own: "private", company: "Florida Power & Light (NextEra Energy)", note: "", refs: ["eia-860"] },
              { name: "Haynes Generating Station", loc: "Long Beach, California", lat: 33.76, lng: -118.10, cap: "≈ 1,600 MW", out: "—", fuel: "Natural gas", staff: "—", own: "public", company: "Los Angeles Dept. of Water & Power (municipal)", note: "", refs: ["eia-860"] }
            ]
          }
        ]
      },
      {
        no: "1.2", title: "Hydropower", kind: "Non-sustainable (this site's grouping; usually classed as renewable)",
        principle: "Water falling from a reservoir to the river below spins a turbine and generator; pumped storage pumps water uphill off-peak and releases it at peak.",
        principleRefs: ["usbr-gc"],
        sources: [{
          no: "1.2.1", title: "Dams and their power plants",
          stats: [
            { k: "Number of plants", v: "≈ 1,400+ conventional hydro plants", refs: ["eia-faq-plants"] },
            { k: "Capacity", v: "≈ 80 GW conventional (plus ≈ 23 GW pumped storage)", refs: ["eia-860"] },
            { k: "Share of generation", v: "≈ 6% (2024)", refs: ["eia-faq-gen"] }
          ],
          plants: [
            { name: "Grand Coulee Dam", loc: "Columbia River, Washington", lat: 47.957, lng: -118.98, cap: "≈ 6,800 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "US Bureau of Reclamation (federal)", note: "Largest US power station", refs: ["usbr-gc"] },
            { name: "Chief Joseph Dam", loc: "Bridgeport, Washington", lat: 47.995, lng: -119.633, cap: "≈ 2,600 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "US Army Corps of Engineers (federal)", note: "", refs: ["eia-860"] },
            { name: "Robert Moses Niagara", loc: "Niagara Falls, New York", lat: 43.14, lng: -79.04, cap: "≈ 2,500 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "New York Power Authority (state)", note: "", refs: ["eia-860"] },
            { name: "Hoover Dam", loc: "Nevada / Arizona", lat: 36.016, lng: -114.737, cap: "≈ 2,080 MW", out: "—", fuel: "—", staff: "—", own: "public", company: "US Bureau of Reclamation (federal)", note: "", refs: ["usbr-hoover"] },
            { name: "Bath County Pumped Storage", loc: "Virginia", lat: 38.21, lng: -79.80, cap: "≈ 3,000 MW (pumped storage)", out: "Net consumer", fuel: "—", staff: "—", own: "private", company: "Dominion Energy and co-owners", note: "One of the world's largest pumped-storage plants", refs: ["eia-860"] },
            { name: "Conowingo Dam", loc: "Maryland", lat: 39.66, lng: -76.17, cap: "≈ 570 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "Constellation Energy", note: "", refs: ["eia-860"] }
          ]
        }]
      },
      {
        no: "1.3", title: "Nuclear power", kind: "Non-sustainable (low-carbon)",
        principle: "Controlled fission of uranium-235 releases heat that raises steam to drive a turbine. All US operating reactors are light-water reactors (PWR / BWR).",
        principleRefs: ["wna"],
        sources: [{
          no: "1.3.1", title: "Nuclear fission plants",
          stats: [
            { k: "Plants / reactors", v: "54 plants, 94 reactors (after Vogtle Unit 4 in 2024)", refs: ["eia-faq-nuclear"] },
            { k: "Capacity", v: "≈ 97 GW (world's largest fleet)", refs: ["eia-faq-nuclear"] },
            { k: "Share of generation", v: "≈ 18% (2024), largest low-carbon source", refs: ["eia-faq-gen"] },
            { k: "Fuel use", v: "Owners buy ≈ 50 million lb U₃O₈-equivalent per year, mostly imported", refs: ["eia-uranium"] },
            { k: "O&M staff", v: "≈ 500–1,000 per plant (estimate)", refs: ["est-note"] }
          ],
          plants: [
            { name: "Palo Verde", loc: "Tonopah, Arizona", lat: 33.39, lng: -112.86, cap: "≈ 3,900 MW (3 units)", out: "≈ 30+ TWh/yr", fuel: "—", staff: "≈ 2,000 (estimate)", own: "private", company: "Operator: Arizona Public Service (Pinnacle West); co-owners include SRP (public)", note: "Largest US generator by output", refs: ["eia-860", "est-note"] },
            { name: "Vogtle", loc: "Waynesboro, Georgia", lat: 33.14, lng: -81.76, cap: "≈ 4,500 MW (4 units incl. 2 AP1000)", out: "—", fuel: "—", staff: "—", own: "private", company: "Georgia Power (Southern Company) majority; co-owners include MEAG and Oglethorpe (public / co-op)", note: "Largest US nuclear plant", refs: ["eia-860", "eia-faq-nuclear"] },
            { name: "Browns Ferry", loc: "Athens, Alabama", lat: 34.70, lng: -87.12, cap: "≈ 3,800 MW (3 units)", out: "—", fuel: "—", staff: "—", own: "public", company: "Tennessee Valley Authority (federal)", note: "", refs: ["tva", "eia-860"] },
            { name: "Diablo Canyon", loc: "Avila Beach, California", lat: 35.21, lng: -120.85, cap: "≈ 2,250 MW (2 units)", out: "—", fuel: "—", staff: "—", own: "private", company: "PG&E", note: "California's only operating nuclear plant; life extended", refs: ["eia-860"] }
          ]
        }]
      },
      {
        no: "1.4", title: "Wind farms", kind: "Sustainable",
        principle: "Wind turns the blades, which drive a generator.",
        principleRefs: ["uswtdb"],
        sources: [{
          no: "1.4", title: "Wind farms",
          stats: [
            { k: "Turbines", v: "≈ 75,000", refs: ["uswtdb"] },
            { k: "Capacity", v: "≈ 150 GW", refs: ["eia-860"] },
            { k: "Share of generation", v: "≈ 10% (2024)", refs: ["eia-faq-gen"] },
            { k: "Where", v: "Central wind belt: Texas, Iowa, Oklahoma, Kansas", refs: ["uswtdb"] }
          ],
          plants: [
            { name: "Alta Wind Energy Center", loc: "Tehachapi, California", lat: 35.02, lng: -118.32, cap: "≈ 1,550 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "Multiple investors (Terra-Gen and others)", note: "", refs: ["eia-860"] },
            { name: "Roscoe Wind Farm", loc: "Roscoe, Texas", lat: 32.45, lng: -100.54, cap: "≈ 780 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "RWE", note: "", refs: ["eia-860"] },
            { name: "Horse Hollow Wind Energy Center", loc: "Taylor / Nolan counties, Texas", lat: 32.20, lng: -100.00, cap: "≈ 735 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "NextEra Energy Resources", note: "", refs: ["eia-860"] }
          ],
          note: "Nearly all large US wind farms are privately owned; public power entities mostly buy through long-term PPAs."
        }]
      },
      {
        no: "1.5", title: "Solar power plants", kind: "Sustainable",
        principle: "Photovoltaic cells turn light directly into electricity; concentrating solar plants focus sunlight to make steam.",
        principleRefs: ["iea-pv"],
        sources: [{
          no: "1.5", title: "Solar power plants",
          stats: [
            { k: "Number of plants", v: "≈ 5,000+ utility-scale PV plants", refs: ["eia-faq-plants"] },
            { k: "Share of generation", v: "≈ 7% (2024, incl. small-scale)", refs: ["eia-faq-gen"] },
            { k: "Materials", v: "Modules largely imported; domestic manufacturing expanding under IRA incentives", refs: ["iea-pv"] }
          ],
          plants: [
            { name: "Edwards & Sanborn", loc: "Kern County, California", lat: 35.00, lng: -117.95, cap: "≈ 875 MW PV + ≈ 3.3 GWh storage", out: "—", fuel: "—", staff: "—", own: "private", company: "Terra-Gen and others", note: "", refs: ["eia-860"] },
            { name: "Gemini Solar", loc: "Clark County, Nevada", lat: 36.37, lng: -114.88, cap: "≈ 690 MW + storage", out: "—", fuel: "—", staff: "—", own: "private", company: "Primergy Solar", note: "", refs: ["eia-860"] },
            { name: "Solar Star", loc: "Rosamond, California", lat: 34.83, lng: -118.40, cap: "≈ 580 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "BHE Renewables (Berkshire Hathaway Energy)", note: "", refs: ["eia-860"] }
          ]
        }]
      },
      {
        no: "1.6", title: "Biomass power plants", kind: "Sustainable",
        principle: "Burning wood waste, crop residues or landfill gas to generate power.",
        principleRefs: ["eia-faq-gen"],
        sources: [{
          no: "1.6", title: "Biomass power plants",
          stats: [{ k: "Share", v: "≈ 1% (2024)", refs: ["eia-faq-gen"] }],
          plants: [
            { name: "Okeelanta Cogeneration", loc: "South Bay, Florida", lat: 26.60, lng: -80.70, cap: "≈ 140 MW", out: "—", fuel: "Sugarcane bagasse, wood waste", staff: "—", own: "private", company: "Florida Crystals", note: "One of North America's largest biomass plants", refs: ["eia-860"] }
          ]
        }]
      },
      {
        no: "1.7", title: "Geothermal power plants", kind: "Sustainable",
        principle: "Underground steam (dry steam / flash) or hot water (binary cycle) drives a turbine.",
        principleRefs: ["eia-faq-gen"],
        sources: [{
          no: "1.7", title: "Geothermal power plants",
          stats: [
            { k: "Capacity", v: "≈ 4 GW (world's largest)", refs: ["eia-860"] },
            { k: "Share", v: "≈ 0.4% (2024)", refs: ["eia-faq-gen"] }
          ],
          plants: [
            { name: "The Geysers", loc: "Sonoma / Lake counties, California", lat: 38.79, lng: -122.75, cap: "≈ 700+ MW (net)", out: "—", fuel: "—", staff: "—", own: "private", company: "Calpine (most units)", note: "World's largest geothermal complex", refs: ["eia-860"] },
            { name: "Salton Sea geothermal plants", loc: "Imperial County, California", lat: 33.17, lng: -115.62, cap: "≈ 340 MW", out: "—", fuel: "—", staff: "—", own: "private", company: "BHE Renewables (CalEnergy)", note: "Brine is a potential lithium source", refs: ["eia-860"] }
          ]
        }]
      },
      {
        no: "1.8", title: "Tidal power plants", kind: "Sustainable",
        principle: "Tidal-stream turbines or a barrage capturing the tidal range.",
        principleRefs: ["eia-faq-gen"],
        sources: [{
          no: "1.8", title: "Tidal power plants",
          stats: [{ k: "Status", v: "No commercial-scale plants; pilots only (e.g. East River tidal project, New York)", refs: ["eia-860"] }],
          plants: []
        }]
      },
      {
        no: "1.9", title: "Other power plants", kind: "Sustainable",
        principle: "E.g. concentrating solar power (CSP) towers and fuel cells.",
        principleRefs: ["eia-860"],
        sources: [{
          no: "1.9", title: "Other plants (CSP etc.)",
          stats: [{ k: "CSP capacity", v: "≈ 1.5–1.8 GW, in California, Arizona and Nevada", refs: ["eia-860"] }],
          plants: [
            { name: "Ivanpah Solar", loc: "Mojave Desert, California", lat: 35.56, lng: -115.47, cap: "≈ 390 MW (CSP tower)", out: "—", fuel: "—", staff: "—", own: "private", company: "NRG Energy / BrightSource and others", note: "", refs: ["eia-860"] }
          ]
        }]
      }
    ]
  },

  // =============== ② Chips ===============
  chips: {
    design: {
      intro: "The US dominates AI chip design: NVIDIA, AMD and Intel sell general-purpose GPUs / accelerators, while Google, AWS and other clouds build their own ASICs. Peak compute is dense BF16 (no sparsity) unless noted.",
      introRefs: ["nv-h100", "amd-mi300x"],
      gpus: [
        { vendor: "NVIDIA", model: "H100 SXM", year: "2022", process: "TSMC 4N", memory: "80 GB HBM3", bandwidth: "3.35 TB/s", compute: "≈ 989 TFLOPS", power: "700 W", note: "Hopper", refs: ["nv-h100"] },
        { vendor: "NVIDIA", model: "B200 (per GPU in DGX B200)", year: "2024", process: "TSMC 4NP", memory: "≈ 180 GB HBM3e", bandwidth: "≈ 8 TB/s", compute: "≈ 2.25 PFLOPS", power: "≈ 1,000 W", note: "Blackwell; derived from DGX system specs", refs: ["nv-b200"] },
        { vendor: "AMD", model: "Instinct MI300X", year: "2023", process: "TSMC 5/6nm chiplets", memory: "192 GB HBM3", bandwidth: "5.3 TB/s", compute: "≈ 1,307 TFLOPS", power: "750 W", note: "", refs: ["amd-mi300x"] },
        { vendor: "AMD", model: "Instinct MI355X", year: "2025", process: "TSMC N3", memory: "288 GB HBM3E", bandwidth: "8 TB/s", compute: "≈ 2.5 PFLOPS (FP16)", power: "≈ 1,400 W", note: "", refs: ["amd-mi355x"] },
        { vendor: "Intel", model: "Gaudi 3", year: "2024", process: "TSMC 5nm", memory: "128 GB HBM2e", bandwidth: "3.7 TB/s", compute: "≈ 1,835 TFLOPS", power: "≈ 900 W", note: "", refs: ["intel-gaudi"] },
        { vendor: "Google", model: "TPU v7 Ironwood", year: "2025", process: "—", memory: "192 GB HBM", bandwidth: "≈ 7.4 TB/s", compute: "≈ 4,614 TFLOPS (FP8)", power: "—", note: "Google Cloud only", refs: ["google-ironwood"] },
        { vendor: "AWS", model: "Trainium2", year: "2024", process: "—", memory: "96 GB HBM", bandwidth: "≈ 2.9 TB/s", compute: "≈ 1.3 PFLOPS (FP8)", power: "—", note: "AWS only", refs: ["aws-trainium"] }
      ],
      cpus: [
        { vendor: "Intel", model: "Xeon 6900P (Granite Rapids)", arch: "x86-64", cores: "128 P-cores", process: "Intel 3", note: "", refs: ["intel-xeon"] },
        { vendor: "AMD", model: "EPYC 9005 (Turin)", arch: "x86-64 (Zen 5 / Zen 5c)", cores: "192", process: "TSMC 3/4nm", note: "", refs: ["amd-epyc"] },
        { vendor: "NVIDIA", model: "Grace", arch: "Arm Neoverse V2", cores: "72", process: "TSMC 4N", note: "Paired with GPUs in GH200 / GB200", refs: ["nv-grace"] },
        { vendor: "AWS", model: "Graviton4", arch: "Arm Neoverse V2", cores: "96", process: "—", note: "AWS only", refs: ["aws-graviton"] }
      ]
    },
    produce: {
      overview: [
        { k: "Share of global fab capacity", v: "≈ 10% (2022), projected ≈ 14% by 2032", refs: ["sia-bcg"] },
        { k: "Industrial policy", v: "CHIPS and Science Act (2022): ≈ $52.7B, incl. ≈ $39B for manufacturing incentives", refs: ["chips-act"] }
      ],
      materials: [
        { name: "High-purity quartz", use: "Crucibles for growing silicon crystals", where: "Spruce Pine, North Carolina is the world's main source", refs: ["usgs-mcs"] },
        { name: "Semiconductor-grade polysilicon", use: "Wafer feedstock", where: "Hemlock Semiconductor (Michigan) and others", refs: ["usgs-mcs"] },
        { name: "Gallium / germanium", use: "Compound semiconductors", where: "Heavily import-dependent (China is the main source)", refs: ["usgs-mcs"] }
      ],
      fabs: [
        { name: "Intel", own: "Private (listed)", location: "Oregon, Arizona, New Mexico; Ohio under construction", node: "Intel 3 / 18A", refs: ["intel-xeon", "chips-act"] },
        { name: "TSMC Arizona", own: "Private (TSMC subsidiary)", location: "Phoenix, Arizona", node: "N4 in volume; more advanced nodes planned", refs: ["chips-act"] },
        { name: "Samsung Austin / Taylor", own: "Private (Samsung subsidiary)", location: "Texas", node: "—", refs: ["chips-act"] },
        { name: "Micron", own: "Private (listed)", location: "Idaho; New York under construction", node: "DRAM / HBM", refs: ["chips-act"] },
        { name: "GlobalFoundries", own: "Private (listed)", location: "Malta, New York and others", node: "Mature nodes (12nm+)", refs: ["chips-act"] }
      ]
    },
    trade: {
      overview: [
        { k: "Trade statistics", v: "HS 8541 (discretes) / 8542 (ICs); values to be added", refs: ["census"] },
        { k: "AI chip export controls", v: "Rules in Oct 2022, Oct 2023 and Dec 2024 restrict advanced GPUs, HBM and fab tools to China", refs: ["bis"] }
      ],
      types: [
        { type: "Imports: advanced logic", desc: "Chips designed by NVIDIA, AMD, Apple and others are mostly made by TSMC in Taiwan and imported", refs: ["sia-bcg"] },
        { type: "Imports: assembled & tested chips", desc: "Largely from back-end hubs in Malaysia, Vietnam and elsewhere in Southeast Asia", refs: ["sia-bcg"] },
        { type: "Exports: equipment & design", desc: "Fab equipment (Applied Materials, Lam, KLA) and EDA software are major exports", refs: ["sia-bcg", "bis"] }
      ]
    }
  },

  // =============== ③ Infrastructure ===============
  infrastructure: {
    datacenters: {
      intro: "The US has the most data centers and the largest AI training clusters in the world; Northern Virginia is the biggest data-center market anywhere.",
      introRefs: ["dcmap", "iea-ai"],
      overview: [
        { k: "Data centers", v: "≈ 5,000+ (most in the world)", refs: ["dcmap"] },
        { k: "Share of global data-center power", v: "≈ 45% (2024, IEA)", refs: ["iea-ai"] },
        { k: "Data-center electricity (2023)", v: "≈ 176 TWh", refs: ["lbnl-dc"] }
      ],
      companies: [
        { company: "Amazon (AWS)", valuation: "≥ $1 trillion", count: "≈ 38 regions, 120+ availability zones worldwide", highlight: "Project Rainier (Trainium2 cluster)", refs: ["aws-infra"] },
        { company: "Microsoft (Azure)", valuation: "≥ $1 trillion", count: "60+ regions, 300+ data centers worldwide", highlight: "Fairwater AI datacenter (Wisconsin)", refs: ["azure-infra"] },
        { company: "Alphabet (Google Cloud)", valuation: "≥ $1 trillion", count: "40+ regions worldwide", highlight: "TPU clusters", refs: ["gcp-infra"] },
        { company: "Meta", valuation: "≥ $1 trillion", count: "20+ owned data-center campuses", highlight: "Prometheus (Ohio), Hyperion (Louisiana)", refs: ["meta-dc"] },
        { company: "Oracle (OCI)", valuation: "≥ $100 billion", count: "50+ public cloud regions", highlight: "Stargate partner (Abilene, Texas)", refs: ["oracle-infra", "stargate"] },
        { company: "OpenAI (Stargate JV)", valuation: "≥ $100 billion (private)", count: "Several campuses under construction", highlight: "Stargate phase 1: Abilene, Texas", refs: ["stargate"] },
        { company: "xAI", valuation: "≥ $100 billion tier (private)", count: "—", highlight: "Colossus (Memphis, Tennessee)", refs: ["xai-colossus"] },
        { company: "CoreWeave", valuation: "≥ $10 billion", count: "30+ data centers", highlight: "GPU cloud", refs: ["coreweave"] },
        { company: "Equinix", valuation: "≥ $50 billion", count: "260+ IBX data centers worldwide", highlight: "Colocation", refs: ["equinix"] }
      ]
    },
    grid: {
      intro: "The contiguous US grid has three interconnections — Eastern, Western and Texas (ERCOT) — run by about 3,000 utilities and several regional transmission organizations (ISOs/RTOs). There is no single national grid company.",
      introRefs: ["eia-grid"],
      overview: [
        { k: "First grid", v: "1882, Edison's Pearl Street Station, New York", refs: ["eia-grid"] },
        { k: "Structure", v: "3 interconnections; 7 ISOs/RTOs", refs: ["eia-grid", "nerc"] },
        { k: "High-voltage lines", v: "≈ 160,000+ miles (≈ 260,000 km)", refs: ["eia-grid"] },
        { k: "Lower-48 peak demand", v: "≈ 750+ GW (summer records 2024–2025)", refs: ["eia-tie"] },
        { k: "T&D and storage jobs", v: "≈ 1.4 million", refs: ["useer"] }
      ],
      operators: [
        { name: "PJM Interconnection", founded: "Origins in 1927", staff: "—", scope: "13 eastern states + DC (incl. N. Virginia data-center cluster)", refs: ["nerc"] },
        { name: "ERCOT", founded: "1970", staff: "—", scope: "Most of Texas; a separate interconnection", refs: ["nerc"] },
        { name: "Tennessee Valley Authority", founded: "1933 (federal)", staff: "—", scope: "Tennessee and parts of 6 neighboring states", refs: ["tva"] },
        { name: "NERC", founded: "1968", staff: "—", scope: "Reliability standards for the US, Canada and part of Mexico", refs: ["nerc"] }
      ]
    }
  },

  // =============== ④ Models ===============
  models: {
    intro: "Most US frontier models are closed (parameter counts undisclosed), while Meta and OpenAI also release open-weight models. Models change fast; this list needs regular updates.",
    introRefs: ["ai-index"],
    list: [
      { name: "GPT-5", org: "OpenAI", date: "2025-08", arch: "Undisclosed (with reasoning mode)", params: "Undisclosed", open: "No", ctx: "—", bench: "SWE-bench Verified 74.9%", refs: ["gpt5"] },
      { name: "gpt-oss-120b", org: "OpenAI", date: "2025-08", arch: "MoE", params: "117B / 5.1B", open: "Yes (Apache 2.0)", ctx: "128K", bench: "—", refs: ["gpt-oss"] },
      { name: "Claude Sonnet 4.5", org: "Anthropic", date: "2025-09", arch: "Undisclosed", params: "Undisclosed", open: "No", ctx: "200K", bench: "SWE-bench Verified 77.2%", refs: ["claude-s45"] },
      { name: "Claude 5 family (Opus / Sonnet / Haiku)", org: "Anthropic", date: "See official docs", arch: "Undisclosed", params: "Undisclosed", open: "No", ctx: "—", bench: "—", refs: ["claude-models"] },
      { name: "Gemini 2.5 Pro / Gemini 3", org: "Google DeepMind", date: "2025", arch: "Undisclosed (natively multimodal)", params: "Undisclosed", open: "No", ctx: "≈ 1M", bench: "—", refs: ["gemini"] },
      { name: "Llama 4 Maverick", org: "Meta", date: "2025-04", arch: "MoE, natively multimodal", params: "400B / 17B", open: "Open weights (Llama license)", ctx: "1M", bench: "—", refs: ["llama4"] },
      { name: "Llama 4 Scout", org: "Meta", date: "2025-04", arch: "MoE", params: "109B / 17B", open: "Open weights (Llama license)", ctx: "10M", bench: "—", refs: ["llama4"] },
      { name: "Grok 4", org: "xAI", date: "2025-07", arch: "Undisclosed", params: "Undisclosed", open: "No", ctx: "—", bench: "—", refs: ["xai-news"] }
    ],
    leaderboards: [
      { k: "Overall ranking (human preference)", v: "LMArena", refs: ["lmarena"] },
      { k: "Intelligence index / speed / price", v: "Artificial Analysis", refs: ["aa"] }
    ]
  },

  // =============== ⑤ Applications ===============
  applications: [
    { topic: "AI for Science", desc: "Protein structure, weather forecasting, materials and mathematics", examples: "AlphaFold (2024 Nobel Prize in Chemistry); GraphCast weather model", refs: ["nobel-2024", "graphcast"] },
    { topic: "Autonomous driving / robotaxis", desc: "Driverless ride-hailing in cities", examples: "Waymo (Phoenix, San Francisco, Los Angeles and more)", refs: ["waymo"] },
    { topic: "Policy", desc: "Speeding up AI infrastructure build-out and exports", examples: "America's AI Action Plan (2025)", refs: ["ai-gov"] },
    { topic: "Coding & agents", desc: "Coding assistants, autonomous agents", examples: "To be added", refs: ["ai-index"] },
    { topic: "Healthcare", desc: "Imaging, clinical documentation, drug discovery", examples: "To be added", refs: ["ai-index"] },
    { topic: "Embodied AI / robotics", desc: "Humanoids, warehouse robots", examples: "To be added", refs: ["ai-index"] },
    { topic: "Finance / education / legal / content", desc: "Research, personalized tutoring, contract review, generative media", examples: "To be added", refs: ["ai-index"] }
  ]
};
