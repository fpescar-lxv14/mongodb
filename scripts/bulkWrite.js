const document = { 
    "name": "alien",
    "year": "1979",
    "genres": ["ciencia ficcion", "suspenso", "terror"],
    "descripcion": "La tripulación de la nave espacial Nostromo atiende una señal de auxilio y, sin saberlo, sube a bordo una letal forma de vida extraterrestre.",
}
const movie = { name: /[Nn]emo/ }
const filter = { "rent.price": { $lte: 5000 } }
const update = { $mul: { "rent.price": 1.2 } }

db.movies.bulkWrite([
    { insert: { document } },
    { delete: { filter: movie } }, 
    { update: { filter, update } } 
])