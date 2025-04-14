import mongoose from 'mongoose';

const CompetitionSchema = new mongoose.Schema({
  nom: { type: String, required: true, unique: true },
  date_debut: { type: Date, required: true },
  date_fin: { type: Date, required: true },
});

const Competition = mongoose.model('Competition', CompetitionSchema, 'competititons');

export default Competition;
