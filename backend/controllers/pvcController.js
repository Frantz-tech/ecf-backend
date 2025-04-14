import { PvcService } from '../services/pvcService.js';

const createPvc = async (req, res) => {
  try {
    const result = await PvcService.createPvc(req.body);

    if (result.errors) {
      return res.status(400).json({ error: result.errors });
    }
    res.status(201).json({ message: 'Liaison créée avec succès', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllPvcs = async (_, res) => {
  try {
    const result = await PvcService.getAllPvcs();
    res.status(200).json({ message: 'Liaisons récupérées avec succès', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPvcById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PvcService.getPvcById(id);

    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }
    res.status(200).json({ message: 'Liaison récupérée avec succès', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updatePvc = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PvcService.updatePvc(id, req.body);

    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }

    res.status(200).json({ message: 'Liaison mise à jour', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletePvc = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PvcService.deletePvc(id);
    if (result.errors) {
      return res.status(400).json({ errors: result.errors });
    }
    res.status(200).json({ message: 'Liaison supprimée avec succès', data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const PvcController = {
  createPvc,
  getAllPvcs,
  getPvcById,
  updatePvc,
  deletePvc,
};
