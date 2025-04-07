import dotenv from 'dotenv';
import express from 'express';
import connectDb from './config/db.js';

dotenv.config();

const app = express();

// Connecter à la base de données :
connectDb();

// Vérifier le corp de la requete
app.use(express.json());

// Route pour créer un post
app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
