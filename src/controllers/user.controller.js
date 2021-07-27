const db = require('../helpers/config');
const user = require('../helpers/user');

const loginUser = async (req, res, next) => {


        try {
                const { username, password } = req.body;
                let resUser = await db.query(`${user.loginUser}`, [username, password])
                if (resUser.rows.length > 0) {
                        res.send(JSON.stringify({
                                status: 200,
                                response: resUser.rows[0]
                        }));
                        return
                }
                resUser = await db.query(`${user.loginDrive}`, [username, password])
                if (resUser.rows.length > 0) {
                        res.send(JSON.stringify({
                                status: 200,
                                response: resUser.rows[0]
                        }));
                        return
                }
                resUser = await db.query(`${user.loginCliente}`, [username, password])
                if (resUser.rows.length > 0) {
                        res.send(JSON.stringify({
                                status: 200,
                                response: resUser.rows[0]
                        }));
                        return
                }


                else {
                        res.send(JSON.stringify({
                                status: 404,
                                response: "No se encontro el recurso"
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

const getUser = async (req, res, next) => {


        try {
                const { descripcion } = req.body;
                const response = await db.query(`${query.getUsuario}`, [descripcion])
                const data = {
                        id_usuario: response.rows[0].id_usuario,
                        usuario: response.rows[0].usuario,
                        nombre: response.rows[0].nombre,
                        apellido: response.rows[0].apellido
                }
                res.send(JSON.stringify({
                        status: 200,
                        response: [data]
                }));
        } catch (error) {
                res.send(JSON.stringify({
                        status: 404,
                        response: error
                }));
                throw error
        }
}


const signup_client = async (req, res, next) => {

        try {
                const { username, password } = req.body;
                let resUser = null
                let resDrive = null
                let resClient = null
                resUser = await db.query(`${user.loginUser}`, [username])
                resDrive = await db.query(`${user.loginDrive}`, [username])
                resClient = await db.query(`${user.loginCliente}`, [username])
                if (resUser != null || resClient != null || resClient != null) {
                        res.send(JSON.stringify({
                                status: 200,
                                response: "El nombre de usuario ya se encuentra en uso"
                        }));
                } else {

                }

        } catch (error) {
                res.send(JSON.stringify({
                        status: 404,
                        response: error
                }));
                throw error
        }
}

const update = async (req, res, next) => {

        try {
                const { id_user, username, name, lastname, email, password } = req.body;
                await db.query(`${query.update}`, [username, name, lastname, email, password, id_user])
                res.send(JSON.stringify({
                        status: 200,
                        response: "Se ha actualizado de forma exitosa"
                }));
        } catch (error) {
                res.send(JSON.stringify({
                        status: 404,
                        response: error
                }));
                throw error
        }
}


const getProfile = async (req, res, next) => {

        try {
                const { user } = req.body;
                let resUser = await db.query(`${query.getUserId}`, [user])
                res.send(JSON.stringify({
                        status: 200,
                        response: resUser.rows[0]
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
        loginUser,
        getUser,
        signup_client,
        update,
        getProfile
}
