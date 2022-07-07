const pool = require('../database')
// const helpers = require('../libs/helpers');

//insertar establecimiento
const establecimientoCtr = {}

establecimientoCtr.insertEstablecimiento = async (req, res) => {
    try {
        const { id_contribuyente, direccion, numero,
            tipo_predio, clasificacion, zonificacion, area_local, aforo, antiguedad, nombre_comercial, referencia,
            pisos, empleados } = req.body;
        const response = await pool.query(
            `insert into establecimiento (id_contribuyente, direccion, numero, letra, interior, interior_let, mz, lote, bloque, dpto, urb, 
                tipo_predio, clasificacion, zonificacion, area_local, aforo, antiguedad, nombre_comercial, referencia, 
                pisos, empleados)
                values ($1,$2,$3,'','','','','','','','',$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning id_establecimiento;` ,
            [id_contribuyente, direccion, numero, tipo_predio, clasificacion, zonificacion, area_local,
                aforo, antiguedad, nombre_comercial, referencia, pisos, empleados]
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//insertar datos en el establecimiento
establecimientoCtr.obtener_datos_Establecimiento = async (req, res) => {
    try {
        const response = await pool.query(
            `select id_acteconomico
            from establecimiento_actividad ea
            inner join establecimiento e on ea.id_establecimiento = e.id_establecimiento
            inner join solicitud s  on e.id_establecimiento  = s.id_establecimiento 
            where s.id_solicitud = '1';`
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//insertar datos de pisos en el establecimiento
establecimientoCtr.obtener_datos_pisos_establecimiento = async (req, res) => {
    try {
        const response = await pool.query(
            `select piso, m2  
            from establecimiento_pisos ep  
            inner join establecimiento e on ep.id_establecimiento = e.id_establecimiento
            inner join solicitud s  on e.id_establecimiento  = s.id_establecimiento 
            where s.id_solicitud = '1';`
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//insert actividades de establecimiento
establecimientoCtr.insert_actividades_de_establecimiento = async (req, res) => {
    try {
        const {id_establecimiento,id_acteconomico} = req.body;
        const response = await pool.query(
            `insert into establecimiento_actividad (id_establecimiento,id_acteconomico)
            values ($1,$6); returning id_establecimiento` , [id_establecimiento,id_acteconomico]
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//insert datos de actividad en el establecimiento
establecimientoCtr.obtener_datos_de_actividad_de_establecimiento = async (req, res) => {
    try {
        const response = await pool.query(
            `select id_acteconomico
            from establecimiento_actividad ea
            inner join establecimiento e on ea.id_establecimiento = e.id_establecimiento
            inner join solicitud s  on e.id_establecimiento  = s.id_establecimiento 
            where s.id_solicitud = '1';`
        );
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

module.exports = establecimientoCtr