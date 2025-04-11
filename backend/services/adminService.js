import bcrypt from 'bcryptjs'; // Pour la comparaison du mot de passe
import Admin from '../models/adminSchema.js'; // Assure-toi que le chemin est correct

// Fonction pour récupérer un administrateur par email
const getAdminByEmail = async (email) => {
  return await Admin.findOne({ email });
};

// Fonction pour vérifier le mot de passe d'un administrateur
const verifyAdminPassword = async (admin, password) => {
  return admin ? await bcrypt.compare(password, admin.password) : false;
};

// Fonction pour créer un administrateur
const createAdmin = async (email, password, role) => {
  try {
    const newAdmin = new Admin({ email, password, role });
    await newAdmin.save();
    return newAdmin;
  } catch (error) {
    throw new Error("Erreur lors de la création de l'administrateur");
  }
};

export const adminService = {
  getAdminByEmail,
  verifyAdminPassword,
  createAdmin, // Ajout de la fonction createAdmin
};
