const pool = require ('../database')
        // const helpers = require('../libs/helpers');

//insertar solicitud historico
const solicitudhistoricoCtr = {}

//--Registro de operaci�n en historico de solicitudes
solicitudhistoricoCtr.insertSolicitud_Historico = async(req, res) => {
    try {
        const {id_solicitud, id_usuariorev, id_solestado, observaciones} = req.body;
        const response = await pool.query(
                `insert into solicitud_historico (id_solicitud, id_usuariorev, id_solestado, fecha_reg, observaciones)
                values ($1,$2,$3,now(),$4);` ,
                [id_solicitud, id_usuariorev, id_solestado, observaciones]
        ); 
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//Registro de operaci�n en historico de solicitudes
/*solicitudhistoricoCtr.insertRegistro_solicitud_Historico = async(req, res) => {
    try {
        const {id_solicitud, id_usuariorev, id_solestado, observaciones} = req.body;
        const response = await pool.query(
                `insert into solicitud_historico (id_solicitud, id_usuariorev, id_solestado, fecha_reg, observaciones)
                values ($1,$2,$3,now(),$4);` , 
                [id_solicitud, id_usuariorev, id_solestado, observaciones]
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//--Registro de operaci�n en historico de solicitudes
solicitudhistoricoCtr.insertRegistro_Historico_Solicitudes = async(req, res) => {
    try {
        const {id_solicitud, id_usuariorev, id_solestado, observaciones} = req.body;
        const response = await pool.query(
                `insert into solicitud_historico (id_solicitud, id_usuariorev, id_solestado, fecha_reg, observaciones)
                values ($1,$2,$3,now(),$4);` ,
                [id_solicitud, id_usuariorev, id_solestado, observaciones]
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//--Registro de operaci�n en historico de solicitudes
solicitudhistoricoCtr.insertRegistro_operacion_Historico_Solicitudes = async(req, res) => {
    try {
        const {id_solicitud, id_usuariorev, id_solestado, observaciones} = req.body;
        const response = await pool.query(
                `insert into solicitud_historico (id_solicitud, id_usuariorev, id_solestado, fecha_reg, observaciones)
                values ($1,$2,$3,now(),$4) ;` ,
                [id_solicitud, id_usuariorev, id_solestado, observaciones]
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
} */

module.exports = solicitudhistoricoCtr