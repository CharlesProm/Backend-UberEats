const user = {
    loginUser: ` SELECT id_usuario, username, nombre, apellido, id_tipo_usuario FROM usuario WHERE username = $1 AND contraseña=$2`,
    loginDrive: `SELECT id_conductor, username, primer_nombre, primer_apellido, id_tipo_usuario FROM conductor WHERE username = $1 AND password=$2`,
    loginCliente: `SELECT id_cliente, username, primer_nombre, primer_apellido, id_tipo_usuario FROM cliente WHERE username = $1 AND password=$2`,
    getUsuario: `SELECT username FROM usuario WHERE username=$1`

}


module.exports = user;