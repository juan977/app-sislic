const pool = require('../database')
// const helpers = require('../libs/helpers');

//insertar datos en el contribuyente
const contribuyenteCtr = {}

//Insertar datos contribuyentes

contribuyenteCtr.insertContribuyente = async (req, res) => {
    try {
        const { tipo_contribuyente, ruc, razon_social, direccion, distrito,
            provincia, departamento, reg_tributario, correo, telefono } = req.body;
        const response = await pool.query(
            `insert into contribuyente (tipo_contribuyente, ruc, razon_social, direccion, 
                distrito, provincia, departamento, reg_tributario, correo, telefono)
                values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning id_contribuyente;` ,
            [tipo_contribuyente, ruc, razon_social, direccion, distrito,
                provincia, departamento, reg_tributario, correo, telefono]
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

module.exports = contribuyenteCtr