import Pilote from '../models/piloteSchema.js';

const createPilote = async (piloteData) => {
  try {
    const newPilote = new Pilote(piloteData);
    await newPilote.save();
    return newPilote;
  } catch (error) {
    throw new Error(`Erreur lors de la création du pilotes: ${error.message}`);
  }
};

const getAllPilotes = async () => {
  try {
    const getAll = await Pilote.find();
    return getAll;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de tous les pilotes: ${error.message}`);
  }
};

const getPiloteById = async (id) => {
  try {
    const pilote = await Pilote.findById(id);

    if (!pilote) {
      throw new Error(`Pilote avec l'ID ${id} non trouvé`);
    }
    return pilote;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération du pilotes: ${error.message}`);
  }
};

const updatePilote = async (id, piloteData) => {
  try {
    const updatedPilote = await Pilote.findByIdAndUpdate(id, { $set: piloteData }, { new: true, runValidators: true });

    if (!updatePilote) {
      throw new Error(`Pilote avec l'ID ${id} non trouvé pour la mise à jour`);
    }

    return updatedPilote;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du pilote: ${error.message}`);
  }
};

const deletePilote = async (id) => {
  try {
    const pilote = await Pilote.findByIdAndDelete(id);

    if (!pilote) {
      throw new Error(`Pilote avec l'ID ${id} non trouvé`);
    }

    return pilote;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression du pilote: ${error.message}`);
  }
};

export const Repository = {
  createPilote,
  getAllPilotes,
  getPiloteById,
  updatePilote,
  deletePilote,
};
