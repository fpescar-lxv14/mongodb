/* FUNCION DE AGREGACION
    db.media.aggregate([
        { $match }, // filtrado de documentos
        { $project }, // seleccion de propiedades
        { $group }, // agrupacion de documentos
        { $lookup } // relacion de colecciones
    ])
*/
// Mostrar Solamente los campos solicitados
db.media.aggregate([
    { $project: {
        _id: 0,
        type: 1,
        name: 1,
        year: 1,
    } },
    { $sort: { type: 1, year: 1, name: 1, } }
])

// Contar documentos por Tipo
db.media.aggregate([
    { $group: {
        _id: "$type", // obligatorio
        total: { $sum: 1 }
    } }
])

// Agregar propiedad Type a las Peliculas
db.media.updateMany(
    { $or: [ 
        { type:{$exists: 0} }, 
        { type: null } 
    ] },// condicion
    { $set: { type: "pelicula" } }// actualizacion
)
// Renombrar propiedad title a name
db.media.updateMany(
    { title: { $exists: 1 } },
    { $rename: { title:"name"} }
)
db.media.updateMany(
    { "rent.price": { $gte: 250 }, "rent.price": { $lte: 260} },
    { $set: { "rent.users": ['Samantha','Kamren','Delphine' ] }}   
)
// Union de campos para datos de Usuario
db.media.aggregate([
    { $lookup: {
        from: "users",
        localField: "rent.users",
        foreignField: "username",
        as: "userData"
    }}
])
// Estadisticas de precios
db.media.aggregate([
    { $group: {
        _id: "$type", // por tipo de elemento
        economico: { $min: "$rent.price" }, // minimo
        promedio: { $avg: "$rent.price" }, // promedio
        costoso: { $max: "$rent.price" }, // maximo
    } }
])
// Desglose de categorias
db.media.aggregate([    
    { $unwind: { path: "$genres" } },
    { $group: {
        _id: "$genres",
        count: { $sum: 1 },
        barato: { $min: "$rent.price" },
        promedio: { $avg: "$rent.price" },
        caro: { $max: "$rent.price" }
    } }
])
// Agrupacion por tipo y genero
db.media.aggregate([    
    { $unwind: { path: "$genres" } },
    { $group: {
        _id: {
            type: "$type",
            genre: "$genres"
        },
        count: { $sum: 1 },
        barato: { $min: "$rent.price" },
        promedio: { $avg: "$rent.price" },
        caro: { $max: "$rent.price" }
    } }
])