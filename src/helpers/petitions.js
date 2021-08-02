const petitions = {}

petitions.register = {
    client: "INSERT INTO client (username, pass,id,email,birth) VALUES ($1 ,$2 ,$3,$4,$5)",
    company: "INSERT INTO company (username, pass,id,email,name,description,picture,latitude,longitude) VALUES ($1 ,$2 ,$3,$4,$5,$6,$7,$8,$9)",
    driver: "INSERT INTO driver (username, pass, id, email, birth, real_name, vehicle_plate, vehicle_model, vehicle_color,picture) VALUES ($1 ,$2 ,$3,$4,$5,$6,$7,$8,$9,$10)"
}

petitions.get = {
    clientUsername: `SELECT username FROM client WHERE username = $1`,
    driverUsername: `SELECT username FROM driver WHERE username = $1`,
    companyUsername: `SELECT username FROM company WHERE username = $1`,
    // account: `SELECT * FROM (SELECT username,pass FROM driver UNION ALL SELECT username,pass FROM client UNION ALL SELECT username,pass FROM company ) AS foo WHERE username = $1 AND pass = $2 `,
    clientLogin: `SELECT * FROM client WHERE username = $1 AND pass = $2`,
    driverLogin: `SELECT * FROM driver WHERE username = $1 AND pass = $2`,
    companyLogin: `SELECT * FROM company WHERE username = $1 AND pass = $2`,
    allProducts:'SELECT * FROM products WHERE owner = $1',
    allCompanies:'SELECT name,description,id FROM company',
    Product:'SELECT * FROM products WHERE id = $1',
    CompanyData:'SELECT name,description,longitude,latitude FROM company WHERE id= $1 '
}

petitions.post={
    product:'INSERT INTO products (owner,name,description,price,id) VALUES ($1,$2,$3,$4,$5)'
}

petitions.put={
    Product:'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4',
}
petitions.del={
    Product:'DELETE FROM products WHERE id = $1',
}

module.exports = petitions