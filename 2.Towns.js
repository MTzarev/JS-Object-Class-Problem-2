function towns(input) {
    for (let townInfo of input) {
        let [city, latitude, longitude] = townInfo.split(` | `);
        let formLatitude = Number(latitude).toFixed(2);
        let formLongitude = Number(longitude).toFixed(2);

        let objectTown = { town: city, latitude: formLatitude, longitude: formLongitude };

        console.log(objectTown);

    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);
//towns (['Plovdiv | 136.45 | 812.575']);