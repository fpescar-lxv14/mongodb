## Base de datos

Estructura cuya finalidad es contener y organizar porciones de informacion para facilitar su acceso en futuras ocasiones, Ademas de garantizar la integridad de los datos.

* Relaciones
* Transaccionales
* Jerarquicas
* Orientadas a Objetos
* Documentos

### Relaciones

Estas estructuras originalmente solian estar divididas en tablas y las mismas poseen los siguientes elementos.

* __Campos(columna):__ Conjunto de datos que corresponden a un _mismo tipo_
* __Registros(fila):__ Conjunto de datos que guardan _relacion entre si_
* __Datos(celda):__ Minima porcion de informacion

EL objetivo principal en este tipo de bases de datos es reducir lo maximo posible el espacio ocupado por los datos, utilizando diferentes herramientas, como lo son __las relaciones__.

### Motores (Engine)
    * MySQL
    * MariaDB
    * SQLite
    * Postgree
    * Oracle SQL
    * Microsoft SQL Server

### SQL (Structured Query Language)
* __DDL (Data Definition Language)__
    * _CREATE:_ crear db / tablas / usuarios
    * _DROP:_ eliminar db / tablas / usuarios
    * _ALTER:_ modificar tablas
* __DML (Data Manipulation Language)__
    * _INSERT:_ agregar registros
    * _UPDATE:_ actualizar registros
    * _DELETE:_ eliminar registros
    * _SELECT:_ consultar registros
* __DCL (Data Control Language)__
    * _GRANT:_ otorgar permisos
    * _REVOKE:_ quitar permisos
[Estructura Ejemplo](sql_personajes.md)
[Script SQL Ejemplo](db_personajes.sql)

### NO Relacionales (NoSQL)

A diferencia de las bases de datos SQL, no suelen tener un estandar, es decir, que en ocasiones puede dificultarse la migracion de datos de un motor a otro, debido a que no funcionan de la misma manera.

MongoDB es un motor de bases de datos orientado a documentos y si lo comparamos con el esquema relacional podriamos inferir lo siguiente:

| SQL | MongoDB |
|-|-|
| Tablas | Colleccion |
| Registros | Documento |
| Campos | Claves |
| Datos | Valores |

PUERTOS 1024 - 49151
Conexion
```sh
# local = PROTO://HOST:PORT/DATABASE
mongosh mongodb://localhost:27017/fpescar
# remote
mongosh mongo+srv://user:password@host/database

```

[Estructura Ejemplo](mongo_personajes.md)