import mongoose from 'mongoose';

const CategorieCompetitionSchema = new mongoose.Schema({
  nom: { type: String, required: true, unique: true },
  competition: { type: mongoose.Schema.Types.ObjectId, ref: 'Competition', required: true },
});

const Categorie = mongoose.model('Categorie', CategorieCompetitionSchema);

export default Categorie;
