db.movies.updateMany(
    { "rent.stock": {$lte: 60} },
    { $inc: { "rent.stock": 20 } }
);
db.movies.updateMany(
    { stock: { $exists: 1 } },
    { $unset: { stock: 1 } }
)
db.movies.updateOne( 
    { name: /[Gg]od[Ff]ather\s*[Ii\d]*$|[Pp]adrino\s*[Ii\d]$/ }, 
    { $push: { genres: "mafia" } } 
)
db.movies.updateOne(
    { name: "The Godfather"},
    { $pull: { genres: "mafia"} }
)