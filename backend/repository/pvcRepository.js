import Competition from '../models/competitionSchema.js'; // Modèle Compétition
import Pilote from '../models/piloteSchema.js'; // Modèle Pilote
import Pvc from '../models/piloteVehiculeCompetitionSchema.js';
import Vehicule from '../models/vehiculeSchema.js'; // Modèle Véhicule

const createPvc = async (data) => {
  try {
    // Recherche du pilote par son nom et prénom
    const pilote = await Pilote.findOne({ nom: data.pilote.nom, prenom: data.pilote.prenom }).exec();
    if (!pilote) {
      throw new Error(`Pilote avec le nom ${data.pilote.nom} et prénom ${data.pilote.prenom} non trouvé`);
    }

    // Recherche du véhicule par son nom
    const vehicule = await Vehicule.findOne({ nom: data.vehicule }).exec();
    if (!vehicule) {
      throw new Error(`Véhicule avec le nom ${data.vehicule} non trouvé`);
    }

    // Recherche de la compétition par son nom
    const competition = await Competition.findOne({ nom: data.competition }).exec();
    if (!competition) {
      throw new Error(`Compétition avec le nom ${data.competition} non trouvée`);
    }

    // Log des données pour vérifier
    console.log('Pilote trouvé :', pilote);
    console.log('Véhicule trouvé :', vehicule);
    console.log('Compétition trouvée :', competition);

    // Création de la liaison en utilisant les _id de chaque modèle
    const newPvc = new Pvc({
      pilote: pilote._id, // On s'assure de passer l'ObjectId du pilote
      vehicule: vehicule._id, // On s'assure de passer l'ObjectId du véhicule
      competition: competition._id, // On s'assure de passer l'ObjectId de la compétition
    });

    // Sauvegarde dans la base de données
    await newPvc.save();
    return newPvc;
  } catch (error) {
    throw new Error(`Erreur lors de la création de la liaison : ${error.message}`);
  }
};

// Récupérer toutes les liaisons
const getAllPvcs = async () => {
  try {
    const getAll = await Pvc.find().populate('pilote').populate('vehicule').populate('competition');
    return getAll;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de toutes les liaisons: ${error.message}`);
  }
};

// Récupérer une liaison par ID
const getPvcById = async (id) => {
  try {
    const pvc = await Pvc.findById(id);

    if (!pvc) {
      throw new Error(`Liaison avec l'ID ${id} non trouvé`);
    }
    return pvc;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de la liaison: ${error.message}`);
  }
};

// Mettre à jour une liaison par ID
const updatePvc = async (id, data) => {
  try {
    const updatedPvc = await Pvc.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true });

    if (!updatedPvc) {
      throw new Error(`Liaison avec l'ID ${id} non trouvée pour la mise à jour`);
    }

    return updatedPvc;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour de la liaison: ${error.message}`);
  }
};

// Supprimer une liaison par ID
const deletePvc = async (id) => {
  try {
    const pvc = await Pvc.findByIdAndDelete(id);

    if (!pvc) {
      throw new Error(`Liaison avec l'ID ${id} non trouvé`);
    }

    return pvc;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression de la liaison: ${error.message}`);
  }
};

export const Repository = {
  createPvc,
  getAllPvcs,
  getPvcById,
  updatePvc,
  deletePvc,
};
