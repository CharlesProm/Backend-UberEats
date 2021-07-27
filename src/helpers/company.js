const company = {
    insertDataCompany: `INSERT INTO empresa(nombre, direccion, status)VALUES ($1, $2, $3)`,
    updateDataCompany: `UPDATE empresa SET nombre=$1, direccion=$2 WHERE id_empresa=$3`,
    deleteDataCompany: `UPDATE empresa SET status=$1 WHERE id_empresa=$2`,
    getDataCompany: `SELECT * FROM empresa`
}


module.exports = company;