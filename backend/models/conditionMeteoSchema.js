import mongoose from 'mongoose';

const ConditionMeteoSchema = new mongoose.Schema({
  temperature: { type: Number, required: true },
  humidite: { type: Number, required: true },
  vent: { type: Number, required: true },
  competition: { type: mongoose.Schema.Types.ObjectId, ref: 'Competition', required: true },
});

const Meteo = mongoose.model('Meteo', ConditionMeteoSchema);

export default Meteo;
