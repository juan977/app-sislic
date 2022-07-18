const pool = require("../database");

//insertar datos de pisos en el establecimiento
establecimientoPisosCtr.ObtenerDatosPisosEstablecimiento = async (req, res) => {
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

establecimientoPisosCtr.DeletePisosEstablecimiento = async (req, res) => {
    try{
        const id = parseint(req.params.id);
        await pool.query('delete from establecimiento_pisos where id_piso=$1', [id])

        return res.status(200).json('Establecimiento_pisos ${id} eliminado correctamente....!');
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error....!')
    }
}

module.exports = establecimientoPisosCtr