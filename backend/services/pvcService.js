import { Repository } from '../repository/pvcRepository.js';

const createPvc = async (data) => {
  try {
    const errors = [];

    if (!data) {
      errors.push('Données requises pour la création de la liaison');
    }
    if (!data.pilote || !data.vehicule || !data.competition) {
      errors.push('Pilote, Véhicule et Compétition sont requis');
    }
    if (errors.length > 0) {
      return { errors };
    }

    const newPvc = await Repository.createPvc(data);

    return newPvc;
  } catch (error) {
    throw new Error(`Erreur lors de la création de la liaison : ${error.message}`);
  }
};

const getAllPvcs = async () => {
  try {
    const pvcs = await Repository.getAllPvcs(); // Pas de populate ici, c'est déjà fait dans le repository

    return pvcs;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des liaisons : ${error.message}`);
  }
};

const getPvcById = async (id) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID de la liaison est requis");
    }
    if (errors.length > 0) {
      return { errors };
    }

    const pvc = await Repository.getPvcById(id);

    return pvc;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de la liaison : ${error.message}`);
  }
};

const updatePvc = async (id, data) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID de la liaison est requis pour la mise à jour");
    }

    if (errors.length > 0) {
      return { errors };
    }

    const updated = await Repository.updatePvc(id, data);

    if (!updated) {
      throw new Error(`Liaison avec l'ID ${id} non trouvée pour la mise à jour`);
    }

    return updated;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour de la liaison : ${error.message}`);
  }
};

const deletePvc = async (id) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID de la liaison est requis pour la suppression");
    }
    if (errors.length > 0) {
      return { errors };
    }

    const result = await Repository.deletePvc(id);

    if (!result) {
      throw new Error(`Liaison avec l'ID ${id} non trouvée pour la suppression`);
    }

    return result;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression de la liaison : ${error.message}`);
  }
};

export const PvcService = {
  createPvc,
  getAllPvcs,
  getPvcById,
  updatePvc,
  deletePvc,
};
