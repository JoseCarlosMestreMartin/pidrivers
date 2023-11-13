const axios = require("axios");

const clearData = (data) => {
  return data.map((c) => {
    return {
      IdDriver: c.cca3,
      name: c.name.common,
      img_flag: c.flags[1],
      continent: c.continents[0],
      capital: c.capital ? c.capital[0] : "Capital no encontrada",
      subregion: c.subregion,
      area: c.area,
      population: c.population,
    };
  });
};

const getAllDrivers = async () => {
  const result = (await axios.get("http://localhost:5000/drivers")).data;
  return result;
};

const getDriverById = async (id) => {
  const result = (await axios.get("http://localhost:5000/drivers")).data;
  return result;
};

const getDriversByName = async (name) => {
  const result = (await axios.get("http://localhost:5000/drivers")).data;
  return result;
};

module.exports = {
  getAllDrivers,
  getDriversByName,
  getDriverById,
};
