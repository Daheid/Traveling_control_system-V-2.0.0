const mongoose = require("mongoose")
const URI = process.env.DATABASE_URI

const dbConexion = async () => {
  try {
    await mongoose.connect(URI)
    console.log("Conexion establecida")
  } catch (err) {
    console.log(err)
  }
}

module.exports = dbConexion
