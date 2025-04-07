import mongoose from 'mongoose';

const PiloteSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  age: { type: Number, required: true },
});

const Pilote = mongoose.model('Pilote', PiloteSchema);

export default Pilote;
