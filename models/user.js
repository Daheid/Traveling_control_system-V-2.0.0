const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    cedula: { type: Number, required: true, unique: true },
    telefono: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    parada: { type: String, required: true },
    rol: { ref: "roles", type: mongoose.Schema.Types.ObjectId },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model("usuarios", userSchema)
