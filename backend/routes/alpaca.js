import express from 'express';
import axios from 'axios';
import { verifyToken } from './auth.js';
import { get, run } from '../db/init.js';

const router = express.Router();
const ALPACA_BASE_URL = process.env.ALPACA_BASE_URL || 'https://paper-api.alpaca.markets';

function getAlpacaHeaders(apiKey, secretKey) {
  return {
    'APCA-API-KEY-ID': apiKey,
    'APCA-API-SECRET-KEY': secretKey
  };
}

// Get account info
router.get('/account', verifyToken, async (req, res) => {
  try {
    const user = await get('SELECT alpaca_api_key, alpaca_secret_key FROM users WHERE id = ?', [
      req.user.id
    ]);
    if (!user?.alpaca_api_key) return res.status(400).json({ error: 'Alpaca not connected' });

    const response = await axios.get(`${ALPACA_BASE_URL}/v2/account`, {
      headers: getAlpacaHeaders(user.alpaca_api_key, user.alpaca_secret_key)
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

// Get positions
router.get('/positions', verifyToken, async (req, res) => {
  try {
    const user = await get('SELECT alpaca_api_key, alpaca_secret_key FROM users WHERE id = ?', [
      req.user.id
    ]);
    if (!user?.alpaca_api_key) return res.status(400).json({ error: 'Alpaca not connected' });

    const response = await axios.get(`${ALPACA_BASE_URL}/v2/positions`, {
      headers: getAlpacaHeaders(user.alpaca_api_key, user.alpaca_secret_key)
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

// Place order
router.post('/orders', verifyToken, async (req, res) => {
  try {
    const { symbol, qty, side, order_type, time_in_force } = req.body;
    const user = await get('SELECT alpaca_api_key, alpaca_secret_key FROM users WHERE id = ?', [
      req.user.id
    ]);
    if (!user?.alpaca_api_key) return res.status(400).json({ error: 'Alpaca not connected' });

    const response = await axios.post(
      `${ALPACA_BASE_URL}/v2/orders`,
      {
        symbol,
        qty,
        side,
        type: order_type || 'market',
        time_in_force: time_in_force || 'day'
      },
      {
        headers: getAlpacaHeaders(user.alpaca_api_key, user.alpaca_secret_key)
      }
    );

    // Log trade
    await run(
      'INSERT INTO trade_logs (user_id, symbol, side, quantity, price, status) VALUES (?, ?, ?, ?, ?, ?)',
      [req.user.id, symbol, side, qty, 0, 'pending']
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

// Get order history
router.get('/orders', verifyToken, async (req, res) => {
  try {
    const user = await get('SELECT alpaca_api_key, alpaca_secret_key FROM users WHERE id = ?', [
      req.user.id
    ]);
    if (!user?.alpaca_api_key) return res.status(400).json({ error: 'Alpaca not connected' });

    const response = await axios.get(`${ALPACA_BASE_URL}/v2/orders`, {
      headers: getAlpacaHeaders(user.alpaca_api_key, user.alpaca_secret_key),
      params: { status: 'all', limit: 100 }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

export default router;
