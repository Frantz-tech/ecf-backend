import Vehicule from '../models/vehiculeSchema.js';

const createCar = async (carData) => {
  try {
    const newCar = new Vehicule(carData);
    await newCar.save();
    return newCar;
  } catch (error) {
    throw new Error(`Erreur lors de la création du véhicule : ${error.message}`);
  }
};
const getAllCars = async () => {
  try {
    const getAll = await Vehicule.find();
    return getAll;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de tous les véhicules: ${error.message}`);
  }
};

const getCarById = async (id) => {
  try {
    const car = await Vehicule.findById(id);

    if (!car) {
      throw new Error(`Véhicule avec l'ID ${id} non trouvé`);
    }
    return car;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération du véhicule: ${error.message}`);
  }
};

const updateCar = async (id, carData) => {
  try {
    const updatedCar = await Pilote.findByIdAndUpdate(id, { $set: carData }, { new: true, runValidators: true });

    if (!updatedCar) {
      throw new Error(`Véhicule avec l'ID ${id} non trouvé pour la mise à jour`);
    }

    return updatedCar;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du véhicule: ${error.message}`);
  }
};

const deleteCar = async (id) => {
  try {
    const car = await Vehicule.findByIdAndDelete(id);

    if (!car) {
      throw new Error(`Véhicule avec l'ID ${id} non trouvé`);
    }

    return car;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression du véhicule: ${error.message}`);
  }
};

export const Repository = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
};
