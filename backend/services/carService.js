import { Repository } from '../repository/carRepository.js';

const createCar = async (carData) => {
  try {
    const errors = [];

    if (!carData) {
      errors.push('Données requise pour la création du véhicule');
    }
    if (!carData.marque || carData.marque.length < 3) {
      errors.push('Le nom du véhicule doit faire au minimum 3 caractères pour être valide');
    }
    if (!carData.modele || carData.modele.length < 3) {
      errors.push('Le prenom du véhicule doit faire au minimum 3 caractères pour être valide');
    }
    if (errors.length > 0) {
      return { errors };
    }

    const newCar = await Repository.createCar(carData);

    return newCar;
  } catch (error) {
    throw new Error(`Erreur lors de la création du véhicule: ${error.message}`);
  }
};

const getAllCars = async () => {
  try {
    const cars = await Repository.getAllCars();
    return cars;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des véhicules: ${error.message}`);
  }
};

const getCarById = async (id) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID du véhicule est requis");
    }
    if (errors.length > 0) {
      return { errors };
    }

    const car = await Repository.getCarById(id);

    return car;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération du véhicule: ${error.message}`);
  }
};

const updatedCar = async (id, carData) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID du pilote est requis pour la modification");
    }

    if (errors.length > 0) {
      return { errors };
    }
    const updated = await Repository.updateCar(id, carData);
    if (!updated) {
      throw new Error(`Véhicule avec l'ID ${id} non trouvé pour la mise à jour`);
    }

    return updated;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du pilote ${error.message}`);
  }
};
const deleteCar = async (id) => {
  try {
    const errors = [];

    if (!id) {
      errors.push("L'ID du pilote est requis pour la suppression");
    }
    if (errors.length > 0) {
      return { errors };
    }

    const result = await Repository.deleteCar(id);
    if (!result) {
      throw new Error(`Véhicule avec l'id: ${id} non trouvé pour la suppression`);
    }

    return result;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression du Véhicule ${error.message}`);
  }
};

export const Service = {
  createCar,
  getAllCars,
  getCarById,
  updatedCar,
  deleteCar,
};
