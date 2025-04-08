import Competition from '../models/competitionSchema.js';

const createCompet = async (data) => {
  try {
    const newCompet = new Competition(data);
    await newCompet.save();
    return newCompet;
  } catch (error) {
    throw new Error(`Erreur lors de la création de la compétition : ${error.message}`);
  }
};

const getAllCompets = async () => {
  try {
    const getAll = await Competition.find();
    return getAll;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de toutes les compétitions: ${error.message}`);
  }
};

const getCompetById = async (id) => {
  try {
    const compet = await Competition.findById(id);

    if (!compet) {
      throw new Error(`Compétition avec l'ID ${id} non trouvé`);
    }
    return compet;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de la compétition: ${error.message}`);
  }
};

const updateCompet = async (id, data) => {
  try {
    const updatedCompet = await Competition.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true });

    if (!updatedCompet) {
      throw new Error(`Compétition avec l'ID ${id} non trouvé pour la mise à jour`);
    }

    return updatedCompet;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour de la compétition: ${error.message}`);
  }
};

const deleteCompet = async (id) => {
  try {
    const compet = await Competition.findByIdAndDelete(id);

    if (!compet) {
      throw new Error(`Compétition avec l'ID ${id} non trouvé`);
    }

    return compet;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression de la compétition: ${error.message}`);
  }
};

export const Repository = {
  createCompet,
  getAllCompets,
  getCompetById,
  updateCompet,
  deleteCompet,
};
