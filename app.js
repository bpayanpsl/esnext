//1 - LET
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);
//*****************************/
//2 - CONST
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = []; => Impossible de réaffecter une valeur dans une constante
//console.log(citiesId);
citiesId.push("tokyo");
console.log(citiesId);
//*****************************/
//3 - CREATION OBJET
function getWeather(cityId){
    let city = cityId.toUpperCase();
    let temperature = 20;
    return obj = { city, temperature };
}

const weather = getWeather(favoriteCityId);
console.log(weather);
//*****************************/
//4 - AFFECTATION DESTRUCTUREE
const {
    city: city,
    temperature: temperature
} = weather;

console.log(city);
console.log(temperature);
//*****************************/
// 5 - REST OPERATOR
const [parisId, nycId, ...otherCitiesId]=citiesId;

console.log(parisId);
console.log(nycId);
console.log(otherCitiesId.length);
//*****************************/
// 6 - CLASSE
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    toString() {
        return 'Trip ['+ this.id + ', ' + this.name + ', ' + this.imageUrl +', ' +this._price+ ']';
    }
    get price(){
        return this._price;
    }
    set price(newPrice){
        this._price = newPrice;
    }
    static getDefaultTrip(){
        return new Trip('rio_de_janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');

console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

parisTrip.price = 100;

console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip);
//*****************************/
// 7 - HERITAGE
class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl)
        this.price = 0;
    }
    toString(){
        return 'Free' + super.toString();
    }   
}

const freetrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');

console.log(freetrip.toString());

