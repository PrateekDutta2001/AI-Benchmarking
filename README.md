# AI Model Benchmarking 2026

Interactive single-page model benchmarking report comparing frontier, open-source, and search-augmented AI models across major 2026 benchmarks.

## Overview

This report presents:

- Benchmark performance matrix (GPQA, SWE-bench, MMLU-Pro, AIME)
- Historical trend visualization (frontier vs open-source gap)
- Arena ELO comparison by organization
- Strategic comparison and decision guidance
- Findings and glossary/abbreviations for reference

Built as a static HTML/CSS/JS site with no framework dependency.

## Project Structure

- `index.html` - report structure and content sections
- `styles.css` - visual design, responsive behavior, accessibility styles
- `script.js` - table rendering, filtering, CSV export, charts, tab logic

## Report Contents

- Six report sections with clear, tab-based navigation
- Search and type-based filtering for benchmark rows
- CSV export of currently filtered table data
- Animated ELO bars and custom canvas trend chart
- Responsive layouts for desktop, tablet, and mobile
- Cross-browser and accessibility improvements:
  - Safari-friendly sticky table header support
  - Keyboard focus visibility (`:focus-visible` + fallback)
  - Reduced-motion support (`prefers-reduced-motion`)
  - Semantic button controls for pill filters
  - Robust CSV download handling across browsers

## How to Run

Because this is a static site, you can run it directly:

1. Open `index.html` in your browser.

Optional (recommended) local server:

- VS Code Live Server, or
- Python:

```bash
python -m http.server 5500
```

Then open:

- [http://localhost:5500](http://localhost:5500)

## Browser Support

Tested/targeted for modern versions of:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Apple Safari

## Notes

- Benchmark values and model rankings are static sample data in `script.js`.
- External fonts are loaded from Google Fonts.
- Data and claims should be validated/updated periodically as model benchmarks evolve.
