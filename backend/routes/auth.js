import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult, body } from 'express-validator';
import { run, get } from '../db/init.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';

// Middleware to verify token
export function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
}

// Register
router.post(
  '/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { email, password } = req.body;
      const existingUser = await get('SELECT id FROM users WHERE email = ?', [email]);
      if (existingUser) return res.status(409).json({ error: 'User already exists' });

      const passwordHash = await bcryptjs.hash(password, 10);
      const result = await run('INSERT INTO users (email, password_hash) VALUES (?, ?)', [
        email,
        passwordHash
      ]);

      const token = jwt.sign({ id: result.id, email }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, user: { id: result.id, email } });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Login
router.post(
  '/login',
  body('email').isEmail(),
  body('password').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { email, password } = req.body;
      const user = await get('SELECT * FROM users WHERE email = ?', [email]);
      if (!user) return res.status(401).json({ error: 'Invalid credentials' });

      const validPassword = await bcryptjs.compare(password, user.password_hash);
      if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: '7d'
      });
      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          alpaca_connected: !!user.alpaca_api_key
        }
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Save Alpaca credentials
router.post('/alpaca/credentials', verifyToken, async (req, res) => {
  try {
    const { apiKey, secretKey } = req.body;
    await run(
      'UPDATE users SET alpaca_api_key = ?, alpaca_secret_key = ? WHERE id = ?',
      [apiKey, secretKey, req.user.id]
    );
    res.json({ message: 'Alpaca credentials saved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
