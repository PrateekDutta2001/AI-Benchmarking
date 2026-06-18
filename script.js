/* ─── MODEL DATA (2026 Q2) ─── */
const MODELS = [
  { id:"gemini-3.1-pro",         rank:1,  name:"Gemini 3.1 Pro",              org:"Google",         type:"Frontier",    gpqa:94.6, swe:78.5, mmlu:93.0, aime:91.0, ctx:"2M",     cost:"$3.50",  costNum:3.50,  params:"~2T MoE",     release:"Mar 2026", modality:"Text, Vision, Audio, Video", strengths:"GPQA leader, multimodal, 2M context", deploy:"API / Vertex AI", selfHost:false, tags:["rag","stem","multimodal","agents"] },
  { id:"claude-opus-4.6",        rank:2,  name:"Claude Opus 4.6",             org:"Anthropic",      type:"Frontier",    gpqa:91.3, swe:80.8, mmlu:92.1, aime:88.0, ctx:"1M",     cost:"$5.00",  costNum:5.00,  params:"Proprietary", release:"Feb 2026", modality:"Text, Vision", strengths:"#1 coding Elo, prose, reasoning, agents", deploy:"API / AWS Bedrock", selfHost:false, tags:["coding","rag","legal","agents","writing"] },
  { id:"claude-sonnet-4.6",      rank:3,  name:"Claude Sonnet 4.6",           org:"Anthropic",      type:"Frontier",    gpqa:85.0, swe:79.6, mmlu:91.0, aime:85.0, ctx:"1M",     cost:"$3.00",  costNum:3.00,  params:"Proprietary", release:"Feb 2026", modality:"Text, Vision", strengths:"Best Anthropic cost/quality balance", deploy:"API / AWS Bedrock", selfHost:false, tags:["coding","rag","support","balanced"] },
  { id:"claude-haiku-4.6",       rank:4,  name:"Claude Haiku 4.6",            org:"Anthropic",      type:"Frontier",    gpqa:78.0, swe:72.5, mmlu:88.5, aime:80.0, ctx:"200K",   cost:"$0.80",  costNum:0.80,  params:"Proprietary", release:"Mar 2026", modality:"Text, Vision", strengths:"Fast Anthropic tier, low latency", deploy:"API / AWS Bedrock", selfHost:false, tags:["support","latency","cost","routing"] },
  { id:"claude-3.7-sonnet",      rank:5,  name:"Claude 3.7 Sonnet",           org:"Anthropic",      type:"Frontier",    gpqa:83.0, swe:76.0, mmlu:90.0, aime:83.0, ctx:"200K",   cost:"$2.00",  costNum:2.00,  params:"Proprietary", release:"2025",     modality:"Text, Vision", strengths:"Extended thinking, proven enterprise track record", deploy:"API / AWS Bedrock", selfHost:false, tags:["coding","rag","balanced","reasoning"] },
  { id:"gpt-5.4",                rank:6,  name:"GPT-5.4",                     org:"OpenAI",         type:"Frontier",    gpqa:88.0, swe:76.2, mmlu:92.5, aime:89.0, ctx:"1M",     cost:"$5.00",  costNum:5.00,  params:"Proprietary", release:"Jan 2026", modality:"Text, Vision, Audio", strengths:"OSWorld 75%, computer use, agents", deploy:"API / Azure OpenAI", selfHost:false, tags:["agents","multimodal","automation","stem"] },
  { id:"mistral-large-3",        rank:7,  name:"Mistral Large 3",             org:"Mistral AI",     type:"Frontier",    gpqa:87.5, swe:74.5, mmlu:91.2, aime:86.0, ctx:"128K",   cost:"$4.00",  costNum:4.00,  params:"123B",        release:"Apr 2026", modality:"Text, Vision", strengths:"EU sovereignty, fine-tuning, RAG", deploy:"API / Self-host", selfHost:true, tags:["rag","multilingual","sovereignty","legal"] },
  { id:"grok-4",                 rank:8,  name:"Grok 4",                      org:"xAI",            type:"Frontier",    gpqa:82.0, swe:72.0, mmlu:90.5, aime:87.0, ctx:"256K",   cost:"$3.00",  costNum:3.00,  params:"Proprietary", release:"Mar 2026", modality:"Text, Vision", strengths:"HLE leader, real-time X data", deploy:"API / X Premium", selfHost:false, tags:["research","stem","realtime"] },
  { id:"gpt-5.4-mini",           rank:9,  name:"GPT-5.4 mini",                org:"OpenAI",         type:"Frontier",    gpqa:82.5, swe:71.0, mmlu:89.5, aime:84.0, ctx:"256K",   cost:"$0.60",  costNum:0.60,  params:"Proprietary", release:"Jan 2026", modality:"Text, Vision", strengths:"95% quality at 40% cost", deploy:"API / Azure OpenAI", selfHost:false, tags:["routing","cost","support","balanced"] },
  { id:"gemini-3.1-flash",       rank:10, name:"Gemini 3.1 Flash",            org:"Google",         type:"Frontier",    gpqa:80.0, swe:68.0, mmlu:88.0, aime:82.0, ctx:"1M",     cost:"$0.35",  costNum:0.35,  params:"~100B",       release:"Mar 2026", modality:"Text, Vision", strengths:"Low-latency, high throughput", deploy:"API / Vertex AI", selfHost:false, tags:["latency","cost","routing","support"] },
  { id:"command-r-plus-2",       rank:11, name:"Command R+ 2",                org:"Cohere",         type:"Frontier",    gpqa:78.5, swe:70.5, mmlu:88.5, aime:80.0, ctx:"128K",   cost:"$2.50",  costNum:2.50,  params:"104B",        release:"May 2026", modality:"Text", strengths:"Enterprise RAG, multilingual", deploy:"API / Private deploy", selfHost:true, tags:["rag","multilingual","enterprise"] },
  { id:"grok-4-fast",            rank:12, name:"Grok 4 Fast",                 org:"xAI",            type:"Frontier",    gpqa:76.0, swe:65.0, mmlu:86.0, aime:78.0, ctx:"128K",   cost:"$0.50",  costNum:0.50,  params:"Proprietary", release:"Mar 2026", modality:"Text", strengths:"Speed-optimized inference", deploy:"API", selfHost:false, tags:["latency","cost","routing"] },
  { id:"nemotron-4-340b",        rank:13, name:"Nemotron-4 340B Instruct",    org:"Nvidia",         type:"Nvidia",      gpqa:88.0, swe:75.0, mmlu:91.5, aime:90.0, ctx:"128K",   cost:"$0.25",  costNum:0.25,  params:"340B",        release:"Apr 2026", modality:"Text, Code", strengths:"Nvidia flagship open model, NeMo tuned", deploy:"Self-host / NIM / API", selfHost:true, tags:["coding","rag","sovereignty","stem","nvidia"] },
  { id:"nemotron-70b",           rank:14, name:"Llama-3.1-Nemotron-70B",      org:"Nvidia",         type:"Nvidia",      gpqa:82.0, swe:73.0, mmlu:89.0, aime:85.0, ctx:"128K",   cost:"$0.18",  costNum:0.18,  params:"70B",         release:"Feb 2026", modality:"Text, Code", strengths:"Best Nvidia cost/performance on single GPU", deploy:"Self-host / NIM / vLLM", selfHost:true, tags:["coding","balanced","sovereignty","nvidia"] },
  { id:"deepseek-v4",            rank:15, name:"DeepSeek V4",                 org:"DeepSeek",       type:"Open-Source", gpqa:78.0, swe:83.7, mmlu:92.8, aime:99.4, ctx:"128K",   cost:"$0.07",  costNum:0.07,  params:"671B MoE",    release:"Apr 2026", modality:"Text, Code", strengths:"#1 SWE-bench, math reasoning", deploy:"API / Self-host", selfHost:true, tags:["coding","stem","cost","math"] },
  { id:"kimi-k2.6",              rank:16, name:"Kimi K2.6",                   org:"Moonshot AI",    type:"Open-Source", gpqa:90.5, swe:74.0, mmlu:89.0, aime:82.0, ctx:"128K",   cost:"$0.95",  costNum:0.95,  params:"1T MoE",      release:"Mar 2026", modality:"Text, Vision", strengths:"GPQA open-source leader", deploy:"API / Self-host", selfHost:true, tags:["stem","rag","reasoning"] },
  { id:"perplexity-sonar-huge",  rank:17, name:"Perplexity Sonar Huge",       org:"Perplexity AI",  type:"Perplexity",  gpqa:90.0, swe:null,  mmlu:94.0, aime:82.0, ctx:"Live",   cost:"$0.08†", costNum:0.08,  params:"Multi-model", release:"2026",     modality:"Text + Web", strengths:"Real-time citations, research", deploy:"API / Pro $20/mo", selfHost:false, tags:["research","realtime","factcheck"] },
  { id:"perplexity-deep-res",    rank:18, name:"Perplexity Deep Res.",        org:"Perplexity AI",  type:"Perplexity",  gpqa:88.0, swe:null,  mmlu:92.0, aime:79.0, ctx:"Live",   cost:"$0.05†", costNum:0.05,  params:"Multi-model", release:"2026",     modality:"Text + Web", strengths:"Analyst-grade deep research", deploy:"API / Enterprise", selfHost:false, tags:["research","enterprise","factcheck"] },
  { id:"qwen-3.6-235b",          rank:19, name:"Qwen 3.6-235B",               org:"Alibaba",        type:"Open-Source", gpqa:76.0, swe:72.0, mmlu:88.4, aime:85.0, ctx:"262K",   cost:"$0.20",  costNum:0.20,  params:"235B MoE",    release:"Feb 2026", modality:"Text, Vision", strengths:"200+ languages, CJKV leader", deploy:"API / Self-host", selfHost:true, tags:["multilingual","cost","global"] },
  { id:"nemotron-nano-12b",      rank:20, name:"Nemotron Nano 12B v2",        org:"Nvidia",         type:"Nvidia",      gpqa:72.0, swe:68.0, mmlu:86.0, aime:78.0, ctx:"128K",   cost:"$0.05",  costNum:0.05,  params:"12B",         release:"May 2026", modality:"Text, Code", strengths:"Edge and Jetson deployment, NIM optimized", deploy:"Self-host / NIM / Edge", selfHost:true, tags:["latency","cost","edge","nvidia"] },
  { id:"nemotron-4-15b",         rank:21, name:"Nemotron-4 15B Instruct",     org:"Nvidia",         type:"Nvidia",      gpqa:70.0, swe:66.0, mmlu:85.5, aime:76.0, ctx:"128K",   cost:"$0.04",  costNum:0.04,  params:"15B",         release:"Apr 2026", modality:"Text, Code", strengths:"Efficient Nvidia model for single-GPU inference", deploy:"Self-host / NIM", selfHost:true, tags:["cost","latency","edge","nvidia"] },
  { id:"llama-4-maverick",       rank:22, name:"Llama 4 Maverick",            org:"Meta",           type:"Open-Source", gpqa:69.0, swe:65.0, mmlu:86.0, aime:78.0, ctx:"1M+",    cost:"$0.19",  costNum:0.19,  params:"400B MoE",    release:"Jan 2026", modality:"Text, Vision", strengths:"1M+ context, ecosystem", deploy:"Self-host / API", selfHost:true, tags:["rag","sovereignty","longcontext"] },
  { id:"glm-5",                  rank:23, name:"GLM-5",                       org:"Zhipu / THU",    type:"Open-Source", gpqa:72.0, swe:70.0, mmlu:87.0, aime:80.0, ctx:"128K",   cost:"$0.15",  costNum:0.15,  params:"355B",        release:"Mar 2026", modality:"Text", strengths:"Non-NVIDIA training (Ascend)", deploy:"Self-host / API", selfHost:true, tags:["sovereignty","multilingual"] },
  { id:"deepseek-v4-lite",       rank:24, name:"DeepSeek V4-Lite",            org:"DeepSeek",       type:"Open-Source", gpqa:72.0, swe:78.0, mmlu:90.0, aime:95.0, ctx:"128K",   cost:"$0.04",  costNum:0.04,  params:"37B",         release:"Apr 2026", modality:"Text, Code", strengths:"Efficient coding at low cost", deploy:"API / Self-host", selfHost:true, tags:["coding","cost","math"] },
  { id:"cosmos-predict-1",       rank:25, name:"NVIDIA Cosmos-1.0 Predict", org:"Nvidia",         type:"Nvidia",      gpqa:65.0, swe:55.0, mmlu:78.0, aime:70.0, ctx:"256K",   cost:"Self-host", costNum:0.01, params:"World Model", release:"Mar 2026", modality:"Video, Physics, Robotics", strengths:"Physical AI, simulation, autonomous systems", deploy:"Self-host / Omniverse", selfHost:true, tags:["multimodal","agents","nvidia","robotics"] },
  { id:"llama-4-scout",          rank:26, name:"Llama 4 Scout",               org:"Meta",           type:"Open-Source", gpqa:62.0, swe:58.0, mmlu:82.0, aime:72.0, ctx:"128K",   cost:"$0.08",  costNum:0.08,  params:"17B",         release:"Jan 2026", modality:"Text, Vision", strengths:"Edge deployment, mobile", deploy:"Self-host / ONNX", selfHost:true, tags:["edge","latency","cost"] },
  { id:"qwen-3.6-72b",           rank:27, name:"Qwen 3.6-72B",                org:"Alibaba",        type:"Open-Source", gpqa:70.0, swe:68.0, mmlu:86.5, aime:80.0, ctx:"128K",   cost:"$0.12",  costNum:0.12,  params:"72B",         release:"Feb 2026", modality:"Text", strengths:"Dense model, predictable latency", deploy:"Self-host / API", selfHost:true, tags:["balanced","multilingual","sovereignty"] },
  { id:"phi-5",                  rank:28, name:"Phi-5",                       org:"Microsoft",      type:"Open-Source", gpqa:68.0, swe:64.0, mmlu:87.5, aime:76.0, ctx:"128K",   cost:"$0.06",  costNum:0.06,  params:"14B",         release:"May 2026", modality:"Text, Code", strengths:"Edge leader, small footprint", deploy:"Self-host / Azure", selfHost:true, tags:["edge","cost","coding"] },
  { id:"minimax-m2.7",           rank:29, name:"MiniMax M2.7",                org:"MiniMax",        type:"Open-Source", gpqa:68.0, swe:66.0, mmlu:85.0, aime:75.0, ctx:"1M",     cost:"$0.30",  costNum:0.30,  params:"456B MoE",    release:"Apr 2026", modality:"Text, Audio", strengths:"Long context, voice", deploy:"API / Self-host", selfHost:true, tags:["longcontext","multimodal"] },
  { id:"mistral-small-3.2",      rank:30, name:"Mistral Small 3.2",           org:"Mistral AI",     type:"Open-Source", gpqa:65.0, swe:62.0, mmlu:84.0, aime:72.0, ctx:"128K",   cost:"$0.10",  costNum:0.10,  params:"24B",         release:"Apr 2026", modality:"Text", strengths:"EU-compliant, efficient", deploy:"Self-host / API", selfHost:true, tags:["sovereignty","cost","eu"] },
  { id:"gemma-4",                rank:31, name:"Gemma 4",                     org:"Google",         type:"Open-Source", gpqa:64.0, swe:60.0, mmlu:83.0, aime:70.0, ctx:"128K",   cost:"$0.10",  costNum:0.10,  params:"27B",         release:"Mar 2026", modality:"Text, Vision", strengths:"Responsible AI, safety-tuned", deploy:"Self-host / Vertex", selfHost:true, tags:["healthcare","safety","edge"] },
  { id:"mixtral-8x22b-v2",       rank:32, name:"Mixtral 8x22B v2",          org:"Mistral AI",     type:"Open-Source", gpqa:66.0, swe:61.0, mmlu:84.5, aime:74.0, ctx:"64K",    cost:"$0.14",  costNum:0.14,  params:"141B MoE",    release:"Feb 2026", modality:"Text", strengths:"Proven MoE architecture", deploy:"Self-host / vLLM", selfHost:true, tags:["cost","balanced"] },
  { id:"perplexity-sonar",       rank:33, name:"Perplexity Sonar",            org:"Perplexity AI",  type:"Perplexity",  gpqa:82.0, swe:null,  mmlu:88.0, aime:68.0, ctx:"Live",   cost:"$0.02†", costNum:0.02,  params:"Multi-model", release:"2026",     modality:"Text + Web", strengths:"Balanced search + reasoning", deploy:"API", selfHost:false, tags:["research","cost","factcheck"] },
  { id:"perplexity-sonar-small", rank:34, name:"Perplexity Sonar Small",      org:"Perplexity AI",  type:"Perplexity",  gpqa:70.0, swe:null,  mmlu:80.0, aime:55.0, ctx:"Live",   cost:"$0.005†",costNum:0.005, params:"Multi-model", release:"2026",     modality:"Text + Web", strengths:"Ultra-low cost fact lookup", deploy:"API", selfHost:false, tags:["cost","factcheck","routing"] },
  { id:"perplexity-enterprise",  rank:35, name:"Perplexity Enterprise",       org:"Perplexity AI",  type:"Perplexity",  gpqa:85.0, swe:null,  mmlu:90.0, aime:75.0, ctx:"Live",   cost:"Custom", costNum:2.00,  params:"Multi-model", release:"2026",     modality:"Text + Web + Docs", strengths:"SOC2, SSO, internal KB", deploy:"Enterprise SaaS", selfHost:false, tags:["enterprise","research","rag"] },
  { id:"claude-opus-4.6-thinking", rank:36, name:"Claude Opus 4.6 Extended", org:"Anthropic",    type:"Frontier",    gpqa:93.0, swe:81.5, mmlu:92.5, aime:90.0, ctx:"1M",     cost:"$8.00",  costNum:8.00,  params:"Proprietary", release:"Feb 2026", modality:"Text, Vision", strengths:"Extended thinking mode, deepest reasoning", deploy:"API / AWS Bedrock", selfHost:false, tags:["stem","legal","reasoning","agents"] },
];

const TYPE_FILL_CLASS = { "Frontier": "fill-frontier", "Open-Source": "fill-open", "Perplexity": "fill-perplexity", "Nvidia": "fill-nvidia" };
const TYPE_BADGE_CLASS = { "Frontier": "type-frontier", "Open-Source": "type-open", "Perplexity": "type-perplexity", "Nvidia": "type-nvidia" };

const headerCount = document.getElementById('headerModelCount');
if (headerCount) headerCount.textContent = MODELS.length;
document.getElementById('benchTotalCount').textContent = MODELS.length;

let benchCurrentType = '';
let benchFiltered = [...MODELS];
let modelCatalogFiltered = [...MODELS];
let modelCatalogType = '';

/* ─── BENCHMARK TABLE ─── */
function filterBench() {
  const search = document.getElementById('benchSearchBox').value.toLowerCase();
  const type   = document.getElementById('benchTypeFilter').value;
  benchCurrentType = type;
  syncBenchPills(type);
  benchFiltered = MODELS.filter(m => {
    const matchSearch = !search || m.name.toLowerCase().includes(search) || m.org.toLowerCase().includes(search);
    const matchType   = !type  || m.type === type;
    return matchSearch && matchType;
  });
  renderBenchTable();
}

function setBenchPill(type) {
  benchCurrentType = type;
  document.getElementById('benchTypeFilter').value = type;
  syncBenchPills(type);
  filterBench();
}

function syncBenchPills(type) {
  document.getElementById('bench-pill-all').classList.toggle('inactive', !!type);
  document.querySelectorAll('#tab-benchmarks .pill-cat').forEach(p => {
    p.classList.toggle('active-pill', p.dataset.cat === type);
  });
}

function scoreCell(val, type) {
  if (val === null) return '<span class="score-na">N/A*</span>';
  const fillCls = TYPE_FILL_CLASS[type] || 'fill-frontier';
  const pct = Math.round((val / 100) * 100);
  return `<div class="score-bar-wrap">
    <div class="score-bar"><div class="score-bar-fill ${fillCls}" style="width:${pct}%"></div></div>
    <span class="score-num">${val}%</span>
  </div>`;
}

function rankBadge(r) {
  const cls = r<=3 ? `rank-${r}` : 'rank-n';
  return `<div class="rank-badge ${cls}">${r}</div>`;
}

function renderBenchTable() {
  const tbody = document.getElementById('benchTableBody');
  const empty = document.getElementById('benchEmptyState');
  document.getElementById('benchFilteredCount').textContent = benchFiltered.length;
  if (benchFiltered.length === 0) { tbody.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display = 'none';
  tbody.innerHTML = benchFiltered.map((m, i) => {
    const bc = TYPE_BADGE_CLASS[m.type] || 'type-frontier';
    return `<tr style="animation-delay:${Math.min(i*20, 300)}ms">
      <td>${rankBadge(i+1)}</td>
      <td><div class="model-name">${m.name}</div><div class="model-org">${m.org}</div></td>
      <td><span class="type-badge ${bc}">${m.type}</span></td>
      <td>${scoreCell(m.gpqa, m.type)}</td>
      <td>${scoreCell(m.swe, m.type)}</td>
      <td>${scoreCell(m.mmlu, m.type)}</td>
      <td>${scoreCell(m.aime, m.type)}</td>
      <td class="ctx-cell">${m.ctx}</td>
      <td class="cost-cell">${m.cost}/M</td>
    </tr>`;
  }).join('');
}

function exportBenchCSV() {
  const bom = '\uFEFF';
  const header = "Rank,Model,Organisation,Type,GPQA Diamond %,SWE-bench %,MMLU-Pro %,AIME 2026 %,Context,Cost per M,Parameters,Release\n";
  const rows = benchFiltered.map((m,i) =>
    `${i+1},"${m.name}","${m.org}","${m.type}",${m.gpqa},${m.swe === null ? 'N/A' : m.swe},${m.mmlu},${m.aime},"${m.ctx}","${m.cost}","${m.params}","${m.release}"`
  ).join('\n');
  const blob = new Blob([bom + header + rows], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = 'ai_benchmark_2026.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 0);
  showToast(`Exported ${benchFiltered.length} models as CSV`);
}

renderBenchTable();

/* ─── MODEL CATALOG ─── */
function filterModelCatalog() {
  const search = document.getElementById('modelSearchBox').value.toLowerCase();
  const type = document.getElementById('modelTypeFilter').value;
  modelCatalogType = type;
  syncModelPills(type);
  modelCatalogFiltered = MODELS.filter(m => {
    const haystack = `${m.name} ${m.org} ${m.strengths} ${m.modality} ${m.deploy}`.toLowerCase();
    const matchSearch = !search || haystack.includes(search);
    const matchType = !type || m.type === type;
    return matchSearch && matchType;
  });
  renderModelCatalog();
}

function setModelPill(type) {
  modelCatalogType = type;
  document.getElementById('modelTypeFilter').value = type;
  syncModelPills(type);
  filterModelCatalog();
}

function syncModelPills(type) {
  const allPill = document.getElementById('model-pill-all');
  if (allPill) allPill.classList.toggle('inactive', !!type);
  document.querySelectorAll('#tab-models .pill-cat').forEach(p => {
    p.classList.toggle('active-pill', p.dataset.cat === type);
  });
}

function renderModelCatalog() {
  const container = document.getElementById('modelCatalog');
  const empty = document.getElementById('modelEmptyState');
  const countEl = document.getElementById('modelFilteredCount');
  if (!container) return;
  if (countEl) countEl.textContent = modelCatalogFiltered.length;

  if (modelCatalogFiltered.length === 0) {
    container.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  const grouped = { Frontier: [], 'Open-Source': [], Perplexity: [], Nvidia: [] };
  modelCatalogFiltered.forEach(m => { if (grouped[m.type]) grouped[m.type].push(m); });

  const sections = [
    { key: 'Frontier', label: 'Frontier / Proprietary (Anthropic, OpenAI, Google…)', icon: '🔬' },
    { key: 'Nvidia', label: 'Nvidia / Nemotron', icon: '🟢' },
    { key: 'Open-Source', label: 'Open-Source / Open-Weight', icon: '🔓' },
    { key: 'Perplexity', label: 'Search-Augmented', icon: '🌐' },
  ];

  container.innerHTML = sections.filter(s => grouped[s.key].length > 0).map(s => `
    <div class="model-section">
      <h3 class="model-section-title"><span aria-hidden="true">${s.icon}</span> ${s.label} <span class="model-section-count">${grouped[s.key].length}</span></h3>
      <div class="model-grid">
        ${grouped[s.key].map(m => renderModelCard(m)).join('')}
      </div>
    </div>
  `).join('');
}

function renderModelCard(m) {
  const bc = TYPE_BADGE_CLASS[m.type] || 'type-frontier';
  const scores = [
    m.gpqa !== null ? `GPQA ${m.gpqa}%` : null,
    m.swe !== null ? `SWE ${m.swe}%` : null,
    `MMLU ${m.mmlu}%`,
    `AIME ${m.aime}%`,
  ].filter(Boolean).join(' · ');

  return `<article class="model-card model-card-${m.type.toLowerCase().replace(/[^a-z]/g, '')}">
    <div class="model-card-header">
      <div>
        <h4 class="model-card-name">${m.name}</h4>
        <div class="model-card-org">${m.org}</div>
      </div>
      <span class="type-badge ${bc}">${m.type}</span>
    </div>
    <div class="model-card-scores">${scores}</div>
    <dl class="model-card-details">
      <div class="model-detail-row"><dt>Parameters</dt><dd>${m.params}</dd></div>
      <div class="model-detail-row"><dt>Context</dt><dd>${m.ctx}</dd></div>
      <div class="model-detail-row"><dt>Release</dt><dd>${m.release}</dd></div>
      <div class="model-detail-row"><dt>Modality</dt><dd>${m.modality}</dd></div>
      <div class="model-detail-row"><dt>API Cost</dt><dd>${m.cost}/M</dd></div>
      <div class="model-detail-row"><dt>Deployment</dt><dd>${m.deploy}</dd></div>
    </dl>
    <p class="model-card-strengths"><strong>Key strengths:</strong> ${m.strengths}</p>
  </article>`;
}

renderModelCatalog();

/* ─── ARENA ELO ─── */
const eloData = [
  { name:"Anthropic",   elo:1503, color:"#2E4A7A",  type:"Frontier"    },
  { name:"xAI",         elo:1495, color:"#6B3FB5",  type:"Frontier"    },
  { name:"Google",      elo:1494, color:"#0E7C6B",  type:"Frontier"    },
  { name:"OpenAI",      elo:1481, color:"#4f9fff",  type:"Frontier"    },
  { name:"Mistral AI",  elo:1470, color:"#E8651A",  type:"Frontier"    },
  { name:"Nvidia",      elo:1468, color:"#76B900",  type:"Nvidia"      },
  { name:"Perplexity",  elo:1462, color:"#a78bfa",  type:"Perplexity"  },
  { name:"Alibaba",     elo:1449, color:"#C9960A",  type:"Open-Source" },
  { name:"DeepSeek",    elo:1424, color:"#2ddd88",  type:"Open-Source" },
  { name:"Moonshot",    elo:1398, color:"#a8e063",  type:"Open-Source" },
  { name:"Meta",        elo:1375, color:"#4ecdc4",  type:"Open-Source" },
  { name:"Microsoft",   elo:1355, color:"#0078D4",  type:"Open-Source" },
];

const maxElo = 1600, minElo = 1300;
document.getElementById('eloBars').innerHTML = eloData.map(d => {
  const pct = ((d.elo-minElo)/(maxElo-minElo)*100).toFixed(1);
  const typeClass = d.type === 'Frontier' ? 'type-frontier' : d.type === 'Perplexity' ? 'type-perplexity' : d.type === 'Nvidia' ? 'type-nvidia' : 'type-open';
  return `<div class="elo-row">
    <div class="elo-model-label">
      <span class="type-badge ${typeClass}" style="font-size:9px;padding:2px 7px">${d.type}</span>
      <span>${d.name}</span>
      <div class="elo-dot" style="background:${d.color}"></div>
    </div>
    <div class="elo-bar-track"><div class="elo-bar-fill" style="width:${pct}%;background:${d.color}"></div></div>
    <div class="elo-score">${d.elo}</div>
  </div>`;
}).join('');

/* ─── TREND CHART ─── */
const trendCanvas = document.getElementById('trendChart');
const ctx2 = trendCanvas ? trendCanvas.getContext('2d') : null;
const labels = ['Q1 2024','Q2 2024','Q3 2024','Q4 2024','Q1 2025','Q2 2025','Q3 2025','Q4 2025','Q1 2026','Q2 2026'];
const frontierMMLU    = [87.0, 88.5, 89.8, 91.0, 92.0, 92.5, 93.0, 93.5, 94.0, 94.2];
const openMMLU        = [69.5, 72.0, 76.5, 80.0, 84.0, 87.5, 90.0, 91.5, 93.0, 93.9];
const perplexityMMLU  = [null, null, null, null, 85.0, 88.0, 90.5, 92.0, 93.5, 94.0];

function resizeChart() {
  if (!trendCanvas || !ctx2) return;
  const ratio = window.devicePixelRatio || 1;
  trendCanvas.width  = Math.max(1, Math.floor(trendCanvas.offsetWidth * ratio));
  trendCanvas.height = Math.max(1, Math.floor(trendCanvas.offsetHeight * ratio));
  ctx2.setTransform(ratio, 0, 0, ratio, 0, 0);
  drawTrend();
}

function drawTrend() {
  if (!trendCanvas || !ctx2) return;
  const W = trendCanvas.offsetWidth, H = trendCanvas.offsetHeight;
  const pad = { top:30, right:20, bottom:50, left:50 };
  const cw = W - pad.left - pad.right;
  const ch = H - pad.top - pad.bottom;
  ctx2.clearRect(0,0,W,H);

  ctx2.strokeStyle = 'rgba(26,43,74,0.06)';
  ctx2.lineWidth = 1;
  for(let i=0;i<=5;i++) {
    const y = pad.top + (ch/5)*i;
    ctx2.beginPath(); ctx2.moveTo(pad.left,y); ctx2.lineTo(pad.left+cw,y); ctx2.stroke();
  }

  const xStep = cw/(labels.length-1);
  const yMin=60, yMax=100;
  const toX = i => pad.left + i*xStep;
  const toY = v => pad.top + ch - ((v-yMin)/(yMax-yMin))*ch;
  const gap = frontierMMLU.map((f,i)=>+(f-openMMLU[i]).toFixed(1));

  ctx2.beginPath();
  for(let i=0;i<labels.length;i++) ctx2.lineTo(toX(i), toY(frontierMMLU[i]));
  for(let i=labels.length-1;i>=0;i--) ctx2.lineTo(toX(i), toY(openMMLU[i]));
  ctx2.closePath();
  const shade = ctx2.createLinearGradient(0,0,cw,0);
  shade.addColorStop(0,'rgba(46,74,122,0.06)');
  shade.addColorStop(1,'rgba(14,124,107,0.06)');
  ctx2.fillStyle = shade;
  ctx2.fill();

  function drawLine(data, color, dashed) {
    ctx2.beginPath();
    if(dashed) ctx2.setLineDash([5,4]); else ctx2.setLineDash([]);
    let started = false;
    data.forEach((v,i)=>{
      if(v===null) return;
      if(!started){ ctx2.moveTo(toX(i),toY(v)); started=true; }
      else ctx2.lineTo(toX(i),toY(v));
    });
    ctx2.strokeStyle = color;
    ctx2.lineWidth = 2.5;
    ctx2.lineJoin = 'round';
    ctx2.stroke();
    ctx2.setLineDash([]);
    data.forEach((v,i)=>{
      if(v===null) return;
      ctx2.beginPath();
      ctx2.arc(toX(i),toY(v),3.5,0,Math.PI*2);
      ctx2.fillStyle = color;
      ctx2.fill();
    });
  }

  drawLine(frontierMMLU, '#2E4A7A', false);
  drawLine(openMMLU, '#0E7C6B', false);
  drawLine(perplexityMMLU, '#6B3FB5', true);

  gap.forEach((g,i)=>{
    const barH = (g/17.5)*28;
    ctx2.fillStyle = `rgba(201,150,10,${0.12+g/35})`;
    ctx2.fillRect(toX(i)-5, H-pad.bottom-barH-4, 10, barH);
  });

  ctx2.fillStyle = 'rgba(90,100,120,0.7)';
  ctx2.font = `${Math.min(10,W/100)}px 'DM Mono', monospace`;
  ctx2.textAlign = 'center';
  labels.forEach((l,i) => ctx2.fillText(l, toX(i), H-pad.bottom+18));

  ctx2.textAlign = 'right';
  for(let v=60;v<=100;v+=10) ctx2.fillText(v+'%', pad.left-8, toY(v)+4);
}

window.addEventListener('resize', resizeChart);
setTimeout(resizeChart, 150);

/* ─── TAB SWITCHER ─── */
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  if (btn) btn.classList.add('active');
  const resourceHub = document.getElementById('resourceHub');
  if (resourceHub) resourceHub.classList.toggle('is-hidden', id !== 'benchmarks');
  if(id === 'trends') setTimeout(resizeChart, 80);
  closeMobileNav();
  closeGuidesMenu();
}

/* ─── ENTERPRISE NAV ─── */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const enterpriseNav = document.getElementById('enterpriseNav');
const guidesWrap = document.getElementById('navGuidesWrap');
const guidesToggle = document.getElementById('guidesToggle');

function closeMobileNav() {
  if (!navToggle || !navMenu) return;
  navToggle.setAttribute('aria-expanded', 'false');
  navMenu.classList.remove('open');
  navToggle.classList.remove('open');
}

function closeGuidesMenu() {
  if (!guidesWrap || !guidesToggle) return;
  guidesWrap.classList.remove('open');
  guidesToggle.setAttribute('aria-expanded', 'false');
}

function toggleGuidesMenu() {
  if (!guidesWrap || !guidesToggle) return;
  const isOpen = guidesWrap.classList.toggle('open');
  guidesToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (!isOpen) closeGuidesMenu();
  });
}

if (guidesToggle) {
  guidesToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleGuidesMenu();
  });
}

document.addEventListener('click', (e) => {
  if (guidesWrap && !guidesWrap.contains(e.target)) closeGuidesMenu();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeGuidesMenu();
    closeMobileNav();
  }
});

const navBrandHome = document.getElementById('navBrandHome');
if (navBrandHome) {
  navBrandHome.addEventListener('click', (e) => {
    e.preventDefault();
    const tabBtn = document.querySelector('.tab-btn[data-tab="benchmarks"]');
    switchTab('benchmarks', tabBtn);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.querySelectorAll('.footer-link-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab;
    const tabBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    switchTab(tabId, tabBtn);
    window.scrollTo({ top: document.getElementById('main-content').offsetTop - 60, behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  if (enterpriseNav) enterpriseNav.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

/* ─── USE CASE ADVISOR ─── */
const USE_CASE_DOMAINS = [
  { id:"coding",       label:"Software Engineering & Coding",        icon:"💻", tags:["coding"],           weights:{swe:0.40,gpqa:0.15,mmlu:0.15,aime:0.10,cost:0.20}, desc:"Code generation, debugging, GitHub issue resolution, and IDE agents." },
  { id:"rag",          label:"Enterprise RAG & Document AI",         icon:"📄", tags:["rag"],              weights:{mmlu:0.30,gpqa:0.25,swe:0.10,aime:0.05,cost:0.30}, desc:"Document Q&A, knowledge bases, contract review, and internal search." },
  { id:"legal",        label:"Legal, Financial & Compliance",        icon:"⚖️", tags:["legal","rag"],      weights:{mmlu:0.30,gpqa:0.30,swe:0.05,aime:0.05,cost:0.30}, desc:"Regulatory analysis, contract drafting, audit support, and compliance workflows." },
  { id:"healthcare",   label:"Healthcare & Life Sciences",           icon:"🏥", tags:["healthcare","safety"], weights:{mmlu:0.35,gpqa:0.30,swe:0.05,aime:0.05,cost:0.25}, desc:"Clinical documentation, medical literature, drug discovery support — requires validation." },
  { id:"research",     label:"Real-Time Research & Fact-Checking",   icon:"🔍", tags:["research","factcheck","realtime"], weights:{mmlu:0.25,gpqa:0.30,swe:0.0,aime:0.05,cost:0.40}, desc:"Live web search, cited answers, market intelligence, and news monitoring." },
  { id:"multilingual", label:"Multilingual & Global Products",       icon:"🌍", tags:["multilingual","global"], weights:{mmlu:0.35,gpqa:0.15,swe:0.10,aime:0.05,cost:0.35}, desc:"Products serving 50+ languages, localization, and cross-cultural support." },
  { id:"support",      label:"Customer Support & Chatbots",          icon:"💬", tags:["support","routing"], weights:{mmlu:0.20,gpqa:0.10,swe:0.05,aime:0.05,cost:0.60}, desc:"High-volume conversational AI, ticket triage, and FAQ automation." },
  { id:"analytics",    label:"Data Analysis & Business Intelligence",icon:"📊", tags:["stem","reasoning"], weights:{aime:0.25,mmlu:0.25,gpqa:0.20,swe:0.10,cost:0.20}, desc:"SQL generation, spreadsheet analysis, statistical reasoning, and BI dashboards." },
  { id:"content",      label:"Content Creation & Marketing",         icon:"✍️", tags:["writing"],          weights:{mmlu:0.25,gpqa:0.10,swe:0.0,aime:0.05,cost:0.60}, desc:"Copywriting, SEO content, social media, and brand-aligned generation." },
  { id:"sovereignty",  label:"On-Premises & Data Sovereignty",       icon:"🔒", tags:["sovereignty"],      weights:{mmlu:0.25,gpqa:0.20,swe:0.15,aime:0.10,cost:0.30}, desc:"Regulated industries requiring self-hosted or air-gapped deployment." },
  { id:"cost",         label:"High-Volume API / Cost Optimization",  icon:"💰", tags:["cost","routing"],  weights:{cost:0.55,mmlu:0.20,gpqa:0.10,swe:0.10,aime:0.05}, desc:"Millions of daily requests where per-token cost is the primary constraint." },
  { id:"agents",       label:"AI Agents & Tool Use",                 icon:"🤖", tags:["agents","automation"], weights:{swe:0.30,gpqa:0.25,mmlu:0.15,aime:0.10,cost:0.20}, desc:"Multi-step agents, API orchestration, computer use, and autonomous workflows." },
  { id:"stem",         label:"Scientific Research & STEM",           icon:"🔬", tags:["stem","reasoning"], weights:{gpqa:0.35,aime:0.30,mmlu:0.20,swe:0.05,cost:0.10}, desc:"PhD-level science, mathematics, engineering analysis, and research papers." },
  { id:"nvidia",       label:"Nvidia GPU / Edge & Robotics",         icon:"🟢", tags:["nvidia","edge","robotics"], weights:{gpqa:0.20,mmlu:0.20,swe:0.15,aime:0.10,cost:0.35}, desc:"NIM deployment, Jetson edge, physical AI, and Omniverse simulation." },
];

const PRIORITY_MODIFIERS = {
  quality:     { cost: -0.25, gpqa: 0.15, mmlu: 0.10, swe: 0.10 },
  cost:        { cost: 0.40, gpqa: -0.10, mmlu: -0.05 },
  sovereignty: { cost: 0.10 },
  latency:     { cost: 0.25, swe: -0.05 },
  balanced:    {},
};

const DOMAIN_RATIONALES = {
  coding:      "Strong SWE-bench and code-specialized training.",
  rag:         "High MMLU-Pro and instruction-following for document grounding.",
  legal:       "Reasoning depth and accuracy critical for high-stakes text.",
  healthcare:  "Safety-tuned models preferred; always validate clinically.",
  research:    "Live web retrieval eliminates knowledge cutoff limitations.",
  multilingual:"Broad language coverage with strong non-English performance.",
  support:     "Low cost per token at acceptable conversational quality.",
  analytics:   "Numerical reasoning (AIME) and structured output reliability.",
  content:     "Prose quality and creative fluency at economical pricing.",
  sovereignty: "Self-hostable open-weight or Nvidia NIM on your infrastructure.",
  cost:        "Lowest API cost while maintaining usable benchmark scores.",
  agents:      "Tool-use, coding, and multi-step reasoning capabilities.",
  stem:        "GPQA Diamond and AIME scores indicate scientific depth.",
  nvidia:      "Optimized for Nvidia NIM, TensorRT-LLM, and GPU inference stack.",
};

function initUseCaseAdvisor() {
  const select = document.getElementById('useCaseDomain');
  if (!select) return;
  USE_CASE_DOMAINS.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.id;
    opt.textContent = `${d.icon} ${d.label}`;
    select.appendChild(opt);
  });
  const terms = document.getElementById('termsAccept');
  const submit = document.getElementById('advisorSubmit');
  if (terms && submit) {
    terms.addEventListener('change', () => {
      submit.disabled = !terms.checked || !select.value;
    });
    select.addEventListener('change', () => {
      submit.disabled = !terms.checked || !select.value;
    });
  }
}

function parseCost(costNum) {
  return typeof costNum === 'number' ? costNum : 5;
}

function scoreModelForUseCase(model, domain, priority, sensitivity) {
  const w = { ...domain.weights };
  const mod = PRIORITY_MODIFIERS[priority] || {};
  Object.keys(mod).forEach(k => { w[k] = (w[k] || 0) + mod[k]; });

  const maxCost = 8;
  const costScore = 1 - Math.min(parseCost(model.costNum), maxCost) / maxCost;
  const sweVal = model.swe !== null ? model.swe / 100 : (model.mmlu / 100) * 0.7;

  let score =
    (w.gpqa || 0) * (model.gpqa / 100) +
    (w.swe || 0) * sweVal +
    (w.mmlu || 0) * (model.mmlu / 100) +
    (w.aime || 0) * (model.aime / 100) +
    (w.cost || 0) * costScore;

  const tagOverlap = domain.tags.filter(t => model.tags.includes(t)).length;
  score += tagOverlap * 0.08;

  if (priority === 'sovereignty' || sensitivity === 'regulated' || sensitivity === 'airgap') {
    if (model.selfHost) score += 0.25;
    else score -= 0.35;
  }
  if (sensitivity === 'airgap' && !model.selfHost) score -= 0.5;
  if (domain.id === 'research' && model.type === 'Perplexity') score += 0.35;
  if (domain.id === 'nvidia' && model.type === 'Nvidia') score += 0.40;
  if (domain.id === 'coding' && model.tags.includes('coding')) score += 0.12;
  if (priority === 'latency' && (model.tags.includes('latency') || model.tags.includes('edge'))) score += 0.15;

  return score;
}

function getRecommendationReason(model, domain) {
  const reasons = [];
  if (domain.tags.some(t => model.tags.includes(t))) {
    reasons.push(`Matched domain tags: ${domain.tags.filter(t => model.tags.includes(t)).join(', ')}`);
  }
  if (model.swe !== null && domain.id === 'coding') reasons.push(`SWE-bench: ${model.swe}%`);
  if (domain.id === 'research' && model.type === 'Perplexity') reasons.push('Native live web search with citations');
  if (domain.id === 'nvidia' && model.type === 'Nvidia') reasons.push('Nvidia NIM / TensorRT-LLM optimized');
  if (model.selfHost && (domain.id === 'sovereignty')) reasons.push('Self-hostable for data sovereignty');
  if (DOMAIN_RATIONALES[domain.id]) reasons.push(DOMAIN_RATIONALES[domain.id]);
  if (!reasons.length) reasons.push(model.strengths);
  return reasons.slice(0, 3).join(' · ');
}

function runUseCaseAdvisor() {
  const domainId = document.getElementById('useCaseDomain').value;
  const priority = document.getElementById('priorityMode').value;
  const sensitivity = document.getElementById('dataSensitivity').value;
  const terms = document.getElementById('termsAccept');

  if (!terms.checked) {
    showToast('Please accept the terms & conditions first');
    return;
  }
  if (!domainId) {
    showToast('Please select a use case domain');
    return;
  }

  const domain = USE_CASE_DOMAINS.find(d => d.id === domainId);
  let pool = [...MODELS];

  if (sensitivity === 'airgap') pool = pool.filter(m => m.selfHost);
  else if (sensitivity === 'regulated') pool = pool.filter(m => m.selfHost || m.type === 'Frontier');

  const ranked = pool
    .map(m => ({ model: m, score: scoreModelForUseCase(m, domain, priority, sensitivity) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  const placeholder = document.getElementById('advisorPlaceholder');
  const results = document.getElementById('advisorResults');
  const list = document.getElementById('advisorResultsList');
  const title = document.getElementById('advisorResultsTitle');
  const sub = document.getElementById('advisorResultsSub');

  placeholder.style.display = 'none';
  results.style.display = 'block';

  const priorityLabels = { balanced:'Balanced', quality:'Best Quality', cost:'Cost Optimized', sovereignty:'Data Sovereignty', latency:'Low Latency' };
  title.textContent = `Top ${ranked.length} Models for ${domain.label}`;
  sub.textContent = `${domain.desc} Priority: ${priorityLabels[priority] || priority}. Sensitivity: ${sensitivity}.`;

  list.innerHTML = ranked.map((r, i) => {
    const m = r.model;
    const bc = TYPE_BADGE_CLASS[m.type] || 'type-frontier';
    const pct = Math.round(r.score * 100);
    return `<article class="advisor-result-card">
      <div class="advisor-rank">${i + 1}</div>
      <div class="advisor-result-body">
        <div class="advisor-result-header">
          <div>
            <h4 class="advisor-result-name">${m.name}</h4>
            <span class="model-org">${m.org}</span>
          </div>
          <span class="type-badge ${bc}">${m.type}</span>
        </div>
        <p class="advisor-result-reason">${getRecommendationReason(m, domain)}</p>
        <div class="advisor-result-meta">
          <span>GPQA ${m.gpqa}%</span>
          ${m.swe !== null ? `<span>SWE ${m.swe}%</span>` : ''}
          <span>MMLU ${m.mmlu}%</span>
          <span>${m.cost}/M</span>
          <span>${m.deploy}</span>
        </div>
        <div class="advisor-fit-bar"><div class="advisor-fit-fill" style="width:${Math.min(pct, 100)}%"></div></div>
      </div>
    </article>`;
  }).join('');

  results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

initUseCaseAdvisor();

/* ─── VISITOR COUNTER (real-time) ─── */
const VISITOR_API = 'https://countapi.mileshilliard.com/api/v1';
const VISITOR_KEY = 'prateekdutta-ai-benchmarking-visits';
const VISITOR_SESSION_KEY = 'ab2026_visit_recorded';
const VISITOR_POLL_MS = 45000;
const VISITOR_INITIAL = 384;

function formatVisitorCount(n) {
  if (typeof n !== 'number' || isNaN(n)) return VISITOR_INITIAL.toLocaleString('en-US');
  return n.toLocaleString('en-US');
}

function updateVisitorDisplay(count, animate) {
  const el = document.getElementById('visitorCount');
  const wrap = document.getElementById('visitorCounter');
  if (!el) return;
  wrap?.classList.remove('is-loading');
  const safeCount = Math.max(VISITOR_INITIAL, count);
  const formatted = formatVisitorCount(safeCount);
  if (el.textContent !== formatted) {
    el.textContent = formatted;
    if (animate) {
      el.classList.add('updated');
      setTimeout(() => el.classList.remove('updated'), 1200);
    }
  }
}

async function fetchVisitorCount(endpoint) {
  const res = await fetch(`${VISITOR_API}/${endpoint}/${VISITOR_KEY}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Visitor API ${res.status}`);
  const data = await res.json();
  if (typeof data.value !== 'number') throw new Error('Invalid visitor count');
  return data.value;
}

async function ensureVisitorBaseline() {
  const current = await fetchVisitorCount('get');
  if (current < VISITOR_INITIAL) {
    const res = await fetch(`${VISITOR_API}/set/${VISITOR_KEY}?value=${VISITOR_INITIAL}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to seed visitor count');
    const data = await res.json();
    return typeof data.value === 'number' ? data.value : VISITOR_INITIAL;
  }
  return current;
}

async function recordAndFetchVisitors() {
  updateVisitorDisplay(VISITOR_INITIAL, false);
  try {
    await ensureVisitorBaseline();
    let count;
    if (!sessionStorage.getItem(VISITOR_SESSION_KEY)) {
      count = await fetchVisitorCount('hit');
      sessionStorage.setItem(VISITOR_SESSION_KEY, '1');
    } else {
      count = await fetchVisitorCount('get');
    }
    updateVisitorDisplay(count, true);
  } catch {
    updateVisitorDisplay(VISITOR_INITIAL, false);
  }
}

async function pollVisitorCount() {
  try {
    const count = await fetchVisitorCount('get');
    updateVisitorDisplay(count, false);
  } catch { /* silent poll failure */ }
}

recordAndFetchVisitors();
setInterval(pollVisitorCount, VISITOR_POLL_MS);

/* ─── TOAST ─── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
