import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

// Définition du schéma pour l'administrateur
const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Assure-toi que l'email est en minuscule
      trim: true, // Supprime les espaces au début et à la fin
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'admin',
    },
  },
  {
    timestamps: true,
  }
);

// Hachage du mot de passe avant de sauvegarder dans la base de données
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Si le mot de passe n'a pas changé, on ne le modifie pas
  this.password = await bcrypt.hash(this.password, 10); // Hachage avec un sel de 10 tours
  next();
});

// Méthode pour comparer les mots de passe
adminSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password); // Comparer le mot de passe en clair avec le mot de passe haché
};

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
