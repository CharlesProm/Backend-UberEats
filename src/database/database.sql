--CREATE TABLE

	CREATE TABLE tipo_usuario (
		id_tipo_usuario SERIAL PRIMARY KEY,
		descripcion VARCHAR(10)
		
	);

	CREATE TABLE vehiculo (
		id_vehiculo SERIAL PRIMARY KEY,
		marca VARCHAR(50) NOT NULL,
		modelo VARCHAR(50) NOT NULL,
		año DATE,
		placa VARCHAR(20) NOT NULL,
		color VARCHAR(20) NOT NULL,
		foto1 TEXT,
		foto2 TEXT,
		foto3 TEXT,
		status BOOLEAN
	);
	
	CREATE TABLE usuario (
		id_usuario SERIAL PRIMARY KEY,
		username VARCHAR(30) NOT NULL,
		id_tipo_usuario INT NOT NULL,
		nombre VARCHAR(50) NOT NULL,
		apellido VARCHAR(50) NOT NULL,
		email VARCHAR(50) NOT NULL,
		contraseña VARCHAR(20) NOT NULL,
		FOREIGN KEY(id_tipo_usuario) REFERENCES tipo_usuario(id_tipo_usuario)
	);
	
	CREATE TABLE conductor (
	id_conductor SERIAL PRIMARY KEY,
	id_vehiculo INT,
	id_tipo_usuario INT NOT NULL,
	username VARCHAR(20) NOT NULL,
    primer_nombre VARCHAR(30) NOT NULL,
	segundo_nombre VARCHAR(30) NOT NULL,
	primer_apellido VARCHAR(30) NOT NULL,
	segundo_apellido VARCHAR(30) NOT NULL,
	cedula INT NOT NULL,
	fecha_nacimiento DATE NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
	foto_conductor TEXT,
	foto_cedula TEXT,
	foto_licencia TEXT,
	status BOOLEAN NOT NULL,
	FOREIGN KEY(id_vehiculo) REFERENCES vehiculo(id_vehiculo),
	FOREIGN KEY(id_tipo_usuario) REFERENCES tipo_usuario(id_tipo_usuario)
);

CREATE TABLE cliente (
	id_cliente SERIAL PRIMARY KEY,
	id_tipo_usuario INT NOT NULL,
	username VARCHAR(20) NOT NULL,
    primer_nombre VARCHAR(30) NOT NULL,
	segundo_nombre VARCHAR(30) NOT NULL,
	primer_apellido VARCHAR(30) NOT NULL,
	segundo_apellido VARCHAR(30) NOT NULL,
	cedula INT NOT NULL,
	fecha_nacimiento DATE NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
	telefono INT,
	FOREIGN KEY(id_tipo_usuario) REFERENCES tipo_usuario(id_tipo_usuario)
);


	CREATE TABLE empresa (
		id_empresa SERIAL PRIMARY KEY,
		nombre VARCHAR(50) NOT NULL,
		direccion VARCHAR(255) NOT NULL,
		latitud DECIMAL(4,2),
		longitud DECIMAL(4,2)
	);











