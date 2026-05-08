/* ─── MODEL DATA (with Perplexity) ─── */
const MODELS = [
  { rank:1,  name:"Claude Opus 4.6",       org:"Anthropic",      type:"Frontier",    gpqa:91.3, swe:80.8, mmlu:92.1, aime:88.0, ctx:"1M",     cost:"$5.00"  },
  { rank:2,  name:"Gemini 3.1 Pro",         org:"Google",         type:"Frontier",    gpqa:94.3, swe:78.5, mmlu:93.0, aime:91.0, ctx:"2M",     cost:"$3.50"  },
  { rank:3,  name:"GPT-5.4",                org:"OpenAI",         type:"Frontier",    gpqa:88.0, swe:76.2, mmlu:92.5, aime:89.0, ctx:"1M",     cost:"$5.00"  },
  { rank:4,  name:"Grok 4",                 org:"xAI",            type:"Frontier",    gpqa:82.0, swe:72.0, mmlu:90.5, aime:87.0, ctx:"256K",   cost:"$3.00"  },
  { rank:5,  name:"Claude Sonnet 4.6",      org:"Anthropic",      type:"Frontier",    gpqa:85.0, swe:79.6, mmlu:91.0, aime:85.0, ctx:"1M",     cost:"$3.00"  },
  { rank:6,  name:"Perplexity Sonar Huge",  org:"Perplexity AI",  type:"Perplexity",  gpqa:90.0, swe:null,  mmlu:94.0, aime:82.0, ctx:"Live",   cost:"$0.08†" },
  { rank:7,  name:"Perplexity Deep Res.",   org:"Perplexity AI",  type:"Perplexity",  gpqa:88.0, swe:null,  mmlu:92.0, aime:79.0, ctx:"Live",   cost:"$0.05†" },
  { rank:8,  name:"DeepSeek V4",            org:"DeepSeek",       type:"Open-Source", gpqa:78.0, swe:83.7, mmlu:92.8, aime:99.4, ctx:"128K",   cost:"$0.07"  },
  { rank:9,  name:"Kimi K2.6",              org:"Moonshot AI",    type:"Open-Source", gpqa:90.5, swe:74.0, mmlu:89.0, aime:82.0, ctx:"128K",   cost:"$0.95"  },
  { rank:10, name:"Qwen 3.6-235B",          org:"Alibaba",        type:"Open-Source", gpqa:76.0, swe:72.0, mmlu:88.4, aime:85.0, ctx:"262K",   cost:"$0.20"  },
  { rank:11, name:"Llama 4 Maverick",       org:"Meta",           type:"Open-Source", gpqa:69.0, swe:65.0, mmlu:86.0, aime:78.0, ctx:"1M+",    cost:"$0.19"  },
  { rank:12, name:"GLM-5",                  org:"Zhipu / THU",    type:"Open-Source", gpqa:72.0, swe:70.0, mmlu:87.0, aime:80.0, ctx:"128K",   cost:"$0.15"  },
  { rank:13, name:"MiniMax M2.7",           org:"MiniMax",        type:"Open-Source", gpqa:68.0, swe:66.0, mmlu:85.0, aime:75.0, ctx:"1M",     cost:"$0.30"  },
  { rank:14, name:"Gemma 4",                org:"Google",         type:"Open-Source", gpqa:64.0, swe:60.0, mmlu:83.0, aime:70.0, ctx:"128K",   cost:"$0.10"  },
  { rank:15, name:"Perplexity Sonar",       org:"Perplexity AI",  type:"Perplexity",  gpqa:82.0, swe:null,  mmlu:88.0, aime:68.0, ctx:"Live",   cost:"$0.02†" },
  { rank:16, name:"Perplexity Sonar Small", org:"Perplexity AI",  type:"Perplexity",  gpqa:70.0, swe:null,  mmlu:80.0, aime:55.0, ctx:"Live",   cost:"$0.005†"},
];

const TYPE_FILL_CLASS = { "Frontier": "fill-frontier", "Open-Source": "fill-open", "Perplexity": "fill-perplexity" };
const TYPE_BADGE_CLASS = { "Frontier": "type-frontier", "Open-Source": "type-open", "Perplexity": "type-perplexity" };

document.getElementById('benchTotalCount').textContent = MODELS.length;

let benchCurrentType = '';
let benchFiltered = [...MODELS];

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
  document.querySelectorAll('.pill-cat').forEach(p => {
    p.classList.toggle('active-pill', p.dataset.cat === type);
  });
}

function scoreCell(val, type) {
  if (val === null) return '<span style="color:#a0a8b8;font-family:var(--font-mono);font-size:12px">N/A*</span>';
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
  const header = "Rank,Model,Organisation,Type,GPQA Diamond %,SWE-bench %,MMLU-Pro %,AIME 2026 %,Context,Cost per M\n";
  const rows = benchFiltered.map((m,i) =>
    `${i+1},"${m.name}","${m.org}","${m.type}",${m.gpqa},${m.swe === null ? 'N/A' : m.swe},${m.mmlu},${m.aime},"${m.ctx}","${m.cost}"`
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

/* ─── ARENA ELO ─── */
const eloData = [
  { name:"Anthropic",   elo:1503, color:"#2E4A7A",  type:"Frontier"    },
  { name:"xAI",         elo:1495, color:"#6B3FB5",  type:"Frontier"    },
  { name:"Google",      elo:1494, color:"#0E7C6B",  type:"Frontier"    },
  { name:"OpenAI",      elo:1481, color:"#4f9fff",  type:"Frontier"    },
  { name:"Perplexity",  elo:1462, color:"#a78bfa",  type:"Perplexity"  },
  { name:"Alibaba",     elo:1449, color:"#C9960A",  type:"Open-Source" },
  { name:"DeepSeek",    elo:1424, color:"#2ddd88",  type:"Open-Source" },
  { name:"Moonshot",    elo:1398, color:"#a8e063",  type:"Open-Source" },
  { name:"Meta",        elo:1375, color:"#4ecdc4",  type:"Open-Source" },
];

const maxElo = 1600, minElo = 1300;
document.getElementById('eloBars').innerHTML = eloData.map(d => {
  const pct = ((d.elo-minElo)/(maxElo-minElo)*100).toFixed(1);
  const typeClass = d.type === 'Frontier' ? 'type-frontier' : d.type === 'Perplexity' ? 'type-perplexity' : 'type-open';
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
const ctx2 = trendCanvas.getContext('2d');
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

  // Grid
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

  // Shade between frontier and open
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

  // Gap bars
  gap.forEach((g,i)=>{
    const barH = (g/17.5)*28;
    ctx2.fillStyle = `rgba(201,150,10,${0.12+g/35})`;
    ctx2.fillRect(toX(i)-5, H-pad.bottom-barH-4, 10, barH);
  });

  // X labels
  ctx2.fillStyle = 'rgba(90,100,120,0.7)';
  ctx2.font = `${Math.min(10,W/100)}px 'DM Mono', monospace`;
  ctx2.textAlign = 'center';
  labels.forEach((l,i) => ctx2.fillText(l, toX(i), H-pad.bottom+18));

  // Y labels
  ctx2.textAlign = 'right';
  for(let v=60;v<=100;v+=10) ctx2.fillText(v+'%', pad.left-8, toY(v)+4);
}

window.addEventListener('resize', resizeChart);
setTimeout(resizeChart, 150);

if (!ctx2 && trendCanvas) {
  trendCanvas.style.display = 'none';
}

/* ─── TAB SWITCHER ─── */
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  btn.classList.add('active');
  if(id === 'trends') setTimeout(resizeChart, 80);
}

/* ─── TOAST ─── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
