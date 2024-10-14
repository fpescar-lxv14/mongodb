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