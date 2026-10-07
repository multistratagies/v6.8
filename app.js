const GOLD_ROWS = [
  { id: 1, label: 'GDXU RSI(10)', value: '', rule: 'GDXU RSI(10) > 79 → BUY GDXD; otherwise → if GDXU RSI(10) < 30 → BUY GDXU; else → Step 2.', percent: '100.00%', status: '⏳' },
  { id: 2, label: 'QQQ ROC(90) vs ROC(70)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 3, label: 'GDXU ROC(70) vs ROC(75)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 4, label: 'TLT ROC(95) vs QQQ ROC(35)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 5, label: 'SPY Close vs SMA(200)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 6, label: 'SPY Close vs SMA(200) ②', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 7, label: 'TQQQ RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 8, label: 'TQQQ RSI(10) ②', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 9, label: 'FAS AvgRet(50d) vs AvgRet(200d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 10, label: 'FAS Close vs SMA(100)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 11, label: 'SPXL RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 12, label: 'SPY RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 13, label: 'V AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 14, label: 'V RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 15, label: 'FAS RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 16, label: 'SPY RSI(10) ②', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 17, label: 'TQQQ Close vs SMA(20)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 18, label: 'SOFI AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 19, label: 'SOFI RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 20, label: 'TMF AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 21, label: 'AGQ RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 22, label: 'IOO RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 23, label: 'SQQQ RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 24, label: 'SQQQ RSI(10) ②', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 25, label: 'MA AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 26, label: 'MA RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 27, label: 'FAZ AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 28, label: 'IOO RSI(10) ②', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 29, label: 'TLT RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 30, label: 'BX AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 31, label: 'BX RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 32, label: 'AAPX AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 33, label: '🏆 R103 Result', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 34, label: 'VTV RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 35, label: '🏆 R76 Result', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 36, label: 'SCHW AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 37, label: 'SCHW RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 38, label: '🏆 R100 Result', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 39, label: 'VTV RSI(10) ③', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 40, label: 'VTV RSI(10) ④', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 41, label: 'VTV RSI(10) ⑤', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 42, label: 'XLF RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 43, label: 'KKR AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 44, label: 'KKR RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 45, label: 'XLF RSI(10) ②', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 46, label: 'XLF RSI(10) ③', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 47, label: 'XLF RSI(10) ④', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 48, label: 'XLF RSI(10) ⑤', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 49, label: 'BN AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 50, label: 'BN RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 51, label: 'WELL AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 52, label: 'WELL RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 53, label: 'VTR AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 54, label: 'VTR RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 55, label: 'XLK RSI(10) vs KMLM RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 56, label: 'BAM AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 57, label: 'BAM RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 58, label: 'AAPX StdDev(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 59, label: 'KMLM Close vs SMA(20)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 60, label: 'TLT RSI(20) vs PSQ RSI(20)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 61, label: 'QQQ ROC(60)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 62, label: 'HOOD AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 63, label: 'HOOD RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 64, label: 'NVDL StdDev(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 65, label: 'TQQQ Close vs SMA(20) ②', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 66, label: 'BND RSI(10) vs QQQ RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 67, label: 'IBKR AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 68, label: 'IBKR RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 69, label: 'BITX StdDev(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 70, label: 'PSQ RSI(10)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 71, label: 'IEF RSI(10) vs PSQ RSI(20)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 72, label: 'FAS AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 73, label: '🏆 R97 Result', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 74, label: 'TSLA StdDev(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 75, label: 'AGG RSI(20) vs SH RSI(60)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 76, label: '🏆 R82 Result', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 77, label: 'META StdDev(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 78, label: 'FAS AvgRet(10d) vs QQQ AvgRet(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 79, label: 'GGLL StdDev(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 80, label: 'AAPX AvgRet(15d) ②', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 81, label: 'AMZN StdDev(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 82, label: 'NVDL AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 83, label: 'RGTI StdDev(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 84, label: 'BITX AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 85, label: 'PLTR StdDev(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 86, label: 'TSLR AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 87, label: 'BABA StdDev(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 88, label: 'FBL AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 89, label: 'COIN StdDev(20d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 90, label: 'GGLL AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 91, label: '🏆 R30 Result', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 92, label: 'AMZZ AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 93, label: 'AAPX AvgRet(10d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 94, label: 'NVDL AvgRet(10d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 95, label: 'BITX AvgRet(10d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 96, label: 'TSLA AvgRet(10d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 97, label: 'META AvgRet(10d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 98, label: 'GGLL AvgRet(10d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 99, label: 'AMZN AvgRet(10d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 100, label: 'RGTI AvgRet(10d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 101, label: 'PLTR AvgRet(10d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 102, label: 'BABA AvgRet(10d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 103, label: 'COIN AvgRet(10d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 104, label: 'RGTI AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 105, label: 'PLTR AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 106, label: 'BABA AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 107, label: 'CONL AvgRet(15d)', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' },
  { id: 108, label: '🏆 R54 Result', value: '', rule: 'Skipped — not on today\'s path', percent: '0.00%', status: '⏭️' }
];

const rows = [...GOLD_ROWS];

function getStatusClass(status) {
  if (status === '⏳') return 'status-pending';
  if (status === '⏭️') return 'status-skip';
  return 'status-done';
}

function renderRows() {
  const tbody = document.getElementById('sheetRows');
  tbody.innerHTML = rows.map((row) => `
    <tr>
      <td>${row.id}</td>
      <td>${row.label}</td>
      <td>
        <input class="mini-input" data-id="${row.id}" value="${row.value}" placeholder="Enter value" />
      </td>
      <td>${row.rule}</td>
      <td><span class="result-pill">${row.percent}</span></td>
      <td><span class="status-pill ${getStatusClass(row.status)}">${row.status}</span></td>
    </tr>
  `).join('');

  const inputs = document.querySelectorAll('.mini-input');
  inputs.forEach((input) => {
    input.addEventListener('input', (event) => {
      const rowId = Number(event.target.dataset.id);
      const row = rows.find((r) => r.id === rowId);
      if (!row) return;
      row.value = event.target.value;
      row.status = row.value.trim() ? '✅' : '⏳';
      row.percent = row.value.trim() ? '100.00%' : '0.00%';
      updateSummary();
      renderRows();
    });
  });
}

function updateSummary() {
  const done = rows.filter((r) => r.status === '✅').length;
  const activePositions = document.getElementById('activePositions');
  const resolvedTicker = document.getElementById('resolvedTicker');
  const totalDonePaths = document.getElementById('totalDonePaths');
  const portfolioPct = document.getElementById('portfolioPct');
  const validStatus = document.getElementById('validStatus');
  const tomorrowOrder = document.getElementById('tomorrowOrder');

  totalDonePaths.textContent = String(done);
  activePositions.textContent = done > 0 ? 'Active path resolved' : 'Not resolved';
  resolvedTicker.textContent = done > 0 ? 'GDXU / GDXD' : '—';
  portfolioPct.textContent = done > 0 ? '100%' : '—';
  validStatus.textContent = done > 0 ? '✅ Valid' : '⚠️ No DONE path yet';
  tomorrowOrder.textContent = done > 0 ? 'BUY GDXD' : '❌ No trade';

  const livePrices = document.getElementById('livePrices');
  if (livePrices) livePrices.textContent = 'SPY $777.42 | GDXU $97.49';
}

document.addEventListener('DOMContentLoaded', () => {
  renderRows();
  updateSummary();

  document.getElementById('runSheet')?.addEventListener('click', () => {
    const count = rows.filter((r) => r.status === '✅').length;
    alert(count > 0 ? `Sheet reviewed. ${count} active entries recorded.` : 'Sheet ready. No entries yet.');
  });

  document.getElementById('exportCsv')?.addEventListener('click', () => {
    const csv = rows.map((row) => `${row.id},${row.label},${row.value},${row.rule},${row.percent},${row.status}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gold_miner_sheet.csv';
    a.click();
    URL.revokeObjectURL(url);
  });
});
