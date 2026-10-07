import express from 'express';
import multer from 'multer';
import { parse } from 'csv-parse/sync';
import XLSX from 'xlsx';
import { verifyToken } from './auth.js';
import { run } from '../db/init.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', verifyToken, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const { originalname, mimetype, buffer } = req.file;
    let data = [];

    if (originalname.endsWith('.csv')) {
      data = parse(buffer.toString(), { columns: true });
    } else if (originalname.endsWith('.xlsx') || originalname.endsWith('.xls')) {
      const workbook = XLSX.read(buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    } else {
      return res.status(400).json({ error: 'Unsupported file type. Use CSV or XLSX.' });
    }

    const result = await run(
      'INSERT INTO data_imports (user_id, file_name, file_type, data) VALUES (?, ?, ?, ?)',
      [req.user.id, originalname, originalname.split('.').pop(), JSON.stringify(data)]
    );

    res.json({
      id: result.id,
      fileName: originalname,
      rowCount: data.length,
      data: data.slice(0, 10) // Return first 10 rows for preview
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/imports', verifyToken, async (req, res) => {
  try {
    const imports = await new Promise((resolve, reject) => {
      require('../db/init.js')
        .all('SELECT id, file_name, file_type, imported_at FROM data_imports WHERE user_id = ?', [
          req.user.id
        ])
        .then(resolve)
        .catch(reject);
    });
    res.json(imports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
