import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDb from './config/db.js';
import routes from './routes/routes.js';
dotenv.config();

const app = express();

// Connecter à la base de données :
connectDb();
app.use(cors());
// Vérifier le corp de la requete
app.use(express.json());

// Routes
app.use(routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
