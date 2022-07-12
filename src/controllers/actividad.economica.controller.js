const pool = require("../database");
// const helpers = require('../libs/helpers');

//Actividades Economicas
const ActividadEconomicaCtr = {};

//Listar actividades Economicas
ActividadEconomicaCtr.obtener_lista_actividad_economico = async (req, res) => {
  try {
    const response = await pool.query(`select * from actividad_economica order by codigo;`);
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error...!");
  }
};

module.exports = ActividadEconomicaCtr;
