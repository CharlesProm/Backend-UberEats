const db = require('../helpers/config');
const drive = require('../helpers/drive');
const user = require('../helpers/user');
const client = require('../helpers/client');
// const request = require("request");


const newDrive = async (req, res) => {
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
            await db.query(`${drive.insertDataDrive}`,
                [2, username, first_name, second_name, first_lastname, second_lastname, birthdate, email, password, false])
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
    newDrive
}
