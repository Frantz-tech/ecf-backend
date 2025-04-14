import { Service } from '../services/carService.js';

const createCar = async (req, res) => {
  try {
    const result = await Service.createCar(req.body);

    if (result.errors) {
      return res.status(400).json({ error: result.errors });
    }
    res.status(201).json({ message: 'Véhicule crée avec succès : ', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCar = async (_, res) => {
  try {
    const result = await Service.getAllCars();
    res.status(200).json({ message: ' Véhicules récupérés avec succès : ', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Service.getCarById(id);

    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }
    res.status(200).json({ message: 'Véhicule récupéré avec succès :', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Service.updatedCar(id, req.body);

    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }

    res.status(200).json({ message: 'Véhicule mis à jour : ', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Service.deleteCar(id);
    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }
    res.status(200).json({ message: 'Véhicule supprimé avec succès :', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const Controller = {
  createCar,
  getAllCar,
  getCarById,
  updateCar,
  deleteCar,
};
