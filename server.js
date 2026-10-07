import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import strategyRoutes from './backend/routes/strategies.js';
import alpacaRoutes from './backend/routes/alpaca.js';
import authRoutes from './backend/routes/auth.js';
import fileRoutes from './backend/routes/files.js';
import { initializeDatabase } from './backend/db/init.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Initialize database
await initializeDatabase();

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/strategies', strategyRoutes);
app.use('/api/alpaca', alpacaRoutes);
app.use('/api/files', fileRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

app.listen(PORT, () => {
  console.log(`✅ Strategy Studio running on port ${PORT}`);
  console.log(`📍 Frontend: http://localhost:${PORT}`);
});
