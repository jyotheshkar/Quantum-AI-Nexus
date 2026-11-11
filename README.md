# Quantum AI Nexus

A React interface learning prototype with Astra charts, Nova simulated text analysis and Vision local image previews. The repository contains no inference backend or quantum computation.

See [technical architecture, diagrams and maintenance guide](docs/ARCHITECTURE.md) for implemented boundaries, reproducible commands, current limitations and proposed scaling work.

## Run locally

```bash
cd frontend
npm ci --ignore-scripts --no-audit --no-fund
npm start
```

Tests: `npm test -- --watchAll=false --runInBand`. Build: `CI=true npm run build`.

The original [Astra notes](Astra%20readme) remain as learning material; their possible predictive analytics features are not an implemented model pipeline.

