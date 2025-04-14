import mongoose from 'mongoose';

const LieuSchema = new mongoose.Schema({
  pays: { type: String, required: true },
  ville: { type: String, required: true },
  terrain: {
    type: String,
    enum: ['Asphalte', 'Terre', 'Neige', 'Boue', 'Desert'],
    required: true,
  },
  competition: { type: mongoose.Schema.Types.ObjectId, ref: 'Competition', required: true },
  circuit: { type: mongoose.Schema.Types.ObjectId, ref: 'Circuit', required: true },
});

const Lieu = mongoose.model('Lieu', LieuSchema);

export default Lieu;
