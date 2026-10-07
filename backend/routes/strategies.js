import express from 'express';
import { verifyToken } from './auth.js';
import { run, get, all } from '../db/init.js';

const router = express.Router();

// Get all presets for user
router.get('/', verifyToken, async (req, res) => {
  try {
    const presets = await all(
      'SELECT * FROM strategy_presets WHERE user_id = ? ORDER BY updated_at DESC',
      [req.user.id]
    );
    res.json(presets.map((p) => ({ ...p, config: JSON.parse(p.config) })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create preset
router.post('/', verifyToken, async (req, res) => {
  try {
    const { name, strategy_type, config } = req.body;
    const result = await run(
      'INSERT INTO strategy_presets (user_id, name, strategy_type, config) VALUES (?, ?, ?, ?)',
      [req.user.id, name, strategy_type, JSON.stringify(config)]
    );
    res.json({ id: result.id, name, strategy_type, config });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update preset
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { name, config } = req.body;
    await run(
      'UPDATE strategy_presets SET name = ?, config = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? AND user_id = ?',
      [name, JSON.stringify(config), req.params.id, req.user.id]
    );
    res.json({ id: req.params.id, message: 'Updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete preset
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await run('DELETE FROM strategy_presets WHERE id = ? AND user_id = ?', [
      req.params.id,
      req.user.id
    ]);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
