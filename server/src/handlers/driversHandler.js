const {
    getAllDrivers,
    getDriversByName,
    getDriverById,
      } = require("../controller/driverController");
  
  const getDriversHandler = async (req, res) => {
    const { name } = req.query;
  
    try {
        if (!name) {
        const result = await getAllDrivers();
        return res.status(200).send(result);
      } else {
        const resultName = await getDriversByName(name);
        !resultName.length
          ? res.status(404).send(`No se encontraron driver que contengan ${name}`)
          : res.send(resultName);
      }
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  };
  
  const getDriversIdHandler = async (req, res) => {
    const { idDriver } = req.params;
  
    try {
      const foundDriver = await getDriverById(idDriver);
      if (!foundDriver) res.status(404).send("Codigo de driver no encontrado");
      else res.send(foundDriver);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  module.exports = { getDriversHandler, getDriversIdHandler };
  