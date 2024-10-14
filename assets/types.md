## BASICOS

| Tipo | Descripción | Ejemplo |
|-|-|-|
| __String__ | Cadena de texto. | `"Hola, mundo"` |
| __Integer__ | Número entero. | `33` |
| __Double__ | Número de punto flotante. | `3.14` |
| __Boolean__ | Valor verdadero o falso. | `true` o `false` |
| __Null__ | Valor nulo. | `null` |
| __Array__ | Lista de valores. | `[1, 2, 3]` |
| __Object__ | Documento anidado. | `{"nombre": "Juan"}` |
| __Date__ | Fecha y hora. | `ISODate("2023-10-14T12:00:00Z")` |
| __ObjectId__ | Identificador único. | `ObjectId("507f191e810c19729de860ea")` |
| __Binary__ | Datos binarios. | `BinData(0, "data")` |
| __Code__ | Código JavaScript. | `new Code("function() {}")` |

## DOCUMENTOS

| Tipo | Ejemplo |
|-|-|
| __String__ | `{ "nombre": "Ana" }` |
| __Integer__ | `{ "edad": 30 }` |
| __Double__ | `{ "precio": 19.99 }` |
| __Boolean__ | `{ "activo": true }` |
| __Null__ | `{ "direccion": null }` |
| __Array__ | `{ "calificaciones": [85, 90, 78] }` |
| __Object__ | `{ "direccion": { "ciudad": "Madrid", "pais": "España" } }` |
| __Date__ | `{ "fechaRegistro": ISODate("2023-10-14T12:00:00Z") }`|
| __ObjectId__ | `{ "_id": ObjectId("507f191e810c19729de860ea") }` |
| __Binary__ | `{ "archivo": BinData(0, "dGVzdA==") }` |
| __Code__ | `{ "funcion": new Code("function() { return 42; }") }`|

## AVANZADOS

| Tipo | Descripción | Ejemplo |
|-|-|-|
| __Geospatial__ | Datos geoespaciales. | `{ "ubicacion": { "type": "Point", "coordinates": [100.0, 0.0] } }` |
| __Decimal__ | Representación de números decimales de alta precisión. | `{ "precio": NumberDecimal("19.99") }` |