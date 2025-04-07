import mongoose from 'mongoose';

const CircuitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  distance: { type: Number, required: true },
  difficulte: {
    type: String,
    enum: ['Facile', 'Moyenne', 'Difficile'],
    required: true,
  },
});

const Circuit = mongoose.model('Circuit', CircuitSchema);

export default Circuit;
