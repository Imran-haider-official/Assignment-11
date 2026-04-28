import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import ConnectDB from '../src/config/db.js';
import ProductRoutes from '../src/Routes/ProductRoutes.js';
import userRoutes from '../src/Routes/UserRoute.js';

const app = express();
app.use(cors());
app.use(express.json());

ConnectDB();
app.use('/products', ProductRoutes);
app.use('/user', userRoutes);

export default function handler(req, res) {
  return app(req, res);
}
