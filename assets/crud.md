## CREATE

Instruccion que indica que podemos agregar nuevos registros o documentos a las tablas/colecciones de nuestra base de datos. Asignamos los valores correspondientes al momento de isnertar los datos.

* __MySQL__:
    ```sql
    -- insercion simple
    INSERT INTO products
    SET name = "Teclado", 
        price = 8999.99, 
        stock = 250;
    -- insercion multiple
    INSERT INTO products(name, price, stock) VALUES
    ('Monitor',159799.99,50),
    ('Mouse',5300.00,3500),
    ('Auriculares',29300,125);
    ```
* __MongoDB__:
    ```js
    // insercion simple
    db.products.insertOne({
        name:'teclado', 
        price: 89999.99, 
        stock: 250
    })
    // insercion multiple
    db.products.insertMany([
        { name:'monitor', price: 159799.99, stock: 50 },
        { name:'mouse', price: 5300.00, stock: 3500 },
        { name:'auriculares', price: 29300, stock: 125 }
    ])
    ```

## READ

Instruccion que permite realizar busquedas dentro de las tablas/colecciones a partir de un criterio, ya sea un valor exacto o por una operacion de aproximacion.

* __MySQL__:
    ```sql
    SELECT * FROM products WHERE name = "teclado"
    SELECT * FROM products WHERE stock < 100;
    ```
* __MongoDB__:
    ```js
    db.products.findOne({ name: "teclado" })
    db.products.findMany({ stock: { $lt: 100 } })
    ```
## UPDATE

Instruccion que permite modificar los valores almacenados en uno o mas registros/documentos dada una condicion de busqueda. En caso de no coincidir, la actualizacion no modificara ningun dato.

* __MySQL__:
    ```sql
    -- actualizacion de registro
    UPDATE products
    SET price = 250000
    WHERE name = "monitor"
    -- modificacion de estructura
    ALTER TABLE products
    CHANGE stock quantity INT(11),
    MODIFY price INT(20)
    ```
* __MongoDB__
    ```js
    // actualizacion individual
    db.products.updateOne(
        { name: "monitor" }, // criterio de busqueda
        { $set: { price: 250000 } } // valor de actualizacion
    );
    // actualizacion multiple
    db.products.updateMany({},{ $rename: { stock: "quantity" }})
    ```
## DELETE

Instruccion que permite eliminar registros/documentos de una tabla/coleccion. Al igual que las actualizaciones requiere que utilicemos un criterio para realizar dicha operacion.

* __MySQL__:
    ```sql
    -- elimina todos los productos
    DELETE FROM products
    WHERE name = "auriculares";
    -- reinicio de registros
    TRUNCATE products;
    ```
* __MongoDB__:
    ```js
    db.products.deleteOne({ name:"auriculares" })
    db.products.deteleMany();
    ```