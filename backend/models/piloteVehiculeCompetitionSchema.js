import mongoose from 'mongoose';

const PiloteVehiculeCompetitionSchema = new mongoose.Schema({
  pilote: { type: mongoose.Schema.Types.ObjectId, ref: 'Pilote', required: true },
  vehicule: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicule', required: true },
  competition: { type: mongoose.Schema.Types.ObjectId, ref: 'Competition', required: true },
});

const Pvc = mongoose.model('Pvc', PiloteVehiculeCompetitionSchema);

export default Pvc;
