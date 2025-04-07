import { Repository } from '../repository/piloteRepository.js';

const createPilote = async (piloteData) => {
  try {
    const errors = [];

    if (!piloteData) {
      errors.push('Données requise pour la création du pilote');
    }
    if (!piloteData.nom || piloteData.nom.length < 3) {
      errors.push('Le nom du pilote doit faire au minimum 3 caractères pour être valide');
    }
    if (!piloteData.prenom || piloteData.prenom.length < 3) {
      errors.push('Le prenom du pilote doit faire au minimum 3 caractères pour être validé');
    }
    if (errors.length > 0) {
      return { errors };
    }

    const newPilote = await Repository.createPilote(piloteData);

    return newPilote;
  } catch (error) {
    throw new Error(`Erreur lors de la création du pilote: ${error.message}`);
  }
};

const getAllPilotes = async () => {
  try {
    const pilotes = await Repository.getAllPilotes();

    return pilotes;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des pilotes: ${error.message}`);
  }
};

const getPiloteById = async (id) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID du pilote est requis");
    }
    if (errors.length > 0) {
      return { errors };
    }

    const pilote = await Repository.getPiloteById(id);

    return pilote;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération du pilote: ${error.message}`);
  }
};

const updatedPilote = async (id, piloteData) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID du pilote est requis pour la modification");
    }

    if (errors.length > 0) {
      return { errors };
    }
    const updated = await Repository.updatePilote(id, piloteData);
    if (!updated) {
      throw new Error(`Pilote avec l'ID ${id} non trouvé pour la mise à jour`);
    }

    return updated;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du pilote ${error.message}`);
  }
};
const deletePilote = async (id) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID du pilote est requis pour la suppression");
    }
    if (errors.length > 0) {
      return { errors };
    }

    const result = await Repository.deletePilote(id);
    if (!result) {
      throw new Error(`Pilote avec l'id: ${id} non trouvé pour la suppression`);
    }

    return result;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression du pilote ${error.message}`);
  }
};

export const Service = {
  createPilote,
  getAllPilotes,
  getPiloteById,
  updatedPilote,
  deletePilote,
};
