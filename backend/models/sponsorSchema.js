import mongoose from 'mongoose';

const SponsorSchema = new mongoose.Schema({
  nom: { type: String, required: true, unique: true },
  logo: { type: String, required: true, unique: true },
  montant: { type: mongoose.Types.Decimal128, required: true },
  pilote: { type: mongoose.Schema.Types.ObjectId, ref: 'Pilote', required: true },
});

const Sponsor = mongoose.model('Sponsor', SponsorSchema);

export default Sponsor;
