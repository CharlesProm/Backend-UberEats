const db = require('../helpers/config');
const client = require('../helpers/client');
const drive = require('../helpers/drive');
const user = require('../helpers/user');

const newClient = async (req, res) => {
    try {
        const { username, first_name, second_name, first_lastname, second_lastname, birthdate, email, password } = req.body;

        let resUser = await db.query(`${user.getUsuario}`, [username])
        let resDrive = await db.query(`${drive.getDrive}`, [username])
        let resClient = await db.query(`${client.getClient}`, [username])
        if (resUser.rows.length > 0 || resClient.rows.length > 0 || resDrive.rows.length > 0) {
            res.send(JSON.stringify({
                status: 404,
                response: "El nombre de usuario ya se encuentra en uso"
            }));
            return
        } else {
            await db.query(`${client.insertDataClient}`,
                [3, username, first_name, second_name, first_lastname, second_lastname, birthdate, email, password])
            res.send(JSON.stringify({
                status: 200,
                response: "Los datos se han guardados con exito",
            }));
        }


    } catch (error) {
        res.send(JSON.stringify({
            status: 404,
            response: error
        }));
        throw error
    }
}

module.exports = {
    newClient
}
