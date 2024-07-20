const mongoose = require("mongoose")

const rolesSchema = mongoose.Schema(
  {
    tipo: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = mongoose.model("roles", rolesSchema)
