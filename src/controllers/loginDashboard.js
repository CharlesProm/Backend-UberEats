const db = require('../database/config');
const { get,post, put, del  } = require("../helpers/petitions")

const Login = {}


Login.login = async (req, res) => {
    const { username, password } = req.body
    let resClient = await db.query(`${get.clientLogin}`, [username, password])
    let resDriver = await db.query(`${get.driverLogin}`, [username, password])
    let resCompany = await db.query(`${get.companyLogin}`, [username, password])
    if (resCompany.rows.length > 0) {
        res.send({ status: 200, result: resCompany.rows, type:3 })
    } else if (resDriver.rows.length > 0) {
        res.send({ status: 200, result: resDriver.rows, type:2 })
    } else if (resClient.rows.length > 0) {
        res.send({ status: 200, result: resClient.rows, type:1 })
    } else {
        res.send({ status: 404, result: 'El nombre de usuario o la contrasena son incorrectos' })
    }

}

Login.addProduct = async (req,res)=>{
    const {owner,name,description,price,id} = req.body
    const fixPrice = parseFloat(price)
    const result = await db.query(post.product,[owner,name,description,fixPrice,id])
    if(result.rowCount == 1){
        res.send({status:200,result:'Producto Registrado'})
    }else{
        res.send({status:404,result:'No se ha podido registrar el producto'})
    }
}

Login.getAllProducts = async (req,res)=>{
    const result = await db.query(get.allProducts,[req.params.id])
    res.send(result.rows)
}
Login.getProduct = async (req,res)=>{
    const result = await db.query(get.Product,[req.params.id])
    res.send(result.rows)
}

Login.updateProduct = async (req,res)=>{
    const {name,description,price,id} = req.body
    const fixPrice = parseFloat(price)
    const result = await db.query(put.Product,[name,description,fixPrice,id])
    if(result.rowCount == 1){
        res.send({status:200,result:'Producto Actualizado'})
    }else{
        res.send({status:404,result:'No se ha podido actualizar el producto'})
    }
}
Login.deleteProduct = async (req,res)=>{
    const {id} = req.body
    const result = await db.query(del.Product,[id])
    if(result.rowCount == 1){
        res.send({status:200,result:'Producto Eliminado'})
    }else{
        res.send({status:404,result:'No se ha podido eliminar el producto'})
    }
}

Login.getAllCompanies = async (req,res) =>{
    const result = await db.query(get.allCompanies)
    if(result.rowCount > 0){
        res.send({status:200,result: result.rows})
    }else{
        res.send({status:404,result:'No se han encontrado compañias '})
    }
}

Login.getCompanyData = async (req,res)=>{
    const result = await db.query(get.CompanyData,[req.params.id])
    if(result.rowCount > 0){
        res.send({status:200,result: result.rows})
    }else{
        res.send({status:404,result:'No se han encontrado compañias '})
    }
} 


module.exports = Login