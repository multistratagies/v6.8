# Strategy Mapping — Multistratagies v6.8

This document maps the manual strategy dashboard to the official QuantConnect live strategies.

## Strategy 1: Gold Miner
- **QuantConnect ID**: 687
- **Live URL**: https://www.quantconnect.com/strategies/687/Gold-Miner
- **Type**: Multi-Sleeve Momentum Rotation
- **Description**: 
  - Daily manual walkdown strategy
  - 922% 5Y CAGR · 51% Max DD
  - Wraps regime gates around (GDXU/GDXD) gold-miner RSI(10)
  - Internal path splits on:
    - QQQ cumulative-return regime (90d vs 70d)
    - SPY 200-SMA bull/bear gate
    - RSI(10) overbought cascade across SPY/IOO/TQQQ/VTV/XLF
    - TLT/PSQ bond-vs-tech switcher
    - FAS financials 3x leveraged trend gate
  - Top-1 to top-3 momentum picks across leveraged ETF baskets and single-stock ETFs
  - Intraday stop-loss at 15% per day

**Key Input Rows**:
- Row 1: GDXU RSI(10) → decision gate
- Rows 2–108: decision tree leaves, majority skipped on any given day

---

## Strategy 2: Bullish Guard Ensemble (BG Ensemble)
- **QuantConnect ID**: 698
- **Live URL**: https://www.quantconnect.com/strategies/698/BG-Ensemble
- **Type**: Decision-Tree Ensemble
- **Description**:
  - Uses compressed decision tree (serialized as JSON + gzip base64 in QuantConnect)
  - 400+ price-window lookback (covers largest RSI window + buffer)
  - Daily discretionary tree-walk for regime detection and weight resolution
  - Key metrics:
    - RSI comparisons (10, 20, 60 windows)
    - SMA crossovers (20, 200)
    - Simple/exponential/max-drawdown/std-dev metrics
    - Cumulative return over various windows
  - Dynamically resolves allocation across TQQQ, TECL, SOXL, UVXY, TLT, SQQQ, etc.
  - Rebalances daily at market open via MarketOnOpenOrder

**Entry Point**: `main.py` — BullishGuardEnsemble class

---

## Strategy 3: Multi-Model Tactical ETF Rotation (QuadEnsemble)
- **QuantConnect ID**: 504
- **Live URL**: https://www.quantconnect.com/strategies/504/Multi-Model-Tactical-ETF-Rotation
- **Type**: 4-Way Equal-Weight Ensemble
- **Description**:
  - Combines 4 independent sub-strategies at 25% each:
    - **T10** (SimonsKMLM): RSI cascade + XLK/KMLM switcher
    - **T11** (FeaverFrontrunner): XLK/KMLM switcher + 50/50 bear split
    - **S2** (HolyGrail): TQQQ 200-SMA gate + BSV defensive
    - **S3** (DailyRegimeRotation): 3-of-4 SMA voting + RSI triggers
  - 25% capital allocation per strategy
  - Overlapping positions weight-summed before execution
  - All 4 survived 2024+ OOS with Calmar > 6
  - Thesis: bull agreement → amplified, bear disagreement → partial hedge, overbought signals fire independently → layered UVXY

**Entry Point**: `multimodel.main.py` — QuadEnsemble class

---

## Manual Dashboard Alignment

| Feature | GOLD_MINER (687) | BG_ENSEMBLE (698) | MULTI_MODEL (504) |
|---------|------------------|-------------------|-------------------|
| **Input Type** | CSV Sheet Walkdown | Tree Evaluation | 4×25% Sub-Strategies |
| **Regime Gates** | GDXU RSI(10) primary | RSI thresholds | T10/T11/S2/S3 independent |
| **Rebalance** | Daily at close → MOO | Daily at close → MOO | Daily at close → MOO |
| **Manual Input** | 108-row step walkdown | Auto (tree logic) | Auto (4-strategy blend) |
| **Tickers** | 50+ (single-stock + leveraged) | 40+ (leveraged ETF) | 50+ (leveraged + single) |
| **Key Metric** | Done-path %ile | Allocation % | Consensus weight |

---

## How to Use This Document

1. **Strategy Selection Tab** → User picks "GOLD_MINER", "BG_ENSEMBLE", or "MULTI_MODEL"
2. **Sheet View** → 
   - For 687: shows the 108-row manual walkdown
   - For 698: shows the tree evaluation (auto-filled, not editable)
   - For 504: shows the 4 sub-strategy weights
3. **Summary Panel** → displays regime, exposure, tickers, allocation
4. **Export** → CSV/XLSX download of today's inputs + decision
5. **Alpaca Link** → transmit orders to paper trading account

---

## QuantConnect Code References

- **Gold Miner (687)**: See `goldminor.main.py` + `goldminor.tree_data.py`
- **BG Ensemble (698)**: See `bgensamble.main.py` + `bgensamble.tree_data.py`
- **Multi-Model (504)**: See `multimodel.main.py` (single unified file)

Each Python file from QuantConnect can be directly referenced or cloned for local backtest/paper-trade integration.
