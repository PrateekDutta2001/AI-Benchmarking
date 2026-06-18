# AI Model Benchmarking 2026 — Enterprise Edition

Interactive single-page knowledge hub for comparing **36+ LLMs** across frontier, open-source, Nvidia Nemotron, and search-augmented paradigms — with a use-case advisor, deployment guides, and real-time visitor tracking.

**Live site:** [https://prateekdutta2001.github.io/AI-Benchmarking/](https://prateekdutta2001.github.io/AI-Benchmarking/)

## Overview

Built as a static HTML/CSS/JS site with no framework dependency. Designed for AI professionals who need a clear path from **model selection → validation → deployment**.

### What’s included

| Feature | Description |
|--------|-------------|
| **Benchmark Matrix** | GPQA Diamond, SWE-bench, MMLU-Pro, AIME 2026 — searchable & filterable |
| **Model Catalog** | 36 models with parameters, modality, release date, deployment options |
| **Use Case Advisor** | Pick domain + priority → ranked model recommendations with T&C disclaimer |
| **Trends & ELO** | MMLU gap chart (2024–2026) + LMSYS Arena organisation ratings |
| **Comparison** | Frontier vs open-source vs search-augmented paradigm cards |
| **Strategy** | Enterprise decision framework by use case |
| **Findings** | Key research conclusions from 2026 benchmark data |
| **Glossary** | Abbreviations, benchmarks, architecture & metric terms |
| **Visitor Counter** | Live total visitors (starts at **384**, increments in real time) |

### Model coverage (4 paradigms)

- **Frontier / Proprietary** — Anthropic (Claude Opus/Sonnet/Haiku 4.6), OpenAI, Google Gemini, Mistral, Cohere, xAI Grok, and more
- **Nvidia / Nemotron** — Nemotron-4 340B, Nemotron 70B, Nano 12B, Cosmos-1.0 Predict
- **Open-Source** — DeepSeek V4, Llama 4, Qwen 3.6, Phi-5, Kimi K2.6, GLM-5, and more
- **Search-Augmented** — Perplexity Sonar family & Enterprise

## Connected learning path

External guides are linked from the header **Guides & Tutorials** dropdown, footer, and the landing-page **Knowledge Ecosystem** section (visible on the Benchmarks tab only):

| Guide | URL |
|-------|-----|
| AI Basics & Agentic Systems | [Intelligence.Agent](https://prateekdutta2001.github.io/Intelligence.Agent/) |
| RAG Architecture Deep Dive | [RAG_Agent](https://prateekdutta2001.github.io/RAG_Agent/) |
| Model Validation (Classic & Agentic) | [ModelSure](https://prateekdutta2001.github.io/ModelSure/) |
| AI Infrastructure & Deployments | [AI-Infra](https://prateekdutta2001.github.io/AI-Infra/) |

## Project structure

```
AI-Benchmarking-main/
├── index.html    # Page structure, tabs, landing resource hub, footer
├── styles.css    # Enterprise UI, responsive layout, accessibility
├── script.js     # Model data, tables, advisor, charts, visitor counter
├── README.md
└── LICENSE
```

### `script.js` responsibilities

- `MODELS` — benchmark scores, metadata, use-case tags (edit here to update rankings)
- `USE_CASE_DOMAINS` — advisor domains, weights, and scoring logic
- Benchmark table filtering, CSV export, model catalog rendering
- Canvas trend chart & ELO bar animations
- Tab switching (hides landing resource hub on non-Benchmarks tabs)
- Visitor counter via [CountAPI](https://countapi.mileshilliard.com) (`VISITOR_INITIAL = 384`)

## How to run locally

Because this is a static site, you can open it directly:

1. Open `index.html` in your browser.

Optional (recommended) local server:

```bash
python -m http.server 5500
```

Then visit [http://localhost:5500](http://localhost:5500)

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Set source to `main` branch, `/ (root)` folder.
4. Site will be available at `https://<username>.github.io/AI-Benchmarking/`.

## Browser support

Tested and targeted for modern versions of:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Apple Safari

### Accessibility & UX

- Skip-to-content link
- Keyboard focus visibility (`:focus-visible` + fallback)
- `prefers-reduced-motion` support
- Sticky benchmark table headers (Safari-compatible)
- Horizontal scroll tab bar on mobile
- Semantic buttons for filters and navigation

## Updating data

1. **Models & scores** — edit the `MODELS` array in `script.js`.
2. **Use case advisor** — edit `USE_CASE_DOMAINS` and scoring weights in `script.js`.
3. **Static copy** — edit section content in `index.html`.
4. **Visitor baseline** — change `VISITOR_INITIAL` in `script.js` (default: `384`).

Benchmark values are static reference data. Validate and refresh periodically as model cards and leaderboards evolve.

## Notes

- External fonts are loaded from [Google Fonts](https://fonts.google.com/) (DM Sans, DM Serif Display, DM Mono).
- Perplexity Sonar pricing uses per-1K request units (†), not per-million tokens.
- The use-case advisor provides **experimental recommendations only** — users should validate on their own data before production (see ModelSure guide).
- Visitor count uses session-based deduplication (one increment per browser session) with 45-second polling for live updates.

## License

© 2026 [PRATEEK DUTTA](https://prateekdutta2001.github.io/PrateekDutta.in/). Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
