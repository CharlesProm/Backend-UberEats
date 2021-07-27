const db = require('../helpers/config');
const company = require('../helpers/company');

const newCompany = async (req, res) => {
    try {
        const { nombre, direccion, id_empresa } = req.body;
        let resCompany
        if (id_empresa) {
            resCompany = await db.query(`${company.updateDataCompany} RETURNING id_empresa, nombre, direccion`, [nombre, direccion, id_empresa])
        } else {
            resCompany = await db.query(`${company.insertDataCompany} RETURNING id_empresa, nombre, direccion`, [nombre, direccion, true])
        }
        res.send(JSON.stringify({
            status: 200,
            response: resCompany.rows[0],
        }));
    } catch (error) {
        res.send(JSON.stringify({
            status: 404,
            response: error
        }));
        throw error
    }
}

const updateCompany = async (req, res) => {
    try {
        const { nombre, direccion, latitud, longitud, id_empresa } = req.body;

        await db.query(`${company.updateDataCompany}`, [name, direccion, latitude, longitude, id_company])
        res.send(JSON.stringify({
            status: 200,
            response: "Los datos se han guardados con exito",
        }));
    } catch (error) {
        res.send(JSON.stringify({
            status: 404,
            response: error
        }));
        throw error
    }
}

const deleteCompany = async (req, res) => {
    try {
        const { id_empresa } = req.body;
        await db.query(`${company.deleteDataCompany}`, [false, id_empresa])
        res.send(JSON.stringify({
            status: 200,
            response: "Se ha eliminado exitosamente",
        }));
    } catch (error) {
        res.send(JSON.stringify({
            status: 404,
            response: error
        }));
        throw error
    }
}

const getCompany = async (req, res) => {
    try {
        const resCompany = await db.query(`${company.getDataCompany}`)
        res.send(JSON.stringify({
            status: 200,
            response: resCompany.rows,
        }));
    } catch (error) {
        res.send(JSON.stringify({
            status: 404,
            response: error
        }));
        throw error
    }
}


module.exports = {
    newCompany,
    updateCompany,
    deleteCompany,
    getCompany,
}
