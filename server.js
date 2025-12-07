import dotenv from 'dotenv';
import { connectDB } from './src/db.js';
import app from './src/app.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
    