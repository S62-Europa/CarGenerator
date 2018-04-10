let jsonfile = require('jsonfile');
const uuidv4 = require('uuid/v4');

let file = 'cars.json';
let cars = [];
let countries = ["DE", "IT", "PL", "FI", "NL"];
let carsPerCountry = 20;

for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    for (let i = 0; i < carsPerCountry; i++) {
        cars.push({
           id: uuidv4(),
           country: country
        });
    }
}

jsonfile.writeFileSync(file, cars, {spaces: 2});
