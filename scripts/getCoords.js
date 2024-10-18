let coords;
navigator.geolocation.getCurrentPosition(
    (data) => { 
        coords = data.coords;
        console.log(data)
    },
    (err) => { throw err }
)