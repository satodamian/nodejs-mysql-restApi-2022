-- Crear una base de datos no existente
CREATE DATABASE IF NOT EXISTS companydb;
-- Escoger tabla de companydb
USE companydb;
-- Crear tabla
CREATE TABLE IF NOT EXISTS employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id));
-- Ver la estructura de la tabla
DESC employees;

-- Insertar dataos en employee
INSERT INTO employees 
    VALUES (1, 'Karen', 1000),
     (2, 'Daniel', 1000),
     (3, 'Jose', 1000),
     (4, 'Eliana', 1000);