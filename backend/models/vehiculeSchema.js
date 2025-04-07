import mongoose from 'mongoose';

const VehiculeSchema = new mongoose.Schema({
  marque: { type: String, required: true },
  modele: { type: String, required: true, unique: true },
  image_url: { type: String, required: true, unique: true },
});

const Vehicule = mongoose.model('Vehicule', VehiculeSchema);

export default Vehicule;
