import { Service } from '../services/piloteService.js';

const createPilote = async (req, res) => {
  try {
    const result = await Service.createPilote(req.body);

    if (result.errors) {
      return res.status(400).json({ error: result.errors });
    }
    res.status(201).json({ message: 'Pilote crée avec succès : ', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllPilotes = async (_, res) => {
  try {
    const result = await Service.getAllPilotes();
    res.status(200).json({ message: ' Pilotes récupérés avec succès : ', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPiloteById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Service.getPiloteById(id);

    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }
    res.status(200).json({ message: 'Pilote récupéré avec succès :', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updatePilote = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Service.updatedPilote(id, req.body);

    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }

    res.status(200).json({ message: 'Pilote mis à jour : ', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletePilote = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Service.deletePilote(id);
    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }
    res.status(200).json({ message: 'Pilote supprimé avec succès :', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const Controller = {
  createPilote,
  getAllPilotes,
  getPiloteById,
  updatePilote,
  deletePilote,
};
