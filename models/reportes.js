const mongoose = require("mongoose")

const reporteSchema = new mongoose.Schema(
  {
    usuario: { ref: "usuarios", type: mongoose.Schema.Types.ObjectId },
    fecha: { type: Date, default: Date.now },
    asunto: { type: String, required: true },
    reporte: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = new mongoose.model("reportes", reporteSchema)
