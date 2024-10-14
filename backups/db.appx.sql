-- Creacion Base Datos
CREATE DATABASE APPX;
USE APPX;
-- Creacion de Tablas
CREATE TABLE APPX_department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50),
    department_city INT,
    UNIQUE KEY (department_name)
);
CREATE TABLE APPX_educationlevel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(100)
);
CREATE TABLE APPX_employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    department_id INT,
    salary FLOAT,
    educationlevel_id INT,
    FOREIGN KEY (department_id) REFERENCES APPX_department(id),
    FOREIGN KEY (educationlevel_id) REFERENCES APPX_educationlevel(id)
);
-- insercion de datos
INSERT INTO APPX_department(department_name) 
    VALUES ("ADM"),("COM"),("FAC"),("TEL"),("EXE");
INSERT INTO APPX_educationlevel(description) 
    VALUES ("PRI"),("SEC"),("TER"),("UNI"),("POS");
INSERT INTO APPX_employee(firstname, lastname, department_id, educationlevel_id, salary) 
    VALUES
	("A","A",3,1, 100000),
    ("A","B",4,2, 100000),
    ("A","C",1,1, 100000),
    ("A","D",3,3, 100000),
    ("A","E",2,1, 100000),
    ("A","F",3,4, 100000),
    ("A","G",5,4, 100000),
    ("A","H",4,1, 100000),
    ("A","I",3,5, 100000),
    ("A","J",4,2, 100000);

-- subconsulta anidada
SELECT emp.id, lastname, firstname, department_name, description
FROM APPX_employee AS emp
LEFT JOIN APPX_department AS d ON d.id = department_id
LEFT JOIN APPX_educationlevel AS e ON e.id = educationlevel_id
WHERE department_id IN (
    SELECT department_id FROM APPX_employee
    GROUP BY department_id
    HAVING SUM(salary) > 250000
)
ORDER BY lastname, firstname, salary;

-- consulta integrada
SELECT emp.id, lastname, firstname, department_name, description
FROM APPX_employee AS emp
JOIN APPX_department AS d ON d.id = department_id
JOIN APPX_educationlevel AS e ON e.id = educationlevel_id
JOIN (
    SELECT department_id FROM APPX_employee
    GROUP BY department_id
    HAVING SUM(salary) > 250000
)
ORDER BY lastname, firstname, salary;
