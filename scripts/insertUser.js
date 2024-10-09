// Declaracion de Datos
const user = {
    email: "cristiandracedo@hotmail.com",
    username: "c215714n",
    password: "r00t",
    userData: {
        first_name: "Cristian",
        last_name: "Racedo",
        birth_date: ISODate('1991-04-18'),
        id_type: "DNI",
        id_number: "35336446",
        country: "argentina",
        nationality: "argentina",
    }
}
// Insercion de Documento
db.users.insertOne(user);
// Busqueda de Resultados
db.movies.find({
    username: "c215714n",
    "userData.last_name": /[Rr]acedo/
});