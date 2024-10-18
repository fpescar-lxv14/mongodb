const coords = [
    [ -58.380117, -34.888757 ], // Cristian
    [  89.829121, -43.898923 ], // Invitado
    [ -38.127920,  20.128319 ], // Longitud, Latitude
    [  13.410416,  38.034436 ], // Palermo (Europa / Italia)
    [ 135.784938,  34.710485 ], // Nara (Asia / Japon)
]
const coordinates = coords[4];
// Busqueda por proximida
db.branches.find({
    geo: { // Campo con coordenadas
        $near: { // Operador de proximidad
            $geometry: { // Ubicacion de origen
                type: "Point", // Tipo de Busqueda
                coordinates: coordinates, // [Lng, Lat]
            },
            $minDistance: 10, // Metros 
            $maxDistance: 1500000 // Metros
        }
    }
}, { name: 1, address: 1 } )