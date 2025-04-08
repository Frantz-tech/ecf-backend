import { Service } from '../services/competService.js';

const createCompet = async (req, res) => {
  try {
    const result = await Service.createCompet(req.body);

    if (result.errors) {
      return res.status(400).json({ error: result.errors });
    }
    res.status(201).json({ message: 'Compétition crée avec succès : ', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCompets = async (_, res) => {
  try {
    const result = await Service.getAllCompets();
    res.status(200).json({ message: ' Compétitions récupérés avec succès : ', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCompetById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Service.getCompetById(id);

    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }
    res.status(200).json({ message: 'Compétition récupéré avec succès :', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCompet = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Service.updateCompet(id, req.body);

    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }

    res.status(200).json({ message: 'Compétition mise à jour : ', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCompet = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Service.deleteCompet(id);
    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }
    res.status(200).json({ message: 'Compétition supprimé avec succès :', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const Controller = {
  createCompet,
  getAllCompets,
  getCompetById,
  updateCompet,
  deleteCompet,
};
