const roles = require("./../models/roles")

module.exports = async () => {
  try {
    const contador = await roles.estimatedDocumentCount()
    if (contador > 0) return

    const valor = await Promise.all([
      new roles({ tipo: "Fiscal" }).save(),
      new roles({ tipo: "Administrador" }).save(),
    ])

    console.log("roles creados")
  } catch (err) {
    console.error(err)
  }
}
