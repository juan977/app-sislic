const pool = require ('../database')
        // const helpers = require('../libs/helpers');

//insertar solicitud documento
const solicitudDocumentoCtr = {}

//Insertar solicitudes de documentos
solicitudDocumentoCtr.insertSolicitud_Documentos = async(req, res) => {
    try {
        const {} = req.body;
        const response = await pool.query(
                `insert into solicitud_documentos (id_solicitud, id_tipodoc, link_file, estado)
                values (1,1,'link 1','1'),(1,2,'link 2','1'),(1,3,'link 3','1'),(1,4,'link 4','1');`
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//lISTA DE DOCUMENTOS
solicitudDocumentoCtr.obtener_lista_Documentos = async(req, res) => {
    try {
        const response = await pool.query(
                `select * 
                from solicitud_documentos sd 
                where sd.id_solicitud  = '1';`
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//Actualizaciones de estados de los documentos
solicitudDocumentoCtr.modificar_estado_Documentos = async(req, res) => {
    try {
        const {estado, observaciones, id_usuariorev, id_solicitud} = req.body;
        const response = await pool.query(
                `update solicitud_documentos 
                set estado = $1, observaciones = 'Documento Correcto', id_usuariorev = $3
                where id_solicitud = $4;` ,
                [estado, observaciones, id_usuariorev, id_solicitud]
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

module.exports = solicitudDocumentoCtr