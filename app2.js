class TripService {

    constructor() {

        let trips = new Set();
        trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                this.trips.array.forEach(element => {
                    if (element.name === tripName) {
                        return resolve(element);
                    }
                    else {
                        reject('Trip introuvable')
                    }

                });

            });

        }, 2000)
    }
}



class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'

        let prices = new Map();
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche

            }, 2000)
        });
    }
}