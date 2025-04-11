import bcrypt from 'bcryptjs'; // Pour le hachage du mot de passe
import { adminService } from '../services/adminService.js'; // Assure-toi que le chemin est correct

// Fonction pour authentifier un administrateur
const authenticateAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier si l'administrateur existe avec cet email
    const admin = await adminService.getAdminByEmail(email);
    if (!admin) {
      return res.status(404).json({ message: 'Administrateur non trouvé' });
    }

    // Vérifier le mot de passe
    const isPasswordCorrect = await adminService.verifyAdminPassword(admin, password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    res.status(200).json({ message: 'Authentification réussie', token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// Fonction pour créer un administrateur
const createAdmin = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Vérifier si l'email existe déjà
    const existingAdmin = await adminService.getAdminByEmail(email);
    if (existingAdmin) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    // Hachage du mot de passe avant de sauvegarder
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel administrateur avec le mot de passe haché
    const admin = await adminService.createAdmin(email, hashedPassword, role);

    res.status(201).json({ message: 'Administrateur créé avec succès', admin });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de l'administrateur" });
  }
};

export const adminController = {
  authenticateAdmin,
  createAdmin, // Ajout de la fonction createAdmin
};
