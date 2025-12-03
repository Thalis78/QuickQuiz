import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { setupSocketHandlers } from './socketHandlers';
import apiRoutes from './apiRoutes';

const app = express();
const httpServer = createServer(app);

// Configuração do Socket.IO com CORS
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api', apiRoutes);

// Setup Socket.IO handlers
setupSocketHandlers(io);

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════╗
║   🚀 QuickQuiz Backend Server        ║
║                                       ║
║   📡 Socket.IO: http://localhost:${PORT}  ║
║   ✅ Status: Running                  ║
║   🕐 Started: ${new Date().toLocaleString('pt-BR')}     ║
╚═══════════════════════════════════════╝
  `);
});
