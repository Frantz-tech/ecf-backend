import { Repository } from '../repository/competRepository.js';

const createCompet = async (data) => {
  try {
    const errors = [];

    if (!data) {
      errors.push('Données requise pour la création de la compétition');
    }
    if (!data.nom || data.nom.length < 10) {
      errors.push('Le nom du pilote doit faire au minimum 10 caractères pour être valide');
    }

    if (errors.length > 0) {
      return { errors };
    }

    const newCompet = await Repository.createCompet(data);

    return newCompet;
  } catch (error) {
    throw new Error(`Erreur lors de la création de la compétition: ${error.message}`);
  }
};

const getAllCompets = async () => {
  try {
    const compet = await Repository.getAllCompets();

    return compet;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des compétitions: ${error.message}`);
  }
};

const getCompetById = async (id) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID de la compétition est requis");
    }
    if (errors.length > 0) {
      return { errors };
    }

    const compet = await Repository.getCompetById(id);

    return compet;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de la compétition: ${error.message}`);
  }
};

const updateCompet = async (id, data) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID de la compétition est requis pour la modification");
    }

    if (errors.length > 0) {
      return { errors };
    }
    const updated = await Repository.updateCompet(id, data);
    if (!updated) {
      throw new Error(`Compétition avec l'ID ${id} non trouvé pour la mise à jour`);
    }

    return updated;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour de la compétition: ${error.message}`);
  }
};
const deleteCompet = async (id) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID de la compétition est requis pour la suppression");
    }
    if (errors.length > 0) {
      return { errors };
    }

    const result = await Repository.deleteCompet(id);
    if (!result) {
      throw new Error(`Compétition avec l'id: ${id} non trouvé pour la suppression`);
    }

    return result;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression de la compétition ${error.message}`);
  }
};

export const Service = {
  createCompet,
  getAllCompets,
  getCompetById,
  updateCompet,
  deleteCompet,
};
