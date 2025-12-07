import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import userRoutes from './routes/user.routes.js';
import groupRoutes from './routes/group.routes.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/groups", groupRoutes);

export default app;
