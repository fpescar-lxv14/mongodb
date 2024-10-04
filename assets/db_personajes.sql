/* DDL (Data Definition Language)*/
# Creacion de la Base de datos
DROP DATABASE IF EXISTS personajes;
CREATE DATABASE personajes;
USE personajes;
# Creacion de Tablas
CREATE TABLE colores(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20),
    UNIQUE KEY(nombre)
);
CREATE TABLE especies(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30),
    UNIQUE KEY(nombre)
);
CREATE TABLE personajes(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20),
    id_color INT,
    id_especie INT,
    UNIQUE KEY(nombre),
    FOREIGN KEY(id_color) REFERENCES colores(id),
    FOREIGN KEY(id_especie) REFERENCES especies(id)
);

/* DML (Data Manipulation Languales)*/
INSERT INTO colores(nombre) VALUES
	('blanco'),
	('rojo'),
	('naranja'),
	('amarillo'),
	('verde'),
	('cyan'),
	('azul'),
	('violeta'),
	('fucsia'),
	('negro'),
	('marron');

INSERT INTO especies(nombre) VALUES
	('humano'),
	('primate'),
	('canino'),
	('felino'),
	('paquidermo'),
	('equino'),
	('roedor'),
	('dromedario');
INSERT INTO personajes(nombre, id_especie, id_color) VALUES
('symba',4,4),
('kimba',4,1),
('sonic',7,7),
('lassie',3,11),
('clifford',3,2),
('garfield',4,3);

# Consulta Estandar
SELECT * FROM personajes;

# Consulta con Uniones
SELECT
	p.id,
    p.nombre AS personaje,
    e.nombre AS especie,
    c.nombre AS color,
    CONCAT(p.nombre," es un ",e.nombre, " de color ",c.nombre) AS descripcion
FROM personajes AS p
JOIN colores AS c ON c.id = p.id_color
JOIN especies AS e ON e.id = p.id_especie;

# Colores sin Personaje Asignado
SELECT 
	c.nombre AS color
FROM colores AS c
LEFT JOIN personajes AS p ON p.id_color = c.id
WHERE p.id IS NULL;