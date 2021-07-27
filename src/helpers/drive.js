const drive = {
    insertDataDrive: `INSERT INTO public.conductor(
    id_tipo_usuario, username, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, email, password, status)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    insertPhotoDrive: `UPDATE public.conductor SET foto_conductor=$1 WHERE id_conductor=$2`,
    insertIdentityDrive: `UPDATE public.conductor SET foto_cedula=$1 WHERE id_conductor=$2`,
    insertLicense: `UPDATE public.conductor SET foto_licencia=$1 WHERE id_conductor=$2`,
    getDrive: `SELECT username FROM conductor WHERE username=$1`

}


module.exports = drive;