import Pvc from '../models/piloteVehiculeCompetitionSchema.js';

// Créer une nouvelle liaison (Pilote, Véhicule, Compétition)
const createPvc = async (data) => {
  try {
    const newPvc = new Pvc(data);
    await newPvc.save();
    return newPvc;
  } catch (error) {
    throw new Error(`Erreur lors de la création de la liaison : ${error.message}`);
  }
};

// Récupérer toutes les liaisons
const getAllPvcs = async () => {
  try {
    const getAll = await Pvc.find();
    return getAll;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de toutes les liaisons: ${error.message}`);
  }
};

// Récupérer une liaison par ID
const getPvcById = async (id) => {
  try {
    const pvc = await Pvc.findById(id);

    if (!pvc) {
      throw new Error(`Liaison avec l'ID ${id} non trouvé`);
    }
    return pvc;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de la liaison: ${error.message}`);
  }
};

// Mettre à jour une liaison par ID
const updatePvc = async (id, data) => {
  try {
    const updatedPvc = await Pvc.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true });

    if (!updatedPvc) {
      throw new Error(`Liaison avec l'ID ${id} non trouvée pour la mise à jour`);
    }

    return updatedPvc;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour de la liaison: ${error.message}`);
  }
};

// Supprimer une liaison par ID
const deletePvc = async (id) => {
  try {
    const pvc = await Pvc.findByIdAndDelete(id);

    if (!pvc) {
      throw new Error(`Liaison avec l'ID ${id} non trouvé`);
    }

    return pvc;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression de la liaison: ${error.message}`);
  }
};

export const Repository = {
  createPvc,
  getAllPvcs,
  getPvcById,
  updatePvc,
  deletePvc,
};
