const db = require('../database/config');
const { register, get,post, put, del  } = require("../helpers/petitions")

const verifyUsername = async (username) => {
    let resClient = await db.query(`${get.clientUsername}`, [username])
    let resDriver = await db.query(`${get.driverUsername}`, [username])
    let resCompany = await db.query(`${get.companyUsername}`, [username])
    let bool = true
    if (resCompany.rows.length > 0 || resClient.rows.length > 0 || resDriver.rows.length > 0) {
        bool = false
    }
    return bool
}

const Ctr = {}
Ctr.registerClient = async (req, res) => {
    const { username, password, id, date, email } = req.body
    if (await verifyUsername(username)) {
        const result = await db.query(register.client, [username, password, id, email, date]);
        if (result.rowCount == 1) {
            res.send({ status: 200, result: 'Cuenta creada satisfactoriamente' })
        } else {
            res.send({ status: 404, result: 'Error al crear la cuenta' })
        }
    } else {
        res.send({ status: 403, result: 'El nombre de usuario ya esta en uso' })
    }
}

Ctr.registerDriver = async (req, res) => {
    const { date, id, username, firstname, secondname, email, password, model, plate, color } = req.body
    if (await verifyUsername(username)) {
        const picture = `${id + "_driver.jpg"}`
        const result = await db.query(register.driver, [username, password, id, email, date, `${firstname + " " + secondname}`, plate, model, color, picture]);

        if (result.rowCount == 1) {
            res.send({ status: 200, result: 'Cuenta creada satisfactoriamente' })
        } else {
            res.send({ status: 404, result: 'Error al crear la cuenta' })
        }
    } else {
        res.send({ status: 403, result: 'El nombre de usuario ya esta en uso' })
    }

}


Ctr.registerCompany = async (req, res) => {
    const { username, password, id, email, name, description, lat, lon } = req.body
    if (await verifyUsername(username)) {
        const picture = `${id + "_company.jpg"}`
        const result = await db.query(register.company,
            [username, password, id, email, name, description, picture, lat, lon]);
        if (result.rowCount == 1) {
            res.send({ status: 200, result: 'Cuenta creada satisfactoriamente' })
        } else {
            res.send({ status: 404, result: 'Error al crear la cuenta' })
        }
    } else {
        res.send({ status: 403, result: 'El nombre de usuario ya esta en uso' })
    }
}

module.exports = Ctr