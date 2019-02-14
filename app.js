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
function getWeather(cityId) {
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
const [parisId, nycId, ...otherCitiesId] = citiesId;

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
        return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this._price + ']';
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
    static getDefaultTrip() {
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
    toString() {
        return 'Free' + super.toString();
    }
}

const freetrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');

console.log(freetrip.toString());

//*****************************/
// 8 - PROMESSES
class TripService {

    constructor() {

        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                this.trips.forEach(element => {
                    if (element.name === tripName) {
                        resolve(element);
                    }
                    else {
                        reject('Trip introuvable');
                    }

                });

            });

        }, 2000)
    }
}


let ts = new TripService();
console.log(TripService.trips);
const trip$ = ts.findByName('rio-de-janeiro');

trip$.then(trip => {
    console.log(trip);
})
    .catch(err => {
        console.log(trip$);
    })

class PriceService {

    constructor() {
        this.prices = new Map();

        this.prices.set('paris', 100);
        this.prices.set('rio-de-janeiro', 800);
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                if (this.prices.has(tripId)) {
                    for (let [cle, valeur] of this.prices.entries()) {
                        if (cle === tripId) {
                            resolve(valeur);
                        }
                    }
                }else{
                    reject('Introuvable');
                }
            }, 2000)
        });
    }
}

let ps = new PriceService();
const test$ = ps.findPriceByTripId('ris');
test$.then(test => {
    console.log(test);
})
    .catch(err => {
        console.log(test$);
    })
    //*****************************/