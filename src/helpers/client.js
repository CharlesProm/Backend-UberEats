const client = {
    insertDataClient: `INSERT INTO public.cliente(
        id_tipo_usuario, username, primer_nombre, segundo_nombre, primer_apellido,
        segundo_apellido, fecha_nacimiento, email, password)
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9);`,
    getClient: `SELECT username FROM cliente WHERE username=$1`
}


module.exports = client;